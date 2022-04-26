var Username = $('#LoginName1').html();
var glbrole = $('#lblrole').html();

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

function companydetials() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': glbrole }),
        url: "EmpPromotionServices.aspx/CompanyList",
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
    var dept = $('#ddldept').val();
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
        url: "EmpPromotionServices.aspx/emppromotionreport",
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
                    if (o.JoiningDate == "01-Jan-1900" || o.JoiningDate == "01-Jan-2000" || o.JoiningDate == "" || o.JoiningDate == null) {
                        o.DOFF = "";
                    }
                    if (o.LastIncPer == "" || o.LastIncPer == "-" || o.LastIncPer == null) {
                        o.LastIncPer = "-";
                    }
                    else {
                        o.LastIncPer = parseFloat(o.LastIncPer).toFixed();
                    }

                    if (o.LastIncAmount == "" || o.LastIncAmount == "-" || o.LastIncAmount == null) {
                        o.LastIncAmount = "-";
                    }
                    else {
                        o.LastIncAmount = parseFloat(o.LastIncAmount).toFixed();
                    }

                    if (o.LastCTC == "" || o.LastCTC == "-" || o.LastCTC == null) {
                        o.LastCTC = "-";
                    }
                    else {
                        o.LastCTC = parseFloat(o.LastCTC).toFixed();
                    }

                    if (o.Increment == "" || o.Increment == "-" || o.Increment == null) {
                        o.Increment = "-";
                    }
                    else {
                        o.Increment = parseFloat(o.Increment).toFixed();
                    }

                    if (o.Revision == "" || o.Revision == "-" || o.Revision == null) {
                        o.Revision = "-";
                    }
                    else {
                        o.Revision = parseFloat(o.Revision).toFixed();
                    }

                    if (o.NewCTC == "" || o.NewCTC == "-" || o.NewCTC == null) {
                        o.NewCTC = "-";
                    }
                    else {
                        o.NewCTC = parseFloat(o.NewCTC).toFixed();
                    }
                    if (o.APB == "" || o.APB == "-" || o.APB == null) {
                        o.APB = "-";
                    }
                    else {
                        o.APB = parseFloat(o.APB).toFixed();
                    }
                    if (o.LastAPB == "" || o.LastAPB == "-" || o.LastAPB == null) {
                        o.LastAPB = "-";
                    }
                    else {
                        o.LastAPB = parseFloat(o.LastAPB).toFixed();
                    }
                    //t.row.add([serial_no, o.UnitName, o.EmployeeCode, o.EmpName, o.Department, o.Designation, o.JoiningDate, datef, dateto, parseFloat(o.LastIncPer).toFixed(), parseFloat(o.LastIncAmount).toFixed(), parseFloat(o.LastCTC).toFixed(), parseFloat(o.Increment).toFixed(), parseFloat(o.Revision).toFixed(), parseFloat(o.NewCTC).toFixed(), o.EffectiveDate, o.NextIncrementDate]).draw();
                    t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.Department + '</label>', '<label>' + o.Designation + '</label>', '<label>' + o.JoiningDate + '</label>', '<label>' + o.DateFrom + '</label>', '<label>' + o.DateTo + '</label>', '<label>' + o.LastIncPer + '</label>', '<label>' + o.LastIncAmount + '</label>', '<label>' + o.LastCTC + '</label>', '<label>' + o.LastAPB + '</label>', '<label>' + o.Increment + '</label>', '<label>' + o.Revision + '</label>', '<label>' + o.NewCTC + '</label>', '<label>' + o.APB + '</label>', '<label>' + o.EffectiveDate + '</label>', '<label>' + o.NextIncrementDate + '</label>']).draw();
                });
            }
            $('#sample_2').show();
            $('#divdetails').show();
            $('#dvLoading').hide();
        }
    });
};