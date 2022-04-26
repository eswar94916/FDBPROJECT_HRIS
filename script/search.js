var glbempidid = "";
var Username = ($('#LoginName1').html()).trim();
var role = ($('#lblrole').html()).trim();
function onbodyload() {
    $('#dvLoading').show();
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#divemployeeSearch').show();
    $('#profile').hide();
    $("#dashboard").removeClass("active open");
    $("#liSearchProfile").addClass("active open");
    $('#ddlEmployeescode').hide();
    $('#tblempdetails').hide();
    companydetials();
    departmentdetials();
    designationdetials();
    rolelist();
    unitdetials();
    gradedetails();
    locationlist();
    educationdetails();
    bankdetails();
    operatordetails();
    $('#dvLoading').hide();
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

$('#btnback').click(function () {
    $('#divemployeeSearch').show();
    $('#profile').hide();
});

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "SearchEmployeeService.aspx/CompanyList",
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

function unitdetials() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "SearchEmployeeService.aspx/UnitList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlunit').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunit').append($option);
            });
            empnamedetials();
        }
    });
}

function unitlist() {
    var Comp_id = $("#ddlcompany").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': Comp_id }),
        url: "SearchEmployeeService.aspx/UnitList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlunitname').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.UnitID).text(o.UnitName);
                $('#ddlunitname').append($option);
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
        url: "SearchEmployeeService.aspx/DepartmentList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlDepartment').empty();
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
        url: "SearchEmployeeService.aspx/DesignationList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddldesignation').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.DesignationID).text(o.DesignationName);
                $('#ddldesignation').append($option);
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
        url: "SearchEmployeeService.aspx/ReportingOfficerList",
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
        url: "SearchEmployeeService.aspx/GradeList",
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
        url: "SearchEmployeeService.aspx/EducationList",
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
        url: "SearchEmployeeService.aspx/BankList",
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
        url: "SearchEmployeeService.aspx/OperatorList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlOperator').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.OperatorID).text(o.OperatorName);
                $('#ddlOperator').append($option);
            });
        }
    });
}

function empnamedetials() {
    var unitid = $('#ddlunitname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid }),
        url: "SearchEmployeeService.aspx/EmployeeListnew",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlempname').empty();
            $("#ddlempname").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text(o.EmployeeName + ', Emp. Code: ' + o.EmployeeCode);
                $('#ddlempname').append($option);
            });
        }
    });
}

$('#ddlunitname').change(function () {
   
    var radioValue = $("input[name='rdb1']:checked").val();
    if (radioValue == "1") {
        $('#ddlEmployees').show();
        empnamedetials();
        $('#ddlEmployeescode').hide();
    }
    else if (radioValue == "2") {
        $('#ddlEmployees').hide();
        $('#ddlEmployees').show();
        empcodedetials();
    }
    else {
        $('#ddlEmployees').show();
        empnamedetials();
        $('#ddlEmployeescode').hide();
    }
});

function empcodedetials() {
    var unitid = $('#ddlunitname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unitid }),
        url: "SearchEmployeeService.aspx/EmployeeListnew",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlempname').empty();
            $("#ddlempname").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.EmployeeID).text(o.EmployeeCode);
                $('#ddlempname').append($option);
            });
        }
    });
}

$("input[name='rdb1']").change(function () {
    var radioValue = $("input[name='rdb1']:checked").val();
    if (radioValue == "1") {
        $('#ddlEmployees').show();
        empnamedetials();
        $('#ddlEmployeescode').hide();
    }
    else if (radioValue == "2") {
        $('#ddlEmployees').hide();
        $('#ddlEmployees').show();
        empcodedetials();
    }
    else {
        $('#ddlEmployees').show();
        empnamedetials();
        $('#ddlEmployeescode').hide();
    }
});

$('#btnsearch').click(function () {
    editRecord();

});

$('#ddlinactive').change(function () {
    if ($('#ddlinactive').val() == "Y") {
        $('#divinactive').show();
    }
    else {
        $('#divinactive').hide();
        $('#ddlcase').val("0").trigger('change');
        $('#txtreason').val("");
    }
});

