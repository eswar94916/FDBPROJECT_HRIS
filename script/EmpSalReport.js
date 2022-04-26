var glbempids = "";

function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divfilter').show();
    $('#divdetails').hide();
    $('#divPrint').hide();
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
        url: "EmpTrainingReportServices.aspx/CompanyList",
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
            emplistforcomp();
        }
    });
}

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmpTrainingReportServices.aspx/UnitList",
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
        url: "EmpTrainingReportServices.aspx/DepartmentList",
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
    emplistforcomp();
});

$('#ddlunit').change(function () {
    emplistforunit();
});

$('#ddlDepartment').change(function () {
    emplistfordepartment();
});

function emplistforcomp() {
    var Comp_id = $("#ddlcompany").val();
    var filtertype = "3";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': Comp_id, 'filtertype': filtertype }),
        url: "EmpTrainingReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}

function emplistforunit() {
    var unitid = $("#ddlunit").val();
    var filtertype = "1";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': unitid, 'filtertype': filtertype }),
        url: "EmpTrainingReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}

function emplistfordepartment() {
    var deptid = $("#ddlDepartment").val();
    var filtertype = "2";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': deptid, 'filtertype': filtertype }),
        url: "EmpTrainingReportServices.aspx/EmpList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlemp').empty();
            $("#ddlemp").append($("<option></option>").val("0").html("All"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text('Name: ' + o.EmpName + ' and Emp Code: ' + o.EmployeeCode);
                $('#ddlemp').append($option);
            });
        }
    });
}


$('#btnshow').click(function () {
    showDetails();
});

function showDetails() {
    var AppObj = {};
    glbempids = "";
    $('#txtsalval').val("");
    $('#ddlsaltype').val("1").trigger('change');
    $('#ddlsal').val("1").trigger('change');
    $('#divPrint').empty();
    AppObj.SalMonth = $('#ddlmonth').val();
    AppObj.SalYear = $('#ddlyear').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    AppObj.EmployeeID = $("#ddlemp").val();
    if (AppObj.SalMonth == "" || AppObj.SalMonth == "0" || AppObj.SalYear == "" || AppObj.SalYear == "0") {
        alert("Please select Month & Year");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmpSalReportServices.aspx/empsalreport",
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
                    if (glbempids == "" || glbempids == null) {
                        glbempids = o.EmployeeID;
                    }
                    else {
                        glbempids = glbempids + ',' + o.EmployeeID;
                    }
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.DepartmentName, o.EmployeeCode, o.EmpName, o.DesignationName, o.Month, o.SalYear, o.TotalEarning, o.TotalDeduction, o.TotalSalary, "<a href=javascript:SlipRecord(" + o.EmpSalID + "," + o.EmployeeID + ",'" + o.SalMonth + "','" + o.SalYear + "'); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Generate Slip </a>"]).draw();
                    t.row.add(['<label>' + serial_no + '<label>', '<label>' + o.UnitName + '<label>', '<label>' + o.EmployeeCode + '<label>', '<label>' + o.EmpName + '<label>', '<label>' + o.DepartmentName + '<label>', '<label>' + o.DesignationName + '<label>', '<label>' + o.Month + '<label>', '<label>' + o.SalYear + '<label>', '<label>' + parseFloat(o.Basic).toFixed() + '<label>', '<label>' + parseFloat(o.TotalEarning).toFixed() + '<label>', '<label>' + parseFloat(o.TotalDeduction).toFixed() + '<label>', '<label>' + parseFloat(o.PF).toFixed() + '<label>', '<label>' + parseFloat(o.ESI).toFixed() + '<label>', '<label>' + parseFloat(o.TotalSalary).toFixed() + '<label>', "<a href=javascript:SlipRecord(" + o.EmpSalID + "," + o.EmployeeID + ",'" + o.SalMonth + "','" + o.SalYear + "'); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Generate Slip </a>"]).draw();
                });
            }
            $('#sample_2').show();
            $('#divdetails').show();
            $('#divfilter').show();
            $('#dvLoading').hide();
        }
    });
};

$('#btnshow1').click(function () {
    showDetails1();
});

$('#btnreset').click(function () {
    showDetails();
});

