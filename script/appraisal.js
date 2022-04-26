var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
var glbtotal1 = 0;
var glbtotal2 = 0;
var glbapprid = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divappraisal').hide();
    companydetials();
    $('#txtdate').val("");
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
            emplist();
        }
    });
}

function emplist() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': $('#ddlcompany').val() }),
        url: "AppraisalServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlEmpCode').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' & Code: ' + o.EmployeeCode);
                $('#ddlEmpCode').append($option);
            });
        }
    });
}

$('#ddlcompany').change(function () {
    emplist();
});

function bindempdet() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': $('#ddlEmpCode').val() }),
        url: "AppraisalServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#compname').html(varList.CompanyName);
            $('#empname').html(varList.EmpName);
            $('#empdept').html(varList.Department);
            $('#empdesig').html(varList.EmpName);
            $('#empjoindate').html(varList.Designation);
            $('#emprepoff').html(varList.ReportingOfficer);
        }
    })
}

$('#btnshow').click(function () {
    var empid = $('#ddlEmpCode').val();
    if (empid == "" || empid == null) {
        alert("Please select Employee!!");
        return false;
    }
    var seldate = $('#txtdate').val();
    if (seldate == "" || seldate == null) {
        alert("Please select Date!!");
        return false;
    }
    bindempdet();
    bindempappdet();
})

function bindempappdet() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': $('#ddlEmpCode').val(), 'seldate': $('#txtdate').val() }),
        url: "AppraisalServices.aspx/AppraisalDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.length == 0) {
                $('#btnsubmit').show();
                $('#btnupdate,#btndelete').hide();
                $('#txtro1p1').val("");
                $('#txtro2p1').val("");
                $('#txtro1p2').val("");
                $('#txtro2p2').val("");
                $('#txtro1p3').val("");
                $('#txtro2p3').val("");
                $('#txtro1p4').val("");
                $('#txtro2p4').val("");
                $('#txtro1p5').val("");
                $('#txtro2p5').val("");
                $('#txtro1p6').val("");
                $('#txtro2p6').val("");
                $('#txtro1p7').val("");
                $('#txtro2p7').val("");
                $('#txtro1p8').val("");
                $('#txtro2p8').val("");
                $('#txtro1p9').val("");
                $('#txtro2p9').val("");
                $('#txtro1p10').val("");
                $('#txtro2p10').val("");
                $('#txtcmnt1').val("");
                $('#txtcmnt2').val("");
                $('#txtcmnt3').val("");
                $('#txtcmnt4').val("");
                $('#txtcmnt5').val("");
                $('#txtcmnt6').val("");
                $('#txtcmnt7').val("");
                $('#txtcmnt8').val("");
                $('#txtcmnt9').val("");
                $('#txtcmnt10').val("");
            }
            else {
                $('#btnsubmit').hide();
                $('#btnupdate,#btndelete').show();
            }
            $(varList).each(function (index, o) {
                glbapprid = o.AppraisalID;
                $('#txtro1p1').val(o.RO1RP1);
                $('#txtro2p1').val(o.RO2RP1);
                $('#txtro1p2').val(o.RO1RP2);
                $('#txtro2p2').val(o.RO2RP2);
                $('#txtro1p3').val(o.RO1RP3);
                $('#txtro2p3').val(o.RO2RP3);
                $('#txtro1p4').val(o.RO1RP4);
                $('#txtro2p4').val(o.RO2RP4);
                $('#txtro1p5').val(o.RO1RP5);
                $('#txtro2p5').val(o.RO2RP5);
                $('#txtro1p6').val(o.RO1RP6);
                $('#txtro2p6').val(o.RO2RP6);
                $('#txtro1p7').val(o.RO1RP7);
                $('#txtro2p7').val(o.RO2RP7);
                $('#txtro1p8').val(o.RO1RP8);
                $('#txtro2p8').val(o.RO2RP8);
                $('#txtro1p9').val(o.RO1RP9);
                $('#txtro2p9').val(o.RO2RP9);
                $('#txtro1p10').val(o.RO1RP10);
                $('#txtro2p10').val(o.RO2RP10);
                $('#txtcmnt1').val(o.P1Coment);
                $('#txtcmnt2').val(o.P2Coment);
                $('#txtcmnt3').val(o.P3Coment);
                $('#txtcmnt4').val(o.P4Coment);
                $('#txtcmnt5').val(o.P5Coment);
                $('#txtcmnt6').val(o.P6Coment);
                $('#txtcmnt7').val(o.P7Coment);
                $('#txtcmnt8').val(o.P8Coment);
                $('#txtcmnt9').val(o.P9Coment);
                $('#txtcmnt10').val(o.P10Coment);
            });

            $('#divappraisal').show();
        }
    })
}

