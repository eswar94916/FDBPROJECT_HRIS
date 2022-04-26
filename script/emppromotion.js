var Username = $('#LoginName1').html();
var glbrole = $('#lblrole').html();
var glbempid = "";
var glbempcode = "";

function onload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#tblpromotion,#btnUpdate').hide();
    companydetials();
}

$('#btnshow').click(function () {
    glbempcode = "";
    showDetails();
});

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': glbrole }),
        url: "EmpPromotionServices.aspx/CompanyList",
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

$('#txtEmployeeID').change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#txtEmployeeID').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmpPromotionServices.aspx/chkempcode",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            if (varList == "1") {
                alert("Entered Employee Code doesn't exist. Please enter valid Employee Code.");
                $('#txtEmployeeID').val("");
                $('#txtEmployeeName').val("");
                $('#txtempdep').val("");
                $('#txtempdesig').val("");
                $('#txtlastctc').val("");
                $('#txtapb').val("");
                $('#txtapbgross').val("");
                $('#txtEmployeeID').focus();
            }
            if (varList == "2") {
                bindempdetails();
            }
        }
    });
});

function bindempdetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#txtEmployeeID').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmpPromotionServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#txtEmployeeName').val(varList.EmpName);
            $('#txtempdep').val(varList.Department);
            $('#txtempdesig').val(varList.Designation);
            $('#txtlastctc').val(varList.LastCTC);
            $('#txtapb').val(varList.APB);
            var apb = varList.APB;
            if (apb == "" || apb == null) {
                apb = "0";
            }

            var LastCTC = varList.LastCTC;
            if (LastCTC == "" || LastCTC == null) {
                LastCTC = "0";
            }
            var totalctc = parseFloat(LastCTC) + parseFloat(apb);
            $('#txtapbgross').val(parseFloat(totalctc).toFixed());
            glbempid = varList.EmployeeID;
        }
    });
}


