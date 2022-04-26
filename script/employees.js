var glbid = "";
var stp = "";
var Username = ($('#LoginName1').html()).trim();
var role = ($('#lblrole').html()).trim();

function bodyonload() {
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    glbid = GetParameterValues('id');
    stp = GetParameterValues('step');
    if (glbid == "" || glbid == null) {
        $('#tab_1').hide();
        $('#tab_0').show();
        $('#btnbupstp1').hide();
        $('#btnsave').show();
        $('#step2').addClass('ThisLink');

        $('#step3').addClass('ThisLink');
        $('#step4').addClass('ThisLink');
        $('#step5').addClass('ThisLink');
        $('#step6').addClass('ThisLink');
        $('#step7').addClass('ThisLink');
        $('#step8').addClass('ThisLink');
        $('#step9').addClass('ThisLink');
        $('#step10').addClass('ThisLink');
        $('#step11').addClass('ThisLink');
        $('#step12').addClass('ThisLink');
        $('#tab10').addClass('active');
        $('#tab10').css("background-color", "#337AB7");
        $('#tab11').removeClass('active');
        $('#tab11').css("background-color", "white");
    }
    else {
        if (stp == 2) {
            editRecordstep2();
            $('#tab_1').show();
            $('#tab_0').hide();
            $('#step3').removeClass('ThisLink');
            $('#step4').removeClass('ThisLink');
            $('#step5').removeClass('ThisLink');
            $('#step6').removeClass('ThisLink');
            $('#step7').removeClass('ThisLink');
            $('#step8').removeClass('ThisLink');
            $('#step9').removeClass('ThisLink');
            $('#step10').removeClass('ThisLink');
            $('#step11').removeClass('ThisLink');
            $('#step12').removeClass('ThisLink');
            $('#tab10').removeClass('active');
            $('#tab10').css("background-color", "white");
            $('#tab11').addClass('active');
            $('#tab11').css("background-color", "#337AB7");
        }
        if (stp == 1) {
            editRecord();
            $('#tab_1').hide();
            $('#tab_0').show();
            $('#step2').removeClass('ThisLink');
            $('#step3').removeClass('ThisLink');
            $('#step4').removeClass('ThisLink');
            $('#step5').removeClass('ThisLink');
            $('#step6').removeClass('ThisLink');
            $('#step7').removeClass('ThisLink');
            $('#step8').removeClass('ThisLink');
            $('#step9').removeClass('ThisLink');
            $('#step10').removeClass('ThisLink');
            $('#step11').removeClass('ThisLink');
            $('#step12').removeClass('ThisLink');
            $('#tab10').addClass('active');
            $('#tab10').css("background-color", "#337AB7");
            $('#tab11').removeClass('active');
            $('#tab11').css("background-color", "white");
        }
    }
    $('#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div9,#div10,#div11').hide();
    companydetials();

    unitdetials();
    departmentdetials();
    locationlist();
    designationdetials();
    rolelist();
    reportingofficerdetials();
    gradedetails();
    educationdetails();
    bankdetails();
    operatordetails();
}
$('#tab10 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignUp.aspx?id=" + glbid.split("-")[0] + "&step=" + 1;
    window.location.href = url;
});

$('#tab11 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignUp.aspx?id=" + glbid.split("-")[0] + "&step=" + 2;
    window.location.href = url;
});

$('#tab12 a').click(function (e) {
    e.preventDefault();
    var url = "UploadImage.aspx?id=" + glbid.split("-")[0];
    window.location.href = url;
});
$('#tab13 a').click(function (e) {
    e.preventDefault();
    var url = "UploadCV.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab14 a').click(function (e) {
    e.preventDefault();
    var url = "UploadMarksheet.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab15 a').click(function (e) {
    e.preventDefault();
    var url = "ReferenceLetter.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab16 a').click(function (e) {
    e.preventDefault();
    var url = "UploadCheques.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});

$('#tab21 a').click(function (e) {
    e.preventDefault();
    var url = "UploadPanCard.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab17 a').click(function (e) {
    e.preventDefault();
    var url = "UploadIdproof.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab18 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeEarningList.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab19 a').click(function (e) {
    e.preventDefault();
    var url = "EmpDeduction.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
$('#tab20 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignupFinal.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmployeeSignUpServices.aspx/CompanyList",
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
        }
    });
}

$('#ddlcompany').change(function () {
    unitdetials();
    departmentdetials();
    designationdetials();
});

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/UnitList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlunit').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunit').append($option);
            });
        }
    });
}

