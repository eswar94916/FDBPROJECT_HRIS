var Username = $('#LoginName1').html();
var role = $('#lblrole').html();

function onbodyload() {

    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divmain').show();
    $('#divdetails,#divreport').hide();
    companydetials();
    $('#dvLoading').hide();
}

function companydetials() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "AppraisalServices.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);
            });
            unitlist();
            DepartmentList();
        }
    });
}

function unitlist() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcompany').val() }),
        url: "AppraisalServices.aspx/UnitList",
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

function DepartmentList() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcompany').val() }),
        url: "AppraisalServices.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddldept').empty();
            $("#ddldept").append($("<option></option>").val("0").html("All.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DepartmentID).text(o.DepartmentName);
                $('#ddldept').append($option);
            });
        }
    });
}

$('#ddlcompany').change(function () {
    unitlist();
});
$('#btnshow').click(function () {
    showDetails();
});

function showDetails() {
    var AppObj = {};

    AppObj.Month1 = $('#ddlmonth').val();
    AppObj.Year = $('#ddlyear').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    if (AppObj.Month1 == "" || AppObj.Month1 == "0" || AppObj.Year == "" || AppObj.Year == "0") {
        alert("Please select Month & Year");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "IncomeTaxReportervices.aspx/empincometaxreport",
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
                   
                    var value = 0;
                    if (o.IncomeTaxDeduct == value) {

                    }
                    else {
                        serial_no = serial_no + 1;
                        t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmployeeName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.Month + '</label>', '<label>' + o.Year + '</label>', '<label>' + parseFloat(o.Basic).toFixed() + '</label>', '<label>' + parseFloat(o.Gross).toFixed() + '</label>', '<label>' + parseFloat(o.TDSDeduction).toFixed() + '</label>', '<label>' + parseFloat(o.NetPay).toFixed() + '</label>', '<label>' + parseFloat(o.IncomeTaxDeduct).toFixed()+'</label>']).draw();
                    }
                });
            }
            $('#sample_2').show();
            $('#divdetails').show();
            $('#divfilter').show();

            $('#dvLoading').hide();
        }
    });
};