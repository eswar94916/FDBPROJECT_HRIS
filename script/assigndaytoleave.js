var glbleave = "";
var Username = $('#LoginName1').html();
var role = $('#lblrole').html();

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tblleave').hide();
    companydetials();
}
//this method is used to bind company details
function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageLeaveServices.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);
            });
        }
    });
}
//this method is used to insert leave details
jQuery('#btnsave').click(function () {
    glbleave = "";
    var age = /^[0-9]+$/;
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.LeaveName = $('#txtleave').val();
    if ($('#txtleave').val() == null || $('#txtleave').val() == "") {
        alert("Please enter Leave Type");
        return false;
    }

    AppObj.Remarks = $('#txtremarks').val();
    if ($('#txtremarks').val() == null || $('#txtremarks').val() == "") {
        alert("Please enter remarks");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageLeaveServices.aspx/insertleave",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Saved Successfully....');
                showDetails();
                clearfield();
            }

            if (varIndentList == "2") {
                alert("This Data already exist!!");
                clearfield();
            }
        }
    });
});
//this method is clear fields of form
function clearfield() {
    //$('#ddlcompany').val("0").trigger('change');
    $('#txtleave').val("");
    $('#txtnoofDays').val("");
    $('#txtremarks').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbleave = "";
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbleave = "";
    showDetails();
});
//this method is used to bind leave details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageLeaveServices.aspx/leavelist ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblleave').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.LeaveName,o.NoofDays,o.Remarks,"<a href=javascript:editRecord(" + o.LeaveID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.LeaveID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.LeaveName, o.Remarks, "<a href=javascript:editRecord(" + o.LeaveID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.LeaveID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbleave).draw();
            $('#tblleave').show();
        }
    });
};

var glbId = "";
//this method is used to edit leave details
function editRecord(UserID) {
    glbleave = "";
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageLeaveServices.aspx/Editleave ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtleave').val(varIndent.LeaveName);
            $('#txtremarks').val(varIndent.Remarks);
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update leave details
jQuery('#btnUpdate').click(function () {
    var age = /^[0-9]+$/;
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.LeaveName = $('#txtleave').val();
    if ($('#txtleave').val() == null || $('#txtleave').val() == "") {
        alert("Please enter Leave Type");
        return false;
    }

    AppObj.Remarks = $('#txtremarks').val();
    if ($('#txtremarks').val() == null || $('#txtremarks').val() == "") {
        alert("Please enter remarks");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.LeaveID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageLeaveServices.aspx/Updateleave ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbleave = AppObj.LeaveName;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Data already exist!!");
            }
        }
    });
});

//this method is used to delete leave details
function deleteRecord(HosID) {
    glbleave = "";
    var r = confirm("Are you sure?")
    {
        if (r == true) {

            var username = $('#LoginName1').html();
            if (username == null || username == "") {
                username = "";
            }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'del_id': HosID, 'user_name': username }),
                url: "ManageLeaveServices.aspx/deleteleave ",
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