$("#lblempcode").change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#lblempcode').val() }),
        url: "EmployeeSignUpServices.aspx/chkempcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "2") {
                alert('Employee Code already exist');
                $("#lblempcode").val("");
            }
        }
    });
});
function departmentdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlDepartment').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DepartmentID).text(o.DepartmentName);
                $('#ddlDepartment').append($option);
            });
        }
    });
}

function designationdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/DesignationList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddldesignation').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DesignationID).text(o.DesignationName);
                $('#ddldesignation').append($option);
            });
        }
    });
}

function rolelist() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/RoleList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlrole').empty();
            // $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.RoleID).text(o.RoleName);
                $('#ddlrole').append($option);
            });
        }
    });
}

function reportingofficerdetials() {
    var Unit_id = $("#ddlunit").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unit_id': Unit_id }),
        url: "EmployeeSignUpServices.aspx/ReportingOfficerList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlReportingOfficer').empty();
            $("#ddlReportingOfficer").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text(o.EmployeeName + ", Code: " + o.EmployeeCode);
                $('#ddlReportingOfficer').append($option);
            });
        }
    });
}

function gradedetails() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/GradeList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlgrade').empty();
            $("#ddlgrade").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.GradeID).text(o.GradeName);
                $('#ddlgrade').append($option);
            });
        }
    });
}

function educationdetails() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/EducationList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddleducation').empty();
            $("#ddleducation").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EducationID).text(o.EducationName);
                $('#ddleducation').append($option);
            });
        }
    });
}

function bankdetails() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/BankList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlBank').empty();
            $("#ddlBank").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.BankID).text(o.BankName);
                $('#ddlBank').append($option);
            });
        }
    });
}

function operatordetails() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/OperatorList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlOperator').empty();
            $("#ddlOperator").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.OperatorID).text(o.OperatorName);
                $('#ddlOperator').append($option);
            });
        }
    });
}

function locationlist() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "EmployeeSignUpServices.aspx/LocationList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#txtlocation').empty();
            $("#txtlocation").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.LocationID).text(o.Location);
                $('#txtlocation').append($option);
            });
        }
    });
}

//this method is used to load employee details
function editRecord() {
    //UserID = $('#ddlReportingOfficer').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': glbid.split("-")[0] }),
        url: "EmployeeSignUpServices.aspx/EmployeeDetails ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnbupstp1').show();
            $('#btnsave').hide();
            $("#ddlcompany").append($("<option></option>").val(varIndent.CompanyID).html(varIndent.CompanyName));
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            // $('#txtserial').val(varIndent.SerialNo);
            $('#ddlunit').val(varIndent.UnitID).trigger('change');
            $('#txtlocation').val(varIndent.LocationID).trigger('change');

            $('#txtname').val(varIndent.EmployeeName);
            $('#lblempcode').val(varIndent.EmployeeCode);
            $('#ddlGender').val(varIndent.Gender).trigger('change');
            $('#ddlgrade').val(varIndent.GradeID).trigger('change');
            $('#ddlDepartment').val(varIndent.DepartmentID).trigger('change');
            $('#ddlReportingOfficer').val(varIndent.ReportingOfficerID).trigger('change');
            $('#ddldesignation').val(varIndent.DesignationID).trigger('change');
            $('#ddlrole').val(varIndent.RoleID).trigger('change');
            $('#doj').val(varIndent.JoiningDate);

            if (varIndent.DOB == "01-January-1900" || varIndent.DOB == "01-Jan-1900" || varIndent.DOB == "01/January/1900" || varIndent.DOB == "01-January-2000" || varIndent.DOB == "01/January/2000" || varIndent.DOB == "01-Jan-1900" || varIndent.DOB == "01/Jan/1900" || varIndent.DOB == "01-Jan-2000" || varIndent.DOB == "01/Jan/2000" || varIndent.DOB == "" || varIndent.DOB == null) {
                varIndent.DOB = "";
            }
            $('#dob').val(varIndent.DOB);
            $('#ddlMarital').val(varIndent.MaritalStatus).trigger('change');
            if (varIndent.MarriageAnniversary == "01-January-1900" || varIndent.MarriageAnniversary == "01-Jan-1900" || varIndent.MarriageAnniversary == "01/January/1900" || varIndent.MarriageAnniversary == "01-January-2000" || varIndent.MarriageAnniversary == "01/January/2000" || varIndent.MarriageAnniversary == "01-Jan-1900" || varIndent.MarriageAnniversary == "01/Jan/1900" || varIndent.MarriageAnniversary == "01-Jan-2000" || varIndent.MarriageAnniversary == "01/Jan/2000" || varIndent.MarriageAnniversary == "" || varIndent.MarriageAnniversary == null) {
                varIndent.MarriageAnniversary = "";
            }
            $('#anniversry').val(varIndent.MarriageAnniversary);
            $('#txtmobile').val(varIndent.ContactNumber);
            $('#txtmail').val(varIndent.EmailID);
            $('#ddleducation').val(varIndent.EducationID).trigger('change');
            $('#txtexp').val(varIndent.Experiance);
            $('#ddlBank').val(varIndent.BankID).trigger('change');
            $('#txtAcNo').val(varIndent.AccountNo);
            $('#txtifsccode').val(varIndent.IFSCCode);
            $('#txtUNno').val(varIndent.UANNo);
            $('#txtESINo').val(varIndent.ESINo);
            $("#ddlcompany").prop("disabled", true);
            $('#ddlunit').prop("disabled", true);
            $('#lblempcode').prop("disabled", true);

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            var mybd = $('#dob').val();

            var mybdm = mybd.split("-")[0];
            var mybdd = mybd.split("-")[1];
            var mybdy = mybd.split("-")[2];
            var age = yyyy - mybdy;
            if (mm < mybdm) {
                age = age - 1;
            }
            else if (mm == mybdm && dd < mybdd) {
                age = age - 1
            };
            $('#lblAge').html(age);
            //  $('#txtserial').prop("disabled", true);
        }
    });
}