$('#btnsubmit').click(function () {
    var AppOBJ = {};
    AppOBJ.EmployeeID = $('#ddlEmpCode').val();
    AppOBJ.AppraisalDate = $('#txtdate').val();
    AppOBJ.RO1RP1 = $('#txtro1p1').val();
    AppOBJ.RO2RP1 = $('#txtro2p1').val();
    AppOBJ.RO1RP2 = $('#txtro1p2').val();
    AppOBJ.RO2RP2 = $('#txtro2p2').val();
    AppOBJ.RO1RP3 = $('#txtro1p3').val();
    AppOBJ.RO2RP3 = $('#txtro2p3').val();
    AppOBJ.RO1RP4 = $('#txtro1p4').val();
    AppOBJ.RO2RP4 = $('#txtro2p4').val();
    AppOBJ.RO1RP5 = $('#txtro1p5').val();
    AppOBJ.RO2RP5 = $('#txtro2p5').val();
    AppOBJ.RO1RP6 = $('#txtro1p6').val();
    AppOBJ.RO2RP6 = $('#txtro2p6').val();
    AppOBJ.RO1RP7 = $('#txtro1p7').val();
    AppOBJ.RO2RP7 = $('#txtro2p7').val();
    AppOBJ.RO1RP8 = $('#txtro1p8').val();
    AppOBJ.RO2RP8 = $('#txtro2p8').val();
    AppOBJ.RO1RP9 = $('#txtro1p9').val();
    AppOBJ.RO2RP9 = $('#txtro2p9').val();
    AppOBJ.RO1RP10 = $('#txtro1p10').val();
    AppOBJ.RO2RP10 = $('#txtro2p10').val();
    AppOBJ.P1Coment = $('#txtcmnt1').val();
    AppOBJ.P2Coment = $('#txtcmnt2').val();
    AppOBJ.P3Coment = $('#txtcmnt3').val();
    AppOBJ.P4Coment = $('#txtcmnt4').val();
    AppOBJ.P5Coment = $('#txtcmnt5').val();
    AppOBJ.P6Coment = $('#txtcmnt6').val();
    AppOBJ.P7Coment = $('#txtcmnt7').val();
    AppOBJ.P8Coment = $('#txtcmnt8').val();
    AppOBJ.P9Coment = $('#txtcmnt9').val();
    AppOBJ.P10Coment = $('#txtcmnt10').val();
    AppOBJ.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppOBJ }),
        url: "AppraisalServices.aspx/insertdetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            alert("Appraisal Details saved successfully...");
            onbodyload();
        }
    });
});

$('#btnreset').click(function () {
    $('#divappraisal').hide();
});

