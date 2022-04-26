var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
var glbchkflag = "";
var glbempid = "";
var glbunitid = "";
var glbflg = "";
var glbempcode = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate').hide();
    $('#divtransfer').hide();
    companydetials();
}

function companydetials() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmployeeTransferServices.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);
            });
        }
    });
}

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id, 'empcode': $('#TxtEmployeecode').val(), 'flg': glbflg, 'transfer_id': editId }),
        url: "EmployeeTransferServices.aspx/UnitList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddltranfertounit').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddltranfertounit').append($option);
            });
        }
    });
}

$('#TxtEmployeecode').change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmployeeTransferServices.aspx/chkempcode",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            if (varList == "1") {
                alert("Entered Employee Code doesn't exist. Please enter valid Employee Code.");
                $('#TxtEmployeecode').val("");
                $('#TxtEmployeeName').val("");
                $('#Txttranferfromunit').val("");
                $('#TxtEmployeecode').focus();
                glbchkflag = "1";
            }
            if (varList == "2") {
                bindempdetails();
                glbchkflag = "";
            }
        }
    });
});

function bindempdetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmployeeTransferServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#TxtEmployeeName').val(varList.EmployeeName);
            $('#Txttranferfromunit').val(varList.UnitName);

            glbempid = varList.EmployeeID;
            glbunitid = varList.UnitID;
            unitdetials();
        }
    });
}
jQuery('#btnsave').click(function () {
    glbempcode = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if ($('#ddlcompany').val() == null || $('#ddlcompany').val() == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please Enter Employee code");
        return false;
    }
    AppObj.EmployeeID = glbempid;

    AppObj.TransferFrom = glbunitid;

    AppObj.TransferTo = $('#ddltranfertounit').val();
    if ($('#ddltranfertounit').val() == null || $('#ddltranfertounit').val() == "") {
        alert("Please Select Transferred To");
        return false;
    }
    AppObj.LastWorkDate = $('#txtlastworkdate').val();
    if ($('#txtlastworkdate').val() == null || $('#txtlastworkdate').val() == "") {
        alert("Please Select Last Working Date");
        return false;
    }
    AppObj.ReportingDate = $('#txtreportdate').val();
    if ($('#txtreportdate').val() == null || $('#txtreportdate').val() == "") {
        alert("Please Select Reporting Date");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeTransferServices.aspx/inserttransferdet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            alert("Data Has Been Saved Successfully....");
            clearfield();
            showDetails();
        }
    });
});

function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "EmployeeTransferServices.aspx/EmpTransferDet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_1').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.EmployeeCode, o.EmployeeName, o.DepartmentID, o.DesignationID, o.TransferFrom, o.TransferTo, o.LastWorkDate, o.ReportingDate, "<a href=javascript:editRecord(" + o.TransferID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.TransferID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbempcode).draw();
            $('#divtransfer').show();
        }
    });
};

$('#btnshow').click(function () {
    glbempcode = "";
    showDetails();
});
function clearfield() {
    //$('#ddlcomp').val("0").trigger('change');
    $('#TxtEmployeecode').val("");
    $('#TxtEmployeeName').val("");
    $('#Txttranferfromunit').val("");
    $('#ddltranfertounit').empty();
    $('#txtlastworkdate').val("");
    $('#txtreportdate').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbempcode = "";
}
$('#btnreset').click(function () {
    clearfield();
});
var editId = "";
// this method is used to edit Employee transfer details  
function editRecord(UserID) {
    glbempcode = "";
    editId = UserID;
    //glbflg = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "EmployeeTransferServices.aspx/EditTransferList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            glbflg = "1";
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#TxtEmployeecode').val(varIndent.EmployeeCode);
            bindempdetails();
            $('#TxtEmployeeName').val(varIndent.EmployeeName);
            $('#Txttranferfromunit').val(varIndent.TransferFrom);
            $('#ddltranfertounit').val(varIndent.TransferTo).trigger('change');
            $('#txtlastworkdate').val(varIndent.LastWorkDate);
            $('#txtreportdate').val(varIndent.ReportingDate);
           
        }
    });
}
//this method used to update Employeeleave Details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if ($('#ddlcompany').val() == null || $('#ddlcompany').val() == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please Enter Employee code");
        return false;
    }
    AppObj.EmployeeID = glbempid;

   // AppObj.TransferFrom = glbunitid;

    AppObj.TransferTo = $('#ddltranfertounit').val();
    if ($('#ddltranfertounit').val() == null || $('#ddltranfertounit').val() == "") {
        alert("Please Select Transferred To ");
        return false;
    }
    AppObj.LastWorkDate = $('#txtlastworkdate').val();
    if ($('#txtlastworkdate').val() == null || $('#txtlastworkdate').val() == "") {
        alert("Please Select Last Working Date");
        return false;
    }
    AppObj.ReportingDate = $('#txtreportdate').val();
    if ($('#txtreportdate').val() == null || $('#txtreportdate').val() == "") {
        alert("Please Select Reporting Date");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.TransferID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeTransferServices.aspx/UpdatetransferDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            alert("Data Has Been Updated Successfully....");
            clearfield();
            glbempcode = AppObj.EmpCode;
            showDetails();
        }
    });
});
//this method used to Delete employee transfer details
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
                url: "EmployeeTransferServices.aspx/deleteEmptransferDetails",
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