function showDetails1() {
    var AppObj = {};
    glbempids = "";
    $('#divPrint').empty();
    AppObj.SalMonth = $('#ddlmonth').val();
    AppObj.SalYear = $('#ddlyear').val();
    AppObj.CompanyID = $('#ddlcompany').val();
    AppObj.UnitID = $("#ddlunit").val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    AppObj.EmployeeID = $("#ddlemp").val();
    if (AppObj.SalMonth == "" || AppObj.SalMonth == "0" || AppObj.SalYear == "" || AppObj.SalYear == "0") {
        alert("Please select Month & Year");
        return false;
    }
    AppObj.SalType = $('#ddlsaltype').val();
    AppObj.SalVal = $('#ddlsal').val();
    var val = $('#txtsalval').val();
    if (val == "") {
        alert("Please enter Value");
        return false;
    }
    else {
        var pattern = /^[\.\d]*(,\d+)?$/;
        if (!pattern.test($('#txtsalval').val())) {
            alert("Please enter valid Value");
            $('#txtsalval').focus();
            $('#txtsalval').val("");
            return false;
        }
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj, 'value': val }),
        url: "EmpSalReportServices.aspx/empsalfilterreport",
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
                    if (glbempids == "" || glbempids == null) {
                        glbempids = o.EmployeeID;
                    }
                    else {
                        glbempids = glbempids + ',' + o.EmployeeID;
                    }
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.DepartmentName, o.EmployeeCode, o.EmpName, o.DesignationName, o.Month, o.SalYear, o.TotalEarning, o.TotalDeduction, o.TotalSalary, "<a href=javascript:SlipRecord(" + o.EmpSalID + "," + o.EmployeeID + ",'" + o.SalMonth + "','" + o.SalYear + "'); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Generate Slip </a>"]).draw();
                    t.row.add(['<label>' + serial_no + '<label>', '<label>' + o.UnitName + '<label>', '<label>' + o.EmployeeCode + '<label>', '<label>' + o.EmpName + '<label>', '<label>' + o.DepartmentName + '<label>', '<label>' + o.DesignationName + '<label>', '<label>' + o.Month + '<label>', '<label>' + o.SalYear + '<label>', '<label>' + parseFloat(o.Basic).toFixed() + '<label>', '<label>' + parseFloat(o.TotalEarning).toFixed() + '<label>', '<label>' + parseFloat(o.TotalDeduction).toFixed() + '<label>', '<label>' + parseFloat(o.PF).toFixed() + '<label>', '<label>' + parseFloat(o.ESI).toFixed() + '<label>', '<label>' + parseFloat(o.TotalSalary).toFixed() + '<label>', "<a href=javascript:SlipRecord(" + o.EmpSalID + "," + o.EmployeeID + ",'" + o.SalMonth + "','" + o.SalYear + "'); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Generate Slip </a>"]).draw();
                });
            }
            $('#sample_2').show();
            $('#divdetails').show();
            $('#divfilter').show();
            $('#dvLoading').hide();
        }
    });
};
var glbId = "";
function SlipRecord(UserID, EmpID, month, year) {
    $('#dvLoading').show();
    var eranlist = "";
    var deductlist = "";
    var eranlisttbl = "";
    var deductlisttbl = "";
    glbId = UserID;
    $('#divPrint').empty();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': EmpID, 'mon': month, 'year': year, 'compid': $("#ddlcompany").val(), 'unitid': $("#ddlunit").val() }),
        url: "EmpSalReportServices.aspx/leavedet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varleave = (data.d);

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'id': EmpID, 'mon': month, 'year': year, 'unitid': $("#ddlunit").val() }),
                url: "EmpSalReportServices.aspx/printsalslip",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varList = (data.d);

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({ 'id': EmpID, 'mon': month, 'year': year }),
                        url: "EmpSalReportServices.aspx/empearninglist",
                        dataType: "json",
                        async: true,
                        success: function (data, status) {
                            var varList1 = (data.d);
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify({ 'id': EmpID, 'mon': month, 'year': year }),
                                url: "EmpSalReportServices.aspx/empdeductlist",
                                dataType: "json",
                                async: true,
                                success: function (data, status) {
                                    var varList2 = (data.d);

                                    var grosssal = 0;
                                    var empval = 0;
                                    var basicglb = "";
                                    var empvalt = 0;

                                    var grosssal1 = 0;
                                    var empval1 = 0;
                                    var earndeductlist = "";
                                    var varchktc = 0;
                                    var lplngth = 0;

                                    if (varList1.length == varList2.length) {
                                        lplngth = varList1.length;
                                    }
                                    else if (varList1.length < varList2.length) {
                                        lplngth = varList2.length;
                                    }
                                    else if (varList1.length > varList2.length) {
                                        lplngth = varList1.length;
                                    }

                                    for (var i = 0; i < lplngth; i++) {
                                        var edname = "";
                                        var empval = "";
                                        var tearn = "";

                                        varchktc = varchktc + 1;
                                        if (varchktc <= varList1.length) {
                                            edname = varList1[i].EDName;
                                            if (varList1[i].EmployeeValue == "" || varList1[i].EmployeeValue == null) {
                                                empval = "-";
                                                varList1[i].EmployeeValue = "-";
                                            }
                                            else {
                                                empval = varList1[i].EmployeeValue;
                                                empvalt = empvalt + parseFloat(varList1[i].EmployeeValue);
                                            }
                                            if (varList1[i].TotalEarning == "" || varList1[i].TotalEarning == null) {
                                                tearn = "-";
                                                varList1[i].TotalEarning = "-";
                                            }
                                            else {
                                                tearn = parseFloat(varList1[i].TotalEarning).toFixed();
                                            }
                                        }
                                        else {
                                            edname = "";
                                            empval = "";
                                            tearn = "";
                                        }

                                        var ttd = "";
                                        var dedvalname = "";
                                        if (varchktc <= varList2.length) {
                                            dedvalname = varList2[i].DeductionName;
                                            if (varList2[i].TotalDeduction == "" || varList2[i].TotalDeduction == null) {
                                                ttd = "-";
                                            }
                                            else {
                                                ttd = parseFloat(varList2[i].TotalDeduction).toFixed();
                                            }
                                        }
                                        else {
                                            ttd = "";
                                            dedvalname = "";
                                        }
                                        earndeductlist = earndeductlist + '<tr>' + '<td align="left">' + edname + '</td>' +
                                            '<td align="left">' + empval + '</td>' +
                                            '<td align="left">' + tearn + '</td>' +
                                            '<td align="left">' + dedvalname + '</td>' +
                                            '<td align="left">' + ttd + '</td>';

                                    }

                                    var salary = parseFloat(empval) - parseFloat(empval1);
                                    $('#divPrint').empty();
                                    $('#divPrint').append('<table style="width:100%;font-size:11px" border="1">' +
                                        '<tr style="border-color:transparent"><td colspan="2"></td><td colspan="1" align="left"><b>' + varList.CompanyName + '</b></td><td colspan="2" align="right"><img src="../../Image/logo.png" style="height:30px" /></td></tr>' +
                                        '<tr style="border-color:transparent"><td colspan="5" align="center" class="font-uppercase"><b>PAY SLIP FOR THE MONTH ' + varList.Month + ' ' + varList.SalYear + ' </b></td></tr>' +
                                        '<tr><td colspan="5" align="center"><b>UNIT&nbsp;-&nbsp;' + varList.UnitName + '</b></td></tr>' +
                                        '<tr>' +
                                        '<td align="left">Employee Code:</td>' +
                                        '<td align="left" colspan="2">' + varList.EmployeeCode + '</td>' +
                                        '<td align="left">Location</td>' +
                                        '<td align="left">' + varList.Location + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">Employee Name:</td>' +
                                        '<td align="left" colspan="2">' + varList.EmpName + '</td>' +
                                        '<td align="left">Bank:</td>' +
                                        '<td align="left">' + varList.BankName + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">Designation:</td>' +
                                        '<td  align="left" colspan="2">' + varList.DesignationName + '</td>' +
                                        '<td align="left">Account No:</td>' +
                                        '<td align="left">' + varList.AccountNo + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">Department:</td>' +
                                        '<td  align="left" colspan="2">' + varList.DepartmentName + '</td>' +
                                        '<td align="left">Pan No:</td>' +
                                        '<td align="left">' + varList.PANNo + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">Date Of Joining:</td>' +
                                        '<td  align="left" colspan="2">' + varList.JoiningDate + '</td>' +
                                        '<td align="left">UAN No:</td>' +
                                        '<td align="left">' + varList.UANNo + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">Balance-EL</td>' +
                                        '<td  align="left"> Balance-SL</td>' +
                                        '<td align="left">Balance-CL</td>' +
                                        '<td align="left">ESI No</td>' +
                                        '<td align="left">' + varList.ESINo + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">' + varleave.BalanceEL + '</td>' +
                                        '<td align="left">' + varleave.BalanceSL + '</td>' +
                                        '<td align="left">' + varleave.BalanceCL + '</td>' +
                                        '<td align="left">Aadhaar No</td>' +
                                        '<td align="left">' + varList.Adhar + '</td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left">PAID DAYS </td>' +
                                        '<td align="left" colspan="2">' + varList.EmpPaidDay + '</td>' +
                                        '<td align="left"></td>' +
                                        '<td align="left"></td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td style="width: 70px" align="left" colspan="5">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +


                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="center" colspan="3"><b>Earnings</b> </td>' +
                                        '<td align="center" colspan="2"><b>Deductions</b> </td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left"><b>Description</b> </td>' +
                                        '<td align="left"><b>Rate</b></td>' +
                                        '<td align="left"><b>Monthly Earned</b></td>' +
                                        '<td align="left"><b>Description</b> </td>' +
                                        '<td align="left"><b>Amount</b></td>' +
                                        '</tr>' +
                                        earndeductlist +
                                        '</tr>'+
                                        '<tr>' +
                                        '<td align="left"><b>Arrear</b> </td>' +
                                        '<td align="left"><b>' + parseFloat(varList.Arrear).toFixed() + '</b></td>' +
                                        '<td align="left"><b>' + "" + '</b></td>' +
                                        '<td align="left"><b>-- </td>' +
                                        '<td align="left"><b>' + "" + '</b></td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left"><b>Gross Salary</b> </td>' +
                                        '<td align="left"><b>' + parseFloat(empvalt).toFixed() + '</b></td>' +
                                        '<td align="left"><b>' + parseFloat(varList.TotalEarning).toFixed() + '</b></td>' +
                                        '<td align="left"><b>Total Deduction</b> </td>' +
                                        '<td align="left"><b>' + parseFloat(varList.TotalDeduction).toFixed() + '</b></td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left"><b>Net Payable</b></td>' +
                                        '<td align="left"  colspan="4"><b>' + parseFloat(varList.TotalSalary).toFixed() + '</b></td>' +
                                        '</tr>' +
                                        '<tr>' +
                                        '<td align="left"><b>Amount In Words</b></td>' +
                                        '<td align="left"  colspan="4"><b>' + convertNumberToWords(parseFloat(varList.TotalSalary).toFixed()) + '&nbsp;Only</b></td>' +
                                        '</tr>' +
                                        '<tr><td align="left" style="color:red" colspan="5">Note: This is system generated salary slip and does not need signature.</td></tr>' +
                                        '</table>');

                                    $('#divPrint').append('<div >' +
                                        '<div align="center" class="form-group hidden-print"><br/><br/>' +
                                        '<button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;&nbsp;&nbsp;' +
                                        '<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white;">Back</button>' +
                                        '</div>' +
                                        '</div>');

                                    $('#divdetails').hide();
                                    $('#divPrint').show();
                                    $('#divfilter').hide();
                                    $('#dvLoading').hide();
                                }
                            });
                        }

                    });

                }
            });
        }
    });
}
function hidedata() {
    $('#divPrint').hide();
    $('#divdetails').show();
    $('#divfilter').show();
}

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

