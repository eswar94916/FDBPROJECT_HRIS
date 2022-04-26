function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divtbl').hide();
    $('#divPrint,#divperinfo').hide();
    $('#divFNF').hide();
    $('#divperinfo1').hide();
    companydetials();
}

var Username = ($('#LoginName1').html()).trim();
var role = ($('#lblrole').html()).trim();

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ViewEmpDetService.aspx/CompanyList",
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
            department();
        }
    });
}

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "ViewEmpDetService.aspx/UnitList",
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

function department() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "ViewEmpDetService.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddldepart').empty();
            $("#ddldepart").append($("<option></option>").val("0").html("All.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DepartmentID).text(o.DepartmentName);
                $('#ddldepart').append($option);
            });
        }
    });
}

$('#btnshow').click(function () {
    showDetails();
});

function showDetails() {
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    var unitid = $("#ddlunit").val();
    var dept = $('#ddldepart').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unit_id': unitid, 'depid': dept }),
        url: "ViewEmpDetService.aspx/EmpDetList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#sample_1').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                $(varList).each(function (index, o) {
                    var resigntxt = "";
                    if (o.MarriageAnniversary == "01-Jan-1900" || o.MarriageAnniversary == "01-Jan-2000" || o.MarriageAnniversary == "01-January-1900" || o.MarriageAnniversary == "01/January/1900" || o.MarriageAnniversary == "01-January-2000" || o.MarriageAnniversary == "01/January/2000" || o.MarriageAnniversary == "" || o.MarriageAnniversary == null || o.MarriageAnniversary == "01/01/00 12:00:00 AM") {
                        o.MarriageAnniversary = "";
                    }
                    if (o.MarriageAnniversary == "01-Jan-1900" || o.MarriageAnniversary == "01-Jan-2000" || o.DOB == "01-January-1900" || o.DOB == "01/January/1900" || o.DOB == "01-January-2000" || o.DOB == "01/January/2000" || o.DOB == "" || o.DOB == null || o.DOB == "01/01/00 12:00:00 AM") {
                        o.DOB = "";
                    }
                    if (o.FNFDate == "" || o.FNFDate == null || o.FNFDate == "01-Jan-1900" || o.FNFDate == "01-Jan-2000" || o.FNFDate == "01-Jan-00" || o.FNFDate == "1900-01-01 12:00:00 AM" || o.FNFDate == "2000-01-01 12:00:00 AM" || o.FNFDate == "01/01/00 12:00:00 AM" || o.FNFDate == "1/1/1900 12:00:00 AM") {
                        resigntxt = "";
                    }
                    else {
                        resigntxt = "<center><a href=javascript:PrintRecord(" + o.EmployeeID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Print </a></center>";
                    }
                    t.row.add([o.UnitID, o.EmployeeCode, o.EmployeeName, o.DepartmentID, o.DesignationID, o.LocationID, o.RoleName, o.DOB, o.ContactNumber, o.Email, o.ReportingOfficerName, o.MaritalStatus, o.MarriageAnniversary, o.EducationHighest, o.Experiance, o.FatherName, o.AadhaarCard, o.PANCard, o.PermanenetAddress, o.CorrespondAddress, o.Domicile, o.BloodGroup, o.BankName, o.AccountNo, o.UAN, o.ESINo, o.FistRefName, o.FistRefContact, o.SecRefName, o.SecRefContact, "<center><a href=javascript:ViewInvoice(" + o.EmployeeID + "); class=\"btn default btn-xs green\"><i class=\"fa fa-edit\"></i> Print </a></center>", "<center><a href=javascript:ViewRecord(" + o.EmployeeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Print </a></center>", resigntxt, "<center><a href=javascript:DeleteRecord(" + o.EmployeeID + "); class=\"btn default btn-xs blue\"><i class=\"fa fa-edit\"></i> Delete </a></center>"]).draw();
                });
            }
            $('#sample_1').show();
            $('#divtbl').show();
        }
    });
};


