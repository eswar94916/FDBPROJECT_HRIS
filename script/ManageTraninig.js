var glbtrainname = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
   TrainingModedetials();
    $('#btnUpdate1,#tbltrainlist').hide();
}
$('#ddlcomp').change(function () {
    TrainingModedetials();
})
//this method used to bind Company list
function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "ManageTrainingServicesPage.aspx/CompanyList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcomp').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcomp').append($option);
            });
            TrainingModedetials();
        }
    });
}

//this method used to insert Training list
jQuery('#btnsave1').click(function () {
    glbtrainname = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.TrainingModeID = $('#ddltrainmode').val();
    if ($('#ddltrainmode').val() == null || $('#ddltrainmode').val() == "") {
        alert("Please select Training Mode");
        return false;
    }
    AppObj.TrainingName = $('#txtName').val();
    if ($('#txtName').val() == null || $('#txtName').val() == "") {
        alert("Please Enter Training Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "ManageTrainingServicesPage.aspx/insertTraininglist",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Saved Successfully....');
                clearfield();
                showtrainingDetails();
            }
            if (varIndentList == "2") {
                alert("This Training Name already exist!!");
            }

        }
    })
});
function clearfield() {
    $('#txtName').val("");
    $('#ddltrainmode').val("0").trigger('change')
    //$('#ddlcomp').val("0").trigger('change');
    $('#btnUpdate1').hide();
    $('#btnsave1').show();
    glbtrainname = "";
}


//here we are creating click event of Show button
jQuery('#btnshow1').click(function () {
    glbtrainname = "";
    showtrainingDetails();
});
// this method is used to bind Training List
function showtrainingDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "ManageTrainingServicesPage.aspx/Trainingselect",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbltrainlist').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyName, o.TrainingMode, o.TrainingName, "<a href=javascript:editRecord(" + o.TrainingID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.TrainingID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.TrainingMode, o.TrainingName, "<a href=javascript:editRecord(" + o.TrainingID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.TrainingID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbtrainname).draw();
            $('#tbltrainlist').show();
        }
    });
};

var editId = "";
// this method is used to Edit Training List
function editRecord(UserID) {
    glbtrainname = "";
    editId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageTrainingServicesPage.aspx/EditTrainingList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate1').show();
            $('#btnsave1').hide();
            $('#txtName').val(varIndent.TrainingName);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
            $('#ddltrainmode').val(varIndent.TrainingModeID).trigger('change');
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset1').click(function () {
    clearfield();
});
// this method is used to Update Training List
jQuery('#btnUpdate1').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }
    AppObj.TrainingModeID = $('#ddltrainmode').val();
    if ($('#ddltrainmode').val() == null || $('#ddltrainmode').val() == "") {
        alert("Please select Training Mode");
        return false;
    }
    AppObj.TrainingName = $('#txtName').val();
    if ($('#txtName').val() == null || $('#txtName').val() == "") {
        alert("Please Enter Training Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.TrainingID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "ManageTrainingServicesPage.aspx/Updatetraining",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbtrainname = AppObj.TrainingName;
                showtrainingDetails();
            }
            if (varIndentList == "2") {
                alert("This Training Name already exist!!");
            }
        }
    });
});
// this method is used to Delete Training List
function deleterecord(delid) {
    glbtrainname = "";
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
                url: "ManageTrainingServicesPage.aspx/deleteTraining",
                dataType: "json",
                async: true,
                success: function (data, status) {
                    var varIndent = (data.d);
                    alert("Data Has Been Deleted Successfully....");
                    showtrainingDetails();

                }
            });
        }
        else {
            return false;
        }
    }
}
//this method used to bind Training list
function TrainingModedetials() {
    var id = $("#ddlcomp").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': id }),
        url: "ManageTrainingServicesPage.aspx/bindTraininglist",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddltrainmode').empty();
           // $("#ddltrainmode").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.TrainingModeID).text(o.TrainingMode);
                $('#ddltrainmode').append($option);
            });
        }
    })
}
