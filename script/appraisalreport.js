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
    EmpAppList();
});

$('#btnBack').click(function () {
    $('#divmain,#divdetails').show();
    $('#divreport').hide();
});

function EmpAppList() {
    var unitid = $('#ddlunit').val();
    if (unitid == "" || unitid == null || unitid == "0") {
        alert("Please select Unit");
        return false;
    }
    var datef = $('#ddlquarter').val();   
    var deptid = $('#ddldept').val();
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'datefrom': datef, 'deptid': deptid }),
        url: "AppraisalServices.aspx/empappraisallist ",
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
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.DepartmentName, o.EmployeeCode, o.EmpName, o.DesignationName, o.AppraisalDate, "<a href=javascript:viewrecord(" + o.EmployeeID + "," + o.AppraisalID + "); class=\"btn default btn-xs green\"><i class=\"fa fa-edit\"></i> View </a>"]).draw();
                    t.row.add(['<label>' + serial_no + '</label>', '<label>' + $("#ddlquarter option:selected").text() + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.JoiningDate + '</label>', '<label>' + o.AvgP1 + '</label>', '<label>' + o.AvgP2 + '</label>', '<label>' + o.AvgP3 + '</label>', '<label>' + o.AvgP4 + '</label>', '<label>' + o.AvgP5 + '</label>', '<label>' + o.AvgP6 + '</label>', '<label>' + o.AvgP7 + '</label>', '<label">' + o.AvgP8 + '</label>', '<label>' + o.AvgP9 + '</label>', '<label>' + o.AvgP10 + '</label>', '<label>' + o.Total + '</label>', "<a href=javascript:viewrecord(" + o.EmployeeID + "," + o.AppraisalID + "); class=\"btn default btn-xs green\"><i class=\"fa fa-edit\"></i> Print </a>"]).draw();
                });
            }
            $('#divdetails').show();
            $('#dvLoading').hide();
        }
    });
};

function viewrecord(empid, apprid) {
    $('#dvLoading').show();
    bindempdet(empid);
    bindempappdet(apprid);
}

function bindempdet(empid) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "AppraisalServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#lblcomp').html(varList.CompanyName);
            $('#empname').html(varList.EmpName);
            $('#empdept').html(varList.Department);
            $('#empdesig').html(varList.Designation);
            $('#empjoindate').html(varList.JoiningDate);
            $('#emprepoff').html(varList.ReportingOfficer);
        }
    })
}


