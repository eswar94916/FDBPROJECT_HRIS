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
            bindunit();
            leavelist();
        }
    });
}

function bindunit() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcompany').val() }),
        url: "ManageLeaveServices.aspx/UnitList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlunit').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunit').append($option);
            });
        }
    });
}

$('#ddlcompany').change(function () {
    leavelist();
});

function leavelist() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageLeaveServices.aspx/leavelist",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlleave').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.LeaveID).text(o.LeaveName);
                $('#ddlleave').append($option);
            });
        }
    });
}

//this method is used to insert leave details
jQuery('#btnsave').click(function () {
    var age = /^[0-9]+$/;
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.UnitID = $('#ddlunit').val();
    if (AppObj.UnitID == "0" || AppObj.UnitID == "Select.." || AppObj.UnitID == "") {
        alert("Please Select Unit");
        return false;
    }

    AppObj.LeaveYear = $('#ddlyear').val();
    AppObj.LeaveID = $('#ddlleave').val();
    if ($('#ddlleave').val() == null || $('#ddlleave').val() == "" || $('#ddlleave').val() == "0") {
        alert("Please select Leave Type");
        return false;
    }
    AppObj.NoofDays = $('#txtnoofDays').val();
    if ($('#txtnoofDays').val() == null || $('#txtnoofDays').val() == "") {
        alert("Please enter No. of Days");
        return false;
    }
    else {
        if (!age.test($('#txtnoofDays').val())) {
            alert("Please enter valid No. of Days!!");
            $('#txtnoofDays').focus();
            return false;
        }
    }

    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageLeaveServices.aspx/insertleaveyearly",
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
                alert("Leave Type details for selected unit for selected year already exist!!");
                clearfield();
            }
        }
    });
});
//this method is clear fields of form
function clearfield() {
    //$('#ddlcompany').val("0").trigger('change');
    $('#ddlunit').val("1").trigger('change');
    $('#txtnoofDays').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    showDetails();
});
//this method is used to bind leave details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageLeaveServices.aspx/leavelistyearly ",
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
                    t.row.add([serial_no, o.UnitName, o.LeaveYear, o.LeaveName, o.NoofDays, "<a href=javascript:editRecord(" + o.LeaveYearID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.LeaveYearID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#tblleave').show();
        }
    });
};

var glbId = "";
//this method is used to edit leave details
function editRecord(UserID) {
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageLeaveServices.aspx/Editleaveyearly ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#ddlunit').val(varIndent.UnitID).trigger('change');
            $('#ddlleave').val(varIndent.LeaveID).trigger('change');
            $('#txtnoofDays').val(varIndent.NoofDays);
            $('#ddlyear').val(varIndent.LeaveYear).trigger('change');
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
    AppObj.UnitID = $('#ddlunit').val();
    if (AppObj.UnitID == "0" || AppObj.UnitID == "Select.." || AppObj.UnitID == "") {
        alert("Please Select Unit");
        return false;
    }
    AppObj.LeaveYear = $('#ddlyear').val();

    AppObj.LeaveID = $('#ddlleave').val();
    if ($('#ddlleave').val() == null || $('#ddlleave').val() == "" || $('#ddlleave').val() == "0") {
        alert("Please select Leave Type");
        return false;
    }
    AppObj.NoofDays = $('#txtnoofDays').val();
    if ($('#txtnoofDays').val() == null || $('#txtnoofDays').val() == "") {
        alert("Please enter No. of Days");
        return false;
    }
    else {
        if (!age.test($('#txtnoofDays').val())) {
            alert("Please enter valid No. of Days!!");
            $('#txtnoofDays').focus();
            return false;
        }
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.LeaveYearID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageLeaveServices.aspx/Updateleaveyearly ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
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
                url: "ManageLeaveServices.aspx/deleteleaveyearly ",
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