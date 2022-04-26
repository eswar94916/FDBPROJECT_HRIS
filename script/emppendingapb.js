function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
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
        url: "EmpJoiningReportServices.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
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
});

$('#btnshow').click(function () {
    showDetails();
});

function showDetails() {
    var AppObj = {};
    AppObj.SalMonth = $('#datefrom').val();
    AppObj.SalYear = $('#dateto').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    AppObj.EmployeeID = $("#ddlemp").val();
    if (AppObj.SalMonth == "" || AppObj.SalMonth == "0" || AppObj.SalYear == "" || AppObj.SalYear == "0") {
        alert("Please select Date Range");
        return false;
    }
    AppObj.SalType = $('#ddlsaltype').val();

    var dfyr = (AppObj.SalMonth).split('/')[2];
    var dtyr = (AppObj.SalYear).split('/')[2];
    if (dfyr == dtyr) {
    }
    else {
        alert("Please select Date Range for Same Year");
        return false;
    }
    AppObj.SelYear = dfyr;
    $('#dvLoading').show();
    if (AppObj.SalType == "1") {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'obj': AppObj }),
            url: "PendingAPBServices.aspx/emppendingapb",
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
                        var apb = 0;
                        if (o.APB == "" || o.APB == null) {
                            apb = 0;
                        }
                        else {
                            apb = parseFloat(o.APB) * 12;
                        }

                        var monyr = "";
                        if (o.APBDueDate == "") {
                            monyr = "";
                        }
                        else {
                            var monyrarr = (o.APBDueDate).split('-');
                            monyr = monyrarr[1] + " & " + monyrarr[2];
                        }
                        t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.JoiningDate + '</label>', '<label>' + monyr + '</label>', '<label>' + o.APBDueDate + '</label>', '<label>' + parseFloat(o.APB).toFixed() + '</label>', '<label>' + parseFloat(apb).toFixed() + '</label>']).draw();
                    });
                }
                $('#sample_2').show();
                $('#divdetails').show();
                $('#dvLoading').hide();
            }
        });
    }

    if (AppObj.SalType == "2") {
        var t = $('#sample_1').DataTable();
        t.clear().draw();
        $('#sample_1').show();
        $('#divdetails').show();
        $('#dvLoading').hide();
    }

}

