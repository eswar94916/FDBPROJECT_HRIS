function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divmain').show();
    $('#divdetails,#divprint').hide();
    bindcompany();
    $('#dvLoading').hide();
}

//this method used to bind company list
function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "AppraisalServices.aspx/CompanyList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcomp').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcomp').append($option);
            });
            bindunit();
            binddepartment();
        }
    });
}

function bindunit() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcomp').val() }),
        url: "EmployeeSignUpServices.aspx/UnitList",
        dataType: "json",
        async: true,
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

function binddepartment() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcomp').val() }),
        url: "EmployeeSignUpServices.aspx/DepartmentList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddldept').empty();
            $("#ddldept").append($("<option></option>").val("0").html("All"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DepartmentID).text(o.DepartmentName);
                $('#ddldept').append($option);
            });
        }
    });
}

function bindopening() {
    var ccid = $('#ddlcomp').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcomp').val() }),
        url: "EmployessLeavemangementService.aspx/leaveopening",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#lblcl').html(varList.OpeningCL);
            $('#lblsl').html(varList.OpeningSL);
            $('#lblel').html(varList.OpeningEL);
        }
    });
}

$('#btnshow').click(function () {
    var compid = $('#ddlcomp').val();
    var unitid = $('#ddlunit').val();
    if (unitid == "0" || unitid == "") {
        alert("Please select Unit");
        return false;
    }
    var deptid = $('#ddldept').val();
    var mon = $('#datefrom').val();

    if (mon == null || mon == "") {
        alert("Please select Date From");
        return false;
    }
    var yr = $('#dateto').val();
    if (yr == null || yr == "") {
        alert("Please select Date To");
        return false;
    }

    var dfyr = mon.split('/')[2];
    var dtyr = yr.split('/')[2];
    if (dfyr == dtyr) {
    }
    else {
        alert("Please select Date Range for Same Year");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'deptid': deptid, 'yr': yr, 'compid': compid, 'mon': mon }),
        url: "EmployessLeavemangementService.aspx/empleaveledger",
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
                $(varList).each(function (index, o) {
                    var totalleave = parseInt(o.TotalEL) + parseInt(o.TotalSL) + parseInt(o.TotalCL) + parseInt(o.TotalOthers);
                    t.row.add(['<label>' + o.UnitName + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.EmpCode + '</label>', '<label>' + o.Department + '</label>', '<label>' + o.Designation + '</label>', '<label>' + o.TotalEL + '</label>', '<label>' + o.TotalSL + '</label>', '<label>' + o.TotalCL + '</label>', '<label>' + o.TotalOthers + '</label>', '<label>' + totalleave + '</label>', "<a href=javascript:viewemprec(" + o.EmpID + "); class=\"btn default btn-xs blue-steel\"><i class=\"fa fa-edit\"></i> View </a>"]).draw();
                });
            }
            $('#divmain').show();
            $('#divdetails').show();
            $('#divprint').hide();
            $('#dvLoading').hide();
        }
    });
});