function ViewRecord(EmpID) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': EmpID }),
        url: "ViewEmpDetService.aspx/AppEmpDetList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#divPrint').empty();
            var sal = varList.EmpCTC * 12;
            $('#divPrint').append('<div style="margin-top:160px;"></div><div style="color:black;font-size:15px;font-family:arial"><h3 align="center"><b><u>Appointment Letter</u></b></h3><br/>' +
                                '<h4 align="right" style="margin-right: 20px;">Date:&nbsp;' + varList.CurDate + '</h4><br/>' +
                                '<h4 align="left" style="margin-left: 20px;"><b>' + varList.EmployeeName + '</b> </h4>' +
                                '<h4 align="left" style="margin-left: 20px;">' + varList.Address + '</h4>' +
                                '<h4 align="left" style="margin-left: 20px;">' + varList.LocationID + '</h4><br/>' +

                                '<h4 align="left" style="margin-left: 20px;">Dear <b>' + varList.EmployeeName + ',</b></h4>' +

                                '<p style="margin-left: 20px;" align="justify">With reference to your application and subsequent interview with us, we are pleased to offer you the position of <b>' + varList.DesignationID + '</b> in our organization.Your CTC will be  <b>INR&nbsp;' + sal + '/p.a</b>  your location will be <b>' + varList.LocationID + '</b> effective <b>' + varList.JoiningDate + '</b> on the following terms and conditions:</p>' +

                                '<p style="margin-left: 20px;" align="justify"><b>1.	Placement & Compensation:</b> You will be placed in the appropriate band / responsibility level of the Company, and will be entitled to compensation. Compensation will be governed by the rules of the Company on the subject, as applicable and/or amended hereafter.</p>' +
                                            '<p style="margin-left: 20px;" align="justify"><b>2.	Probation:</b>That you will be on probation for a period of <b>six months</b>.  The period of probation can be extended at the discretion of the Management and you will continue to be on probation till an order of confirmation has been issued in writing.</p>' +
                                                '<p style="margin-left: 20px;" align="justify"><b>3.	Employment Terms & Conditions :</b></p>' +

                                                '<ul>' +
                                                '<li>You will have to submit the relieving letter from your previous employer within a period of 30 days of your joining, failing which your confirmation will be put on hold, and you will continue to remain on probation till submission of relieving letter.</li><br/>' +
                                                '<li>In case the employee wants to leave company, then he will have to serve One month prior notice or one month salary payment in lieu thereof. In case of probation period above notice period will be of 15 days. This shall be applicable on both sides (Employee & Employer).This condition will not be applicable if employment is terminated on ground of disciplinary action.</li><br/>' +
                                                '<li>You must cover yourself and your family under medical insurance & submit the proof of the same within 30 days of joining, in case you fail to abide, company will take medical insurance for you & your family and insurance premium amount will get deducted against your salary.</li><br/>' +
                                                '<li>In case you leave the company within a year, then company will adjust the expenses (Course/Certification Fee) incurred on your training from your full and final settlement.</li><br/>' +
                                                '<li>Employee has to abide by the training recommended by the company which shall be mandatory and binding for the employee.</li><br/>' +
                                                '<li>Your leave will be governed by “Company’s Leave Policy”.</li><br/>' +
                                                '<li><b>Your next increment/promotion will be due only after completion of One year.</b></li><br/>' +
                                                '<li>Company reserves the right to transfer you in any of the Units/Work Location under the organization.</li><br/>' +
                                                '<li>You will have to abide by and respect “<b>Employee Code of Conduct</b>”, given in attached annexure –I.</li><br/>' +
                                            '</ul>' +

                                            '<h5 align="left" style="margin-left: 20px;" align="justify"><b>HR Deptt.</b></h5>' +
                                            '<h5 align="right" style="margin-right:20px;" align="justify"><b>(Signature of Employee)</b></h5>' +

                                            '<p style="margin-left: 20px;">I ………………..…………………………..……… have read & understood the terms & conditions of my appointment mentioned above and confirm that I shall fully respect and abide by them.</p>' +

                                            '<h5 align="right" style="margin-right: 20px;" align="justify"><b>Employee Signature</b></h5>' +
                                            '<h5 align="right" style="margin-right: 20px;" align="justify;"><b>Date………………</b></h5>' +
                                             '</div><br/>' +
                                             '<div style="color:black;font-size:15px;font-family:arial;page-break-before:always;">' +
                                            '<h4 align="center"><b><u>Annexure-I</u></b></h4>' +
                                            '<h3 align="center"><b><u>(Employee Code of Conduct)</u></b></h3><br/>' +
                                            '<ul><li>Employees have to abide by the norms laid down in the HR Policy manual.</li><br/>' +
                                            '<li>Employee will not indulge in any activity which adversely affects organizational interests.</li><br/>' +
                                            '<li>Will strictly follow & abide by Company safety norms. ( as Per KORE / HCCB requirement).</li><br/>' +
                                            '<li>Employee will not indulge directly or indirectly in any act of misbehave, abuse, intended physical assault, threatening, harassment or coercion inside the company premises with any other employee (Including Contractual/Casual), the same  will be treated as serious indiscipline resulting  punitive action.</li><br/>' +
                                            '<li><b>Respect and abide by company office timings. ( Whether in office or in field job)</b></li><br/>' +
                                            '<li>Any employee if going out of office/company premises for any official/personal work during office hours, then employee <u>must inform & seek permission</u> from his reporting officer. Employee will have to summit Gate pass duly authorized by his HOD, and only after that will leave the plant office/company premises.</li><br/>' +
                                            '<li>Employee will not submit any false, forged or misleading Bills (Which are actually not made) for reimbursement / claim, if found, <b>will be treated as breach of Integrity</b> & company will take <b>strict disciplinary</b> action without any notice /Explanation.</li><br/>' +
                                            '<li>Company expect employee to be a law abiding person and must respect law of the land.</li><br/>' +
                                            '<li>Employee will not indulge in any act while on duty / even when not on duty / in Personal Life which is <b>against the law of land</b>. If reported or found breaking the law of land, company can decide to part away with that employee.</li><br/>' +
                                            '<li>Employee will not show disobedience & insubordination to his seniors.Employee will not use Liquor/Bidi /Cigarette/Pan Masala/Gutka or chewing items inside the office / plant or in restricted area but can use it if needed in separate zone created for this.</li><br/>' +
                                            '<li>Employee will not enter in the company / office premise under influence of Drugs/ Liquor, if found consuming /under influence or in possession, strict disciplinary action will be taken.</li><br/>' +
                                            '<li>Employee will not carry any weapons / armory of any kind while on duty.</li><br/>' +
                                            '<li>Employee Will not use company property or assets for personal use / Gains unless until approval to use has been consented by director & information given to HR.</li><br/>' +
                                            '<li>No Deliberate damage should be caused to company property.</li><br/>' +
                                            '<li>Employee will not indulge in act of violation, intimidation and coercion.</li><br/>' +
                                            '<li>Employee will not do any act which can disturb cordial relationship among employees.</li><br/>' +
                                            '<li>Employee will not indulge in any act of inciting other employee or co workman which result in indiscipline, inefficient working or against organizational interests.</li><br/>' +
                                            '<li>If an employee fails to report to work for 03 (three) consecutive days without informing your direct reporting officer and functional head of the absence, <b>it will be assumed that the employee has voluntarily resigned</b>.( However an opportunity can be given at discretion of management)</li><br/>' +
                                            '</ul>' +
                                            '<h5 align="left" style="margin-left: 20px;" align="justify"><b>HR Deptt.</b></h5>' +
                                            '<h5 align="right" style="margin-right:20px;" align="justify"><b>(Signature of Employee)</b></h5></div>' +
                                            '<div class="form-group hidden-print">' +
                                                '<div class=" col-md-offset-4 ">' +
                                                    '<button type="button" class="btn blue" id="btnPrint" style="width: 120px" onclick="javascript:window.print();">Print</button>' +
                                                    '&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white; width: 120px">Back</button>' +
                                                '</div>' +
                                            '</div>' +
                                            '<br />');
            $('#divSlip,#divFNF').hide();
            $('#divheading,#divperinfo').hide();
            $('#divPrint').show();
        }
    });
}

function hidedata() {
    $('#divSlip').show();
    $('#divPrint,#divFNF,#divperinfo').hide();
    $('#divheading').show();
}

var glbId = "";
var glbchkflag = "";

