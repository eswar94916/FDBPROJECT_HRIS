function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    document.body.style.zoom = "100%"
    $('#divfilter').show();
    $('#divjoin,#divexport').hide();
    $('#divjoin').show();
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
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);
            });
            unitdetials();
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
            $("#ddlunit").append($("<option></option>").val("0").html("Select"));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunit').append($option);
            });
        }
    });
}

$('#ddlcompany').change(function () {
    unitdetials();
});

$('#btnshow').click(function () {
    $('#dvLoading').show();
    var unitid = $('#ddlunit').val();
    if (unitid == "" || unitid == "0" || unitid == null) {
        alert("Please Select Unit");
        return false;
    }
    var mon = $('#ddlmonth').val();
    var year = $('#ddlyear').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'mon': mon, 'year': year }),
        url: "EmpSalReportServices.aspx/EmpSalCrossList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#tbody').empty("");
            $('#lblunitname').html($('#ddlunit option:selected').text());
            $('#lblmonth').html($('#ddlmonth option:selected').text());
            $('#lblyear').html($('#ddlyear option:selected').text());
            var slno = 0;
            $(varList).each(function (index, o) {
                slno = slno + 1;
                $('#tbody').append('<tr style="border-top-color:black;border-style:solid;border-width:1px">' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + slno + '<br/><br/></td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.EmployeeCode + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.EmpName + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.DepartmentName + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.DesignationName + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.CTC + '</td>' +
                                                '<td style="font-size:12px"><span>' + o.Basic + '</span></td>' +
                                                '<td style="font-size:12px"><span>' + o.HRA + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.CarAllowance + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.TransportationAllowance + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.SpecialAllowance + '</span></td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.EmpPaidDay + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.WeekOffSunday + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.OfficeDuty + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.Leaves + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.Absent + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.HolidayOff + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.NoofDays + '</td>' +
                                                '<td style="font-size:12px"><span>' + o.Bonus + '</span></td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.GrossSalary + '</td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.GrossSalary + '</td>' +
                                                '<td style="font-size:12px"><span>' + o.Arrear + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.TDS + '</span></td>' +
                                                '<td style="font-size:12px"><span>' + o.AdvanceOthers + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.PF + '</span></td>' +
                                                '<td style="font-size:12px"><span></span></td>' +
                                                '<td style="font-size:12px"><span>' + o.ESI + '</span></td>' +
                                                '<td style="font-size:12px"><br/><br/><br/>' + o.NetSalary + '</td>' +
                                                '<td style="font-size:12px"></td>' +
                                            '</tr>');
            });

            $('#divfilter,#divexport').hide();
            $('#divjoin').show();
            $('#dvLoading').hide();
        }
    });
});

$('#btnPrint').click(function () {
    $('#tbldetails').removeClass("table");
    window.print();
    $('#tbldetails').addClass("table");
});

$('#btnback').click(function () {
    $('#divfilter').show();
    $('#divjoin,#divexport').hide();
});