function viewemprec(empid) {
    var mon = $('#datefrom').val();

    if (mon == null || mon == "") {
        alert("Please select Date From");
        return false;
    }
    var yr = $('#dateto').val();
    if (yr == null || yr == "") {
        alert("Please select Date To");
        return false;
    }

    var dfyr = mon.split('/')[2];
    var dtyr = yr.split('/')[2];
    if (dfyr == dtyr) {
    }
    else {
        alert("Please select Date Range for Same Year");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid, 'mon': $('#datefrom').val(), 'yr': $('#dateto').val(), 'compid': $('#ddlcomp').val(), 'selyr': dfyr, 'unitid': $('#ddlunit').val() }),
        url: "EmployessLeavemangementService.aspx/empdetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var empdet = (data.d);
            $('#divprint').empty();

            var remainingel = 0;
            var remainingsl = 0;
            var remainingcl = 0;
            var remainingot = 0;
            if (empdet.TotalCL == "" | empdet.TotalCL == null) {
                empdet.TotalCL = "0";
            }
            if (empdet.AvailCL == "" | empdet.AvailCL == null) {
                empdet.AvailCL = "0";
            }

            if (empdet.TotalEL == "" | empdet.TotalEL == null) {
                empdet.TotalEL = "0";
            }
            if (empdet.AvailEL == "" | empdet.AvailEL == null) {
                empdet.AvailEL = "0";
            }

            if (empdet.TotalSL == "" | empdet.TotalSL == null) {
                empdet.TotalSL = "0";
            }
            if (empdet.AvailSL == "" | empdet.AvailSL == null) {
                empdet.AvailSL = "0";
            }

            if (empdet.TotalOthers == "" | empdet.TotalOthers == null) {
                empdet.TotalOthers = "0";
            }
            if (empdet.AvailOthers == "" | empdet.AvailOthers == null) {
                empdet.AvailOthers = "0";
            }

            remainingel = parseInt(empdet.TotalEL) - parseInt(empdet.AvailEL);
            if (parseInt(remainingel) < 0) {
                remainingel = 0;
            }

            remainingsl = parseInt(empdet.TotalSL) - parseInt(empdet.AvailSL);
            if (parseInt(remainingsl) < 0) {
                remainingsl = 0;
            }

            remainingcl = parseInt(empdet.TotalCL) - parseInt(empdet.AvailCL);
            if (parseInt(remainingcl) < 0) {
                remainingcl = 0;
            }

            remainingot = parseInt(empdet.TotalOthers) - parseInt(empdet.AvailOthers);
            if (parseInt(remainingot) < 0) {
                remainingot = 0;
            }

            $('#divprint').append('<table class="col-md-12 text-center" style="border-style: solid; border-width: 3px; border-color: black" border="1">' +
                                                    '<caption style="border-style: solid; border-width: 2px; border-bottom-width: 0px; border-color: black;">' +
                                                        '<center><h4 style="font-weight:bold;color:black">Leave Ledger</h4></center>' +
                                                    '</caption>' +
                                                    '<thead>' +
                                                        '<tr>' +
                                                            '<th colspan="6">&nbsp;</th>' +
                                                        '</tr>' +
                                                        '<tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 1px">' +
                                                            '<th class="col-md-2  text-center">Unit</th> ' +
                                                            '<th class="col-md-2  text-center">DOJ</th>  ' +
                                                            '<th class="col-md-2  text-center">Code</th> ' +
                                                            '<th class="col-md-2  text-center">Name</th> ' +
                                                            '<th class="col-md-2  text-center">Deptt</th>' +
                                                            '<th class="col-md-2  text-center">Desig</th>' +
                                                        '</tr>' +
                                                    '</thead>' +
                                                    '<tbody>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2">' + empdet.UnitName + '</td>' +
                                                            '<td class="col-md-2">' + empdet.JoiningDate + '</td>' +
                                                            '<td class="col-md-2">' + empdet.EmpCode + '</td>' +
                                                            '<td class="col-md-2">' + empdet.EmpName + '</td>' +
                                                            '<td class="col-md-2">' + empdet.Department + '</td>' +
                                                            '<td class="col-md-2">' + empdet.Designation + '</td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td colspan="6">&nbsp;</td>' +
                                                        '</tr>' +
                                                        '<tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"><b>EL</b></td>' +
                                                            '<td class="col-md-2"><b>SL</b></td>' +
                                                            '<td class="col-md-2"><b>CL</b></td>' +
                                                            '<td class="col-md-2"><b>OTHERS</b></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Opening Balance</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>' +
                                                            '<td class="col-md-2">' + empdet.TotalEL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.TotalSL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.TotalCL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.TotalOthers + '</td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Year</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF">' + dfyr + '</td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                        '</tr>' +
                                                        '<tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 3px">' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Month</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF">Jan</td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td colspan="6">&nbsp;</td>' +
                                                        '</tr>' +
                                                        '<tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"><b>EL</b></td>' +
                                                            '<td class="col-md-2"><b>SL</b></td>' +
                                                            '<td class="col-md-2"><b>CL</b></td>' +
                                                            '<td class="col-md-2"><b>OTHERS</b></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Leave Availed</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>' +
                                                            '<td class="col-md-2" >' + empdet.AvailEL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.AvailSL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.AvailCL + '</td>' +
                                                            '<td class="col-md-2">' + empdet.AvailOthers + '</td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2 text-left" rowspan="3" style="background-color: #C0D9AF">' + empdet.DateFrom + " <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <br/>" + empdet.DateTo + '</td>' +
                                                            '<td class="col-md-2" rowspan="3" style="font-size:14px">' + (empdet.ELDate).replace(/\,/g, ',<br/>') + '</td>' +
                                                            '<td class="col-md-2" rowspan="3" style="font-size:14px">' + (empdet.SLDate).replace(/\,/g, ',<br/>') + '</td>' +
                                                            '<td class="col-md-2" rowspan="3" style="font-size:14px">' + (empdet.CLDate).replace(/\,/g, ',<br/>') + '</td>' +
                                                            '<td class="col-md-2" rowspan="3" style="font-size:14px">' + (empdet.OtherDate).replace(/\,/g, ',<br/>') + '</td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>From</b></td>' +
                                                        '</tr>' +
                                                        '<tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 3px">' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>To</b></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td colspan="6">&nbsp;</td>' +
                                                        '</tr>' +
                                                        '<tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"><b>EL</b></td>' +
                                                            '<td class="col-md-2"><b>SL</b></td>' +
                                                            '<td class="col-md-2"><b>CL</b></td>' +
                                                            '<td class="col-md-2"><b>OTHERS</b></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Closing Balance</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>' +
                                                            '<td class="col-md-2">' + remainingel + '</td>' +
                                                            '<td class="col-md-2">' + remainingsl + '</td>' +
                                                            '<td class="col-md-2">' + remainingcl + '</td>' +
                                                            '<td class="col-md-2">' + remainingot + '</td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Year</b></td>' +
                                                            '<td class="col-md-2 text-left" style="background-color: #C0D9AF">' + dfyr + '</td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                            '<td class="col-md-2"></td>' +
                                                        '</tr>' +
                                                        '<tr>' +
                                                           '<td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Month</b></td>' +
                                                           '<td class="col-md-2 text-left" style="background-color: #C0D9AF">Dec</td>' +
                                                           '<td class="col-md-2"></td>' +
                                                           '<td class="col-md-2"></td>' +
                                                           '<td class="col-md-2"></td>' +
                                                           '<td class="col-md-2"></td>' +
                                                        '</tr>' +
                                                    '</tbody>' +
                                                '</table>');
            $('#divprint').append('<div class=" hidden-print">' +
                                         '<div align="center">' +
                                             '<button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;&nbsp;&nbsp;' +
                                             '<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white;">Back</button>' +
                                         '</div>' +
                                     '</div>');
            $('#divprint').show();
            $('#divdetails').hide();
            $('#divmain').hide();
            $('#dvLoading').hide();
        }
    });
}

function hidedata() {

    $('#divprint').empty();
    $('#divdetails').show();
    $('#divprint').hide();
    $('#divmain').show();
}