function bindempdetailsedittime() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#txtEmployeeID').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmpPromotionServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#txtEmployeeName').val(varList.EmpName);
            $('#txtempdep').val(varList.Department);
            $('#txtempdesig').val(varList.Designation);
            // $('#txtlastctc').val(varIndent.LastCTC);
            // $('#txtapb').val(varIndent.APB);
            glbempid = varList.EmployeeID;
        }
    });
}
$('#txtnewapb').keypress(function (e) {
    var regex = new RegExp("^[0-9]\d*(\.\d+)?$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

$('#txtincrement').keypress(function (e) {
    var regex = new RegExp("^[0-9]\d*(\.\d+)?$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

$('#txtrevision').keypress(function (e) {
    var regex = new RegExp("^[0-9]\d*(\.\d+)?$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

$('#txtnewctc').keypress(function (e) {
    var regex = new RegExp("^[0-9]\d*(\.\d+)?$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
});

var incre = 0;
var revision = 0;
var finalctc = 0;
var CTC = 0;
$('#txtincrement').change(function () {
    incre = $('#txtincrement').val();
    CTC = $('#txtlastctc').val();
    revision = parseFloat(CTC) * parseFloat(incre) / 100;
    finalctc = parseFloat(CTC) + parseFloat(revision);
    $('#txtrevision').val(parseFloat(revision).toFixed());
    $('#txtnewctc').val(parseFloat(finalctc).toFixed());
    newgross = 0;
    newapb = 0;
    if ($('#txtnewctc').val() == "" || $('#txtnewctc').val() == null) {
        newgross = 0;
    }
    else {
        newgross = $('#txtnewctc').val();
    }
    if ($('#txtnewapb').val() == "" || $('#txtnewapb').val() == null) {
        newapb = 0;
    }
    else {
        newapb = $('#txtnewapb').val();
    }
    newapbgross = parseFloat(newgross) + parseFloat(newapb);
    $('#txtnewapbgross').val(parseFloat(newapbgross).toFixed());

});
var newgross = 0;
var newapb = 0;
var newapbgross = 0;

$('#txtnewapb').change(function () {
    if ($('#txtnewctc').val() == "" || $('#txtnewctc').val() == null) {
        newgross = 0;
    }
    else {
        newgross = $('#txtnewctc').val();
    }
    if ($('#txtnewapb').val() == "" || $('#txtnewapb').val() == null) {
        newapb = 0;
    }
    else {
        newapb = $('#txtnewapb').val();
    }
    newapbgross = parseFloat(newgross) + parseFloat(newapb);
    $('#txtnewapbgross').val(parseFloat(newapbgross).toFixed());
});

$('#btnsave').click(function () {
    glbempcode = "";
    var AppObj = {};
    AppObj.EmployeeID = glbempid;
    var empcode = $('#txtEmployeeID').val();
    if ($('#txtEmployeeID').val() == null || $('#txtEmployeeID').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppObj.LastCTC = $('#txtlastctc').val();
    if ($('#txtlastctc').val() == null || $('#txtlastctc').val() == "") {
        alert("Please enter Last CTC");
        return false;
    }
    AppObj.APB = $('#txtnewapb').val();

    AppObj.IncrementDate = $('#txtincdate').val();
    if ($('#txtincdate').val() == null || $('#txtincdate').val() == "") {
        alert("Please enter Increment Date");
        return false;
    }
    AppObj.Increment = $('#txtincrement').val();
    if ($('#txtincrement').val() == null || $('#txtincrement').val() == "") {
        alert("Please enter Increment");
        return false;
    }
    AppObj.Revision = $('#txtrevision').val();
    //if ($('#txtrevision').val() == null || $('#txtrevision').val() == "") {
    //    alert("Please enter Revision");
    //    return false;
    //}
    AppObj.NewCTC = $('#txtnewctc').val();
    //if ($('#txtnewctc').val() == null || $('#txtnewctc').val() == "") {
    //    alert("Please enter New CTC");
    //    return false;
    //}
    AppObj.LastAPB = $('#txtapb').val();

    AppObj.EffectiveDate = $('#txteffectivedate').val();
    if ($('#txteffectivedate').val() == null || $('#txteffectivedate').val() == "") {
        alert("Please enter Effective Date");
        return false;
    }

    AppObj.NextIncrementDate = $('#txtincdatenext').val();
    if ($('#txtincdatenext').val() == null || $('#txtincdatenext').val() == "") {
        alert("Please enter Next Increment Date");
        return false;
    }
    AppObj.Remarks = $('#txtremarks').val();
    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "EmpPromotionServices.aspx/insertprodet",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            alert("Details saved successfully...");
            clearfields();
            showDetails();
        }
    });
});

function clearfields() {

    $('#txtapbgross').val("");
    $('#txtnewapbgross').val("");
    $('#txtapb').val("");
    $('#txtnewapb').val("");
    $('#txtnewctc').val("");
    $('#txteffectivedate').val("");
    $('#txtrevision').val("");
    $('#txtincrement').val("");
    $('#txtlastctc').val("");
    $('#txtremarks').val("");
    $('#txtincdatenext').val("");
    $('#txtincdate').val("");
    $('#txtEmployeeID').val("");
    $('#txtEmployeeName').val("");
    $('#txtempdep').val("");
    $('#txtempdesig').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    $('#txteffectivedate').val("");
    glbempcode = "";
}

$('#btnreset').click(function () {
    clearfields();
});

function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': glbrole }),
        url: "EmpPromotionServices.aspx/promotionlist",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblpromotion').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                var incre = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    if (o.APB == "" || o.APB == "" || o.APB == "-") {
                        o.APB = "0";
                    }

                    if (o.LastCTC == "" || o.LastCTC == null || o.LastCTC == "-") {
                        t.row.add([serial_no, o.UnitName, o.EmployeeCode, o.EmpName, o.Department, o.Designation, o.IncrementDate, o.Increment, o.Revision, parseFloat(o.NewCTC).toFixed(), parseFloat(o.APB).toFixed(), o.EffectiveDate, o.NextIncrementDate, o.Remarks, "<a class=\"btn default btn-xs purple\" disabled><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.PromotionID + "); class=\"btn default btn-xs red\" disabled><i class=\"fa fa-edit\" ></i> Delete </a>"]).draw();
                    }
                    else {
                       
                        t.row.add([serial_no, o.UnitName, o.EmployeeCode, o.EmpName, o.Department, o.Designation, o.IncrementDate, parseFloat(o.Increment).toFixed(), parseFloat(o.Revision).toFixed(), parseFloat(o.NewCTC).toFixed(), parseFloat(o.APB).toFixed(), o.EffectiveDate, o.NextIncrementDate, o.Remarks, "<a href=javascript:editRecord(" + o.PromotionID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.PromotionID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    }
                    //t.row.add([serial_no, o.CompanyName, o.EmployeeCode, o.EmpName, o.Department, o.Designation, o.Increment, o.Revision, o.NewCTC, "<a href=javascript:editRecord(" + o.PromotionID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.PromotionID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbempcode).draw();
            $('#tblpromotion').show();
        }
    });
};

function deleteRecord(HosID) {
    glbempcode = "";
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
                data: JSON.stringify({ 'delid': HosID, 'usrname': username }),
                url: "EmpPromotionServices.aspx/deletepromotiondetails ",
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

var glbpromid = "";

function editRecord(proid) {
    glbempcode = "";
    glbpromid = proid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empproid': glbpromid }),
        url: "EmpPromotionServices.aspx/editemppromotion ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtEmployeeID').val(varIndent.EmployeeCode);
            $('#txtrevision').val(varIndent.Revision);
            $('#txtincrement').val(varIndent.Increment);
            $('#txtnewctc').val(varIndent.NewCTC);
            $('#txtremarks').val(varIndent.Remarks);
            $('#txteffectivedate').val(varIndent.EffectiveDate);
            $('#txtincdatenext').val(varIndent.NextIncrementDate);
            $('#txtincdate').val(varIndent.IncrementDate);
            bindempdetailsedittime();
            $('#txtlastctc').val(varIndent.LastCTC);
            $('#txtapb').val(varIndent.LastAPB);
            //$('#txtlastctc').val(parseFloat(varList.LastCTC).toFixed());
            //$('#txtapb').val(varList.APB);
            var apb = 0;
            var gross = 0;
            var apbgross = 0;
            if (varIndent.LastCTC == "" || varIndent.LastCTC == null || varIndent.LastCTC == "-") {
                gross = 0;
            }
            else {
                gross = varIndent.LastCTC;
            }
            if (varIndent.APB == "" || varIndent.APB == null || varIndent.APB == "-") {
                apb = 0;
            }
            else {
                apb = varIndent.APB;
            }
            apbgross = parseFloat(apb) + parseFloat(gross);
            $('#txtapbgross').val(parseFloat(apbgross).toFixed());
            $('#txtnewapb').val(varIndent.APB);
            if (varIndent.NewCTC == "" || varIndent.NewCTC == null || varIndent.LastAPB == "" || varIndent.LastAPB == null || varIndent.LastAPB == "-") {
                $('#txtnewapbgross').val("");
            }
            else {
                $('#txtnewapbgross').val(parseFloat(varIndent.NewCTC) + parseFloat(varIndent.LastAPB));
            }
        }
    });
}

$('#btnUpdate').click(function () {
    var AppObj = {};
    AppObj.EmployeeID = glbempid;
    var empcode = $('#txtEmployeeID').val();
    if ($('#txtEmployeeID').val() == null || $('#txtEmployeeID').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppObj.LastCTC = $('#txtlastctc').val();
    if ($('#txtlastctc').val() == null || $('#txtlastctc').val() == "") {
        alert("Please enter Last CTC");
        return false;
    }
    AppObj.APB = $('#txtnewapb').val();


    AppObj.IncrementDate = $('#txtincdate').val();
    if ($('#txtincdate').val() == null || $('#txtincdate').val() == "") {
        alert("Please enter Increment Date");
        return false;
    }
    AppObj.Increment = $('#txtincrement').val();
    if ($('#txtincrement').val() == null || $('#txtincrement').val() == "") {
        alert("Please enter Increment");
        return false;
    }
    AppObj.Revision = $('#txtrevision').val();
    //if ($('#txtrevision').val() == null || $('#txtrevision').val() == "") {
    //    alert("Please enter Revision");
    //    return false;
    //}
    AppObj.NewCTC = $('#txtnewctc').val();
    //if ($('#txtnewctc').val() == null || $('#txtnewctc').val() == "") {
    //    alert("Please enter New CTC");
    //    return false;
    //}
    AppObj.LastAPB = $('#txtapb').val();

    AppObj.EffectiveDate = $('#txteffectivedate').val();
    if ($('#txteffectivedate').val() == null || $('#txteffectivedate').val() == "") {
        alert("Please enter Effective Date");
        return false;
    }

    AppObj.NextIncrementDate = $('#txtincdatenext').val();
    if ($('#txtincdatenext').val() == null || $('#txtincdatenext').val() == "") {
        alert("Please enter Next Increment Date");
        return false;
    }
    AppObj.Remarks = $('#txtremarks').val();
    AppObj.UserName = $('#LoginName1').html();
    AppObj.PromotionID = glbpromid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmpPromotionServices.aspx/updatepromotiondetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            alert("Details updated successfully...");
            clearfields();
            glbempcode = empcode;
            showDetails();
        }
    });
});

$('#txteffectivedate').change(function () {
    if ($('#txteffectivedate').val() == "" || $('#txteffectivedate').val() == null) {
        $('#txtincdatenext').val("");
    }
    else {
        var d = new Date($('#txteffectivedate').val());
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var c = new Date(year + 1, month, day);

        var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

        var d1 = new Date(c);
        var curr_date = d1.getDate();
        var curr_month = d1.getMonth();
        var curr_year = d1.getFullYear();
        $('#txtincdatenext').val(curr_date + "-" + m_names[curr_month] + "-" + curr_year);
    }
});