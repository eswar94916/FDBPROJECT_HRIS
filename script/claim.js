var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tblclaim').hide();
    companydetials();
}
//this method is used to bind company details
function companydetials() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageClaimServices.aspx/CompanyList",
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
//this method is used to insert claim details
jQuery('#btnsave').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }

    AppObj.ClaimName = $('#txtclaim').val();
    if ($('#txtclaim').val() == null || $('#txtclaim').val() == "") {
        alert("Please enter Claim Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageClaimServices.aspx/insertclaim",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Saved Successfully....');
                showDetails();
                clearfield();
            }

            if (varIndentList == "2") {
                alert("This Data already exist!!");
                clearfield();
            }
        }
    });
});
//this method is clear fields of form
function clearfield() {
    //$('#ddlcompany').val("0").trigger('change');
    $('#txtclaim').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    showDetails();
});
//this method is used to bind claim details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageClaimServices.aspx/claimlist ",
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
                    //t.row.add([serial_no, o.CompanyID, o.ClaimName, "<a href=javascript:editRecord(" + o.ClaimID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.ClaimID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.ClaimName, "<a href=javascript:editRecord(" + o.ClaimID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.ClaimID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#tblclaim').show();
        }
    });
};

var glbId = "";
//this method is used to edit claim details
function editRecord(UserID) {
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageClaimServices.aspx/Editclaim ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtclaim').val(varIndent.ClaimName);

        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update claim details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }

    AppObj.ClaimName = $('#txtclaim').val();
    if ($('#txtclaim').val() == null || $('#txtclaim').val() == "") {
        alert("Please enter Claim Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.ClaimID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageClaimServices.aspx/Updateclaim ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Data already exist!!");
            }
        }
    });
});

//this method is used to delete claim details
function deleteRecord(HosID) {
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
                data: JSON.stringify({ 'del_id': HosID, 'user_name': username }),
                url: "ManageClaimServices.aspx/deleteclaim ",
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