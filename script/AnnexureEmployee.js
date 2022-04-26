var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
function bodyonload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    companydetials();
    $('#divDepartment').hide();
    $('#dvLoading').hide();
}
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
            //$("#ddlunit").append($("<option></option>").val("0").html("Select"));
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
});

$('#btnshow').click(function () {
    showDetails();
});
function showDetails() {

    $('#dvLoading').show();
    var AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    if (AppObj.UnitID == "" || AppObj.UnitID == "0") {
        alert("Please select Unit");
        return false;
    }
    AppObj.DepartmentID = $('#ddlDepartment').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "AnnexureEmployeeServices.aspx/annexurereport",
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
                    if (o.Gross == "") {

                    }
                    else {
                        o.Gross = parseFloat(o.Gross).toFixed();
                    }
                    if (o.Deduction == "") {

                    }
                    else {
                        o.Deduction = parseFloat(o.Deduction).toFixed();
                    }
                    if (o.Bonus == "") {

                    }
                    else {
                        o.Bonus = parseFloat(o.Bonus).toFixed();
                    }
                    if (o.APB == "") {

                    }
                    else {
                        o.APB = parseFloat(o.APB).toFixed();
                    }
                    if (o.Gratuity == "") {

                    }
                    else {
                        o.Gratuity = parseFloat(o.Gratuity).toFixed();
                    }
                    if (o.EmployerESI == "") {

                    }
                    else {
                        o.EmployerESI = parseFloat(o.EmployerESI).toFixed();
                    }

                    if (o.EmployerPF == "") {

                    }
                    else {
                        o.EmployerPF = parseFloat(o.EmployerPF).toFixed();
                    }

                    if (o.EmpCTC == "") {

                    }
                    else {
                        o.EmpCTC = parseFloat(o.EmpCTC).toFixed();
                    }
                    t.row.add(['<label>' + serial_no + '<label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmpCode + '</label>', '<label>' + o.EmployeeName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.Gross + '</label>', '<label>' + o.Bonus + '</label>', '<label>' + o.APB + '</label>', '<label>' + o.Gratuity + '</label>', '<label>' + o.EmployerPF + '</label>', '<label>' + o.EmployerESI + '</label>', '<label>' + o.EmpCTC + '</label>', '<label>' + o.Deduction + '</label>']).draw();
                });
            }
            $('#sample_2').show();
            $('#divDepartment').show();
            $('#dvLoading').hide();
        }
    });
};