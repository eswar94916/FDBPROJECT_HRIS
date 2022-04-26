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
    var FromYear = $('#ddlyear').val();
    var ToYear = $('#ddlyear1').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    if (FromYear == "" || FromYear == "0" || ToYear == "" || ToYear == "0") {
        alert("Please select From Year & To Year");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj, 'FromYear': FromYear, 'ToYear': ToYear }),
        url: "IncomeTaxReportervices.aspx/incometaxreport",
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
                        t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmployeeName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + FromYear + '</label>', '<label>' + ToYear + '</label>', '<label>' + parseFloat(o.IncomeTaxDeduct).toFixed()+'</label>', "<center><a href=javascript:ViewIncomeTax(" + o.EmployeeID + "," + FromYear + "," + ToYear + "); class=\"btn default btn-xs green\"><i class=\"fa fa-edit\"></i> View </a></center>"]).draw();
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

function ViewIncomeTax(empid, fromyear, toyear) {
    bindempappdet(empid, fromyear, toyear)
    $('#divmain').hide();
    $('#divdetails').hide();
}
var glbid = "";
function bindempappdet(empid, fromyear, toyear) {
    $('#dvLoading').show();
    glbid = empid
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': empid }),
        url: "IncomeTaxReportervices.aspx/emplist",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#divreport').empty();
            $('#divreport').append('<table class="table text-center" id="tblempdetails" style="border-radius: 8px; border: 4px black" border="1">' +
                                            '<thead style="color: black; border-radius: 8px;">' +
                                                '<tr style="border: 3px solid black">' +
                                                    '<td style="text-align: center" colspan="15">' +
                                                        '<h4><b>Income Tax Report-MonthWise</b></h4>' +
                                                    '</td>' +
                                                '</tr>' +
                                            '</thead>' +
                                            '<tbody>' +
                                                '<tr style="background-color: #D8D8D8; border: 3px solid black">' +
                                                    '<th style="text-align: center" colspan="2">Name</th>' +
                                                    '<th style="text-align: center" colspan="2">Code</th>' +
                                                    '<th style="text-align: center" colspan="2">Department</th>' +
                                                    '<th style="text-align: center" colspan="2">Designation</th>' +
                                                    '<th style="text-align: center" colspan="2">From</th>' +
                                                    '<th style="text-align: center" colspan="2">To</th>' +
                                                '</tr>' +
                                                '<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empname">' + varList.EmployeeName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empcode">' + varList.EmployeeCode + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empdept">' + varList.DepartmentName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="empdesig">' + varList.DesignationName + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="from">' + fromyear + '</label>' +
                                                    '</td>' +
                                                    '<td style="text-align: center" colspan="2">' +
                                                        '<label id="to">' + toyear + '</label>' +
                                                    '</td>' +
                                                '</tr>' +
                                            '</tbody>' +
                                        '</table>'
                                         );
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'id': empid, 'fromyear': fromyear, 'toyear': toyear }),
                url: "IncomeTaxReportervices.aspx/monthwiseincometax",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varList1 = (data.d);
                    //$('#tblappraisaldetls').empty(); 
                    var serial_no = 0;
                    $('#divreport').append('<table class="table text-center" id="tblincometaxdetls" style="border-radius: 8px; border: 4px black" border="1">' +

                                            '<thead>' +
                                                '<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                    '<th style="text-align: center">SL</th>' +
                                                    '<th style="text-align: center">Month</th>' +
                                                    '<th style="text-align: center">TDS Deducted</th>' +
                                                    '<th style="text-align: center">Cumulative</th>' +
                                                '</tr></thead></table>');
                    $(varList1).each(function (index, o) {
                        serial_no = serial_no + 1;
                        $('#tblincometaxdetls').append('<tr style="border-width: 2px; border-style: solid; border-color: black">' +
                                                    '<td style="text-align: center">' + serial_no + '</td>' +
                                                    '<td style="text-align: center">' + o.FullMonth + '-' + o.TaxYear + '</td>' +
                                                    '<td style="text-align: center">' + o.TDSDeduction + '</td>' +
                                                    '<td style="text-align: center">' + o.Cumulative + '</td>' +
                                                '</tr>');
                    });
                    $('#divreport').append('<div class="form-group hidden-print" align="center">' +
                                               '<button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;&nbsp;' +
                                               '<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white;">Back</button>' +
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