function PrintRecord(EmpID) {
    glbchkflag = "";
    glbId = EmpID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': EmpID }),
        url: "ViewEmpDetService.aspx/FNFEmpDetList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var startdate = varList.FirstDate;
            var enddate = varList.LastDate;
            $('#divFNF').empty();
            $('#divFNF').append('<table border="1" id="tblmain" style="width:100%;border: solid; border-color: black;border-width:2px;">' +
                                '<tr>' +
                                    '<td align="center" colspan="4" style="border-bottom-color:transparent"><h4 align="center"><b>' + varList.CompanyName + '</b></h4></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td align="center" colspan="4"><h4 align="center"><b>Full & Final</b></h4></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td align="left"><b>Name</b></td>' +
                                    '<td align="center">' + varList.EmployeeName + '</td>' +
                                    '<td align="left"><b>Unit</b></td>' +
                                    '<td align="center">' + varList.UnitID + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td align="left"><b>Deptt</b></td>' +
                                    '<td align="center">' + varList.DepartmentID + '</td>' +
                                    '<td align="left"><b>Designation</b></td>' +
                                    '<td align="center">' + varList.DesignationID + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td align="left">&nbsp;</td>' +
           '<td align="left">&nbsp;</td>' +
            '<td align="left">&nbsp;</td>' +
            '<td align="left">&nbsp;</td>' +
        '</tr>' +
        '<tr>' +
            '<td align="left"><b>DOJ</b></td>' +
            '<td align="center">' + varList.JoiningDate + '</td>' +
            '<td align="left"><b>Date of Resignation</b></td>' +
            '<td align="center">' + varList.ResigningDate + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td align="left"><b>Last Working Day</b></td>' +
            '<td align="center">' + varList.LastWorkDate + '</td>' +
            '<td align="left"><b>Notice Period</b></td>' +
            '<td align="center"><input type="text" id="txtnoticeperd" value="' + varList.FNFNoticePeriod + '" class=" form-control" style="text-align:center;"/></td>' +
        '</tr>' +
        '<tr>' +
            '<td align="left">&nbsp;</td>' +
            '<td align="left">&nbsp;</td>' +
            '<td align="left">&nbsp;</td>' +
            '<td align="left">&nbsp;</td>' +
            '</tr>' +
        '<tr>' +
            '<td align="left"><b>Notice Period Served</b></td>' +
            '<td align="center"><b>0</b></td>' +
            '<td align="left"><b>Notice Period Pending</b></td>' +
            '<td align="left"></td>' +
        '</tr>' +
        '<tr>' +
            '<td style="width: 70px" align="left"><b>Gratuity Applicable</b> </td>' +
            '<td style="width: 150px" align="center"><b>( Yes    /    No   )</b></td>' +
            '<td style="width: 100px" align="left"><b>If Yes ( Gratuity Period )</b></td>' +
            '<td style="width: 150px" align="left"></td>' +
        '</tr>' +
        '<tr>' +
            '<td colspan="4"><b>A.     MONTHLY EMOLUMENTS</b></td>' +
        '</tr>' +
        '<tr>' +
            '<td style="width: 70px" align="center"><b>HEADS</b></td>' +
            '<td style="width: 150px" align="right"><b>RATE</b></td>' +
            '<td style="width: 100px" align="center" colspan="2"><b>' + varList.FinalMonth + ' SALARY<div class="input-group date-picker input-daterange" data-date-format="dd-mm-yyyy">' +
                                                    '<input type="text" class="form-control" value="' + startdate + '" name="from" id="datefrom" onchange="showalert()">' +
                                                    '<span class="input-group-addon">TO </span>' +
                                                    '<input type="text" class="form-control" value="' + enddate + '" name="to" id="dateto" >' +
                                                '</div></b></td>' +
        '</tr>');

            $('#datefrom,#dateto').datepicker({
                autoclose: true, changeMonth: true,
                changeYear: true,
                format: 'dd-M-yyyy'
            });

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'id': EmpID, 'mon': varList.FinalMonth, 'year': varList.FNFYear }),
                url: "ViewEmpDetService.aspx/empearninglist",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varList1 = (data.d);
                    //$('#tblmain').empty(); 
                    var earning = 0;
                    var empvalue = 0;
                    var empvalue1 = 0;
                    var totalpablesal = 0;
                    var value = 0;
                    var value1 = 0;
                    var flag = 0;
                    $(varList1).each(function (index, o) {

                        if (o.Earnsal1 == "" || o.Earnsal1 == null) {
                            value = 0;
                        }
                        else {
                            value = o.Earnsal1;
                        }
                        if (o.Earnsal2 == "" || o.Earnsal2 == null) {
                            value2 = 0;
                        }
                        else {
                            value2 = o.Earnsal2;
                        }

                        if (o.EmployeeValue == "" || o.EmployeeValue == null) {
                            value1 = 0;
                        }
                        else {
                            value1 = o.EmployeeValue;
                        }
                        earning = earning + parseFloat(value1);
                        empvalue = empvalue + parseFloat(value);
                        empvalue1 = empvalue1 + parseFloat(value2);
                        totalpablesal = parseFloat(empvalue) + parseFloat(empvalue1);
                        if (o.Earnsal2 == "" || o.Earnsal2 == null) {
                            $('#tblmain').append('<tr>' +
                                '<td style="width: 70px" align="left"><b>' + o.EDName + '</b></td>' +
                                '<td style="width: 150px" align="right">' + parseFloat(value1) + '</td>' +
                                '<td style="width: 100px" align="right" colspan="2">' + parseFloat(value).toFixed() + '</td>' +

                            '</tr>');
                        }
                        else {
                            flag = 1;
                            $('#tblmain').append('<tr>' +
                              '<td style="width: 70px" align="left"><b>' + o.EDName + '</b></td>' +
                              '<td style="width: 150px" align="right">' + parseFloat(value1) + '</td>' +
                              '<td style="width: 100px" align="right">' + parseFloat(value).toFixed() + '</td>' +
                                '<td style="width: 100px" align="right">' + parseFloat(value2).toFixed() + '</td>' +
                          '</tr>');
                        }
                    });

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({ 'id': EmpID, 'mon': varList.FinalMonth, 'year': varList.FNFYear }),
                        url: "ViewEmpDetService.aspx/empearndeduct",
                        dataType: "json",
                        async: true,
                        success: function (data, status) {
                            var varList2 = (data.d);
                            var grossamount = 0;
                            var arrear = 0;
                            var arrear1 = 0;
                            var totalarrear = 0;
                            if (varList2.Arrear1 == "" || varList2.Arrear1 == null) {
                                arrear = 0;
                            }
                            else {
                                arrear = varList2.Arrear1
                            }
                            if (varList2.Arrear2 == "" || varList2.Arrear2 == null) {
                                arrear1 = 0;
                            }
                            else {
                                arrear1 = varList2.Arrear2
                            }
                            totalarrear = parseFloat(arrear) + parseFloat(arrear1);
                            if (varList.FNF_Bonus == "" || varList.FNF_Bonus == null) {
                                varList.FNF_Bonus = 0;
                                grossamount = parseFloat(totalpablesal).toFixed();
                            }
                            else {
                                var amt = parseFloat(totalpablesal).toFixed();
                                var bns = parseFloat(varList.FNF_Bonus).toFixed();
                                var gamt = parseFloat(amt) + parseFloat(bns);
                                grossamount = parseFloat(gamt).toFixed();
                            }

                            var netpayamt = 0;
                            if (totalarrear == "" || totalarrear == null) {
                                netpayamt = parseFloat(grossamount).toFixed();
                            }
                            else {
                                var amt = parseFloat(grossamount).toFixed();
                                var bns = parseFloat(totalarrear).toFixed();
                                var gamt = parseFloat(amt) + parseFloat(bns);
                                netpayamt = parseFloat(gamt).toFixed();
                            }
                            var netpayat = 0;
                            if (varList.FNF_APB == "" || varList.FNF_APB == null) {
                                varList.FNF_APB = 0;
                                netpayat = parseFloat(netpayamt).toFixed();
                            }
                            else {
                                var amt = parseFloat(netpayamt).toFixed();
                                var bns = parseFloat(varList.FNF_APB).toFixed();
                                var gamt = parseFloat(amt) + parseFloat(bns);
                                netpayat = parseFloat(gamt).toFixed();
                            }
                            var netpay = 0;
                            if (varList.FNFOthers == "" || varList.FNFOthers == null) {
                                varList.FNFOthers = 0;
                                netpay = parseFloat(netpayat).toFixed();
                            }
                            else {
                                var amt = parseFloat(netpayat).toFixed();
                                var bns = parseFloat(varList.FNFOthers).toFixed();
                                var gamt = parseFloat(amt) + parseFloat(bns);
                                netpay = parseFloat(gamt).toFixed();
                            }
                            var netpay1 = 0;
                            if (varList.TAOthers == "" || varList.TAOthers == null) {
                                varList.TAOthers = 0;
                                netpay1 = parseFloat(netpay).toFixed();
                            }
                            else {
                                var amt = parseFloat(netpay).toFixed();
                                var bns = parseFloat(varList.TAOthers).toFixed();
                                var gamt = parseFloat(amt) + parseFloat(bns);
                                netpay1 = parseFloat(gamt).toFixed();
                            }
                            if (flag == 0) {
                                $('#tblmain').append('<tr>' +
                      '<td style="width: 70px" align="left"><b>Salary Amount</b></td>' +
                      '<td style="width: 150px" align="right"><b>' + parseFloat(earning).toFixed() + '</b></td>' +
                      '<td style="width: 100px" align="right" colspan="2"><b>' + parseFloat(empvalue).toFixed() + '</b></td>' +
                      //'<td style="width: 100px" align="right"><b>' + parseFloat(empvalue1).toFixed(2) + '</b></td>' +
                  '</tr>');
                            }
                            if (flag == 1) {
                                $('#tblmain').append('<tr>' +
                      '<td style="width: 70px" align="left"><b>Salary Amount</b></td>' +
                      '<td style="width: 150px" align="right"><b>' + parseFloat(earning).toFixed() + '</b></td>' +
                      '<td style="width: 100px" align="right"><b>' + parseFloat(empvalue).toFixed() + '</b></td>' +
                      '<td style="width: 100px" align="right"><b>' + parseFloat(empvalue1).toFixed() + '</b></td>' +
                  '</tr>');
                            }
                            $('#tblmain').append('<tr>' +
                               '<td style="width: 70px" align="right" colspan="2"><b>Total Payable Salary(A)&nbsp;</b></td>' +

                               '<td style="width: 100px" align="right" colspan="2"><label id="lbltotsal" style="font-weight:bold">' + parseFloat(totalpablesal).toFixed() + '</label></td>' +
                           '</tr>' +
                           '<tr>' +
                               '<td style="width: 70px" align="right" colspan="2"><b>APB(B)&nbsp;</b></td>' +

                               '<td style="width: 100px" align="right" colspan="2"><b><input type="text" id="txtfnfapb" onchange="calcamt()" value="' + varList.FNF_APB + '" class="form-control" style="text-align:right;"/></b></td>' +
                           '</tr>' +
                               '<tr>' +
                                   '<td style="width: 70px" align="right" colspan="2"><b>Bonus [Calculated from  <select class="select2me" id="ddlmonthfrom">' +
                                                       '<option value="0">Select</option>' +
                                                       '<option value="1">January</option>' +
                                                       '<option value="2">February</option>' +
                                                      ' <option value="3">March</option>' +
                                                      ' <option value="3">March</option>' +
                                                      ' <option value="4">April</option>' +
                                                       '<option value="5">May</option>' +
                                                      ' <option value="6">June</option>' +
                                                      ' <option value="7">July</option>' +
                                                       '<option value="8">August</option>' +
                                                      ' <option value="9">September</option>' +
                                                      ' <option value="10">October</option>' +
                                                      ' <option value="11">November</option>' +
                                                      ' <option value="12">December</option>' +
                                                   '</select>' +
                               'To <select class="select2me" id="ddlmonthto">' +
                                                       '<option value="0">Select</option>' +
                                                       '<option value="1">January</option>' +
                                                       '<option value="2">February</option>' +
                                                       '<option value="3">March</option>' +
                                                       '<option value="4">April</option>' +
                                                       '<option value="5">May</option>' +
                                                       '<option value="6">June</option>' +
                                                      ' <option value="7">July</option>' +
                                                      ' <option value="8">August</option>' +
                                                      ' <option value="9">September</option>' +
                                                      ' <option value="10">October</option>' +
                                                      ' <option value="11">November</option>' +
                                                      ' <option value="12">December</option>' +
                                                  ' </select>&nbsp; ] ( C )&nbsp;</b></td>' +

                               '<td style="width: 100px" align="right" colspan="2"><b><input type="text" id="txtfnfbonus" onchange="calcamt()" value="' + varList.FNF_Bonus + '" class="form-control" style="text-align:right;"/></b></td>' +
                           '</tr>' +
                           '<tr>' +
                               '<td style="width: 70px" align="right" colspan="2"><b>TA <select class="select2me" id="ddlTAmonthto">' +
                                                       '<option value="0">Select</option>' +
                                                       '<option value="1">January</option>' +
                                                       '<option value="2">February</option>' +
                                                       '<option value="3">March</option>' +
                                                       '<option value="4">April</option>' +
                                                       '<option value="5">May</option>' +
                                                       '<option value="6">June</option>' +
                                                      ' <option value="7">July</option>' +
                                                      ' <option value="8">August</option>' +
                                                      ' <option value="9">September</option>' +
                                                      ' <option value="10">October</option>' +
                                                      ' <option value="11">November</option>' +
                                                      ' <option value="12">December</option>' +
                                                  ' </select> & <select class="select2me" id="ddlTAmonthFrom">' +
                                                       '<option value="0">Select</option>' +
                                                       '<option value="1">January</option>' +
                                                       '<option value="2">February</option>' +
                                                       '<option value="3">March</option>' +
                                                       '<option value="4">April</option>' +
                                                       '<option value="5">May</option>' +
                                                       '<option value="6">June</option>' +
                                                      ' <option value="7">July</option>' +
                                                      ' <option value="8">August</option>' +
                                                      ' <option value="9">September</option>' +
                                                      ' <option value="10">October</option>' +
                                                      ' <option value="11">November</option>' +
                                                      ' <option value="12">December</option>' +
                                                  ' </select>&nbsp;</b></td>' +

                               '<td style="width: 100px" align="right" colspan="2"><b><input type="text" id="txtfnfothers" onchange="calcamt()" value="' + varList.FNFOthers + '" class="form-control" style="text-align:right;"/></b></td>' +
                           '</tr>' +
                           '<tr>' +
                           '<td style="width: 100px" align="right" colspan="2"><b>Others&nbsp;</b></td>' +
                            '<td style="width: 100px" align="right" colspan="2"><b><input type="text" id="txttaothers" onchange="calcamt()" value="' + varList.TAOthers + '" class="form-control" style="text-align:right;"/></b></td>' +
                            '</tr>' +
                          '<tr>' +
                               '<td style="width: 70px" align="right" colspan="2"><b>Payable = ( A+B+C )&nbsp;</b></td>' +

                               '<td style="width: 100px" align="right" colspan="2"><label id="lblpayable" style="font-weight:bold">' + parseFloat(netpay1).toFixed() + '</label></td>' +
                           '</tr>' +
                           '<tr>' +
                               '<td style="width: 70px" align="left" colspan="2"><label id="lblarrear" style="color:transparent;">' + totalarrear + '</label></td>' +

                               '<td style="width: 100px" align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
                           '</tr>');
                            $('#ddlmonthfrom').val(varList.FNFMonthFrom).trigger('change');
                            $('#ddlmonthto').val(varList.FNFMonthTo).trigger('change');
                            $('#ddlTAmonthto').val(varList.TAStartMonth).trigger('change');
                            $('#ddlTAmonthFrom').val(varList.TAEndMonth).trigger('change');
                            if (varList.Gratuity == "" || varList.Gratuity == null) {
                                val3 = 0;
                            }
                            else {
                                val3 = varList.Gratuity;
                            }
                            if (varList2.EmpDeductValuePF1 == "" || varList2.EmpDeductValuePF1 == null) {
                                val = 0;
                            }
                            else {
                                val = varList2.EmpDeductValuePF1;
                            }
                            if (varList2.EmpDeductValuePF2 == "" || varList2.EmpDeductValuePF2 == null) {
                                val4 = 0;
                            }
                            else {
                                val4 = varList2.EmpDeductValuePF2;
                            }
                            if (varList.FNFTDS == "" || varList.FNFTDS == null) {
                                val1 = 0;
                            }
                            else {
                                val1 = varList.FNFTDS;
                            }
                            if (varList.FNFLessDues == "" || varList.FNFLessDues == null) {
                                val2 = 0;
                            }
                            else {
                                val2 = varList.FNFLessDues;
                            }
                            var addpf = parseFloat(val) + parseFloat(val4);
                            var addgr = parseFloat(netpay1) + parseFloat(val3);
                            var payableamt = parseFloat(addgr) - parseFloat(addpf);
                            var payamount = parseFloat(payableamt) - parseFloat(val2);
                            var NetPayable = parseFloat(payamount) - parseFloat(val1);
                            var amountname = convertNumberToWords(NetPayable);
                            $('#tblmain').append('<tr>' +
                        '<td align="left" rowspan="2"><b>Statutory Deduction Emoluments</b></td>' +
                         ' <td style="width: 100px" align="left"><b>Gratuity</b></td>' +
                         '<td style="width: 100px" align="right" colspan="2"><label id="lblgratuity" style="font-weight:bold">' + val3 + '</label></td>' +

                     '</tr>' +
                     '<tr>' +
                       ' <td style="width: 100px" align="left"><b>PF</b></td>' +
                         '<td style="width: 100px" align="right" colspan="2"><label id="lblpf" style="font-weight:bold">' + parseFloat(addpf).toFixed() + '</label></td>' +
                    ' </tr>' +
                     '<tr>' +
                        ' <td style="width: 70px" align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +

                        '<td style="width: 100px" align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
                   ' </tr>' +
                   ' <tr>' +
                        '<td style="width: 70px" align="right" colspan="2"><b>Less DUES (if any)-&nbsp;</b> </td>' +

                        ' <td style="width: 100px" align="right" colspan="2"><b><input type="text" id="txtfnflessdues" onchange="calcamt()" value="' + val2 + '" class="form-control" style="text-align:right;"/></b></td>' +
                     '</tr>' +
                     '<tr>' +
                        ' <td style="width: 70px" align="right" colspan="2"><b>Payble amount&nbsp;</b></td>' +

                        '<td style="width: 100px" align="right" colspan="2"><label id="payamt" style="font-weight:bold">' + parseFloat(payamount).toFixed() + '</label></td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td style="width: 70px" align="right" colspan="2"><b>TDS ( As per Account Deptt.)&nbsp;</b></td>' +

                        '<td style="width: 100px" align="right" colspan="2"><b><input type="text" onchange="calcamt()" value="' + val1 + '" id="txtfnftds" class=" form-control" style="text-align:right;"/></b></td>' +
                    '</tr>' +
                    '<tr>' +
                       '<td style="width: 70px" align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +

                        ' <td style="width: 100px" align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
                     '</tr>' +
                     '<tr>' +
                      '   <td style="width: 70px" align="right" colspan="2"><b>Net  Payable (In Figure) INR&nbsp;</b></td>' +

                        '  <td style="width: 100px" align="right" colspan="2"><label id="lbltotal" style="font-weight:bold">' + parseFloat(NetPayable).toFixed() + '</label></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td style="width: 70px" align="right" colspan="2"><b>In Words&nbsp;</b></td>' +

                        ' <td style="width: 100px" align="right" colspan="2"><label id="amtwords" style="font-weight:bold">' + amountname + '</label>&nbsp;<b>Only</b></td>' +
                    ' </tr>' +
             '<br />');
                        }
                    });
                }
            });

            $('#divFNF').append('<table border="1" style="width:100%">' +
                                    '<tr>' +
                                        '<td> <span class="col-md-4" style="font-weight:bold">Prepared By<br />( HR )</span></td>' +
                                        '<td><span class="col-md-4" style="font-weight:bold">Checked By<br />( A/C Deptt.)</span></td>' +
                                        '<td><span class="col-md-4" style="font-weight:bold">Approved By<br />( Director)</span></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td colspan="3">' +
                                            '<span class="col-md-12" style="font-weight:bold">Encl: a) Resignation Letter</span>' +
                                        '</td>' +
                                    '</tr>' +
                                    ' <tr>' +
                                        '<td colspan="3">' +
                                            '<span class="col-md-12" style="font-weight:bold">           b) No Dues Form</span>' +
                                       ' </td>' +
                                    '</tr>' +
                               ' </table>');
            $('#divFNF').append('<br/><br/><div class="hidden-print" align="center">' +
                '<button type="button" class="btn purple" onclick="savefnf()" >Save & Regenerate F&F</button>&nbsp;&nbsp;&nbsp;&nbsp;' +
                                                                '<button type="button" class="btn blue" onclick="saveanprint()" id="btnPrint">Save & Print</button>' +
                                                                '&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white;">Back</button>' +
                                                            '</div>' +
                                                        '</div><br/><br/>');
            $('#divSlip').hide();
            $('#divheading,#divperinfo').hide();
            $('#divPrint').hide();
            $('#divFNF').show();
        }
    });
}


