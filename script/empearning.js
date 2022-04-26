var empid = "";
var glbid = "";
var stp = "";
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
    empid = GetParameterValues('id');
    bindearninglist(empid);
    stp = GetParameterValues('step');
    if (glbid == "" || glbid == null) {
    }
    else {
        if (stp == 3) {
            bindearninglist(empid);
            $('#tab_1').show();
            $('#tab_0').hide();
        }
        if (stp == 1) {
        }
    }
}

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
    var url = "UploadCV.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab14 a').click(function (e) {
    e.preventDefault();
    var url = "UploadMarksheet.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab15 a').click(function (e) {
    e.preventDefault();
    var url = "ReferenceLetter.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab16 a').click(function (e) {
    e.preventDefault();
    var url = "UploadCheques.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab17 a').click(function (e) {
    e.preventDefault();
    var url = "UploadIdproof.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab18 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeEarningList.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab19 a').click(function (e) {
    e.preventDefault();
    var url = "EmpDeduction.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});
$('#tab20 a').click(function (e) {
    e.preventDefault();
    var url = "EmployeeSignupFinal.aspx?id=" + empid.split("-")[0];
    window.location.href = url;
});

$('#tab21 a').click(function (e) {
    e.preventDefault();
    var url = "UploadPanCard.aspx?id=" + glbid.split("-")[0];
    window.location.href = url;
});

var glbearninglist = [];
function bindearninglist(empid) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "EmployeeSignUpServices.aspx/EarningList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            glbearninglist = (data.d);
            var t = $('#tblearning').DataTable();
            if (glbearninglist.length == 0) {
                t.clear().draw();
            }
            else {
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
                        if (o.Flag == "1") {
                            basicval = o.EarningValue;
                        }
                        else {
                            basicval = o.EDValue;
                        }
                        empvalue = basicval;
                        chkflg = "1";
                    }
                    else {
                        if (o.Flag == "1") {
                            empvalue = o.EarningValue;
                        }
                        if (o.Flag == "2") {
                            if (o.EDValTypeID == "1") {
                                empvalue = o.EDValue;
                            }
                            if (o.EDValTypeID == "2") {
                                empvalue = parseFloat(parseFloat(basicval) * parseFloat(o.EDValue)) / 100;
                            }
                        }
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
                    t.row.add(['<center>' + o.EDType + '</center>', '<center>' + o.EDName + '</center>', '<center><input type="text" value="' + empvalue + '" class="form-control" style="width: 250px" onchange="chkvalue(' + serial_no + ',' + chkflg + ')" /></center>', msg + '<label style="color:transparent">' + o.EarningID + '</label>']).draw();
                });
                var pfemployer = parseFloat(parseFloat(basicval) * 12 / 100);
                $('#txtpfemployer').val(pfemployer);

                var esiemployer = parseFloat(parseFloat(totalgross) * 3 / 100);
                $('#txtesiemployer').val(esiemployer);              
            }
        }
    });
}

var glbChckEntry = [];
var Selectedearnlist = [];

$('#btnsave9').click(function () {

    var n_rows = $('#tblearning').dataTable().fnGetNodes().length;
    for (var i = 1; i <= n_rows; i++) {
        var selid = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        var TestObj = {};
        TestObj.EarningID = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        TestObj.EDValue = $("#tblearning tr:eq(" + i + ") input:text:eq(0)").val();
        if (TestObj.EDValue == "" || TestObj.EDValue == null) {

        }
        else { Selectedearnlist.push(TestObj); }
    }
    var lta = $('#txtlta').val();
    var apb = $('#txtapb').val();
    var bonus = $('#txtBonus').val();
    var Gratuity = $('#txtGratuity').val();
    var emp_pf = $('#txtpfemployer').val();
    var emp_esi = $('#txtesiemployer').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid, 'usrname': $('#LoginName1').html(), 'earnlist': Selectedearnlist, 'lta': lta, 'apb': apb, 'emp_pf': emp_pf, 'emp_esi': emp_esi, 'bonus': bonus, 'Gratuity': Gratuity }),
        url: "EmployeeSignUpServices.aspx/insertearndet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var url = "EmpDeduction.aspx?id=" + empid;
            window.location.href = url;
        }
    });
});

function chkvalue(reqid, flg) {
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
                    t.row.add(['<center>' + o.EDType + '</center>', '<center>' + o.EDName + '</center>', '<center><input type="text" value="' + empvalue + '" class="form-control" style="width: 250px" onchange="chkvalue(' + serial_no + ',' + chkflg + ')" /></center>', msg + '<label style="color:transparent">' + o.EarningID + '</label>']).draw();
                });
                var pfemployer = parseFloat(parseFloat(basicval) * 12 / 100);
                $('#txtpfemployer').val(pfemployer);

                var esiemployer = parseFloat(parseFloat(totalgross) * 3 / 100);
                $('#txtesiemployer').val(esiemployer);
            }
        }
    }
}

$('#btnback').click(function () {

    var url = "UploadIdproof.aspx?id=" + empid.split("-")[0];;
    window.location.href = url;
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



$('#txtBonus').change(function () {
    if ($('#txtBonus').val() == null || $('#txtBonus').val() == "") {
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtBonus').val())) {
            alert("Please enter valid Bonus!!");
            $('#txtBonus').focus();
            $('#txtBonus').val("");
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