//this method is used to load employee details
function editRecord() {
    var UserID = $('#ddlempname').val();
    if (UserID == "0" || UserID == "Select..") {
        alert("Please Select Employee For search");
        return false;
    }
    $('#dvLoading').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails ",
        dataType: "json",
        async: true,
        success: function (data, status) {

            var varIndent = (data.d);
            var url = "../../Upload_Image/" + UserID + '_' + varIndent.PhotoPath;
            var CVurl = "../../UploadCV/" + UserID + '_' + varIndent.ResumePath;
            var markurl = "../../UploadMarksheet/" + UserID + '_' + varIndent.MarksheetPath;
            var refurl = "../../UploadRefLeter/" + UserID + '_' + varIndent.RefLetterPath;
            var cheurl = "../../UploadCheques/" + UserID + '_' + varIndent.ChequePath;
            var pancardurl = "../../UploadPan/" + UserID + '_' + varIndent.PanCardPath;
            var addprofurl = "../../UploadIdProof/" + UserID + '_' + varIndent.AddressProofPath;
            $('#btnUpdate').show();
            $('#btnsave').hide();

            $('#lbldesig').html(varIndent.DesignationName);
            $('#lblusrname').html(varIndent.EmployeeName);
            $('#imgpro').attr('src', url);
            $('#imgsrc').attr('src', url);
            if (varIndent.ResumePath == "" || varIndent.ResumePath == null) {
            }
            else {
                $('#cvlink').attr('href', CVurl);
            }

            if (varIndent.MarksheetPath == "" || varIndent.MarksheetPath == null) {
            }
            else {
                $('#marklink').attr('href', markurl);
            }

            if (varIndent.RefLetterPath == "" || varIndent.RefLetterPath == null) {
            }
            else {
                $('#refletlink').attr('href', refurl);
            }

            if (varIndent.ChequePath == "" || varIndent.ChequePath == null) {
            }
            else {
                $('#cheqlink').attr('href', cheurl);
            }
            if (varIndent.PanCardPath == "" || varIndent.PanCardPath == null) {
            }
            else {
                $('#panlink').attr('href', pancardurl);
            }
            if (varIndent.AddressProofPath == "" || varIndent.AddressProofPath == null) {
            }
            else {
                $('#addprooflink').attr('href', addprofurl);
            }

            $("#ddlcompany1").append($("<option></option>").val(varIndent.CompanyID).html(varIndent.CompanyName));
            $('#ddlcompany1').val(varIndent.CompanyID).trigger('change');
            // $('#txtserial').val(varIndent.SerialNo);
            $('#ddlunit').val(varIndent.UnitID).trigger('change');
            reportingofficerdetials();
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

            if (varIndent.DOB == "01-January-1900" || varIndent.DOB == "01/January/1900" || varIndent.DOB == "" || varIndent.DOB == null || varIndent.DOB == "01-Jan-1900") {
                varIndent.DOB = "";
            }
            $('#dob').val(varIndent.DOB);
            $('#ddlMarital').val(varIndent.MaritalStatus).trigger('change');
            if (varIndent.MarriageAnniversary == "01-January-1900") {
                varIndent.MarriageAnniversary = "";
            }

            if (varIndent.MarriageAnniversary == "01-January-1900" || varIndent.MarriageAnniversary == "01/January/1900" || varIndent.MarriageAnniversary == "" || varIndent.MarriageAnniversary == null || varIndent.MarriageAnniversary == "01-Jan-1900") {
                varIndent.MarriageAnniversary = "";
            }
            $('#anniversry').val(varIndent.MarriageAnniversary);
            $('#txtmobile').val(varIndent.ContactNumber);
            $('#ddleducation').val(varIndent.EducationID).trigger('change');
            $('#txtexp').val(varIndent.Experiance);
            $('#ddlBank').val(varIndent.BankID).trigger('change');
            $('#txtAcNo').val(varIndent.AccountNo);
            $('#txtifsccode').val(varIndent.IFSCCode);
            $('#txtUNno').val(varIndent.UANNo);
            $('#txtESINo').val(varIndent.ESINo);
            $('#txtfname').val(varIndent.FatherName);
            $('#txtaadhaar').val(varIndent.AadhaarCard);
            $('#txtpan').val(varIndent.PANCard);
            $('#txtaddress').val(varIndent.PermanenetAddress);
            $('#txtcoraddress').val(varIndent.CorrespondAddress);
            $('#txtdomicile').val(varIndent.Domicile);
            $('#txtblodgp').val(varIndent.BloodGroup);
            $('#ddlmode').val(varIndent.Mode).trigger('change');
            if (varIndent.MedInsuValidity == "01-January-1900" || varIndent.MedInsuValidity == "01/January/1900" || varIndent.MedInsuValidity == "" || varIndent.MedInsuValidity == null || varIndent.MedInsuValidity == "01-Jan-1900") {
                varIndent.MedInsuValidity = "";
            }
            $('#insvalid').val(varIndent.MedInsuValidity);
            if (varIndent.StartDate == "01-January-1900" || varIndent.StartDate == "01/January/1900" || varIndent.StartDate == "" || varIndent.StartDate == null || varIndent.StartDate == "01-Jan-1900") {
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
            if (varIndent.ResigningDate == "01-January-1900" || varIndent.ResigningDate == "01-Jan-1900" || varIndent.ResigningDate == "01/January/1900" || varIndent.ResigningDate == "" || varIndent.ResigningDate == null) {
                varIndent.ResigningDate = "";
            }
            $('#txtresigndate').val(varIndent.ResigningDate);

            if (varIndent.LastWorkDate == "01-January-1900" || varIndent.LastWorkDate == "01-Jan-1900" || varIndent.LastWorkDate == "01/January/1900" || varIndent.LastWorkDate == "" || varIndent.LastWorkDate == null) {
                varIndent.LastWorkDate = "";
            }
            $('#txtlastworkdate').val(varIndent.LastWorkDate);

            $('#txtexitint').val(varIndent.ExitInterview);
            $('#txtexitintby').val(varIndent.ExitInterviewBy);
            if (varIndent.NOCDate == "01-January-1900" || varIndent.NOCDate == "01-Jan-1900" || varIndent.NOCDate == "01/January/1900" || varIndent.NOCDate == "" || varIndent.NOCDate == null) {
                varIndent.NOCDate = "";
            }
            $('#txtdatenoc').val(varIndent.NOCDate);
            if (varIndent.RelievingDate == "01-January-1900" || varIndent.RelievingDate == "01-Jan-1900" || varIndent.RelievingDate == "01/January/1900" || varIndent.RelievingDate == "" || varIndent.RelievingDate == null) {
                varIndent.RelievingDate = "";
            }
            $('#txtdaterelieving').val(varIndent.RelievingDate);
            if (varIndent.FNFDate == "01-January-1900" || varIndent.FNFDate == "01-Jan-1900" || varIndent.FNFDate == "01/January/1900" || varIndent.FNFDate == "" || varIndent.FNFDate == null) {
                varIndent.FNFDate = "";
            }
            $('#txtdatefnf').val(varIndent.FNFDate);
            $('#txtfnfchqno').val(varIndent.FNFChequeNo);
            $('#txtremarks').val(varIndent.Remark);
            $('#txtmail').val(varIndent.EmailID);
            $('#txtlta').val(varIndent.LTA);
            $('#txtapb').val(varIndent.APB);
            $('#txtbonus').val(varIndent.Bonus);
            $('#txtGratuity').val(varIndent.Gratuity);
            $('#txtpfemployer').val(varIndent.PFEmployer);
            $('#txtesiemployer').val(varIndent.ESIEmployer);
            $('#profile').show();
            $('#divemployeeSearch').hide();
            $('#ddlinactive').val(varIndent.Inactive).trigger('change');
            if (varIndent.Inactive == "Y") {
                $('#divinactive').show();
                $('#ddlcase').val(varIndent.InactiveCase).trigger('change');
                $('#txtreason').val(varIndent.InactiveReason);
            }
            else {
                $('#divinactive').hide();
                $('#ddlcase').val("0").trigger('change');
                $('#txtreason').val("");
            }

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

            bindearninglist();
            binddeductionlist();
            $('#dvLoading').hide();
        }

    });
}


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