$('#btnupdate').click(function () {
    var AppOBJ = {};
    AppOBJ.EmployeeID = $('#ddlEmpCode').val();
    AppOBJ.AppraisalDate = $('#txtdate').val();
    AppOBJ.RO1RP1 = $('#txtro1p1').val();
    AppOBJ.RO2RP1 = $('#txtro2p1').val();
    AppOBJ.RO1RP2 = $('#txtro1p2').val();
    AppOBJ.RO2RP2 = $('#txtro2p2').val();
    AppOBJ.RO1RP3 = $('#txtro1p3').val();
    AppOBJ.RO2RP3 = $('#txtro2p3').val();
    AppOBJ.RO1RP4 = $('#txtro1p4').val();
    AppOBJ.RO2RP4 = $('#txtro2p4').val();
    AppOBJ.RO1RP5 = $('#txtro1p5').val();
    AppOBJ.RO2RP5 = $('#txtro2p5').val();
    AppOBJ.RO1RP6 = $('#txtro1p6').val();
    AppOBJ.RO2RP6 = $('#txtro2p6').val();
    AppOBJ.RO1RP7 = $('#txtro1p7').val();
    AppOBJ.RO2RP7 = $('#txtro2p7').val();
    AppOBJ.RO1RP8 = $('#txtro1p8').val();
    AppOBJ.RO2RP8 = $('#txtro2p8').val();
    AppOBJ.RO1RP9 = $('#txtro1p9').val();
    AppOBJ.RO2RP9 = $('#txtro2p9').val();
    AppOBJ.RO1RP10 = $('#txtro1p10').val();
    AppOBJ.RO2RP10 = $('#txtro2p10').val();
    AppOBJ.P1Coment = $('#txtcmnt1').val();
    AppOBJ.P2Coment = $('#txtcmnt2').val();
    AppOBJ.P3Coment = $('#txtcmnt3').val();
    AppOBJ.P4Coment = $('#txtcmnt4').val();
    AppOBJ.P5Coment = $('#txtcmnt5').val();
    AppOBJ.P6Coment = $('#txtcmnt6').val();
    AppOBJ.P7Coment = $('#txtcmnt7').val();
    AppOBJ.P8Coment = $('#txtcmnt8').val();
    AppOBJ.P9Coment = $('#txtcmnt9').val();
    AppOBJ.P10Coment = $('#txtcmnt10').val();
    AppOBJ.UserName = $('#LoginName1').html();
    AppOBJ.AppraisalID = glbapprid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppOBJ }),
        url: "AppraisalServices.aspx/updatedetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            alert("Appraisal Details updated successfully...");
            onbodyload();
        }
    });
});

$(document).ready(function () {
    $('.groupOfTexbox').keypress(function (event) {
        return isNumber(event, this)
    });
});
// THE SCRIPT THAT CHECKS IF THE KEY PRESSED IS A NUMERIC OR DECIMAL VALUE.
function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.
        (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}

$('#txtro1p1').change(function () {
    if (parseFloat($('#txtro1p1').val()) > 10) {
        alert("Job Knowledge Rating By RO 1 should be less than equal to 10");
        $('#txtro1p1').val("");
        $('#txtro1p1').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p1').val());
    }
});

$('#txtro2p1').change(function () {
    if (parseFloat($('#txtro2p1').val()) > 10) {
        alert("Job Knowledge Rating By RO 2 should be less than equal to 10");
        $('#txtro2p1').val("");
        $('#txtro2p1').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p1').val());
    }
});

$('#txtro1p2').change(function () {
    if (parseFloat($('#txtro1p2').val()) > 20) {
        alert("Job Performance & Decision making Rating By RO 1 should be less than equal to 20");
        $('#txtro1p2').val("");
        $('#txtro1p2').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p2').val());
    }
});

$('#txtro2p2').change(function () {
    if (parseFloat($('#txtro2p2').val()) > 20) {
        alert("Job Performance & Decision making Rating By RO 2 should be less than equal to 20");
        $('#txtro2p2').val("");
        $('#txtro2p2').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p2').val());
    }
});


$('#txtro1p3').change(function () {
    if (parseFloat($('#txtro1p3').val()) > 5) {
        alert("Communication Rating By RO 1 should be less than equal to 5");
        $('#txtro1p3').val("");
        $('#txtro1p3').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p3').val());
    }
});

$('#txtro2p3').change(function () {
    if (parseFloat($('#txtro2p3').val()) > 5) {
        alert("Communication Rating By RO 2 should be less than equal to 5");
        $('#txtro2p3').val("");
        $('#txtro2p3').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p3').val());
    }
});


$('#txtro1p4').change(function () {
    if (parseFloat($('#txtro1p4').val()) > 20) {
        alert("Integrity and Discipline Rating By RO 1 should be less than equal to 20");
        $('#txtro1p4').val("");
        $('#txtro1p4').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p4').val());
    }
});