$('#btnexport').click(function () {
    var unitid = $('#ddlunit').val();
    if (unitid == "" || unitid == "0" || unitid == null) {
        alert("Please Select Unit");
        return false;
    }
    var mon = $('#ddlmonth').val();
    var year = $('#ddlyear').val();
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid, 'mon': mon, 'year': year }),
        url: "EmpSalReportServices.aspx/EmpSalCrossList",
        dataType: "json",
        async: false,
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
                    var bonus = 0;
                    if (o.Bonus == "" || o.Bonus == "0" || o.Bonus == null) {
                        bonus = 0;
                        o.Bonus = "";
                    }
                    else {
                        bonus = o.Bonus;
                    }

                    var arrear = 0;
                    if (o.Arrear == "" || o.Arrear == "0" || o.Arrear == null) {
                        arrear = 0;
                        o.Arrear = "";
                    }
                    else {
                        arrear = o.Arrear;
                    }
                    var totalearn = parseFloat(o.GrossSalary) + parseFloat(bonus) + parseFloat(arrear);
                    var paymth = "";
                    if (o.BankName == "") {
                        paymth = "CH";
                    }
                    else {
                        paymth = "BT";
                    }
                    if (o.Bonus == "" || o.Bonus == null) {
                        o.Bonus = "";
                    }
                    else {
                        o.Bonus = parseFloat(o.Bonus).toFixed();
                    }

                    if (o.Arrear == "" || o.Arrear == null) {
                        o.Arrear = "";
                    }
                    else {
                        o.Arrear = parseFloat(o.Arrear).toFixed();
                    }

                    if (o.Basic == "" || o.Basic == null) {
                        o.Basic = "";
                    }
                    else {
                        o.Basic = parseFloat(o.Basic).toFixed();
                    }

                    if (o.HRA == "" || o.HRA == null) {
                        o.HRA = "";
                    }
                    else {
                        o.HRA = parseFloat(o.HRA).toFixed();
                    }

                    if (o.SpecialAllowance == "" || o.SpecialAllowance == null) {
                        o.SpecialAllowance = "";
                    }
                    else {
                        o.SpecialAllowance = parseFloat(o.SpecialAllowance).toFixed();
                    }

                    if (o.TransportationAllowance == "" || o.TransportationAllowance == null) {
                        o.TransportationAllowance = "";
                    }
                    else {
                        o.TransportationAllowance = parseFloat(o.TransportationAllowance).toFixed();
                    }

                    if (o.MedicalAllowance == "" || o.MedicalAllowance == null) {
                        o.MedicalAllowance = "";
                    }
                    else {
                        o.MedicalAllowance = parseFloat(o.MedicalAllowance).toFixed();
                    }

                    if (o.CarAllowance == "" || o.CarAllowance == null) {
                        o.CarAllowance = "";
                    }
                    else {
                        o.CarAllowance = parseFloat(o.CarAllowance).toFixed();
                    }

                    if (o.DriverAllowance == "" || o.DriverAllowance == null) {
                        o.DriverAllowance = "";
                    }
                    else {
                        o.DriverAllowance = parseFloat(o.DriverAllowance).toFixed();
                    }

                    if (o.GrossSalary == "" || o.GrossSalary == null) {

                        o.GrossSalary = "";
                    }
                    else {
                        o.GrossSalary = parseFloat(o.GrossSalary).toFixed();
                    }

                    if (totalearn == "" || totalearn == null) {
                        totalearn = "";
                    }
                    else {
                        totalearn = parseFloat(totalearn).toFixed();
                    }

                    if (o.PF == "" || o.PF == null) {
                        o.PF = "";
                    }
                    else {
                        o.PF = parseFloat(o.PF).toFixed();
                    }

                    if (o.Others == "" || o.Others == null) {
                        o.Others = "";
                    }
                    else {
                        o.Others = parseFloat(o.Others).toFixed();
                    }

                    if (o.ESI == "" || o.ESI == null) {
                        o.ESI = "";
                    }
                    else {
                        o.ESI = parseFloat(o.ESI).toFixed();
                    }

                    if (o.TDS == "" || o.TDS == null) {
                        o.TDS = "";
                    }
                    else {
                        o.TDS = parseFloat(o.TDS).toFixed();
                    }

                    if (o.AdvanceOthers == "" || o.AdvanceOthers == null) {
                        o.AdvanceOthers = "";
                    }
                    else {
                        o.AdvanceOthers = parseFloat(o.AdvanceOthers).toFixed();
                    }

                    if (o.PhoneBill == "" || o.PhoneBill == null) {
                        o.PhoneBill = "";
                    }
                    else {
                        o.PhoneBill = parseFloat(o.PhoneBill).toFixed();
                    }

                    if (o.TotalDeduction == "" || o.TotalDeduction == null) {
                        o.TotalDeduction = "";
                    }
                    else {
                        o.TotalDeduction = parseFloat(o.TotalDeduction).toFixed();
                    }

                    if (o.OthersDeduct == "" || o.OthersDeduct == null) {
                        o.OthersDeduct = "";
                    }
                    else {
                        o.OthersDeduct = parseFloat(o.OthersDeduct).toFixed();
                    }

                    if (o.NetSalary == "" || o.NetSalary == null) {
                        o.NetSalary = "";
                    }
                    else {
                        o.NetSalary = parseFloat(o.NetSalary).toFixed();
                    }
                    if (o.EmpPaidDay == "" || o.EmpPaidDay == null) {
                        o.EmpPaidDay = "";
                    }
                    if (o.WeekOffSunday == "" || o.WeekOffSunday == null) {
                        o.WeekOffSunday = "";
                    }
                    if (o.OfficeDuty == "" || o.OfficeDuty == null) {
                        o.OfficeDuty = "";
                    }
                    if (o.Leaves == "" || o.Leaves == null) {
                        o.Leaves = "";
                    }
                    if (o.Absent == "" || o.Absent == null) {
                        o.Absent = "";
                    }
                    if (o.HolidayOff == "" || o.HolidayOff == null) {
                        o.HolidayOff = "";
                    }
                    if (o.NoofDays == "" || o.NoofDays == null) {
                        o.NoofDays = "";
                    }
                    //t.row.add([serial_no, o.UnitName, o.Location, o.EmployeeCode, o.EmpName, o.DepartmentName, o.DesignationName, o.Bank, o.IFSCCode, o.AccountNo, o.CTC, o.Basic, o.HRA, '', o.SpecialAllowance, o.TransportationAllowance, o.CarAllowance, '', , '', o.EmpPaidDay, o.WeekOffSunday, o.OfficeDuty, o.Leaves, o.Absent, o.HolidayOff, o.NoofDays, o.Bonus, o.GrossSalary, o.GrossSalary, o.Arrear, '', o.TDS, o.AdvanceOthers, '', '', o.PF, '', o.ESI, o.NetSalary, '']).draw();
                    t.row.add(['<label>' + serial_no + '</label>', '<label>' + o.UnitName + '</label>', '<label>' + o.Location + '</label>', '<label>' + o.EmployeeCode + '</label>', '<label>' + o.EmpName + '</label>', '<label>' + o.DepartmentName + '</label>', '<label>' + o.DesignationName + '</label>', '<label>' + o.BankName + '</label>', '<label>' + o.IFSCCode + '</label>', '<label>' + o.AccountNo + '</label>', '<label>' + o.MedInsStatus + '</label>', '<label>' + o.MedInsStartDate + '</label>', '<label>' + o.MedInsEndDate + '</label>', '<label>' + o.Basic + '</label>', '<label>' + o.HRA + '</label>', '<label>' + o.SpecialAllowance + '</label>', '<label>' + o.TransportationAllowance + '</label>', '<label>' + o.MedicalAllowance + '</label>', '<label>' + o.CarAllowance + '</label>', '<label>' + o.DriverAllowance + '</label>', '<label>' + o.Others + '</label>', '<label>' + o.GrossSalary + '</label>', '<label>' + o.Bonus + '</label>', '<label>' + o.Arrear + '</label>', '<label>' + o.EmpPaidDay + '</label>', '<label>' + o.WeekOffSunday + '</label>', '<label>' + o.OfficeDuty + '</label>', '<label>' + o.Leaves + '</label>', '<label>' + o.Absent + '</label>', '<label>' + o.HolidayOff + '</label>', '<label>' + o.NoofDays + '</label>', '<label>' + totalearn + '</label>', '<label>' + o.PF + '</label>', '<label>' + o.ESI + '</label>', '<label>' + o.TDS + '</label>', '<label>' + o.AdvanceOthers + '</label>', '<label>' + o.PhoneBill + '</label>', '<label>' + o.OthersDeduct + '</label>', '<label>' + o.TotalDeduction + '</label>', '<label>' + o.NetSalary + '</label>', '<label>' + paymth + '</label>', '']).draw();
                });
            }
            $('#divfilter,#divjoin').hide();
            $('#divexport').show();
            $('#dvLoading').hide();
        }
    });
});

$('#btnback1').click(function () {
    $('#divfilter').show();
    $('#divjoin,#divexport').hide();
});