//this method is used to load employee details
function editRecordstep2() {
    //var UserID = $('#ddlempname').val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': glbid.split("-")[0] }),
        url: "EmployeeSignUpServices.aspx/EmployeeDetailsstep2 ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdatestep2').show();
            $('#btnsavestep2').hide();
            // $('#lblempcode').html(varIndent.EmployeeCode);
            $('#txtfname').val(varIndent.FatherName);
            $('#txtaadhaar').val(varIndent.AadhaarCard);
            $('#txtpan').val(varIndent.PANCard);
            $('#txtaddress').val(varIndent.PermanenetAddress);
            $('#txtcoraddress').val(varIndent.CorrespondAddress);
            $('#txtdomicile').val(varIndent.Domicile);
            $('#txtblodgp').val(varIndent.BloodGroup);
            $('#ddlmode').val(varIndent.Mode).trigger('change');
            if (varIndent.MedInsuValidity == "01-January-1900" || varIndent.MedInsuValidity == "01-Jan-1900" || varIndent.MedInsuValidity == "01/January/1900" || varIndent.MedInsuValidity == "01-January-2000" || varIndent.MedInsuValidity == "01/January/2000" || varIndent.MedInsuValidity == "01-Jan-1900" || varIndent.MedInsuValidity == "01/Jan/1900" || varIndent.MedInsuValidity == "01-Jan-2000" || varIndent.MedInsuValidity == "01/Jan/2000" || varIndent.MedInsuValidity == "" || varIndent.MedInsuValidity == null) {
                varIndent.MedInsuValidity = "";
            }
            $('#insvalid').val(varIndent.MedInsuValidity);
            if (varIndent.StartDate == "01-January-1900" || varIndent.StartDate == "01-Jan-1900" || varIndent.StartDate == "01/January/1900" || varIndent.StartDate == "01-January-2000" || varIndent.StartDate == "01/January/2000" || varIndent.StartDate == "01-Jan-1900" || varIndent.StartDate == "01/Jan/1900" || varIndent.StartDate == "01-Jan-2000" || varIndent.StartDate == "01/Jan/2000" || varIndent.StartDate == "" || varIndent.StartDate == null) {
                varIndent.StartDate = "";
            }
            $('#insstdate').val(varIndent.StartDate);
            $('#txtpremiumamt').val(varIndent.PremiumAmount);
            $('#ddlOperator').val(varIndent.OperatorID).trigger('change');

            $('#txtpolicy').val(varIndent.PolicyNo);

            $('#txtcontactperson').val(varIndent.ContactPersonEmg);
            $('#txtcontactno').val(varIndent.ContactPersonNo);
            $('#txtrelation').val(varIndent.RelationShip);
            $('#txthouseaset').val(varIndent.CompAssetsHouse).trigger('change');
            $('#txtcaraset').val(varIndent.CompAssetsCar).trigger('change');
            $('#txtlapaset').val(varIndent.CompAssetsLaptop).trigger('change');
            $('#txtmobaset').val(varIndent.CompAssetsMobile).trigger('change');
            $('#txtdongaset').val(varIndent.CompAssetsDongle).trigger('change');
            $('#txtcugaset').val(varIndent.CompAssetsCUG).trigger('change');
            $('#txtothers').val(varIndent.CompAssetsOthers);
            $('#txtctc').val(varIndent.EmpCTC);
            $('#txtrefname1').val(varIndent.RefName1);
            $('#txtrefnum1').val(varIndent.RefNum1);
            $('#txtrefname2').val(varIndent.RefName2);
            $('#txtrefnum2').val(varIndent.RefNum2);
        }
    });
}