var empid = "";
var glbearninglist = [];
function bindearninglist() {
    var empid = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "SearchEmployeeService.aspx/EarningList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            glbearninglist = varList;
            var t = $('#tblearning').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                var totalgross = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    var msg = "";
                    if (o.Flag == '1') {
                        msg = "Assigned";
                    }
                    if (o.Flag == '2') {
                        msg = "";
                    }

                    var empvalue = 0;
                    if (o.EarningID == "1") {
                        basicval = o.EarningValue;
                        empvalue = basicval;
                        chkflg = "1";
                    }
                    else {
                        if (o.Flag == "2") {
                            if (o.EDValTypeID == "1") {
                                empvalue = o.EDValue;
                            }
                            if (o.EDValTypeID == "2") {
                                empvalue = parseFloat(parseFloat(basicval) * parseFloat(o.EDValue)) / 100;
                            }
                        }
                        if (o.Flag == "1") {
                            empvalue = o.EarningValue;
                        }
                        chkflg = "2";
                    }
                    totalgross = totalgross + parseFloat(empvalue);
                    t.row.add(['<center>' + o.EDType + '</center>', '<center>' + o.EDName + '</center>', '<center><input type="text" value="' + empvalue + '" class="form-control" style="width: 250px" onchange="chkvalueearn(' + serial_no + ',' + chkflg + ')" /></center>', msg + '<label style="color:transparent">' + o.EarningID + '</label>']).draw();

                });
                $('#txtgross').val(totalgross);
            }
            $('#divearninglist').show();
        }
    });
}