$('#txtro2p4').change(function () {
    if (parseFloat($('#txtro2p4').val()) > 20) {
        alert("Integrity and Discipline Rating By RO 2 should be less than equal to 20");
        $('#txtro2p4').val("");
        $('#txtro2p4').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p4').val());
    }
});

$('#txtro1p5').change(function () {
    if (parseFloat($('#txtro1p5').val()) > 10) {
        alert("Learning & Innovation Rating By RO 1 should be less than equal to 10");
        $('#txtro1p5').val("");
        $('#txtro1p5').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p5').val());
    }
});

$('#txtro2p5').change(function () {
    if (parseFloat($('#txtro2p5').val()) > 10) {
        alert("Learning & Innovation Rating By RO 2 should be less than equal to 10");
        $('#txtro2p5').val("");
        $('#txtro2p5').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p5').val());
    }
});

$('#txtro1p6').change(function () {
    if (parseFloat($('#txtro1p6').val()) > 5) {
        alert("External Orientation Rating By RO 1 should be less than equal to 5");
        $('#txtro1p6').val("");
        $('#txtro1p6').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p6').val());
    }
});

$('#txtro2p6').change(function () {
    if (parseFloat($('#txtro2p6').val()) > 5) {
        alert("External Orientation Rating By RO 2 should be less than equal to 5");
        $('#txtro2p6').val("");
        $('#txtro2p6').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p6').val());
    }
});

$('#txtro1p7').change(function () {
    if (parseFloat($('#txtro1p7').val()) > 5) {
        alert("Behavior/ conduct with Colleagues Rating By RO 1 should be less than equal to 5");
        $('#txtro1p7').val("");
        $('#txtro1p7').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p7').val());
    }
});

$('#txtro2p7').change(function () {
    if (parseFloat($('#txtro2p7').val()) > 5) {
        alert("Behavior/ conduct with Colleagues Rating By RO 2 should be less than equal to 5");
        $('#txtro2p7').val("");
        $('#txtro2p7').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p7').val());
    }
});


$('#txtro1p8').change(function () {
    if (parseFloat($('#txtro1p8').val()) > 10) {
        alert("Team work Rating By RO 1 should be less than equal to 10");
        $('#txtro1p8').val("");
        $('#txtro1p8').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro2p8').val());
    }
});

$('#txtro2p8').change(function () {
    if (parseFloat($('#txtro2p8').val()) > 10) {
        alert("Team work Rating By RO 2 should be less than equal to 10");
        $('#txtro2p8').val("");
        $('#txtro2p8').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p8').val());
    }
});

$('#txtro1p9').change(function () {
    if (parseFloat($('#txtro1p9').val()) > 5) {
        alert("Customer Feedback ( Internal) Rating By RO 1 should be less than equal to 5");
        $('#txtro1p9').val("");
        $('#txtro1p9').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p9').val());
    }
});

$('#txtro2p9').change(function () {
    if (parseFloat($('#txtro2p9').val()) > 5) {
        alert("Customer Feedback ( Internal) Rating By RO 2 should be less than equal to 5");
        $('#txtro2p9').val("");
        $('#txtro2p9').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p9').val());
    }
});

$('#txtro1p10').change(function () {
    if (parseFloat($('#txtro1p10').val()) > 10) {
        alert("Respecting company Systems Rating By RO 1 should be less than equal to 10");
        $('#txtro1p10').val("");
        $('#txtro1p10').focus();
        return false;
    }
    else {
        glbtotal1 = glbtotal1 + parseFloat($('#txtro1p10').val());
    }
});

$('#txtro2p10').change(function () {
    if (parseFloat($('#txtro2p10').val()) > 10) {
        alert("Respecting company Systems Rating By RO 2 should be less than equal to 10");
        $('#txtro2p10').val("");
        $('#txtro2p10').focus();
        return false;
    }
    else {
        glbtotal2 = glbtotal2 + parseFloat($('#txtro2p10').val());
    }
});

$('#btndelete').click(function () {
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
                data: JSON.stringify({ 'id': glbapprid, 'usrname': username }),
                url: "AppraisalServices.aspx/deletedetails",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    onbodyload();
                }
            });
        }
        else {
            return false;
        }
    }
});