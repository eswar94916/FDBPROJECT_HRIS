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
    $('#divdetails1').hide();
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
            $("#ddlDepartment").append($("<option></option>").val("0").html("All"));
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
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
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
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
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
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
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
    var selMultimonth = $.map($("#ddlmonth option:selected"), function (el, i) {
        return $(el).val();
    });
    var selmonth = selMultimonth.join(",");
    AppObj.Month = selmonth;
    AppObj.Year = $('#ddlyear').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    if (AppObj.Month == "" || AppObj.Month == "0" || AppObj.Year == "" || AppObj.Year == "0") {
        alert("Please select Month & Year");
        return false;
    }

  
    var saltype = $('#ddlsaltype').val();
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj, 'saltype': saltype }),
        url: "MonthlyPFLegrService.aspx/empsalreport",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (saltype == 1 || saltype == 2) {
                var t = $('#sample_1').DataTable();
                if (varList.length == 0) {
                    t.clear().draw();
                }
                else {
                    t.clear();
                    var serial_no = 0;
                    $(varList).each(function (index, o) {
                        serial_no = serial_no + 1;
                       
                        t.row.add(['<label>' + serial_no + '<label>', '<label>' + o.UnitName + '<label>', '<label>' + o.EmployeeCode + '<label>', '<label>' + o.EmployeeName + '<label>', '<label>' + o.UAN + '<label>', '<label>' + o.ESINo + '<label>', '<label>' + o.DepartmentName + '<label>', '<label>' + o.DesignationName + '<label>', '<label>' + o.SalMonth + ' & ' + o.Year + '<label>', '<label>' + parseFloat(o.Basic).toFixed() + '<label>', parseFloat(o.TotalEarning).toFixed() + '<label>', '<label>' + parseFloat(o.FinalValue).toFixed() + '<label>']).draw();
                      
                    });
                }
                $('#sample_1').show();
                $('#divdetails').show();
                $('#divdetails1').hide();
                $('#divfilter').show();
                $('#dvLoading').hide();
            }
            else if(saltype==0)
            {
                var t = $('#sample_2').DataTable();
                if (varList.length == 0) {
                    t.clear().draw();
                }
                else {
                    t.clear();
                    var serial_no = 0;
                    $(varList).each(function (index, o) {
                        serial_no = serial_no + 1;
                        var sumtotal = parseFloat(o.PF) + parseFloat(o.ESI);
                        t.row.add(['<label>' + serial_no + '<label>', '<label>' + o.UnitName + '<label>', '<label>' + o.EmployeeCode + '<label>', '<label>' + o.EmployeeName + '<label>', '<label>' + o.UAN + '<label>', '<label>' + o.ESINo + '<label>', '<label>' + o.DepartmentName + '<label>', '<label>' + o.DesignationName + '<label>', '<label>' + o.SalMonth + ' & ' + o.Year + '<label>', '<label>' + parseFloat(o.Basic).toFixed() + '<label>', '<label>' + parseFloat(o.TotalEarning).toFixed() + '<label>', '<label>' + parseFloat(o.PF).toFixed() + '<label>', '<label>' + parseFloat(o.ESI).toFixed() + '<label>', '<label>' + sumtotal.toFixed() + '<label>']).draw();
                    });
                }
                $('#sample_2').show();
                $('#divdetails').hide();
                $('#divdetails1').show();
                $('#divfilter').show();
                $('#dvLoading').hide();
            }

        }
    });
};

