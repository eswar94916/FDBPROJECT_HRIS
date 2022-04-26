function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divjoin').hide();
    companydetials();
}

var Username = ($('#LoginName1').html()).trim();
var role = ($('#lblrole').html()).trim();

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmpJoiningReportServices.aspx/CompanyList",
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
            unitdetials();
            departmentdetials();
            emplistforcomp();
        }
    });
}

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmpJoiningReportServices.aspx/UnitList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlunit').empty();
            $("#ddlunit").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunit').append($option);
            });
        }
    });
}

function departmentdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmpJoiningReportServices.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlDepartment').empty();
            $("#ddlDepartment").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DepartmentID).text(o.DepartmentName);
                $('#ddlDepartment').append($option);
            });
        }
    });
}

$('#ddlcompany').change(function () {
    unitdetials();
    departmentdetials();
    emplistforcomp();
});

$('#ddlunit').change(function () {
    emplistforunit();
});

$('#ddlDepartment').change(function () {
    emplistfordepartment();
});

function emplistforcomp() {
    var Comp_id = $("#ddlcompany").val();
    var filtertype = "3";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': Comp_id, 'filtertype': filtertype }),
        url: "EmpJoiningReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}

function emplistforunit() {
    var unitid = $("#ddlunit").val();
    var filtertype = "1";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': unitid, 'filtertype': filtertype }),
        url: "EmpJoiningReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}

function emplistfordepartment() {
    var deptid = $("#ddlDepartment").val();
    var filtertype = "2";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': deptid, 'filtertype': filtertype }),
        url: "EmpJoiningReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}

$('#btnshow').click(function () {
    showDetails();
});

function showDetails() {
    var AppObj = {};
    var datef = $('#datefrom').val();
    var dateto = $('#dateto').val();
    if (datef == "" || datef == null || dateto == "" || dateto == null) {
        alert("Please select both Date From & To");
        return false;
    }
    AppObj.DateFrom = datef;
    AppObj.DateTo = dateto;
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    AppObj.EmployeeID = $("#ddlemp").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeClaimService.aspx/empclaimreport",
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
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.DepartmentName, o.EmpCode, o.EmpName, o.ClaimDate, o.ClaimName]).draw();
                    t.row.add([serial_no, o.UnitName, o.DepartmentName, o.Designation, o.EmpCode, o.EmpName, o.Month, o.Year, o.ClaimAmount]).draw();
                });
            }
            $('#sample_1').show();
            $('#divjoin').show();
        }
    });
};