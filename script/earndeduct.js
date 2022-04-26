var Username = $('#LoginName1').html();
var role = $('#lblrole').html();
function bodyonload() {
    $('#btnUpdate').hide();
    companydetails();
    showDetails();
}
//this method is used to bind company details
function companydetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageEarningDeductServices.aspx/CompanyList",
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
//this method is used to insert earning/deduction details
jQuery('#btnsave').click(function () {
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.EDType = $('#ddlearndeduct').val();
    if (AppObj.EDType == "0" || AppObj.EDType == "Select..") {
        alert("Please Select Earning or Deduction Type");
        return false;
    }
    AppObj.EDName = $('#txtearndeduct').val();
    if ($('#txtearndeduct').val() == null || $('#txtearndeduct').val() == "") {
        alert("Please enter Earning or Deduction Name");
        return false;
    }
    AppObj.EDValueType = $('#ddlearndeducttype').val();
    if (AppObj.EDValueType == "0" || AppObj.EDValueType == "Select..") {
        alert("Please Select Value Type");
        return false;
    }
    AppObj.EDValue = $('#txtearndeductval').val();
    if ($('#txtearndeductval').val() == null || $('#txtearndeductval').val() == "") {
        alert("Please enter Earning or Deduction Value");
        return false;
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtearndeductval').val())) {
            alert("Please enter valid Earning or Deduction Value!!");
            $('#txtearndeductval').focus();
            return false;
        }
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageEarningDeductServices.aspx/insertearndeduct",
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
    $('#ddlearndeduct').val("0").trigger('change');
    $('#ddlearndeducttype').val("0").trigger('change');
    $('#txtearndeductval').val("");
    $('#txtearndeduct').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    showDetails();
});
//this method is used to bind earning/deduction details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageEarningDeductServices.aspx/earndeductlist ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblearndeduct').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.EDType, o.EDName, o.EDValueType, o.EDValue, "<a href=javascript:editRecord(" + o.EDID + "," + o.EDValueID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.EDID + "," + o.EDValueID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no,  o.EDType, o.EDName, o.EDValueType, o.EDValue, "<a href=javascript:editRecord(" + o.EDID + "," + o.EDValueID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.EDID + "," + o.EDValueID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#tblearndeduct').show();
        }
    });
};

var glbId = "";
//this method is used to edit earning/deduction details
function editRecord(UserID) {
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageEarningDeductServices.aspx/Editearndeduct ",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#ddlearndeduct').val(varIndent.EDType).trigger('change');
            $('#txtearndeduct').val(varIndent.EDName);
            $('#ddlearndeducttype').val(varIndent.EDValueType).trigger('change');
            $('#txtearndeductval').val(varIndent.EDValue);
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update earning/deduction details
jQuery('#btnUpdate').click(function () {
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.EDType = $('#ddlearndeduct').val();
    if (AppObj.EDType == "0" || AppObj.EDType == "Select..") {
        alert("Please Select Earning or Deduction Type");
        return false;
    }
    AppObj.EDName = $('#txtearndeduct').val();
    if ($('#txtearndeduct').val() == null || $('#txtearndeduct').val() == "") {
        alert("Please enter Earning or Deduction Name");
        return false;
    }
    AppObj.EDValueType = $('#ddlearndeducttype').val();
    if (AppObj.EDValueType == "0" || AppObj.EDValueType == "Select..") {
        alert("Please Select Value Type");
        return false;
    }
    AppObj.EDValue = $('#txtearndeductval').val();
    if ($('#txtearndeductval').val() == null || $('#txtearndeductval').val() == "") {
        alert("Please enter Earning or Deduction Value");
        return false;
    }
    else {
        var rge = /^[0-9]\d*(\.\d+)?$/;
        if (!rge.test($('#txtearndeductval').val())) {
            alert("Please enter valid Earning or Deduction Value!!");
            $('#txtearndeductval').focus();
            return false;
        }
    }
        AppObj.UserName = $('#LoginName1').html();
        AppObj.EDID = glbId;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 'hdbo': AppObj }),
            url: "ManageEarningDeductServices.aspx/Updateearndeduct ",
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

    //this method is used to delete earning/deduction details
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
                    url: "ManageEarningDeductServices.aspx/deleteearndeduct ",
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