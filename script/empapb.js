var glbEmpid = "";
var glbempcode = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
    $('#btnUpdate,#tbldetail').hide();
}
//this method used to bind company list
function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "../Configurations/ManageTrainingModeServicesPage.aspx/CompanyList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcomp').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcomp').append($option);
            });
        }
    });
}

$('#btnreset').click(function () {
    clearfield();
});

$("#TxtEmployeecode").change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcomp').val(), }),
        url: "PendingAPBServices.aspx/chkempcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Employee Code does not exist');
                $("#TxtEmployeecode").val("");
                $("#TxtEmployeeName").val("");
            }
            if (varIndentList == "3") {
                alert('APB is not configured for entered employee code!!');
                $("#TxtEmployeecode").val("");
                $("#TxtEmployeeName").val("");
            }
            if (varIndentList == "2") {
                EmployeeLeaveDetails();
            }
        }
    });
});
//this method used to bind employee name
function EmployeeLeaveDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcomp').val(), }),
        url: "EmployeeTrainingServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $(varList).each(function (index, o) {
                $("#TxtEmployeeName").val(o.EmpName);
                glbEmpid = o.EmpID;
            });
        }
    });
}

//this method used to insert a employee apb details

jQuery('#btnsave').click(function () {
    glbempcode = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please  Enter Employee code");
        return false;
    }
    AppObj.EmployeeID = glbEmpid;
    AppObj.APBDate = $('#txtapbdate').val();
    if ($('#txtapbdate').val() == null || $('#txtapbdate').val() == "") {
        alert("Please select APB Date");
        return false;
    }

    AppObj.APBAmount = $('#txtamount').val();
    if ($('#txtamount').val() == null || $('#txtamount').val() == "") {
        alert("Please Enter APB Amount");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "PendingAPBServices.aspx/insertapb",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            if (varIndent == "1") {
                alert("Data Has Been Saved Successfully....");
                clearfield();
                showDetails();
            }
            if (varIndent == "2") {
                alert("APB details for selected year already entered!!");
            }
        }
    });
});

$('#txtamount').keypress(function (e) {
    var regex = new RegExp("^[0-9]\d*(\.\d+)?$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

jQuery('#btnshow').click(function () {
    glbempcode = "";
    showDetails();
});
function clearfield() {
    //$('#ddlcomp').val("0").trigger('change');
    $('#TxtEmployeecode').val("");
    $('#TxtEmployeeName').val("").trigger('change');
    $('#txtamount').val("");
    $('#txtapbdate').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbempcode = "";
}
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: '{}',
        url: "PendingAPBServices.aspx/empapblist",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldetail').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.UnitName, o.EmployeeCode, o.EmpName, o.APBDate, o.APBAmount, "<a href=javascript:editRecord(" + o.APBID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.APBID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbempcode).draw();
            $('#tbldetail').show();
        }
    });
};
var editId = "";
// this method is used to edit Employee leave  
function editRecord(id) {
    glbempcode = "";
    editId = id;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': id }),
        url: "PendingAPBServices.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            glbEmpid = varIndent.EmployeeID;
            $('#TxtEmployeecode').val(varIndent.EmployeeCode);
            $('#TxtEmployeeName').val(varIndent.EmpName);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
            $('#txtapbdate').val(varIndent.APBDate);
            $('#txtamount').val(varIndent.APBAmount);
        }
    });
}
//this method used to update Employeeleave Details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please  Enter Employee code");
        return false;
    }
    AppObj.EmployeeID = glbEmpid;
    AppObj.APBDate = $('#txtapbdate').val();
    if ($('#txtapbdate').val() == null || $('#txtapbdate').val() == "") {
        alert("Please select APB Date");
        return false;
    }

    AppObj.APBAmount = $('#txtamount').val();
    if ($('#txtamount').val() == null || $('#txtamount').val() == "") {
        alert("Please Enter APB Amount");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.APBID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "PendingAPBServices.aspx/UpdateDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1")
            {
                alert("Data Has Been Updated Successfully....");
                clearfield();
                glbempcode = AppObj.EmpCode;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("APB details for selected year already entered!!");
            }           
        }
    });
});
//this method used to Delete employeeleave details
function deleterecord(delid) {
    glbempcode = "";
    var r = confirm("Are You Sure?")
    {
        if (r == true) {
            var username = $('#LoginName1').html();
            if (username == null || username == "") {
                username = "";
            }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'del_id': delid, 'user_name': username }),
                url: "EmployeeTrainingServices.aspx/deleteEmployeetraningDetails",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    showDetails();
                }
            });
        }
        else {
            return false;
        }
    }
}