//this method is used to insert employee's remaining details
jQuery('#btnUpdatestep2').click(function () {
    var age = /^[0-9]+$/;
    var AppObj = {};
    AppObj.FatherName = $('#txtfname').val();
    if ($('#txtfname').val() == null || $('#txtfname').val() == "") {
        alert("Please enter Father Name");
        return false;
    }
    AppObj.AadhaarCard = $('#txtaadhaar').val();

    AppObj.PANCard = $('#txtpan').val();

    AppObj.PermanenetAddress = $('#txtaddress').val();
    AppObj.CorrespondAddress = $('#txtcoraddress').val();
    AppObj.Domicile = $('#txtdomicile').val();
    if ($('#txtdomicile').val() == null || $('#txtdomicile').val() == "") {
        alert("Please enter Domicile");
        return false;
    }
    AppObj.BloodGroup = $('#txtblodgp').val();
    AppObj.Mode = $('#ddlmode').val();
    AppObj.PremiumAmount = $('#txtpremiumamt').val();

    AppObj.StartDate = $('#insstdate').val();
    AppObj.MedInsuValidity = $('#insvalid').val();
    AppObj.OperatorID = $('#ddlOperator').val();
    //if (AppObj.OperatorID == "0" || AppObj.OperatorID == "Select.." || AppObj.OperatorID == "" || AppObj.OperatorID == null) {
    //    alert("Please Select Operator");
    //    return false;
    //}
    AppObj.PolicyNo = $('#txtpolicy').val();
    AppObj.ContactPersonEmg = $('#txtcontactperson').val();
    AppObj.ContactPersonNo = $('#txtcontactno').val();

    AppObj.RelationShip = $('#txtrelation').val();
    AppObj.CompAssetsHouse = $('#txthouseaset').val();
    AppObj.CompAssetsCar = $('#txtcaraset').val();
    AppObj.CompAssetsLaptop = $('#txtlapaset').val();
    AppObj.CompAssetsMobile = $('#txtmobaset').val();
    AppObj.CompAssetsDongle = $('#txtdongaset').val();
    AppObj.CompAssetsCUG = $('#txtcugaset').val();
    AppObj.CompAssetsOthers = $('#txtothers').val();
    AppObj.RefName1 = $('#txtrefname1').val();
    AppObj.RefNum1 = $('#txtrefnum1').val();

    AppObj.RefName2 = $('#txtrefname2').val();
    AppObj.RefNum2 = $('#txtrefnum2').val();
    AppObj.EmpCTC = $('#txtctc').val();
    if ($('#txtctc').val() == null || $('#txtctc').val() == "") {
        alert("Please enter Employee CTC");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj, 'empid': glbid.split("-")[0] }),
        url: "EmployeeSignUpServices.aspx/UpdateEmpDet2",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                $('#tab_1').hide();
                var url = "UploadImage.aspx?id=" + glbid.split("-")[0];
                window.location.href = url;
            }
        }
    });
});

//this function is used to calculate age
$(document).ready(function () {
    $('#dob').change(function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        var mybd = $('#dob').val();

        var mybdm = mybd.split("-")[0];
        var mybdd = mybd.split("-")[1];
        var mybdy = mybd.split("-")[2];
        var age = yyyy - mybdy;
        if (mm < mybdm) {
            age = age - 1;
        }
        else if (mm == mybdm && dd < mybdd) {
            age = age - 1
        };
        if (parseInt(age) < 18) {
            alert("Employee Age should not less than 18");
            $('#lblAge').html("");
            $('#dob').val("");
        }
        else {
            $('#lblAge').html(age);
            var doj = $('#doj').val();
            var dob = $('#dob').val();
            if (doj == "" || doj == null || dob == "" || dob == null) {
                var doj1 = $('#anniversry').val();
                var dob1 = $('#dob').val();
                if (doj1 == "" || doj1 == null || dob1 == "" || dob1 == null) {
                }
                else {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({ 'joindate': doj1, 'dob': dob1 }),
                        url: "EmployeeSignUpServices.aspx/chkmrgann",
                        dataType: "json",
                        async: true,
                        success: function (data, status) {
                            var varIndentList = (data.d);
                            if (varIndentList == "1") {
                                alert("Marriage Anniversary should be greater than DOB");
                                $('#anniversry').val("");
                                return false;
                            }
                        }
                    });
                }
            }
            else {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ 'joindate': doj, 'dob': dob }),
                    url: "EmployeeSignUpServices.aspx/chkjoindate",
                    dataType: "json",
                    async: true,
                    success: function (data, status) {
                        var varIndentList = (data.d);
                        if (varIndentList == "1") {
                            alert("Joining Date should be greater than DOB");
                            $('#doj').val("");
                            return false;
                        }
                    }
                });
            }
        }
    });
});