function showalert() {
    if (glbchkflag == "") {
        glbchkflag = "1";
    }
    else if (glbchkflag == "1") {
        alert("Please click on Save & Regenerate F&F button to save changes and regenerate F&F.");
    }
}
function calcamt() {
    var apb = 0;
    var bonus = 0;
    var others = 0;
    var lessdues = 0;
    var tds = 0;
    var grauity = 0;
    var pf = 0;
    var deductpf = 0;
    var deductdues = 0;
    var payableamt = 0;
    var addgruty = 0;
    var finalamt = 0;
    var taother = 0;
    var arear = $('#lblarrear').html();
    var totsal = $('#lbltotsal').html();
    apb = $('#txtfnfapb').val();
    bonus = $('#txtfnfbonus').val();
    others = $('#txtfnfothers').val();
    taother = $('#txttaothers').val();
    payableamt = parseFloat(arear) + parseFloat(bonus) + parseFloat(others) + parseFloat(apb) + parseFloat(totsal) + parseFloat(taother);
    $('#lblpayable').html(payableamt);

    grauity = $('#lblgratuity').html();
    pf = $('#lblpf').html();
    lessdues = $('#txtfnflessdues').val();
    addgruty = parseFloat(payableamt) + parseFloat(grauity);
    deductpf = parseFloat(addgruty) - parseFloat(pf);
    deductdues = parseFloat(deductpf) - parseFloat(lessdues);
    $('#payamt').html(deductdues);

    tds = $('#txtfnftds').val();
    finalamt = parseFloat(deductdues) - parseFloat(tds);
    $('#lbltotal').html(finalamt);
    var amountname = convertNumberToWords(finalamt);
    $('#amtwords').html(amountname);
}