var Selectedearnlist = [];

$('#btnsave9').click(function () {
    Selectedearnlist = [];
    var empid = $('#ddlempname').val();
    var n_rows = $('#tblearning').dataTable().fnGetNodes().length;
    for (var i = 1; i <= n_rows; i++) {
        var selid = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        var TestObj = {};
        TestObj.EarningID = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        TestObj.EDValue = $("#tblearning tr:eq(" + i + ") input:text:eq(0)").val();
        if (TestObj.EDValue == "" || TestObj.EDValue == null) {

        }
        else {
            Selectedearnlist.push(TestObj);
        }
    }
    var lta = $('#txtlta').val();
    var apb = $('#txtapb').val();
    var Gratuity = $('#txtGratuity').val();
    var bonus = $('#txtbonus').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid, 'usrname': $('#LoginName1').html(), 'earnlist': Selectedearnlist, 'lta': lta, 'apb': apb, 'bonus': bonus, 'Gratuity': Gratuity }),
        url: "SearchEmployeeService.aspx/updateearndet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#tab_1_1,#tab_1_2,#tab_1_3,#tab_1_4,#tab_1_5').removeClass('active');
            $('#tab_1_6').addClass('active');
            $('#li4').removeClass('active');
            $('#li5').addClass('active');
            bindearninglist();
        }
    });
});