$('#doj').change(function () {
    var doj = $('#doj').val();
    var dob = $('#dob').val();
    if (doj == "" || doj == null || dob == "" || dob == null) {
    }
    else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'joindate': doj, 'dob': dob }),
            url: "EmployeeSignUpServices.aspx/chkjoindate",
            dataType: "json",
            async: true,
            success: function (data, status) {
                var varIndentList = (data.d);
                if (varIndentList == "1") {
                    alert("Joining Date should be greater than DOB");
                    $('#doj').val("");
                    return false;
                }
            }
        });
    }
});

$('#anniversry').change(function () {
    var doj = $('#anniversry').val();
    var dob = $('#dob').val();
    if (doj == "" || doj == null || dob == "" || dob == null) {
    }
    else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'joindate': doj, 'dob': dob }),
            url: "EmployeeSignUpServices.aspx/chkmrgann",
            dataType: "json",
            async: true,
            success: function (data, status) {
                var varIndentList = (data.d);
                if (varIndentList == "1") {
                    alert("Marriage Anniversary should be greater than DOB");
                    $('#anniversry').val("");
                    return false;
                }
            }
        });
    }
});

//this method is used to insert employee details
jQuery('#btnsave').click(function () {
    var age = /^[0-9]+$/;
    AppObj = {};

    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select..") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.UnitID = $('#ddlunit').val();
    if (AppObj.UnitID == "0" || AppObj.UnitID == "Select..") {
        alert("Please Select Unit Name");
        return false;
    }
    AppObj.LocationID = $('#txtlocation').val();
    AppObj.EmployeeName = $('#txtname').val();
    if ($('#txtname').val() == null || $('#txtname').val() == "") {
        alert("Please enter Employee Name");
        return false;
    }
    AppObj.EmployeeCode = $('#lblempcode').val();
    if ($('#lblempcode').val() == null || $('#lblempcode').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppObj.Gender = $('#ddlGender').val();
    if (AppObj.Gender == "0" || AppObj.Gender == "Select..") {
        alert("Please Select Gender");
        return false;
    }
    AppObj.GradeID = $('#ddlgrade').val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    if (AppObj.DepartmentID == "0" || AppObj.DepartmentID == "Select..") {
        alert("Please Select Department Name");
        return false;
    }
    AppObj.DesignationID = $('#ddldesignation').val();
    if (AppObj.DesignationID == "0" || AppObj.DesignationID == "Select..") {
        alert("Please Select Designation Name");
        return false;
    }
    AppObj.ReportingOfficerID = $('#ddlReportingOfficer').val();
    AppObj.RoleID = $('#ddlrole').val();
    if (AppObj.RoleID == "0" || AppObj.RoleID == "Select..") {
        alert("Please Select Role Name");
        return false;
    }
    AppObj.JoiningDate = $('#doj').val();
    if ($('#doj').val() == null || $('#doj').val() == "") {
        alert("Please enter Date of Joining");
        return false;
    }
    AppObj.DOB = $('#dob').val();
    if ($('#dob').val() == null || $('#dob').val() == "") {
        alert("Please enter Date of Birth");
        return false;
    }
    AppObj.MaritalStatus = $('#ddlMarital').val();
    AppObj.MarriageAnniversary = $('#anniversry').val();
    AppObj.ContactNumber = $('#txtmobile').val();
    AppObj.EmailID = $('#txtmail').val();
    AppObj.EducationID = $('#ddleducation').val();
    AppObj.Experiance = $('#txtexp').val();
    AppObj.BankID = $('#ddlBank').val();
    AppObj.AccountNo = $('#txtAcNo').val();
    AppObj.IFSCCode = $('#txtifsccode').val();
    AppObj.UANNo = $('#txtUNno').val();
    AppObj.ESINo = $('#txtESINo').val();
    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "EmployeeSignUpServices.aspx/insertempdetstep1",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert("This Serial No. already exist!!");
            }
            else {
                glbid = varIndentList;
                var url = "EmployeeSignUp.aspx?id=" + glbid.split("-")[0] + "&step=" + 2;
                window.location.href = url;
            }
        }
    });
});


