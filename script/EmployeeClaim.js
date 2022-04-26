var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
var glbchkflag = "";
var glbempid = "";
var glbclaimid = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnupdate,#btnUpdateclaim,#btnsaveclaim,#divclaim,#divclaimdetails,#divdetails,#btnresetclaim,#btnupdatesubmit,#btnsubmit,#btnupdatesubmit').hide();
    companydetials();
}

$('#btnshow').click(function () {
    EmpClaimDetails();
});

function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "EmployeeClaimService.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);
            });
        }
    });
}

$('#txtempcode').change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#txtempcode').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmployeeClaimService.aspx/chkempcode",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            if (varList == "1") {
                alert("Entered Employee Code doesn't exist. Please enter valid Employee Code.");
                $('#txtempcode').val("");
                $('#txtdept').val("");
                $('#txtempname').val("");
                $('#txtempcode').focus();
                glbchkflag = "1";
            }
            if (varList == "2") {
                bindempdetails();
                glbchkflag = "";
            }
        }
    });
});

function bindempdetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#txtempcode').val(), 'compid': $('#ddlcompany').val() }),
        url: "EmployeeClaimService.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#txtempname').val(varList.EmpName);
            $('#txtdept').val(varList.Department);
            glbempid = varList.EmployeeID;
        }
    });
}

$('#btnsave').click(function () {
    var AppOBJ = {};
    AppOBJ.EmployeeID = glbempid;
    AppOBJ.CompanyID = $('#ddlcompany').val();
    if ($('#ddlcompany').val() == null || $('#ddlcompany').val() == "" || $('#ddlcompany').val() == "0") {
        alert("Please select Company");
        return false;
    }
    AppOBJ.EmpCode = $('#txtempcode').val();
    if ($('#txtempcode').val() == null || $('#txtempcode').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppOBJ.ClaimDate = $('#txtclaimdate').val();
    if ($('#txtclaimdate').val() == null || $('#txtclaimdate').val() == "") {
        alert("Please enter Claim Date");
        return false;
    }
    AppOBJ.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppOBJ }),
        url: "EmployeeClaimService.aspx/insertempclaim",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            glbclaimid = varList;
            $("#txtempcode").attr("disabled", "disabled");
            $("#txtclaimdate").attr("disabled", "disabled");
            $("#ddlcompany").attr("disabled", "disabled");
            claimdetails();
            $('#btnupdate,#btnUpdateclaim,#btnsave,#divclaim,#divclaimdetails,#btnreset,#btnupdatesubmit').hide();
            $('#btnsaveclaim,#divclaim,#btnresetclaim,#btnsubmit').show();

        }
    });
});

function claimdetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'compid': $('#ddlcompany').val() }),
        url: "EmployeeClaimService.aspx/ClaimList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlclaim').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.ClaimTypeID).text(o.ClaimTypeName);
                $('#ddlclaim').append($option);
            });
        }
    });
}

$('#btnsaveclaim').click(function () {
    var AppOBJ = {};
    AppOBJ.EmployeeID = glbempid;
    AppOBJ.ClaimID = glbclaimid;
    AppOBJ.ClaimTypeID = $('#ddlclaim').val();
    if ($('#ddlclaim').val() == null || $('#ddlclaim').val() == "" || $('#ddlclaim').val() == "0") {
        alert("Please select Claim");
        return false;
    }
    AppOBJ.ClaimAmount = $('#txtamount').val();
    if ($('#txtempcode').val() == null || $('#txtamount').val() == "") {
        alert("Please enter Amount");
        return false;
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtamount').val())) {
            alert("Please enter valid Amount!!");
            $('#txtamount').focus();
            $('#txtamount').val("");
            return false;
        }
    }
    AppOBJ.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppOBJ }),
        url: "EmployeeClaimService.aspx/insertempclaimdetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            if (varList == "1") {
                AddedClaimDetails();
                clearfield();
            }
            else {
                alert("This Claim already exist!!");
                return false;
            }
        }
    });
});

function AddedClaimDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'claimid': glbclaimid }),
        url: "EmployeeClaimService.aspx/AddedClaimList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblclaim').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.ClaimTypeName, o.ClaimAmount, "<a href=javascript:deleterecord(" + o.ClaimDetailsID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#divclaimdetails').show();
        }
    });
};

