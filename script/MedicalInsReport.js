var glbempids = "";

function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divfilter').show();
    $('#divdetails').hide();
    companydetials();
    $('#dvLoading').hide();
}

var Username = ($('#LoginName1').html()).trim();
var role = ($('#lblrole').html()).trim();

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmpTrainingReportServices.aspx/CompanyList",
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
        url: "EmpTrainingReportServices.aspx/UnitList",
        dataType: "json",
        async: false,
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

function departmentdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmpTrainingReportServices.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlDepartment').empty();
            $("#ddlDepartment").append($("<option></option>").val("0").html("All.."));
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
});


function emplistforcomp() {
    var Comp_id = $("#ddlcompany").val();
    var filtertype = "3";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': Comp_id, 'filtertype': filtertype }),
        url: "EmpTrainingReportServices.aspx/EmpList",
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
        url: "EmpTrainingReportServices.aspx/EmpList",
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
        url: "EmpTrainingReportServices.aspx/EmpList",
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

$('#btnreset').click(function () {
    $('#datefrom').val("");
    $('#dateto').val("");
    $('#divdetails').hide();
});

function showDetails() {
    var unit = $('#ddlunit').val();
    var dept = $('#ddlDepartment').val();
    var datef = $('#datefrom').val();
    var dateto = $('#dateto').val();
    if (datef == "" || datef == null || dateto == "" || dateto == null) {
        alert("Please select both Date From & To");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcompany').val(), 'datefrom': datef, 'dateto': dateto, 'unit': unit, 'dept': dept }),
        url: "MedicalInsReportServices.aspx/empmedinsreport",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_2').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    if (o.StartDate == "01-Jan-1900" || o.StartDate == "01-Jan-2000" || o.StartDate == "" || o.StartDate == null) {
                        o.StartDate = "";
                    }
                    if (o.ValidityDate == "01-Jan-1900" || o.ValidityDate == "01-Jan-2000" || o.ValidityDate == "" || o.ValidityDate == null) {
                        o.ValidityDate = "";
                    }
                    t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmpCode + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.Operator + '</label>', '<label>' + o.PolicyNo + '</label>', '<label>' + o.Mode + '</label>', '<label>' + o.PremiumAmount + '</label>', '<label>' + o.StartDate + '</label>', '<label>' + o.ValidityDate + '</label>', '<label>' + o.msg+'</label>']).draw();
                });
            }
            $('#sample_2').show();
            $('#divdetails').show();
            $('#dvLoading').hide();
        }
    });
};
