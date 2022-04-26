var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
var glbEmpid = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tbldetail').hide();
    companydetials();
}
//this method is used to bind company details
function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmpSalarySlipService.aspx/CompanyList",
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

$("#TxtEmployeecode").change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcompany').val(), }),
        url: "EmpSalarySlipService.aspx/chkempcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Employee Code does not exist');
                $("#TxtEmployeecode").val("");
                $("#TxtEmployeeName").val("");
                $("#txtdesignation").val("");
            }
            if (varIndentList == "2") {
                EmpDetails()
            }
        }
    });
});

//this method used to bind employee name
function EmpDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmpSalarySlipService.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $(varList).each(function (index, o) {
                $("#TxtEmployeeName").val(o.EmpName);
                $('#txtdesignation').val(o.Designation);
                glbEmpid = o.EmpID;
            });
        }
    });
}
//this method is used to insert employee salary details
jQuery('#btnsave').click(function () {

    var empcode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    var emp_id = glbEmpid;
    var month = $('#ddlmonth').val();
    if (month == "0" || month == "Select..") {
        alert("Please Select Month");
        return false;
    }
    var year = $('#ddlyear').val();
    if (year == "0" || year == "Select..") {
        alert("Please Select Year");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': emp_id, 'mon': month, 'yr': year, 'usrname': Username, 'compid': $('#ddlcompany').val() }),
        url: "EmpSalarySlipService.aspx/insertsalmain",
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
                alert('Data already exist...');
            }
            if (varIndentList == "3") {
                alert('Please import Payroll Details of Employee for selected month & year before generate salary');
                return false;
            }
        }
    });
});

//this method is clear fields of form
function clearfield() {
    //$('#ddlcompany').val("0").trigger('change');
    $('#TxtEmployeecode').val("");
    $('#TxtEmployeeName').val("");
    $('#txtdesignation').val("");
    $('#ddlmonth').val("0").trigger('change');
    $('#ddlyear').val("0").trigger('change');
    $('#btnUpdate').hide();
    $('#btnsave').show();
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    showDetails();
});
//this method is used to bind Employee salary details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmpSalarySlipService.aspx/EmpSallist ",
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
                    //t.row.add([serial_no, o.CompanyName, o.EmpCode, o.EmpName, o.Month, o.SalYear, o.TotalEarn, o.TotalDeduct, o.TotalSal, "<a href=javascript:deleteRecord(" + o.EmpSalID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.EmpCode, o.EmpName, o.Month, o.SalYear, parseFloat(o.Gross).toFixed(), parseFloat(o.TotalEarn).toFixed(), parseFloat(o.TotalDeduct).toFixed(), parseFloat(o.TotalSal).toFixed(), "<a href=javascript:deleteRecord(" + o.EmpSalID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#tbldetail').show();
        }
    });
};

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to delete employee salary details
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
                url: "EmpSalarySlipService.aspx/deleteempsaldet ",
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
