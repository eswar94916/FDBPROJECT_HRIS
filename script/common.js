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

$('#tab21 a').click(function (e) {
    e.preventDefault();
    var url = "UploadPanCard.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});