//this method is used to update employee details on back button click
jQuery('#btnbupstp1').click(function () {
    var age = /^[0-9]+$/;
    AppObj = {};

    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select..") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.UnitID = $('#ddlunit').val();
    if (AppObj.UnitID == "0" || AppObj.UnitID == "Select..") {
        alert("Please Select Unit Name");
        return false;
    }
    AppObj.LocationID = $('#txtlocation').val();
    AppObj.EmployeeName = $('#txtname').val();
    if ($('#txtname').val() == null || $('#txtname').val() == "") {
        alert("Please enter Employee Name");
        return false;
    }
    AppObj.EmployeeCode = $('#lblempcode').val();
    if ($('#lblempcode').val() == null || $('#lblempcode').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppObj.Gender = $('#ddlGender').val();
    if (AppObj.Gender == "0" || AppObj.Gender == "Select..") {
        alert("Please Select Gender");
        return false;
    }
    AppObj.GradeID = $('#ddlgrade').val();
    AppObj.DepartmentID = $('#ddlDepartment').val();
    if (AppObj.DepartmentID == "0" || AppObj.DepartmentID == "Select..") {
        alert("Please Select Department Name");
        return false;
    }
    AppObj.DesignationID = $('#ddldesignation').val();
    if (AppObj.DesignationID == "0" || AppObj.DesignationID == "Select..") {
        alert("Please Select Designation Name");
        return false;
    }
    AppObj.ReportingOfficerID = $('#ddlReportingOfficer').val();
    AppObj.RoleID = $('#ddlrole').val();
    if (AppObj.RoleID == "0" || AppObj.RoleID == "Select..") {
        alert("Please Select Role Name");
        return false;
    }
    AppObj.JoiningDate = $('#doj').val();
    if ($('#doj').val() == null || $('#doj').val() == "") {
        alert("Please enter Date of Joining");
        return false;
    }
    AppObj.DOB = $('#dob').val();
    if ($('#dob').val() == null || $('#dob').val() == "") {
        alert("Please enter Date of Birth");
        return false;
    }
    AppObj.MaritalStatus = $('#ddlMarital').val();
    AppObj.MarriageAnniversary = $('#anniversry').val();
    AppObj.ContactNumber = $('#txtmobile').val();
    AppObj.EmailID = $('#txtmail').val();
    AppObj.EducationID = $('#ddleducation').val();
    AppObj.Experiance = $('#txtexp').val();
    AppObj.BankID = $('#ddlBank').val();
    AppObj.AccountNo = $('#txtAcNo').val();
    AppObj.IFSCCode = $('#txtifsccode').val();
    AppObj.UANNo = $('#txtUNno').val();
    AppObj.ESINo = $('#txtESINo').val();
    AppObj.UserName = $('#LoginName1').html();
    var id = glbid.split("-")[0];
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj, 'empid': id }),
        url: "EmployeeSignUpServices.aspx/updateempdetailsstep1",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                $('#tab_0').hide();
                $('#tab_1').show();
                $('#tab10').removeClass('active');
                $('#tab11').addClass('active');
                var url = "EmployeeSignUp.aspx?id=" + glbid.split("-")[0] + "&step=" + 2;
                window.location.href = url;
            }
        }
    });

});

$('#btnbackone').click(function () {
    var url = "EmployeeSignUp.aspx?id=" + glbid + "&step=" + 1;
    window.location.href = url;
});

$('#txtname').change(function () {
    if ($('#txtname').val() == null || $('#txtname').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtname').val())) {
            alert("Please enter valid Name!!");
            $('#txtname').focus();
            $('#txtname').val("");
            return false;
        }
    }
});

$('#lblempcode').change(function () {
    if ($('#lblempcode').val() == null || $('#lblempcode').val() == "") {
    }
    else {
        var empc = $('#lblempcode').val();
        var pattern = /([a-zA-Z].*[0-9])/;
        if (!pattern.test(empc)) {
            alert("Please enter valid Employee Code!!");
            $('#lblempcode').focus();
            $('#lblempcode').val("");
            return false;
        }
    }
});

$('#txtmobile').change(function () {
    if ($('#txtmobile').val() == null || $('#txtmobile').val() == "") {
    }
    else {
        var pattern = /^\d{10}$/;
        if (!pattern.test($('#txtmobile').val())) {
            alert("Please enter valid Mobile Number!!");
            $('#txtmobile').focus();
            $('#txtmobile').val("");
            return false;
        }
    }
});

$('#txtmail').change(function () {
    if ($('#txtmail').val() == null || $('#txtmail').val() == "") {
    }
    else {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!pattern.test($('#txtmail').val())) {
            alert("Please enter valid Email!!");
            $('#txtmail').focus();
            $('#txtmail').val("");
            return false;
        }
    }
});

