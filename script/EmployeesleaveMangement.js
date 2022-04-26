var glbempcode = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
    $('#btnUpdate,#tblAssignLeaves').hide();
    $('#startdate,#enddate').datetimepicker({
        autoclose: true, changeMonth: true,
        changeYear: true,
        format: 'dd-MM-yyyy'
    });
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
            EmployessLeaveDetaisl();
        }
    });
}

$('#ddlcomp').change(function () {
    EmployessLeaveDetaisl();
})
function EmployessLeaveDetaisl() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': $('#ddlcomp').val() }),
        url: "EmployessLeavemangementService.aspx/bindleavedetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlLeaveType').empty();
            $("#ddlLeaveType").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.LeaveTypeID).text(o.LeaveTypeName);
                $('#ddlLeaveType').append($option);
            });
        }
    });
};

$("#TxtEmployeecode").change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcomp').val(), }),
        url: "EmployessLeavemangementService.aspx/chkempcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Employee Code does not exist');
                $("#TxtEmployeecode").val("");
                $("#TxtEmployeeName").val("");
            }
            if (varIndentList == "2") {
                EmployeeLeaveDetails()
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
        url: "EmployessLeavemangementService.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $(varList).each(function (index, o) {
                $("#TxtEmployeeName").val(o.EmpName);
                glbEmpid = o.EmpID;
                //  $('#ddlLeaveType').append($option);
            });
        }
    });
}