function savefnf() {
    var rge = /^[0-9]+$/;
    AppObj = {};
    AppObj.FirstDate = $('#datefrom').val();
    AppObj.LastDate = $('#dateto').val();
    AppObj.FNFNoticePeriod = $('#txtnoticeperd').val();
    if ($('#txtnoticeperd').val() == null || $('#txtnoticeperd').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtnoticeperd').val())) {
            alert("Please enter valid Notice Period!!");
            $('#txtnoticeperd').focus();
            return false;
        }
    }
    AppObj.FNF_APB = $('#txtfnfapb').val();
    if ($('#txtfnfapb').val() == null || $('#txtfnfapb').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfapb').val())) {
            alert("Please enter valid APB!!");
            $('#txtfnfapb').focus();
            return false;
        }
    }
    AppObj.FNFMonthFrom = $('#ddlmonthfrom').val();

    AppObj.FNFMonthTo = $('#ddlmonthto').val();

    AppObj.FNF_Bonus = $('#txtfnfbonus').val();
    if ($('#txtfnfbonus').val() == null || $('#txtfnfbonus').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfbonus').val())) {
            alert("Please enter valid Bonus!!");
            $('#txtfnfbonus').focus();
            return false;
        }
    }
    AppObj.FNFOthers = $('#txtfnfothers').val();
    if ($('#txtfnfothers').val() == null || $('#txtfnfothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfothers').val())) {
            alert("Please enter valid Others!!");
            $('#txtfnfothers').focus();
            return false;
        }
    }
    AppObj.TAStartMonth = $('#ddlTAmonthto').val();
    AppObj.TAEndMonth = $('#ddlTAmonthFrom').val();
    AppObj.TAOthers = $('#txttaothers').val();
    if ($('#txttaothers').val() == null || $('#txttaothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txttaothers').val())) {
            alert("Please enter valid Others!!");
            $('#txttaothers').focus();
            return false;
        }
    }
    AppObj.FNFLessDues = $('#txtfnflessdues').val();
    if ($('#txtfnflessdues').val() == null || $('#txtfnflessdues').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnflessdues').val())) {
            alert("Please enter valid Less Dues!!");
            $('#txtfnflessdues').focus();
            return false;
        }
    }
    AppObj.FNFTDS = $('#txtfnftds').val();
    if ($('#txtfnftds').val() == null || $('#txtfnftds').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnftds').val())) {
            alert("Please enter valid TDS!!");
            $('#txtfnftds').focus();
            return false;
        }
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmployeeID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ViewEmpDetService.aspx/UpdateFNFDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {

            PrintRecord(glbId);
        }
    });
}