function chkvalueearn(reqid, flg) {
    var noofsection = $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").val();
    if (noofsection != "" || noofsection != null) {
        var mob = /^[0-9]\d*(\.\d+)?$/;
        if (mob.test($.trim(noofsection)) == false) {
            alert("Please enter valid Value or Percantage!!");
            $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").val("");
            $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").focus();
            return false;
        }
        else {
            if (flg == "1") {
                var t = $('#tblearning').DataTable();
                t.clear();
                var serial_no = 0;
                var basicval = "";
                var totalgross = 0;
                $(glbearninglist).each(function (index, o) {
                    var chkflg = "";
                    serial_no = serial_no + 1;
                    var msg = "";
                    if (o.Flag == '1') {
                        msg = "Assigned";
                    }
                    var empvalue = 0;
                    if (o.EarningID == "1") {
                        basicval = noofsection;
                        empvalue = basicval;
                        chkflg = "1";
                    }
                    else {
                        //if (o.Flag == "1") {
                        //    empvalue = o.EarningValue;
                        //}
                        //if (o.Flag == "2") {
                        if (o.EDValTypeID == "1") {
                            if (o.Flag == "1") {
                                empvalue = o.EarningValue;
                            }
                            if (o.Flag == "2") {
                                empvalue = o.EDValue;
                            }
                        }
                        if (o.EDValTypeID == "2") {
                            empvalue = parseFloat(parseFloat(basicval) * parseFloat(o.EDValue)) / 100;
                        }
                        // }
                        chkflg = "2";
                    }
                    var valf = 0;
                    if (empvalue == "") {
                        valf = 0;
                    }
                    else {
                        valf = empvalue;
                    }
                    totalgross = totalgross + parseFloat(valf);
                    t.row.add(['<center>' + o.EDType + '</center>', '<center>' + o.EDName + '</center>', '<center><input type="text" value="' + empvalue + '" class="form-control" style="width: 250px" onchange="chkvalueearn(' + serial_no + ',' + chkflg + ')" /></center>', msg + '<label style="color:transparent">' + o.EarningID + '</label>']).draw();
                });
                var pfemployer = parseFloat(parseFloat(basicval) * 12 / 100);
                $('#txtpfemployer').val(pfemployer);

                var esiemployer = parseFloat(parseFloat(totalgross) * 3 / 100);
                $('#txtesiemployer').val(esiemployer);
            }
        }
    }
}

function binddeductionlist() {
    var empid = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "SearchEmployeeService.aspx/DeductionList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldeduction').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    var msg = "";
                    if (o.DFlag == 1) {
                        msg = "Assigned";
                    }
                    if (o.DFlag == '2') {
                        msg = "";
                    }
                    t.row.add(['<center>' + o.DType + '</center>', '<center>' + o.DeductionName + '</center>', '<center><input type="text" value="' + o.DeductionValue + '" class="form-control" style="width: 250px"  onchange="chkvalue(' + serial_no + ')" /></center>', msg + '<label style="color:transparent">' + o.DeductionID + '</label>']).draw();
                });
            }
            $('#divdeductionlist').show();
        }
    });
}

var Selectedearnlist = [];
$('#btnsave10').click(function () {
    var empid = $('#ddlempname').val();
    Selectedearnlist = [];
    var n_rows = $('#tbldeduction').dataTable().fnGetNodes().length;
    for (var i = 1; i <= n_rows; i++) {
        var selid = $("#tbldeduction tr:eq(" + i + ") label:eq(0)").text();
        var TestObj = {};
        TestObj.DeductionID = $("#tbldeduction tr:eq(" + i + ") label:eq(0)").text();
        TestObj.DValue = $("#tbldeduction tr:eq(" + i + ") input:text:eq(0)").val();
        if (TestObj.DValue == "" || TestObj.DValue == null) {
        }
        else {
            Selectedearnlist.push(TestObj);
        }
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid, 'usrname': $('#LoginName1').html(), 'deductlist': Selectedearnlist }),
        url: "SearchEmployeeService.aspx/updatedeductiondet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#tab_1_1,#tab_1_2,#tab_1_3,#tab_1_5,#tab_1_6').removeClass('active');
            $('#tab_1_4').addClass('active');
            $('#li5').removeClass('active');
            $('#li6').addClass('active');
            binddeductionlist();
        }
    });
});

function chkvalue(reqid) {
    var noofsection = $("#tbldeduction tr:eq(" + reqid + ") input:text:eq(0)").val();
    if (noofsection != "" || noofsection != null) {
        var mob = /^[0-9]\d*(\.\d+)?$/;
        if (mob.test($.trim(noofsection)) == false) {
            alert("Please enter valid Value or Percantage!!");
            $("#tbldeduction tr:eq(" + reqid + ") input:text:eq(0)").val("");
            $("#tbldeduction tr:eq(" + reqid + ") input:text:eq(0)").focus();
            return false;
        }
    }
}

