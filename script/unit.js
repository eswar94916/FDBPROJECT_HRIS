var glbchkflg = "";
var glbunitname = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
    $('#btnUpdate,#tblUnit').hide();
}

function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "UnitServices.aspx/CompanyList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcomp').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcomp').append($option);
            });
        }
    });
}

$('#txtUnitCode').change(function () {
    var spacetxt = /^\S$/;
    if (/\s/.test($('#txtUnitCode').val())) {
        alert("Please remove all sapces from Unit Code!!");
        $('#txtUnitCode').focus();
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitcode': $('#txtUnitCode').val(), 'flg': glbchkflg }),
        url: "UnitServices.aspx/chkunitcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "2") {
                alert("This unit code is already exist or used by another Unit!!");
                $('#txtUnitCode').val("");
            }
        }
    });
});

$('#txtUnit').change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitname': $('#txtUnit').val(), 'flg': glbchkflg }),
        url: "UnitServices.aspx/chkunitname",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "2") {
                alert("This unit name is already exist!!");
                $('#txtUnit').val("");
            }
        }
    });
});

jQuery('#btnsave').click(function () {
    glbunitname = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.UnitName = $('#txtUnit').val();
    if ($('#txtUnit').val() == null || $('#txtUnit').val() == "") {
        alert("Please enter Unit Name");
        return false;
    }
    AppObj.UnitName = (AppObj.UnitName).trim();
    AppObj.UnitCode = $('#txtUnitCode').val();
    if ($('#txtUnitCode').val() == null || $('#txtUnitCode').val() == "") {
        alert("Please enter Unit Code");
        return false;
    }
    else {
        var spacetxt = /^\S$/;
        if (/\s/.test($('#txtUnitCode').val())) {
            alert("Please remove all sapces from Unit Code!!");
            $('#txtUnitCode').focus();
            return false;
        }
    }
    AppObj.UnitCode = (AppObj.UnitCode).trim();
    AppObj.UnitName = (AppObj.UnitName).replace(/'/g, "''");
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "UnitServices.aspx/insertunit",
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
                alert("This Unit Name already exist!!");
            }
        }
    });
});

//this method is clear fields of form
function clearfield() {
    $('#txtUnit').val("");
    //$('#ddlcomp').val("0").trigger('change');
    $('#txtUnitCode').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbunitname = "";
}

//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbunitname = "";
    showDetails();
});

//this method is user to display Generic details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "UnitServices.aspx/unitselect",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblUnit').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $('#tblUnit').css('text-align', 'left');
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.UnitName, o.UnitCode, "<a href=javascript:editRecord(" + o.UnitID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.UnitID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();

                });
            }
            t.search(glbunitname).draw();
            $('#tblUnit').show();
        }
    });
};

var editId = "";
//this method is used to edit generic details
function editRecord(UserID) {
    glbunitname = "";
    editId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "UnitServices.aspx/Editunit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#txtUnit').val(varIndent.UnitName);
            $('#txtUnitCode').val(varIndent.UnitCode);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
            glbchkflg = UserID;
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update generic details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.UnitName = $('#txtUnit').val();
    if ($('#txtUnit').val() == null || $('#txtUnit').val() == "") {
        alert("Please enter Unit Name");
        return false;
    }
    AppObj.UnitName = (AppObj.UnitName).trim();

    AppObj.UnitCode = $('#txtUnitCode').val();
    if ($('#txtUnitCode').val() == null || $('#txtUnitCode').val() == "") {
        alert("Please enter Unit Code");
        return false;
    }

    else {
        var spacetxt = /^\S$/;
        if (/\s/.test($('#txtUnitCode').val())) {
            alert("Please remove all sapces from Unit Code!!");
            $('#txtUnitCode').focus();
            return false;
        }
    }
    AppObj.UnitCode = (AppObj.UnitCode).trim();
    AppObj.UnitName = (AppObj.UnitName).replace(/'/g, "''");
    AppObj.UserName = $('#LoginName1').html();
    AppObj.UnitID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "UnitServices.aspx/Updateunit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbunitname = AppObj.UnitName;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Unit Name already exist!!");
            }
        }
    });
});
//this method is used to deelete generic details
function deleterecord(delid) {
    glbunitname = "";
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
                data: JSON.stringify({ 'del_id': delid, 'user_name': username }),
                url: "UnitServices.aspx/deleteunit",
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