//this method is used to update fnf details
function saveanprint() {
    var rge = /^[0-9]+$/;
    AppObj = {};
    AppObj.FirstDate = $('#datefrom').val();
    AppObj.LastDate = $('#dateto').val();
    AppObj.FNFNoticePeriod = $('#txtnoticeperd').val();
    if ($('#txtnoticeperd').val() == null || $('#txtnoticeperd').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtnoticeperd').val())) {
            alert("Please enter valid Notice Period!!");
            $('#txtnoticeperd').focus();
            return false;
        }
    }
    AppObj.FNF_APB = $('#txtfnfapb').val();
    if ($('#txtfnfapb').val() == null || $('#txtfnfapb').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfapb').val())) {
            alert("Please enter valid APB!!");
            $('#txtfnfapb').focus();
            return false;
        }
    }
    AppObj.FNFMonthFrom = $('#ddlmonthfrom').val();

    AppObj.FNFMonthTo = $('#ddlmonthto').val();

    AppObj.FNF_Bonus = $('#txtfnfbonus').val();
    if ($('#txtfnfbonus').val() == null || $('#txtfnfbonus').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfbonus').val())) {
            alert("Please enter valid Bonus!!");
            $('#txtfnfbonus').focus();
            return false;
        }
    }
    AppObj.FNFOthers = $('#txtfnfothers').val();
    if ($('#txtfnfothers').val() == null || $('#txtfnfothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfothers').val())) {
            alert("Please enter valid Others!!");
            $('#txtfnfothers').focus();
            return false;
        }
    }
    AppObj.TAStartMonth = $('#ddlTAmonthto').val();
    AppObj.TAEndMonth = $('#ddlTAmonthFrom').val();
    AppObj.TAOthers = $('#txttaothers').val();
    if ($('#txttaothers').val() == null || $('#txttaothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txttaothers').val())) {
            alert("Please enter valid Others!!");
            $('#txttaothers').focus();
            return false;
        }
    }
    AppObj.FNFLessDues = $('#txtfnflessdues').val();
    if ($('#txtfnflessdues').val() == null || $('#txtfnflessdues').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnflessdues').val())) {
            alert("Please enter valid Less Dues!!");
            $('#txtfnflessdues').focus();
            return false;
        }
    }
    AppObj.FNFTDS = $('#txtfnftds').val();
    if ($('#txtfnftds').val() == null || $('#txtfnftds').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnftds').val())) {
            alert("Please enter valid TDS!!");
            $('#txtfnftds').focus();
            return false;
        }
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmployeeID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ViewEmpDetService.aspx/UpdateFNFDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            window.print();
        }
    });
}
$('#datefrom').change(function () {

    var rge = /^[0-9]+$/;
    AppObj = {};
    AppObj.FirstDate = $('#datefrom').val();
    AppObj.LastDate = $('#dateto').val();
    AppObj.FNFNoticePeriod = $('#txtnoticeperd').val();
    if ($('#txtnoticeperd').val() == null || $('#txtnoticeperd').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtnoticeperd').val())) {
            alert("Please enter valid Notice Period!!");
            $('#txtnoticeperd').focus();
            return false;
        }
    }
    AppObj.FNF_APB = $('#txtfnfapb').val();
    if ($('#txtfnfapb').val() == null || $('#txtfnfapb').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfapb').val())) {
            alert("Please enter valid APB!!");
            $('#txtfnfapb').focus();
            return false;
        }
    }
    AppObj.FNFMonthFrom = $('#ddlmonthfrom').val();

    AppObj.FNFMonthTo = $('#ddlmonthto').val();

    AppObj.FNF_Bonus = $('#txtfnfbonus').val();
    if ($('#txtfnfbonus').val() == null || $('#txtfnfbonus').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfbonus').val())) {
            alert("Please enter valid Bonus!!");
            $('#txtfnfbonus').focus();
            return false;
        }
    }
    AppObj.FNFOthers = $('#txtfnfothers').val();
    if ($('#txtfnfothers').val() == null || $('#txtfnfothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnfothers').val())) {
            alert("Please enter valid Others!!");
            $('#txtfnfothers').focus();
            return false;
        }
    }
    AppObj.TAStartMonth = $('#ddlTAmonthto').val();
    AppObj.TAEndMonth = $('#ddlTAmonthFrom').val();
    AppObj.TAOthers = $('#txttaothers').val();
    if ($('#txttaothers').val() == null || $('#txttaothers').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txttaothers').val())) {
            alert("Please enter valid Others!!");
            $('#txttaothers').focus();
            return false;
        }
    }
    AppObj.FNFLessDues = $('#txtfnflessdues').val();
    if ($('#txtfnflessdues').val() == null || $('#txtfnflessdues').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnflessdues').val())) {
            alert("Please enter valid Less Dues!!");
            $('#txtfnflessdues').focus();
            return false;
        }
    }
    AppObj.FNFTDS = $('#txtfnftds').val();
    if ($('#txtfnftds').val() == null || $('#txtfnftds').val() == "") {

    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtfnftds').val())) {
            alert("Please enter valid TDS!!");
            $('#txtfnftds').focus();
            return false;
        }
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmployeeID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ViewEmpDetService.aspx/UpdateFNFDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            PrintRecord(glbId);
        }
    });
});



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

