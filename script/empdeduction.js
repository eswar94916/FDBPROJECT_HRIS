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
    if (empid == "" || empid == null) {
        //   // $('#tab_1').hide();
        //   // $('#tab_0').show();
        //   // $('#btnbupstp1').hide();
        //   // $('#btnsave').show();
    }
    else {
        //    if (stp == 3) {
        //       editRecordstep2();
        //       $('#tab_1').show();
        ////        $('#tab_0').hide();
        ////    }
        if (stp == 4) {
            bindearninglist(empid);

            //$('#tab_1').hide();
            //$('#tab_0').show();
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
    var url = "UploadPanCard.aspx?id=" + glbid.split("-")[0];;
    window.location.href = url;
});
function bindearninglist(empid) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "EmployeeSignUpServices.aspx/DeductionList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblearning').DataTable();
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
                    //t.row.add(['<center>' + o.DType + '</center>', '<center>' + o.DeductionName + '</center>', '<center>' + o.DValType + '</center>', '<center><input type="text" value=' + o.DValue + ' class="form-control" style="width: 250px"  onchange="chkvalue(' + serial_no + ')" /></center>', msg + '<label style="color:transparent">' + o.DeductionID + '</label>']).draw();
                    t.row.add(['<center>' + o.DType + '</center>', '<center>' + o.DeductionName + '</center>', '<center><input type="text" value="' + o.DValue + '" class="form-control" style="width: 250px"  onchange="chkvalue(' + serial_no + ')" /></center>', msg + '<label style="color:transparent">' + o.DeductionID + '</label>']).draw();
                });

            }
        }
    });
}

var glbChckEntry = [];
var Selectedearnlist = [];
$('#btnsave9').click(function () {
    Selectedearnlist = [];
    //while (glbChckEntry.length) { glbChckEntry.pop(); }
    //$('input:checked').each(function () {
    //    glbChckEntry.push(this.id);
    //});
    //if (glbChckEntry.length <= 0) {
    //    alert('Please Select atleast One for add');
    //    return false;
    //}

    // var tcev = 0;
    var n_rows = $('#tblearning').dataTable().fnGetNodes().length;
    //for (j = 0; j < glbChckEntry.length; j++) {
    for (var i = 1; i <= n_rows; i++) {
        var selid = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        //var chkid = glbChckEntry[j];
        //if (chkid == selid) {
        var TestObj = {};
        TestObj.DeductionID = $("#tblearning tr:eq(" + i + ") label:eq(0)").text();
        TestObj.DValue = $("#tblearning tr:eq(" + i + ") input:text:eq(0)").val();

        if (TestObj.DValue == "" || TestObj.DValue == null) {

        }
        else {
            Selectedearnlist.push(TestObj);
        }

        // }
    }
    // } 
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid, 'usrname': $('#LoginName1').html(), 'deductlist': Selectedearnlist }),
        url: "EmployeeSignUpServices.aspx/insertdeductiondet",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var url = "EmployeeSignupFinal.aspx?id=" + empid;
            window.location.href = url;
        }
    });
});


function chkvalue(reqid) {
    var noofsection = $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").val();
    if (noofsection != "" || noofsection != null) {
        var mob = /^[0-9]\d*(\.\d+)?$/;
        if (mob.test($.trim(noofsection)) == false) {
            alert("Please enter valid Value or Percantage!!");
            $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").val("");
            $("#tblearning tr:eq(" + reqid + ") input:text:eq(0)").focus();
            return false;
        }
    }
}

$('#btnback').click(function () {

    var url = "EmployeeEarningList.aspx?id=" + empid.split("-")[0] + "&step=" + 3;
    window.location.href = url;
});