
function onload() {
    $('#dvLoading').show();
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
$('#btnshow2').click(function () {
    showDetails1();
});
$('#btnshow3').click(function () {
    showDetails2();
});

function showDetails() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    var mon = $('#ddlMonth').val();
    if (mon == "" || mon == null || mon == "0") {
        alert("Please select Month");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid, 'mon': mon }),
        url: "SendMailReportServices.aspx/BirthMailListReort",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_2').DataTable();
            if (varList.length == 0) {
                $('#btnsend').hide();
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.Unit, o.Dept, o.Desig, o.EmpName, '<label>' + o.Email + '</label>', o.Date]).draw();
                });
            }
            $('#sample_2').show();
            $('#divclaimdetails').show();
            $('#divmarrige').hide();
            $('#jobanni').hide();
            $('#birthdiv').hide();
            $('#divannimail').hide();
            $('#divjobmail').hide();
            $('#divbirmail').show();
            $('#dvLoading').hide();
        }
    });
};

function showDetails1() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    var mon = $('#ddlMonth').val();
    if (mon == "" || mon == null || mon == "0") {
        alert("Please select Month");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid, 'mon': mon }),
        url: "SendMailReportServices.aspx/MAMailListReort",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_2').DataTable();
            if (varList.length == 0) {
                $('#btnsend1').hide();
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.Unit, o.Dept, o.Desig , o.EmpName, '<label>' + o.Email + '</label>', o.Date]).draw();
                });
            }
            $('#sample_2').show();
            $('#divclaimdetails').show();
            $('#divmarrige').hide();
            $('#jobanni').hide();
            $('#birthdiv').hide();
            $('#divjobmail').hide();
            $('#divbirmail').hide();
            $('#divannimail').show();
            $('#dvLoading').hide();
        }
    });
};

function showDetails2() {
    var unitid = $('#ddlunit').val();
    var depid = $('#ddlDepartment').val();
    var mon = $('#ddlMonth').val();
    if (mon == "" || mon == null || mon == "0") {
        alert("Please select Month");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'depid': depid, 'mon': mon }),
        url: "SendMailReportServices.aspx/JAMailListReort",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_2').DataTable();
            if (varList.length == 0) {
                $('#btnsend2').hide();
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.Unit, o.Dept, o.Desig, o.EmpName, '<label>' + o.Email + '</label>', o.Date]).draw();
                });
            }
            $('#sample_2').show();
            $('#divclaimdetails').show();
            $('#divmarrige').hide();
            $('#jobanni').hide();
            $('#birthdiv').hide();
            $('#divjobmail').show();
            $('#divbirmail').hide();
            $('#divannimail').hide();
            $('#dvLoading').hide();
        }
    });
};