function hidedatainfo() {
    $('#divSlip').show();
    $('#divPrint,#divFNF,#divperinfo').hide();
    $('#divheading').show();
    $('#divperinfo1').hide();
}

function ViewInvoice(empid) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': empid }),
        url: "ViewEmpDetService.aspx/gerempdetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#lblname').html(varList.EmployeeName);
            $('#lblgender').html(varList.Gender);
            if (varList.DOB == "01-Jan-1900" || varList.DOB == "01/Jan/1900" || varList.DOB == "01-Jan-2000" || varList.DOB == "01/Jan/2000" || varList.DOB == "01-Jan-1900" || varList.DOB == "01/Jan/1900" || varList.DOB == "01-Jan-2000" || varList.DOB == "01/Jan/2000" || varList.DOB == "" || varList.DOB == null) {
                varList.DOB = "";
            }
            $('#lbldob').html(varList.DOB);
            if (varList.MaritalStatus == "Married") {
                varList.MaritalStatus = "Y";
            }
            else if (varList.MaritalStatus == "UnMarried") {
                varList.MaritalStatus = "N";
            }
            else {
                varList.MaritalStatus = "";
            }
            $('#lblmaritalsttaus').html(varList.MaritalStatus);
            if (varList.MarriageAnniversary == "01-Jan-1900" || varList.MarriageAnniversary == "01/Jan/1900" || varList.MarriageAnniversary == "01-Jan-2000" || varList.MarriageAnniversary == "01/Jan/2000" || varList.MarriageAnniversary == "01-Jan-1900" || varList.MarriageAnniversary == "01/Jan/1900" || varList.MarriageAnniversary == "01-Jan-2000" || varList.MarriageAnniversary == "01/Jan/2000" || varList.MarriageAnniversary == "" || varList.MarriageAnniversary == null) {
                varList.MarriageAnniversary = "";
            }
            $('#lblmarriage').html(varList.MarriageAnniversary);
            $('#lblmob').html(varList.ContactNumber);
            $('#lblfathname').html(varList.FatherName);
            $('#lblaadhar').html(varList.AadhaarCard);
            $('#lblpan').html(varList.PANCard);
            $('#lblperadd').html(varList.PermanenetAddress);
            $('#lblcoradd').html(varList.CorrespondAddress);
            $('#lbldomicile').html(varList.Domicile);
            $('#lblbloodgroup').html(varList.BloodGroup);
            $('#lblcontactno').html(varList.ContactNoEmg);
            $('#lblcontactperson').html(varList.ContactPersonEmg);
            $('#lblrefname1').html(varList.RefName1);
            $('#lblrefcon1').html(varList.RefContact1);
            $('#lblrefname2').html(varList.RefName2);
            $('#lblrefcon2').html(varList.RefContact2);

            //new added
            $('#lbldoj').html(varList.JoiningDate);
            $('#lbluan').html(varList.UAN);
            $('#lblesino').html(varList.ESINo);
            $('#lblbank').html(varList.BankName);
            $('#lblacc').html(varList.AccountNo);
            $('#lbifsc').html(varList.IFSCCode);

            if (varList.LTA == "" || varList.LTA == null) {
                varList.LTA = "0";
            }
            $('#lbllta').html(parseFloat(varList.LTA).toFixed());

            if (varList.APB == "" || varList.APB == null) {
                varList.APB = "0";
            }
            $('#lblapb').html(parseFloat(varList.APB).toFixed());

            if (varList.Gratuity == "" || varList.Gratuity == null) {
                varList.Gratuity = "0";
            }
            $('#lblgratuity').html(parseFloat(varList.Gratuity).toFixed());
            if (varList.Bonus == "" || varList.Bonus == null) {
                varList.Bonus = "0";
            }
            $('#lblbonus').html(parseFloat(varList.Bonus).toFixed());
            $('#lbloperator').html(varList.Operator);
            $('#lblpolicyno').html(varList.PolicyNo);
            if (varList.StartDate == "01-Jan-1900" || varList.StartDate == "01/Jan/1900" || varList.StartDate == "01-Jan-2000" || varList.StartDate == "01/Jan/2000" || varList.StartDate == "01-Jan-1900" || varList.StartDate == "01/Jan/1900" || varList.StartDate == "01-Jan-2000" || varList.StartDate == "01/Jan/2000" || varList.StartDate == "" || varList.StartDate == null) {
                varList.StartDate = "";
            }
            $('#lblstdate').html(varList.StartDate);

            if (varList.ValidTill == "01-Jan-1900" || varList.ValidTill == "01/Jan/1900" || varList.ValidTill == "01-Jan-2000" || varList.ValidTill == "01/Jan/2000" || varList.ValidTill == "01-Jan-1900" || varList.ValidTill == "01/Jan/1900" || varList.ValidTill == "01-Jan-2000" || varList.ValidTill == "01/Jan/2000" || varList.ValidTill == "" || varList.ValidTill == null) {
                varList.ValidTill = "";
            }
            $('#lblenddate').html(varList.ValidTill);
            $('#lblmode').html(varList.Mode);
            $('#lblamount').html(varList.PremiumAmount);

            if (varList.CL == "" || varList.CL == null) {
                varList.CL = "0";
            }

            if (varList.SL == "" || varList.SL == null) {
                varList.SL = "0";
            }

            if (varList.EL == "" || varList.EL == null) {
                varList.EL = "0";
            }

            if (varList.Others == "" || varList.Others == null) {
                varList.Others = "0";
            }
            $('#lblcl').html(varList.CL);
            $('#lblsl').html(varList.SL);
            $('#lblel').html(varList.EL);
            $('#lblotherl').html(varList.Others);
            $('#lbltotala').html(parseInt(varList.CL) + parseInt(varList.SL) + parseInt(varList.EL) + parseInt(varList.Others));

            $('#lblelb').html(varList.BlncEl);
            $('#lblclb').html(varList.BlncCl);
            $('#lblslb').html(varList.BlncSl);
            $('#lblotherlb').html(varList.BlncOther);
            $('#lbltotalb').html(parseInt(varList.BlncEl) + parseInt(varList.BlncCl) + parseInt(varList.BlncSl) + parseInt(varList.BlncOther));

            //allowance
            $('#lblbasic').html(parseFloat(varList.Basic).toFixed());
            $('#lblhra').html(parseFloat(varList.HRA).toFixed());
            $('#lblspall').html(parseFloat(varList.SplAllow).toFixed());
            $('#lblcarall').html(parseFloat(varList.CarAllow).toFixed());
            $('#lbltransall').html(parseFloat(varList.TransAllow).toFixed());
            $('#lblmedallo').html(parseFloat(varList.MedAllow).toFixed());
            $('#lbldriall').html(parseFloat(varList.DriAllow).toFixed());
            $('#lblother').html(parseFloat(varList.OthersAllow).toFixed());
            $('#lblgross').html(parseFloat(varList.Gross).toFixed());

            if (varList.PFEmployer == "" || varList.PFEmployer == null) {
                varList.PFEmployer = "0";
            }
            $('#lblpfemplyr').html(parseFloat(varList.PFEmployer).toFixed());

            if (varList.ESIEmployer == "" || varList.ESIEmployer == null) {
                varList.ESIEmployer = "0";
            }
            $('#lblesiemplyr').html(parseFloat(varList.ESIEmployer).toFixed());

            var ctc = parseFloat(varList.Gross) + parseFloat(varList.LTA) + parseFloat(varList.Bonus) + parseFloat(varList.APB) + parseFloat(varList.PFEmployer) + parseFloat(varList.ESIEmployer) + parseFloat(varList.Gratuity);
            $('#lblctc').html(parseFloat(ctc).toFixed());


            //
            $('#lblpf').html(varList.PF);
            $('#lblesi').html(varList.ESI);
            $('#lbltds').html(varList.TDS);
            $('#lbladother').html(varList.OthersDeduct);
            //end

            if (varList.PhotoPath == "" || varList.PhotoPath == null) {
                var url = "../../Image/noimage.png";
                $('#imgpro').attr('src', url);
            }
            else {
                var url = "../../Upload_Image/" + empid + '_' + varList.PhotoPath;
                $('#imgpro').attr('src', url);
            }

            //new
            $('#lblempcode').html(varList.EmployeeCode);
            $('#lbldep').html(varList.DepartmentName);
            $('#lbldesig').html(varList.DesignationName);
            $('#lblemprole').html(varList.RoleName);
            $('#lblrelation').html(varList.Relationship);
            //

            //assest            
            $('#lblhouse').html(varList.HouseAssest);
            $('#lbllaptop').html(varList.LaptopAssest);
            $('#lblassother').html(varList.OtherAssest);
            $('#lblcar').html(varList.CarAssest);
            $('#lblcug').html(varList.CUGAssest);
            $('#lblmobass').html(varList.MobileAssest);
            //

            //increment            
            $('#lbllastgross').html(varList.LastCTC);
            $('#lblgrosscurr').html(varList.NewCTC);
            $('#lblincper').html(varList.IncPer);
            if (varList.IncrementDate == "01-Jan-1900" || varList.IncrementDate == "01/Jan/1900" || varList.IncrementDate == "01-Jan-2000" || varList.IncrementDate == "01/Jan/2000" || varList.IncrementDate == "01-Jan-1900" || varList.IncrementDate == "01/Jan/1900" || varList.IncrementDate == "01-Jan-2000" || varList.IncrementDate == "01/Jan/2000" || varList.IncrementDate == "" || varList.IncrementDate == null) {
                varList.IncrementDate = "";
            }
            $('#lblincdate').html(varList.IncrementDate);
            $('#lblincamt').html(varList.RevVal);
            if (varList.EffectiveDate == "01-Jan-1900" || varList.EffectiveDate == "01/Jan/1900" || varList.EffectiveDate == "01-Jan-2000" || varList.EffectiveDate == "01/Jan/2000" || varList.EffectiveDate == "01-Jan-1900" || varList.EffectiveDate == "01/Jan/1900" || varList.EffectiveDate == "01-Jan-2000" || varList.EffectiveDate == "01/Jan/2000" || varList.EffectiveDate == "" || varList.EffectiveDate == null) {
                varList.EffectiveDate = "";
            }
            $('#lbleffdate').html(varList.EffectiveDate);
            //

            $('#divheading,#divSlip,#divFNF,#divPrint').hide();
            $('#divperinfo').show();
            $('#divperinfo1').show();
        }
    });
}
function DeleteRecord(HosID) {
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
                data: JSON.stringify({ 'id': HosID, 'usrname': username }),
                url: "ViewEmpDetService.aspx/delempdet",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    showDetails();
                }
            });
        }
        else {
            return false;
        }
    }
}