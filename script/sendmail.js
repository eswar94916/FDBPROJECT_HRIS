
var Username = $('#LoginName1').html();
var role = $('#lblrole').html();

function onload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divclaimdetails').hide();
    $('#divbirmail').hide();
    $('#divannimail').hide();
    $('#divjobmail').hide();
    companydetials();
}


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
    $('#divmarrige').hide();
    $('#jobanni').hide();
    $('#birthdiv').hide();
    $('#divannimail').hide();
    $('#divjobmail').hide();
    $('#divbirmail').show();
});
$('#btnshow2').click(function () {
    showDetails1();
    $('#divmarrige').hide();
    $('#jobanni').hide();
    $('#birthdiv').hide();
    $('#divjobmail').hide();
    $('#divbirmail').hide();
    $('#divannimail').show();
});
$('#btnshow3').click(function () {
    showDetails2();
    $('#divmarrige').hide();
    $('#jobanni').hide();
    $('#birthdiv').hide();
    $('#divjobmail').show();
    $('#divbirmail').hide();
    $('#divannimail').hide();
});
$('#btnback').click(function () {
    $('#divmarrige').show();
    $('#jobanni').show();
    $('#birthdiv').show();
    $('#divbirmail').hide();
    $('#divclaimdetails').hide();
});
$('#btnback1').click(function () {
    $('#divmarrige').show();
    $('#jobanni').show();
    $('#birthdiv').show();
    $('#divclaimdetails').hide();
    $('#divjobmail').hide();
    $('#divbirmail').hide();
    $('#divannimail').hide();
});
$('#btnback2').click(function () {
    $('#divmarrige').show();
    $('#jobanni').show();
    $('#birthdiv').show();
    $('#divclaimdetails').hide();
    $('#divjobmail').hide();
    $('#divbirmail').hide();
    $('#divannimail').hide();
});

function showDetails() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid }),
        url: "SendMailService.aspx/BirthMailList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblclaim').DataTable();
            t.destroy();
            var t = $('#tblclaim').DataTable({
                "paging": false,
                "ordering": false,
            });
            if (varList.length == 0) {
                t.clear().draw();
                $('#btnsend').hide();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.EmpName, '<label>' + o.Email + '</label>', '<textarea>' + o.BirthDayMsg + '</textarea>']).draw();

                });
                $('#btnsend').show();
            }
            $('#tblclaim').show();
            $('#divclaimdetails').show();
        }
    });
};

function showDetails1() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid }),
        url: "SendMailService.aspx/MAMailList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblclaim').DataTable();
            t.destroy();
            var t = $('#tblclaim').DataTable({
                "paging": false,
                "ordering": false,
            });
            if (varList.length == 0) {
                t.clear().draw();
                $('#btnsend1').hide();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.EmpName, '<label>' + o.Email + '</label>', '<textarea>' + o.MarriageMsg + '</textarea>']).draw();
                });
                $('#btnsend1').show();
            }
            $('#tblclaim').show();
            $('#divclaimdetails').show();
        }
    });
};

function showDetails2() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid }),
        url: "SendMailService.aspx/JAMailList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblclaim').DataTable();
            t.destroy();
            var t = $('#tblclaim').DataTable({
                "paging": false,
                "ordering": false,
            });
            if (varList.length == 0) {
                t.clear().draw();
                $('#btnsend2').hide();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.EmpName, '<label>' + o.Email + '</label>', '<textarea>' + o.JobMsg + '</textarea>']).draw();
                });
                $('#btnsend2').show();
            }
            $('#tblclaim').show();
            $('#divclaimdetails').show();
        }
    });
};

$('#btnsend').click(function () {
    var birthlistnew = [];
    var n_rows = $('#tblclaim').dataTable().fnGetNodes().length;
    var tc = 0;
    for (var i = 0; i < n_rows; i++) {
        tc = tc + 1;
        var obj = {};
        obj.Email = $("#tblclaim tr:eq(" + tc + ") label:eq(0)").text();
        obj.BirthDayMsg = $("#tblclaim tr:eq(" + tc + ") textarea:eq(0)").val();
        birthlistnew.push(obj);
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'birthlist': birthlistnew }),
        url: "SendMailService.aspx/birthdetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            alert('Mail has been sent successfully...');
            onload();
        }
    });
});

$('#btnsend1').click(function () {
    var MAMailList = [];
    var n_rows = $('#tblclaim').dataTable().fnGetNodes().length;
    var tc = 0;
    for (var i = 0; i < n_rows; i++) {
        tc = tc + 1;
        var obj = {};
        obj.Email = $("#tblclaim tr:eq(" + tc + ") label:eq(0)").text();
        obj.MarriageMsg = $("#tblclaim tr:eq(" + tc + ") textarea:eq(0)").val();
        MAMailList.push(obj);
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'MAMailList': MAMailList }),
        url: "SendMailService.aspx/Marriagedetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            alert('Mail has been sent successfully...');
            onload();
        }
    });
});

$('#btnsend2').click(function () {
    var JAMailList = [];
    var n_rows = $('#tblclaim').dataTable().fnGetNodes().length;
    var tc = 0;
    for (var i = 0; i < n_rows; i++) {
        tc = tc + 1;
        var obj = {};
        obj.Email = $("#tblclaim tr:eq(" + tc + ") label:eq(0)").text();
        obj.JobMsg = $("#tblclaim tr:eq(" + tc + ") textarea:eq(0)").val();
        JAMailList.push(obj);
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'JAMailList': JAMailList }),
        url: "SendMailService.aspx/JobAnnivrydetls",
        dataType: "json",
        async: true,
        success: function (data, status) {
            alert('Mail has been sent successfully...');
            onload();
        }
    });
});