$('#txtAcNo').change(function () {
    var age = /^[0-9]+$/;
    if ($('#txtAcNo').val() == null || $('#txtAcNo').val() == "") {
    }
    else {
        if (!age.test($('#txtAcNo').val())) {
            alert("Please enter valid Account Number!!");
            $('#txtAcNo').focus();
            $('#txtAcNo').val("");
            return false;
        }
    }
});

$('#txtifsccode').change(function () {
    if ($('#txtifsccode').val() == "" || $('#txtifsccode').val() == null) {
    }
    else {
        var pattern = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
        if (!pattern.test($('#txtifsccode').val())) {
            alert("Please enter valid IFSC code!!");
            $('#txtifsccode').focus();
            $('#txtifsccode').val("");
            return false;
        }
    }
});

$('#txtUNno').change(function () {
    if ($('#txtUNno').val() == "" || $('#txtUNno').val() == null) {
    }
    else {
        var pattern = /^\d{12}$/;
        if (!pattern.test($('#txtUNno').val())) {
            alert("Please enter valid 12 digit UAN Number!!");
            $('#txtUNno').focus();
            $('#txtUNno').val("");
            return false;
        }
    }
});

$('#txtESINo').change(function () {
    if ($('#txtESINo').val() == "" || $('#txtESINo').val() == null) {
    }
    else {
        var pattern = /^\d{10}$/;
        if (!pattern.test($('#txtESINo').val())) {
            alert("Please enter valid 10 digit ESI No!!");
            $('#txtESINo').focus();
            $('#txtESINo').val("");
            return false;
        }
    }
});

$('#txtfname').change(function () {
    if ($('#txtfname').val() == null || $('#txtfname').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtfname').val())) {
            alert("Please enter valid Father's Name!!");
            $('#txtfname').focus();
            $('#txtfname').val("");
            return false;
        }
    }
});

$('#txtaadhaar').keyup(function () {
    if ($('#txtaadhaar').val() == null || $('#txtaadhaar').val() == "") {
    }
    else {
        var adhrno = $('#txtaadhaar').val().trim();
        if (adhrno.length == 14) {
            var acard = /^\d{4}\s\d{4}\s\d{4}$/;
            if (!acard.test($('#txtaadhaar').val())) {
                alert("Please enter valid Aadhaar Card Number!!");
                $('#txtaadhaar').focus();
                $('#txtaadhaar').val("");
                return false;
            }
            else {
                var id = glbid.split("-")[0];
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ 'acrd': $('#txtaadhaar').val(), 'id': id }),
                    url: "EmployeeSignUpServices.aspx/chkaadhaarcard",
                    dataType: "json",
                    async: true,
                    success: function (data, status) {
                        var varIndentList = (data.d);
                        if (varIndentList == "2") {
                            alert("This Aadhaar Card no alerady entered for another employee.");
                            $('#txtaadhaar').focus();
                            $('#txtaadhaar').val("");
                            return false;
                        }
                    }
                });
            }
        }
        else if (adhrno.length == 4 || adhrno.length == 9) {
            var adhrn = $('#txtaadhaar').val();
            adhrn = adhrn + " ";
            $('#txtaadhaar').val(adhrn);
        }
    }
});

$('#txtpan').change(function () {
    if ($('#txtpan').val() == null || $('#txtpan').val() == "") {
    }
    else {
        var acard = /[A-Za-z]{5}\d{4}[A-Za-z]{1}/;
        if (!acard.test($('#txtpan').val())) {
            alert("Please enter valid Pan Card Number!!");
            $('#txtpan').focus();
            $('#txtpan').val("");
            return false;
        }
        else {
            var id = glbid.split("-")[0];
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'pcrd': $('#txtpan').val(), 'id': id }),
                url: "EmployeeSignUpServices.aspx/chkpancard",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndentList = (data.d);
                    if (varIndentList == "2") {
                        alert("This PAN Card no alerady entered for another employee.");
                        $('#txtpan').focus();
                        $('#txtpan').val("");
                        return false;
                    }
                }
            });
        }
    }
});

$('#txtblodgp').change(function () {
    if ($('#txtblodgp').val() == null || $('#txtblodgp').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z \+-]*$/;
        if (!pattern.test($('#txtblodgp').val())) {
            alert("Please enter valid Blood Group!!");
            $('#txtblodgp').focus();
            $('#txtblodgp').val("");
            return false;
        }
    }
});