//this method used to insert a employee leave details
var glbEmpid = "";

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
    AppObj.EmpID = glbEmpid;

    AppObj.LeaveTypeID = $('#ddlLeaveType').val();
    if ($('#ddlLeaveType').val() == null || $('#ddlLeaveType').val() == "" || AppObj.LeaveTypeID == "" || AppObj.LeaveTypeID == "0") {
        alert("Please Select Leave Type ");
        return false;
    }
    AppObj.LeaveStartDate = $('#txtstartdate').val();
    if ($('#txtstartdate').val() == null || $('#txtstartdate').val() == "") {
        alert("Please Select Leave Start Date");
        return false;
    }
    AppObj.LeaveEndDate = $('#txtenddate').val();
    if ($('#txtenddate').val() == null || $('#txtenddate').val() == "") {
        alert("Please Select Leave End Date");
        return false;
    }
    var x = new Date($('#txtstartdate').val());
    var y = new Date($('#txtenddate').val());
    if (x > y) {
        alert("Start date should be less than end date!!");
        return false;
    }
    AppObj.NoofDays = $('#noofDays').html();
    if ($('#noofDays').html() == null || $('#noofDays').html() == "") {
        alert("Please Enter No of Dayes");
        return false;
    }
    AppObj.Reason = $('#txtreason').val();
    if ($('#txtreason').val() == null || $('#txtreason').val() == "") {
        alert("Please Enter Leave Reason");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployessLeavemangementService.aspx/insertempleavedetails",
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
jQuery('#btnshow').click(function () {
    glbempcode = "";
    showDetails();
});

jQuery('#btnreset').click(function () {
    clearfield();
});

function clearfield() {
    $('#TxtEmployeecode').val("");
    $('#TxtEmployeeName').val("");
    $('#ddlLeaveType').val("");
    $('#txtstartdate').val("");
    $('#txtenddate').val("");
    $('#noofDays').html("");
    $('#txtreason').val("");
    //$('#ddlcomp').val("0").trigger('change');
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbempcode = "";
}
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "EmployessLeavemangementService.aspx/Employeeleaveshow",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblAssignLeaves').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.UnitName, o.EmpCode, o.EmpName, o.LeaveTypeName, o.LeaveStartDate, o.LeaveEndDate, o.NoofDays, o.Reason, "<a href=javascript:editRecord(" + o.LeaveID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.LeaveID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.UnitName, o.EmpCode, o.EmpName, o.LeaveTypeName, o.LeaveStartDate, o.LeaveEndDate, o.NoofDays, o.Reason, "<a href=javascript:editRecord(" + o.LeaveID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.LeaveID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbempcode).draw();
            $('#tblAssignLeaves').show();
        }
    });
};
var editId = "";
// this method is used to edit Employee leave  
function editRecord(UserID) {
    glbempcode = "";
    editId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "EmployessLeavemangementService.aspx/EditliveEmployee",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#TxtEmployeecode').val(varIndent.EmpCode);
            $('#TxtEmployeeName').val(varIndent.EmpName);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
            $('#ddlLeaveType').val(varIndent.LeaveTypeID).trigger('change');
            $('#txtstartdate').val(varIndent.LeaveStartDate);
            $('#txtenddate').val(varIndent.LeaveEndDate);
            $('#noofDays').html(varIndent.NoofDays);
            $('#txtreason').val(varIndent.Reason);
            var x = new Date($('#txtstart').val());
            var y = new Date($('#txtend').val());
            if (x > y) {
                alert("Start date should be less than end date!!");
                $('#txtenddate').val("");
                $('#noofDays').html("");
                return false;
            }
            if (x < y) {
                var startDay = new Date($("#txtenddate").val());
                var endDay = new Date($("#txtstartdate").val());
                if ((startDay == "" || startDay == null) || (endDay == "" || endDay == null)) {
                }
                else {
                    var millisecondsPerDay = 1000 * 60 * 60 * 24;

                    var millisBetween = startDay.getTime() - endDay.getTime();
                    var days = millisBetween / millisecondsPerDay;
                    if (Math.floor(days) == "NaN" || isNaN(Math.floor(days))) {
                    }
                    else {
                        var totalmonth = parseFloat(parseFloat(Math.floor(days)) / 30).toFixed(1);
                        $('#noofDays').html(Math.floor(days) + " Day(s) & " + Math.floor(totalmonth) + " Month(s)");
                    }
                }
            }
            EmployeeLeaveDetails();
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
    AppObj.EmpID = glbEmpid;

    AppObj.LeaveTypeID = $('#ddlLeaveType').val();
    if ($('#ddlLeaveType').val() == null || $('#ddlLeaveType').val() == "" || AppObj.LeaveTypeID == "" || AppObj.LeaveTypeID == "0") {
        alert("Please Select Leave Type ");
        return false;
    }
    AppObj.LeaveStartDate = $('#txtstartdate').val();
    if ($('#txtstartdate').val() == null || $('#txtstartdate').val() == "") {
        alert("Please Select Leave Start Date");
        return false;
    }
    AppObj.LeaveEndDate = $('#txtenddate').val();
    if ($('#txtenddate').val() == null || $('#txtenddate').val() == "") {
        alert("Please Select Leave End Date");
        return false;
    }
    var x = new Date($('#txtstartdate').val());
    var y = new Date($('#txtenddate').val());
    if (x > y) {
        alert("Start date should be less than end date!!");
        return false;
    }
    AppObj.NoofDays = $('#noofDays').html();
    if ($('#noofDays').html() == null || $('#noofDays').html() == "") {
        alert("Please Enter No of Dayes");
        return false;
    }
    AppObj.Reason = $('#txtreason').val();
    if ($('#txtreason').val() == null || $('#txtreason').val() == "") {
        alert("Please Enter Leave Reason");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.LeaveID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployessLeavemangementService.aspx/UpdateEmployeeLeaveDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            alert("Data Has Been Updated Successfully....");
            clearfield();
            glbempcode =AppObj.EmpCode;
            showDetails();
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
                url: "EmployessLeavemangementService.aspx/deleteEmployeeLeaveDetails",
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

function CalculateDiff() {
    if ($("#txtstartdate").val() == "" || $("#txtstartdate").val() == null || $("#txtenddate").val() == "" || $("#txtenddate").val() == null) { }
    else {
        if ($("#txtstartdate").val() == $("#txtenddate").val()) {
            document.getElementById("noofDays").innerHTML = Math.round("1");
        }
        else {
            var day_start = new Date($("#txtstartdate").val());
            var day_end = new Date($("#txtenddate").val());
            var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
            document.getElementById("noofDays").innerHTML = Math.round(total_days + 1);
        }
    }
}