$('#btnsprintall').click(function () {
    $('#dvLoading').show();
    $('#divPrint').empty();
    var month = $('#ddlmonth').val();
    var year = $('#ddlyear').val();

    if (glbempids == "" || glbempids == null) { }
    else {
        var emparr = glbempids.split(',');
        var tc = 0;
        for (var i = 0; i < emparr.length; i++) {
            tc = tc + 1;
            var csssty = "";
            if (parseInt(tc) % 2 == 0) {
                csssty = "page-break-after:always;";
            }
            else {
                csssty = "";
            }
            var eranlist = "";
            var deductlist = "";
            var eranlisttbl = "";
            var deductlisttbl = "";
            var empid = emparr[i];
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'id': empid, 'mon': month, 'year': year, 'compid': $("#ddlcompany").val(), 'unitid': $("#ddlunit").val() }),
                url: "EmpSalReportServices.aspx/leavedet",
                dataType: "json",
                async: false,
                success: function (data, status) {
                    var varleave = (data.d);

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({ 'id': empid, 'mon': month, 'year': year, 'unitid': $("#ddlunit").val() }),
                        url: "EmpSalReportServices.aspx/printsalslip",
                        dataType: "json",
                        async: false,
                        success: function (data, status) {
                            var varList = (data.d);

                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify({ 'id': empid, 'mon': month, 'year': year }),
                                url: "EmpSalReportServices.aspx/empearninglist",
                                dataType: "json",
                                async: false,
                                success: function (data, status) {
                                    var varList1 = (data.d);
                                    $.ajax({
                                        type: "POST",
                                        contentType: "application/json; charset=utf-8",
                                        data: JSON.stringify({ 'id': empid, 'mon': month, 'year': year }),
                                        url: "EmpSalReportServices.aspx/empdeductlist",
                                        dataType: "json",
                                        async: false,
                                        success: function (data, status) {
                                            var varList2 = (data.d);

                                            var grosssal = 0;
                                            var empval = 0;
                                            var basicglb = "";
                                            var empvalt = 0;

                                            var grosssal1 = 0;
                                            var empval1 = 0;
                                            var earndeductlist = "";
                                            var varchktc = 0;
                                            var lplngth = 0;

                                            if (varList1.length == varList2.length) {
                                                lplngth = varList1.length;
                                            }
                                            else if (varList1.length < varList2.length) {
                                                lplngth = varList2.length;
                                            }
                                            else if (varList1.length > varList2.length) {
                                                lplngth = varList1.length;
                                            }

                                            for (var i = 0; i < lplngth; i++) {
                                                var edname = "";
                                                var empval = "";
                                                var tearn = "";

                                                varchktc = varchktc + 1;
                                                if (varchktc <= varList1.length) {
                                                    edname = varList1[i].EDName;
                                                    if (varList1[i].EmployeeValue == "" || varList1[i].EmployeeValue == null) {
                                                        empval = "-";
                                                        varList1[i].EmployeeValue = "-";
                                                    }
                                                    else {
                                                        empval = varList1[i].EmployeeValue;
                                                        empvalt = empvalt + parseFloat(varList1[i].EmployeeValue);
                                                    }
                                                    if (varList1[i].TotalEarning == "" || varList1[i].TotalEarning == null) {
                                                        tearn = "-";
                                                        varList1[i].TotalEarning = "-";
                                                    }
                                                    else {
                                                        tearn = parseFloat(varList1[i].TotalEarning).toFixed();
                                                    }
                                                }
                                                else {
                                                    edname = "";
                                                    empval = "";
                                                    tearn = "";
                                                }

                                                var ttd = "";
                                                var dedvalname = "";
                                                if (varchktc <= varList2.length) {
                                                    dedvalname = varList2[i].DeductionName;
                                                    if (varList2[i].TotalDeduction == "" || varList2[i].TotalDeduction == null) {
                                                        ttd = "-";
                                                    }
                                                    else {
                                                        ttd = parseFloat(varList2[i].TotalDeduction).toFixed();
                                                    }
                                                }
                                                else {
                                                    ttd = "";
                                                    dedvalname = "";
                                                }
                                                earndeductlist = earndeductlist + '<tr>' + '<td align="left">' + edname + '</td>' +
                                                    '<td align="left">' + empval + '</td>' +
                                                    '<td align="left">' + tearn + '</td>' +
                                                    '<td align="left">' + dedvalname + '</td>' +
                                                    '<td align="left">' + ttd + '</td>';

                                            }

                                            var salary = parseFloat(empval) - parseFloat(empval1);

                                            $('#divPrint').append('<table style="width:100%;font-size:11px;' + csssty + '" border="1">' +
                                                '<tr style="border-color:transparent"><td colspan="2"></td><td colspan="1" align="left"><b>' + varList.CompanyName + '</b></td><td colspan="2" align="right"><img src="../../Image/logo.png" style="height:30px" /></td></tr>' +
                                                '<tr style="border-color:transparent"><td colspan="5" align="center" class="font-uppercase"><b>PAY SLIP FOR THE MONTH ' + varList.Month + ' ' + varList.SalYear + ' </b></td></tr>' +
                                                '<tr><td colspan="5" align="center"><b>UNIT&nbsp;-&nbsp;' + varList.UnitName + '</b></td></tr>' +
                                                '<tr>' +
                                                '<td align="left">Employee Code:</td>' +
                                                '<td align="left" colspan="2">' + varList.EmployeeCode + '</td>' +
                                                '<td align="left">Location</td>' +
                                                '<td align="left">' + varList.Location + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">Employee Name:</td>' +
                                                '<td align="left" colspan="2">' + varList.EmpName + '</td>' +
                                                '<td align="left">Bank:</td>' +
                                                '<td align="left">' + varList.BankName + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">Designation:</td>' +
                                                '<td  align="left" colspan="2">' + varList.DesignationName + '</td>' +
                                                '<td align="left">Account No:</td>' +
                                                '<td align="left">' + varList.AccountNo + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">Department:</td>' +
                                                '<td  align="left" colspan="2">' + varList.DepartmentName + '</td>' +
                                                '<td align="left">Pan No:</td>' +
                                                '<td align="left">' + varList.PANNo + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">Date Of Joining:</td>' +
                                                '<td  align="left" colspan="2">' + varList.JoiningDate + '</td>' +
                                                '<td align="left">UAN No:</td>' +
                                                '<td align="left">' + varList.UANNo + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">Balance-EL</td>' +
                                                '<td  align="left"> Balance-SL</td>' +
                                                '<td align="left">Balance-CL</td>' +
                                                '<td align="left">ESI No</td>' +
                                                '<td align="left">' + varList.ESINo + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">' + varleave.BalanceEL + '</td>' +
                                                '<td align="left">' + varleave.BalanceSL + '</td>' +
                                                '<td align="left">' + varleave.BalanceCL + '</td>' +
                                                '<td align="left">Aadhaar No</td>' +
                                                '<td align="left">' + varList.Adhar + '</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left">PAID DAYS </td>' +
                                                '<td align="left" colspan="2">' + varList.EmpPaidDay + '</td>' +
                                                '<td align="left"></td>' +
                                                '<td align="left"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td style="width: 70px" align="left" colspan="5">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +


                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="center" colspan="3"><b>Earnings</b> </td>' +
                                                '<td align="center" colspan="2"><b>Deductions</b> </td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left"><b>Description</b> </td>' +
                                                '<td align="left"><b>Rate</b></td>' +
                                                '<td align="left"><b>Monthly Earned</b></td>' +
                                                '<td align="left"><b>Description</b> </td>' +
                                                '<td align="left"><b>Amount</b></td>' +
                                                '</tr>' +
                                                earndeductlist +

                                                '<tr>' +
                                                '<td align="left"><b>Arrear</b> </td>' +
                                                '<td align="left"><b>' + varList.Arrear + '</b></td>' +
                                                '<td align="left"><b>' + "" + '</b></td>' +
                                                '<td align="left"><b>""</b> </td>' +
                                                '<td align="left"><b>' + "" + '</b></td>' +
                                                '</tr>' +

                                                '<tr>' +
                                                '<td align="left"><b>Gross Salary</b> </td>' +
                                                '<td align="left"><b>' + parseFloat(empvalt).toFixed() + '</b></td>' +
                                                '<td align="left"><b>' + parseFloat(varList.TotalEarning).toFixed() + '</b></td>' +
                                                '<td align="left"><b>Total Deduction</b> </td>' +
                                                '<td align="left"><b>' + parseFloat(varList.TotalDeduction).toFixed() + '</b></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left"><b>Net Payable</b></td>' +
                                                '<td align="left"  colspan="4"><b>' + parseFloat(varList.TotalSalary).toFixed() + '</b></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td align="left"><b>Amount In Words</b></td>' +
                                                '<td align="left"  colspan="4"><b>' + convertNumberToWords(parseFloat(varList.TotalSalary).toFixed()) + '&nbsp;Only</b></td>' +
                                                '</tr>' +
                                                '<tr><td align="left" style="color:red" colspan="5">Note: This is system generated salary slip and does not need signature.</td></tr>' +
                                                '</table><br/><br/>');
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        $('#divPrint').append('<div class="form-group hidden-print">' +
            '<div align="center">' +
            '<button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white;">Back</button>' +
            '</div>' +
            '</div>');
        $('#divdetails').hide();
        $('#divPrint').show();
        $('#divfilter').hide();
        $('#dvLoading').hide();
    }
});
