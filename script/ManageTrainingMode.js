var glbtrainmode = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
    $('#btnUpdate,#tbltrainmode').hide();
}
//this method used to bind company list
function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "ManageTrainingModeServicesPage.aspx/CompanyList",
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
//this method is used to insert Training Mode list
jQuery('#btnsave').click(function () {
    glbtrainmode = "";

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.TrainingMode = $('#txtMode').val();
    if ($('#txtMode').val() == null || $('#txtMode').val() == "") {
        alert("Please Enter Training Mode");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "ManageTrainingModeServicesPage.aspx/inserttrainingmode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Saved Successfully....');
                clearfield();
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Training Mode already exist!!");
            }
        }

    })
});
function clearfield() {
    $('#txtMode').val("");
    //$('#ddlcomp').val("0").trigger('change');
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbtrainmode = "";
}

//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbtrainmode = "";
    showDetails();
});

// this method is used to bind Training Mode 
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "ManageTrainingModeServicesPage.aspx/trainmodeselect",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbltrainmode').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.TrainingMode, "<a href=javascript:editRecord(" + o.TrainingModeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.TrainingModeID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.TrainingMode, "<a href=javascript:editRecord(" + o.TrainingModeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.TrainingModeID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbtrainmode).draw();
            $('#tbltrainmode').show();
        }
    });
};

var editId = "";
// this method is used to edit Training Mode 
function editRecord(UserID) {
    glbtrainmode = "";
    editId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageTrainingModeServicesPage.aspx/Edittrainmode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#txtMode').val(varIndent.TrainingMode);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});
// this method is used to update Training Mode 
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.TrainingMode = $('#txtMode').val();
    if ($('#txtMode').val() == null || $('#txtMode').val() == "") {
        alert("Please enter Training Mode Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.TrainingModeID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "ManageTrainingModeServicesPage.aspx/Updatetraining",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbtrainmode = AppObj.TrainingMode;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Training Mode Name already exist!!");
            }
        }
    });
});
// this method is used to delete Training Mode
function deleterecord(delid) {
    glbtrainmode = "";
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
                url: "ManageTrainingModeServicesPage.aspx/deleteTrainMode",
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