//this method is used to insert employee details
jQuery('#btnsave1').click(function () {
    var age = /^[0-9]+$/;
    AppObj = {};
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
    AppObj.ReportingOfficerName = $('#ddlReportingOfficer').val();
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
    AppObj.EducationID = $('#ddleducation').val();
    AppObj.Experiance = $('#txtexp').val();
    AppObj.BankID = $('#ddlBank').val();
    AppObj.IFSCCode = $('#txtifsccode').val();

    AppObj.AccountNo = $('#txtAcNo').val();
    AppObj.UANNo = $('#txtUNno').val();

    AppObj.ESINo = $('#txtESINo').val();
    AppObj.EmailID = $('#txtmail').val();

    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmployeeID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "SearchEmployeeService.aspx/UpdateEmpDet ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                $('#li1').removeClass('active');
                $('#li2').addClass('active');
                $('#tab_1_1,#tab_1_3,#tab_1_4,#tab_1_5,#tab_1_6').removeClass('active');
                $('#tab_1_2').addClass('active');
                editRecord();
            }
            if (varIndentList == "2") {
                alert("Entered employee code already exist or assigned to another employee!!")
                return false;
            }
        }
    });
});
//this method is used to insert employee's remaining details
jQuery('#btnsave2').click(function () {
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
    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmployeeID = $('#ddlempname').val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "SearchEmployeeService.aspx/UpdateEmpDet2",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                //alert('Data Has Been Updated Successfully....');
                //$('#tab_1_2').hide();
                //$('#tab_1_3').show();
                $('#li2').removeClass('active');
                $('#li3').addClass('active');
                $('#tab_1_1,#tab_1_2,#tab_1_4,#tab_1_5,#tab_1_6').removeClass('active');
                $('#tab_1_3').addClass('active');
                //clearfield();
                //showDetails();
            }

        }
    });
});

$('#btnchgimg').click(function () {
    window.open("ChangeImage.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefresh').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.PhotoPath == "" || varList.PhotoPath == null)
            { }
            else {
                $("#imgsrc").attr("src", '../../Upload_Image/' + UserID + '_' + varList.PhotoPath);
                $("#imgpro").attr("src", '../../Upload_Image/' + UserID + '_' + varList.PhotoPath);
            }
        }
    });
});

$('#btnchgresum').click(function () {
    window.open("ChangeCV.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshresm').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.ResumePath == "" || varList.ResumePath == null)
            { }
            else {
                $("#cvlink").attr("href", '../../UploadCV/' + UserID + '_' + varList.ResumePath);
            }
        }
    });
});

$('#btnchgmarkshet').click(function () {
    window.open("ChangeMarksheet.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshmrksht').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.MarksheetPath == "" || varList.MarksheetPath == null)
            { }
            else {
                $("#marklink").attr("href", '../../UploadMarksheet/' + UserID + '_' + varList.MarksheetPath);
            }
        }
    });
});

$('#btnchgreflet').click(function () {
    window.open("ChangeRefLetter.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshreflt').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.RefLetterPath == "" || varList.RefLetterPath == null)
            { }
            else {
                $("#refletlink").attr("href", '../../UploadRefLeter/' + UserID + '_' + varList.RefLetterPath);
            }
        }
    });
});

$('#btnchgcheq').click(function () {
    window.open("ChangeCheque.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshcheq').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.ChequePath == "" || varList.ChequePath == null)
            { }
            else {
                $("#cheqlink").attr("href", '../../UploadCheques/' + UserID + '_' + varList.ChequePath);
            }
        }
    });
});


$('#btnchgpan').click(function () {
    window.open("ChangePAN.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshpan').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.PanCardPath == "" || varList.PanCardPath == null)
            { }
            else {
                $("#panlink").attr("href", '../../UploadPan/' + UserID + '_' + varList.PanCardPath);
            }
        }
    });
});

