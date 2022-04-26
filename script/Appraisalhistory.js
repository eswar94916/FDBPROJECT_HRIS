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

function EmpAppList() {
    var unitid = $('#ddlunit').val();
    if (unitid == "" || unitid == null || unitid == "0") {
        alert("Please select Unit");
        return false;
    }
    var year = $('#ddlyear').val();
    if (year == "" || year == null || year == "0") {
        alert("Please select From Year");
        return false;
    }
    var yearto = $('#ddlyear1').val();
    if (yearto == "" || yearto == null || yearto == "0") {
        alert("Please select To Year");
        return false;
    }
    var deptid = $('#ddldept').val();
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'fromyear': year, 'toyear': yearto, 'deptid': deptid }),
        url: "AppraisalHistoryServices.aspx/empappraisallisthistory ",
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
                    t.row.add([serial_no, o.UnitName, o.EmployeeCode, o.EmpName, o.DepartmentName, o.DesignationName, "<a href=javascript:viewrecord(" + o.EmployeeID + "," + year + "," + yearto + "); class=\"btn default btn-xs green\"><i class=\"fa fa-edit\"></i> View </a>"]).draw();
                });
            }
            $('#divdetails').show();
            $('#dvLoading').hide();
        }
    });
};

function viewrecord(empid, year, yearto) {
    bindempappdet(empid, year, yearto)
    $('#divmain').hide();
    $('#divdetails').hide();
}

var glbid = "";
function bindempappdet(empid, year, yearto) {
    $('#dvLoading').show();
    glbid = empid
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': empid, 'fromyear': year, 'toyear': yearto }),
        url: "AppraisalHistoryServices.aspx/empappraisallisthislist",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#divreport').empty();
            $('#divreport').append('<table id="tblempdetails" style="border-radius: 8px; border: 4px black;width:100%" border="1">' +
                                            '<thead style="color: black; border-radius: 8px;">' +
                                                '<tr style="border: 3px solid black">' +
                                                   '<td style="text-align: center" colspan="15">' +
                                                        '<h4><b>Appraisal History</b></h4>' +
                                                    '</td>' +
                                                '</tr>' +
                                            '</thead>' +
                                            '<tbody>' +
                                                '<tr style="background-color: #D8D8D8; border: 3px solid black">' +
                                                    '<th style="text-align: center" colspan="1">Unit</th>' +
                                                    '<th style="text-align: center" colspan="2">Code</th>' +
                                                    '<th style="text-align: center" colspan="2">Name</th>' +
                                                    '<th style="text-align: center" colspan="2">Department</th>' +
                                                    '<th style="text-align: center" colspan="2">Designation</th>' +
                                                    '<th style="text-align: center" colspan="2">Date of Joining</th>' +
                                                    '<th style="text-align: center" colspan="2">From</th>' +
                                                    '<th style="text-align: center" colspan="2">To</th>' +
                                                '</tr>' +
                                                '<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                    '<td style="text-align: center" colspan="1">' +
                                                        '<label id="empunit">' + varList.UnitName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empcode">' + varList.EmployeeCode + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empname">' + varList.EmpName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empdept">' + varList.DepartmentName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empdesig">' + varList.DesignationName + '</label>' +
                                                   '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empjoindate">' + varList.JoiningDate + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="from">' + year + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="to">' + yearto + '</label>' +
                                                    '</td>' +
                                                '</tr>' +
                                            '</tbody>' +
                                        '</table><br/><br/>');


            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'id': empid, 'fromyear': year, 'toyear': yearto }),
                url: "AppraisalHistoryServices.aspx/empappraisallist",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varList1 = (data.d);
                    //$('#tblappraisaldetls').empty(); 
                    var earning = 0;
                    var empvalue = 0;
                    var serial_no = 0;
                    $('#divreport').append('<table id="tblappraisaldetls" style="border-radius: 8px; border: 4px black;" border="1">' +

                                            '<thead>' + '<tr style="border: 3px solid black">' +
                                                '<th style="text-align: center" colspan="15">' +
                                                    '<h4><b>Performance Parameter</b></h4>' +
                                                '</th>' +
                                            '</tr>' +
                                                '<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                  '<th style="text-align: center">&nbsp;Sl&nbsp;</th>' +
                                                    '<th style="text-align: center">&nbsp;Year&nbsp;</th>' +
                                                    '<th style="text-align: center">&nbsp;Qtr&nbsp;</th>' +
                                                    '<th style="text-align: center">Job Knowledge</th>' +
                                                    '<th style="text-align: center">Job Perf.& Decision making</th>' +
                                                    '<th style="text-align: center">Comm.</th>' +
                                                    '<th style="text-align: center">Integrity & Discipline</th>' +
                                                    '<th style="text-align: center">Learning  & Innovation</th>' +
                                                    '<th style="text-align: center">External Orientation</th>' +
                                                    '<th style="text-align: center">Behavior/ conduct with Colleagues</th>' +
                                                    '<th style="text-align: center">Team work</th>' +
                                                    '<th style="text-align: center">Customer <br/>Feedback(Internal)</th>' +
                                                    '<th style="text-align: center">Respecting <br/>company Systems</th>' +
                                                    '<th style="text-align: center">Sum Total</th>' +
                                                    '<th style="text-align: center">&nbsp;Rating&nbsp;</th>' +
                                                '</tr></thead></table>');

                    $(varList1).each(function (index, o) {
                        serial_no = serial_no + 1;
                        var rating = "";
                        if (parseFloat(o.Total) > 85) {
                            rating = "A";
                        }
                        else if (parseFloat(o.Total) < 85 && parseFloat(o.Total) >= 70) {
                            rating = "B";
                        }
                        else if (parseFloat(o.Total) >= 50 && parseFloat(o.Total) <= 69) {
                            rating = "C";
                        }
                        else if (parseFloat(o.Total) < 50) {
                            rating = "D";
                        }
                        $('#tblappraisaldetls').append('<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                    '<td style="text-align: left">&nbsp;' + serial_no + '&nbsp;</td>' +
                                                    '<td style="text-align: left">&nbsp;' + o.Year + '&nbsp;</td>' +
                                                    '<td style="text-align: center">&nbsp;' + o.Month1 + '&nbsp;</td>' +
                                                    '<td style="text-align: center">' + o.AvgP1 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP2 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP3 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP4 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP5 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP6 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP7 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP8 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP9 + '</td>' +
                                                    '<td style="text-align: center">' + o.AvgP10 + '</td>' +
                                                    '<td style="text-align: center">' + o.Total + '</td>' +
                                                    '<td style="text-align: center">' + rating  + '</td>' +
                                                '</tr>');
                    });
                    $('#divreport').append('<br/><br/><div class="form-group hidden-print" align="center">' +
                                               '<button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;' +
                                               '<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white; ">Back</button>' +
                                       '</div>');
                    $('#divreport').show();
                    $('#dvLoading').hide();
                }
            });
        }
    })
}

function hidedata() {
    $('#divmain').show();
    $('#divdetails').show();
    $('#divreport').hide();
}