$('#txtpremiumamt').change(function () {
    if ($('#txtpremiumamt').val() == null || $('#txtpremiumamt').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtpremiumamt').val())) {
            alert("Please enter valid Premium Amount!!");
            $('#txtpremiumamt').val("");
            $('#txtpremiumamt').focus();
            return false;
        }
    }
});

$('#txtcontactperson').change(function () {
    if ($('#txtcontactperson').val() == null || $('#txtcontactperson').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtcontactperson').val())) {
            alert("Please enter valid Contact Person Name (Emg.)!!");
            $('#txtcontactperson').focus();
            $('#txtcontactperson').val("");
            return false;
        }
    }
});

$('#txtcontactno').change(function () {
    if ($('#txtcontactno').val() == null || $('#txtcontactno').val() == "") {
    }
    else {
        var pattern = /^\d{10}$/;
        if (!pattern.test($('#txtcontactno').val())) {
            alert("Please enter valid Contact No (Emg.)!!");
            $('#txtcontactno').focus();
            $('#txtcontactno').val("");
            return false;
        }
    }
});

$('#txtrelation').change(function () {
    if ($('#txtrelation').val() == null || $('#txtrelation').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z ]*$/;
        if (!pattern.test($('#txtrelation').val())) {
            alert("Please enter valid Relationship!!");
            $('#txtrelation').focus();
            $('#txtrelation').val("");
            return false;
        }
    }
});

$('#txtrefname1').change(function () {
    if ($('#txtrefname1').val() == null || $('#txtrefname1').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtrefname1').val())) {
            alert("Please enter valid Reference Name 1!!");
            $('#txtrefname1').focus();
            $('#txtrefname1').val("");
            return false;
        }
    }
});

$('#txtrefnum1').change(function () {
    if ($('#txtrefnum1').val() == null || $('#txtrefnum1').val() == "") {
    }
    else {
        var pattern = /^\d{10}$/;
        if (!pattern.test($('#txtrefnum1').val())) {
            alert("Please enter valid Reference Contact Number 1!!");
            $('#txtrefnum1').focus();
            $('#txtrefnum1').val("");
            return false;
        }
    }
});

$('#txtrefname2').change(function () {
    if ($('#txtrefname2').val() == null || $('#txtrefname2').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtrefname2').val())) {
            alert("Please enter valid Reference Name 2!!");
            $('#txtrefname2').focus();
            $('#txtrefname2').val("");
            return false;
        }
    }
});

$('#txtrefnum2').change(function () {
    if ($('#txtrefnum2').val() == null || $('#txtrefnum2').val() == "") {
    }
    else {
        var pattern = /^\d{10}$/;
        if (!pattern.test($('#txtrefnum2').val())) {
            alert("Please enter valid Reference Contact Number 2!!");
            $('#txtrefnum2').focus();
            $('#txtrefnum2').val("");
            return false;
        }
    }
});

$('#txtctc').change(function () {
    if ($('#txtctc').val() == null || $('#txtctc').val() == "") {
        alert("Please enter Employee CTC");
        return false;
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtctc').val())) {
            alert("Please enter valid CTC offered at the time of joining!!");
            $('#txtctc').val("");
            $('#txtctc').focus();
            return false;
        }
    }
});

$('#insvalid').change(function () {
    var start_date = $("#insstdate").val(); //05-09-2013
    var end_date = $("#insvalid").val(); //10-09-2013
    if (start_date == "" || start_date == null || end_date == "" || end_date == null) {
    }
    else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'strdate': start_date, 'enddate': end_date }),
            url: "EmployeeSignUpServices.aspx/chkdate",
            dataType: "json",
            async: true,
            success: function (data, status) {
                var varIndentList = (data.d);
                if (varIndentList == "1") {
                    alert("Employee Med. Insurance Validity should be greater than Employee Med. Insurance Start Date");
                    $('#insvalid').focus();
                    $('#insvalid').val("");
                    return false;
                }
            }
        });
    }
});

$('#insstdate').change(function () {
    var start_date = $("#insstdate").val(); //05-09-2013
    var end_date = $("#insvalid").val(); //10-09-2013
    if (start_date == "" || start_date == null || end_date == "" || end_date == null) {
    }
    else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'strdate': start_date, 'enddate': end_date }),
            url: "EmployeeSignUpServices.aspx/chkdate",
            dataType: "json",
            async: true,
            success: function (data, status) {
                var varIndentList = (data.d);
                if (varIndentList == "1") {
                    alert("Employee Med. Insurance Validity should be greater than Employee Med. Insurance Start Date");
                    $('#insvalid').focus();
                    $('#insvalid').val("");
                    return false;
                }
            }
        });
    }
});