function bindempappdet(apprid) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': apprid }),
        url: "AppraisalServices.aspx/EmpAppraisalDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            var totalpointsr1 = 0;
            var totalpointsr2 = 0;

            if (varList.length == 0) {
                $('#lblro1p1').html("");
                $('#lblro2p1').html("");
                $('#lblro1p2').html("");
                $('#lblro2p2').html("");
                $('#lblro1p3').html("");
                $('#lblro2p3').html("");
                $('#lblro1p4').html("");
                $('#lblro2p4').html("");
                $('#lblro1p5').html("");
                $('#lblro2p5').html("");
                $('#lblro1p6').html("");
                $('#lblro2p6').html("");
                $('#lblro1p7').html("");
                $('#lblro2p7').html("");
                $('#lblro1p8').html("");
                $('#lblro2p8').html("");
                $('#lblro1p9').html("");
                $('#lblro2p9').html("");
                $('#lblro1p10').html("");
                $('#lblro2p10').html("");
                $('#lblcmnt1').html("");
                $('#lblcmnt2').html("");
                $('#lblcmnt3').html("");
                $('#lblcmnt4').html("");
                $('#lblcmnt5').html("");
                $('#lblcmnt6').html("");
                $('#lblcmnt7').html("");
                $('#lblcmnt8').html("");
                $('#lblcmnt9').html("");
                $('#lblcmnt10').html("");
            }
            $(varList).each(function (index, o) {
                $('#lblro1p1').html(o.RO1RP1);
                if (o.RO1RP1 == "" || o.RO1RP1 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP1);
                }
                $('#lblro2p1').html(o.RO2RP1);
                if (o.RO2RP1 == "" || o.RO2RP1 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP1);
                }
                $('#lblro1p2').html(o.RO1RP2);
                if (o.RO1RP2 == "" || o.RO1RP2 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP2);
                }
                $('#lblro2p2').html(o.RO2RP2);
                if (o.RO2RP2 == "" || o.RO2RP2 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP2);
                }
                $('#lblro1p3').html(o.RO1RP3);
                if (o.RO1RP3 == "" || o.RO1RP3 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP3);
                }
                $('#lblro2p3').html(o.RO2RP3);
                if (o.RO2RP3 == "" || o.RO2RP3 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP3);
                }
                $('#lblro1p4').html(o.RO1RP4);
                if (o.RO1RP4 == "" || o.RO1RP4 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP4);
                }
                $('#lblro2p4').html(o.RO2RP4);
                if (o.RO2RP4 == "" || o.RO2RP4 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP4);
                }
                $('#lblro1p5').html(o.RO1RP5);
                if (o.RO1RP5 == "" || o.RO1RP5 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP5);
                }
                $('#lblro2p5').html(o.RO2RP5);
                if (o.RO2RP5 == "" || o.RO2RP5 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP5);
                }
                $('#lblro1p6').html(o.RO1RP6);
                if (o.RO1RP6 == "" || o.RO1RP6 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP6);
                }
                $('#lblro2p6').html(o.RO2RP6);
                if (o.RO2RP6 == "" || o.RO2RP6 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP6);
                }
                $('#lblro1p7').html(o.RO1RP7);
                if (o.RO1RP7 == "" || o.RO1RP7 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP7);
                }
                $('#lblro2p7').html(o.RO2RP7);
                if (o.RO2RP7 == "" || o.RO2RP7 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP7);
                }
                $('#lblro1p8').html(o.RO1RP8);
                if (o.RO1RP8 == "" || o.RO1RP8 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP8);
                }
                $('#lblro2p8').html(o.RO2RP8);
                if (o.RO2RP8 == "" || o.RO2RP8 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP8);
                }
                $('#lblro1p9').html(o.RO1RP9);
                if (o.RO1RP9 == "" || o.RO1RP9 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP9);
                }
                $('#lblro2p9').html(o.RO2RP9);
                if (o.RO2RP9 == "" || o.RO2RP9 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP9);
                }
                $('#lblro1p10').html(o.RO1RP10);
                if (o.RO1RP10 == "" || o.RO1RP10 == null) {
                }
                else {
                    totalpointsr1 = totalpointsr1 + parseFloat(o.RO1RP10);
                }
                $('#lblro2p10').html(o.RO2RP10);
                if (o.RO2RP10 == "" || o.RO2RP10 == null) {
                }
                else {
                    totalpointsr2 = totalpointsr2 + parseFloat(o.RO2RP10);
                }
                $('#lblcmnt1').html(o.P1Coment);
                $('#lblcmnt2').html(o.P2Coment);
                $('#lblcmnt3').html(o.P3Coment);
                $('#lblcmnt4').html(o.P4Coment);
                $('#lblcmnt5').html(o.P5Coment);
                $('#lblcmnt6').html(o.P6Coment);
                $('#lblcmnt7').html(o.P7Coment);
                $('#lblcmnt8').html(o.P8Coment);
                $('#lblcmnt9').html(o.P9Coment);
                $('#lblcmnt10').html(o.P10Coment);
            });

            var tavg = 0;
            var tpoints = parseFloat(totalpointsr1) + parseFloat(totalpointsr2);
            if (parseFloat(tpoints) > 0) {
                tavg = parseFloat(tpoints / 2).toFixed(2);
            }
            $('#lbltotalavg').html(tavg);
            $('#divmain,#divdetails').hide();
            $('#divreport').show();
            $('#dvLoading').hide();
        }
    })
}