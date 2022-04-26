var empid = "";

function bodyonload() {
    $('#divinactive').hide();
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    empid = GetParameterValues('id');
}

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

$('#tab10 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignUp.aspx?id=" + empid.split("-")[0] + "&step=" + 1;
    window.location.href = url;
});

$('#tab11 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignUp.aspx?id=" + empid.split("-")[0] + "&step=" + 2;
    window.location.href = url;
});
$('#tab12 a').click(function (e) {
    e.preventDefault();
    var url = "UploadImage.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab13 a').click(function (e) {
    e.preventDefault();
    var url = "UploadCV.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab14 a').click(function (e) {
    e.preventDefault();
    var url = "UploadMarksheet.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab15 a').click(function (e) {
    e.preventDefault();
    var url = "ReferenceLetter.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab16 a').click(function (e) {
    e.preventDefault();
    var url = "UploadCheques.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab17 a').click(function (e) {
    e.preventDefault();
    var url = "UploadIdproof.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab18 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeEarningList.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab19 a').click(function (e) {
    e.preventDefault();
    var url = "EmpDeduction.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});
$('#tab20 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignupFinal.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
});

$('#tab21 a').click(function (e) {
    e.preventDefault();
    var url = "UploadPanCard.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
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
    AppObj.Inactive = $('#ddlinactive').val();
    AppObj.InactiveCase = $('#ddlcase').val();
    AppObj.InactiveReason = $('#txtreason').val();

    AppObj.EmployeeID = empid;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeSignUpServices.aspx/updateempdetfinal",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            alert("Employee details saved successfully....");
            var url = "EmployeeSignUp.aspx";
            window.location.href = url;
        }
    });
});

$('#btnback').click(function () {

    var url = "EmpDeduction.aspx?id=" + empid.split("-")[0] + "&step=" + 4;
    window.location.href = url;
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