function deleterecord(delid) {
    var r = confirm("Are You Sure?")
    {
        if (r == true) {
            var username = $('#LoginName1').html();
            if (username == null || username == "") {
                username = "";
            }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'claimid': delid, 'usrname': username }),
                url: "EmployeeClaimService.aspx/deleteempclaimdetails",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    AddedClaimDetails();;
                }
            });
        }
        else {
            return false;
        }
    }
}

function clearfield() {
    $('#ddlclaim').val("").trigger('change');
    $('#txtamount').val("");
}

function clearfield1() {
    $('#txtempcode').val("");
    $('#txtempname').val("");
    $('#txtdept').val("");
    $('#txtclaimdate').val("");
    $("#txtempcode").removeAttr("disabled");
    $("#txtclaimdate").removeAttr("disabled");
    $("#ddlcompany").removeAttr("disabled");
    $('#btnupdate').hide();
    $('#btnsave').show();
}

$('#btnresetclaim').click(function () {
    clearfield();
});

$('#btnreset').click(function () {
    clearfield1();
});

$('#btnsubmit').click(function () {
    alert("Claim details saved successfully....");
    $('#btnupdate,#btnUpdateclaim,#btnsaveclaim,#divclaim,#divclaimdetails,#btnresetclaim,#btnupdatesubmit').hide();
    $('#btnsave,#btnreset,#divdetails').show();
    clearfield1();
    EmpClaimDetails();
});


function EmpClaimDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': role }),
        url: "EmployeeClaimService.aspx/ClaimDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldetails').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.CompanyName, o.EmpCode, o.EmpName, o.DepartmentName, o.ClaimDate, o.ClaimName, "<a href=javascript:editrecord(" + o.ClaimID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecordclaim(" + o.ClaimID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#divdetails').show();
        }
    });
};

function editrecord(reqid) {
    glbclaimid = reqid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': reqid }),
        url: "EmployeeClaimService.aspx/EditClaim",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#txtclaimdate').val(varList.ClaimDate);
            $('#txtempcode').val(varList.EmpCode);
            $('#ddlcompany').val(varList.CompanyID).trigger('change');
            bindempdetails();
            $('#btnupdate').show();
            $('#btnsave').hide();
        }
    });
}

$('#btnupdate').click(function () {
    var AppOBJ = {};
    AppOBJ.EmployeeID = glbempid;
    AppOBJ.CompanyID = $('#ddlcompany').val();
    if ($('#ddlcompany').val() == null || $('#ddlcompany').val() == "" || $('#ddlcompany').val() == "0") {
        alert("Please select Company");
        return false;
    }
    AppOBJ.EmpCode = $('#txtempcode').val();
    if ($('#txtempcode').val() == null || $('#txtempcode').val() == "") {
        alert("Please enter Employee Code");
        return false;
    }
    AppOBJ.ClaimDate = $('#txtclaimdate').val();
    if ($('#txtclaimdate').val() == null || $('#txtclaimdate').val() == "") {
        alert("Please enter Claim Date");
        return false;
    }
    AppOBJ.UserName = $('#LoginName1').html();
    AppOBJ.ClaimID = glbclaimid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppOBJ }),
        url: "EmployeeClaimService.aspx/updateempclaimdetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $("#txtempcode").attr("disabled", "disabled");
            $("#txtclaimdate").attr("disabled", "disabled");
            $("#ddlcompany").attr("disabled", "disabled");
            claimdetails();
            AddedClaimDetails();
            $('#btnupdate,#btnsave,#divclaim,#btnreset,#btnsubmit').hide();
            $('#btnsaveclaim,#divclaim,#btnresetclaim ,#btnupdatesubmit,#divclaimdetails').show();
        }
    });
});

$('#btnupdatesubmit').click(function () {
    alert("Claim details updated successfully....");
    $('#btnupdate,#btnUpdateclaim,#btnsaveclaim,#divclaim,#divclaimdetails,#btnresetclaim,#btnupdatesubmit').hide();
    $('#btnsave,#btnreset,#divdetails').show();
    clearfield1();
    EmpClaimDetails();
});

function deleterecordclaim(delid) {
    var r = confirm("Are You Sure?")
    {
        if (r == true) {
            var username = $('#LoginName1').html();
            if (username == null || username == "") {
                username = "";
            }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ 'claimid': delid, 'usrname': username }),
                url: "EmployeeClaimService.aspx/deleteclaimdetails",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    EmpClaimDetails();
                }
            });
        }
        else {
            return false;
        }
    }
}