$('#btnchgidprof').click(function () {
    window.open("ChangeAadhaarCard.aspx?id=" + $('#ddlempname').val(), '_blank');
});
$('#btnrefreshidprf').click(function () {
    var UserID = $('#ddlempname').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': UserID }),
        url: "SearchEmployeeService.aspx/EmployeeDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            if (varList.AddressProofPath == "" || varList.AddressProofPath == null)
            { }
            else {
                $("#addprooflink").attr("href", '../../UploadIdProof/' + UserID + '_' + varList.AddressProofPath);
            }
        }
    });
});

$('#btnnext').click(function () {

    $('#li3').removeClass('active');
    $('#li4').addClass('active');
    $('#tab_1_1,#tab_1_2,#tab_1_3,#tab_1_4,#tab_1_6').removeClass('active');
    $('#tab_1_5').addClass('active');
});
jQuery('#btnsavefinal').click(function () {

    var AppObj = {};
    AppObj.ResigningDate = $('#txtresigndate').val();
    AppObj.LastWorkDate = $('#txtlastworkdate').val();
    AppObj.ExitInterview = $('#txtexitint').val();
    AppObj.ExitInterviewBy = $('#txtexitintby').val();
    AppObj.NOCDate = $('#txtdatenoc').val();
    AppObj.RelievingDate = $('#txtdaterelieving').val();
    AppObj.FNFDate = $('#txtdatefnf').val();
    AppObj.FNFChequeNo = $('#txtfnfchqno').val();
    AppObj.Remark = $('#txtremarks').val();
    AppObj.EmployeeID = $('#ddlempname').val();
    AppObj.Inactive = $('#ddlinactive').val();
    AppObj.InactiveCase = $('#ddlcase').val();
    AppObj.InactiveReason = $('#txtreason').val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "SearchEmployeeService.aspx/UpdateEmpDetFinal",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            alert("Employee details updated successfully....");
            //var url = "EmployeeSignUp.aspx";
            //window.location.href = url;
            $('#tab_1_5,#tab_1_2,#tab_1_3,#tab_1_4,#tab_1_6').removeClass('active');
            $('#tab_1_1').addClass('active');
            $('#li6').removeClass('active');
            $('#li1').addClass('active');
        }
    });
});


$('#txtlta').change(function () {
    if ($('#txtlta').val() == null || $('#txtlta').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtlta').val())) {
            alert("Please enter valid LTA!!");
            $('#txtlta').focus();
            $('#txtlta').val("");
            return false;
        }
    }
});

$('#txtapb').change(function () {
    if ($('#txtapb').val() == null || $('#txtapb').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtapb').val())) {
            alert("Please enter valid APB!!");
            $('#txtapb').focus();
            $('#txtapb').val("");
            return false;
        }
    }
});


$('#txtbonus').change(function () {
    if ($('#txtbonus').val() == null || $('#txtbonus').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtbonus').val())) {
            alert("Please enter valid Bonus!!");
            $('#txtbonus').focus();
            $('#txtbonus').val("");
            return false;
        }
    }
});


$('#txtGratuity').change(function () {
    if ($('#txtGratuity').val() == null || $('#txtGratuity').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtGratuity').val())) {
            alert("Please enter valid Gratuity!!");
            $('#txtGratuity').focus();
            $('#txtGratuity').val("");
            return false;
        }
    }
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
            var id = $('#ddlempname').val();
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

$('#txtexitintby').change(function () {
    if ($('#txtexitintby').val() == null || $('#txtexitintby').val() == "") {
    }
    else {
        var pattern = /^[a-zA-Z. ]*$/;
        if (!pattern.test($('#txtexitintby').val())) {
            alert("Please enter valid Exit Interview (By)!!");
            $('#txtexitintby').focus();
            $('#txtexitintby').val("");
            return false;
        }
    }
});

$('#txtexitint').change(function () {
    if ($('#txtexitint').val() == null || $('#txtexitint').val() == "") {
    }
    else {
        var intyn = $('#txtexitint').val().trim();
        if (intyn == "Y" || intyn == "y" || intyn == "N" || intyn == "n") {
        }
        else {
            alert("Please enter valid Exit Interview(Y/N) or Value sholud be Y or N");
            $('#txtexitint').focus();
            $('#txtexitint').val("");
            return false;
        }
    }
});