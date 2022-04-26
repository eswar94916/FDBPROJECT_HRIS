var glbEmpid = "";
var glbempcode = "";

function onbodyload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    bindcompany();
    bindtraining();
    $('#btnUpdate,#tbldetail').hide();
}
//this method used to bind company list
function bindcompany() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "../Configurations/ManageTrainingModeServicesPage.aspx/CompanyList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcomp').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcomp').append($option);
            });
            bindtraining();
        }
    });
}
$('#ddlcomp').change(function () {
    bindtraining();
});
$("#TxtEmployeecode").change(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcomp').val(), }),
        url: "EmployeeTrainingServices.aspx/chkempcode",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Employee Code does not exist');
                $("#TxtEmployeecode").val("");
                $("#TxtEmployeeName").val("");
            }
            if (varIndentList == "2") {
                EmployeeLeaveDetails()
            }
        }
    });
});
//this method used to bind employee name
function EmployeeLeaveDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empcode': $('#TxtEmployeecode').val(), 'compid': $('#ddlcomp').val(), }),
        url: "EmployeeTrainingServices.aspx/EmployeeDetails",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $(varList).each(function (index, o) {
                $("#TxtEmployeeName").val(o.EmpName);
                glbEmpid = o.EmpID;

            });
        }
    });
}
//this method used to bind training name
function bindtraining() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrrole': $('#lblrole').html() }),
        url: "EmployeeTrainingServices.aspx/trainingdetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddltrainame').empty();
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.TrainingID).text(o.TrainingName);
                $('#ddltrainame').append($option);
            });
        }
    });
}
//this method used to insert a employee leave details

jQuery('#btnsave').click(function () {
    glbempcode = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "" || AppObj.CompanyID == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please  Enter Employee code");
        return false;
    }
    AppObj.EmpID = glbEmpid;
    AppObj.TrainingID = $('#ddltrainame').val();
    if ($('#ddltrainame').val() == null || $('#ddltrainame').val() == "") {
        alert("Please select Trainig Name");
        return false;
    }
   
    AppObj.TrainingInstituteName = $('#txttraininstitute').val();
    if ($('#txttraininstitute').val() == null || $('#txttraininstitute').val() == "") {
        alert("Please Enter Training Institute Name");
        return false;
    }
    AppObj.TrainingLocationName = $('#txttrainlocation').val();
    if ($('#txttrainlocation').val() == null || $('#txttrainlocation').val() == "") {
        alert("Please Enter Training Location Name");
        return false;
    }
    AppObj.TrainingStartDate = $('#txtstartdate').val();
    if ($('#txtstartdate').val() == null || $('#txtstartdate').val() == "") {
        alert("Please Select Training Start Date");
        return false;
    }
    AppObj.TrainingEndDate = $('#txtenddate').val();
    if ($('#txtenddate').val() == null || $('#txtenddate').val() == "") {
        alert("Please Select Training End Date");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeTrainingServices.aspx/inserttraningdetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            alert("Data Has Been Saved Successfully....");
            clearfield();
            showDetails();
        }
    });
});
jQuery('#btnshow').click(function () {
    glbempcode = "";
    showDetails();
});
function clearfield() {
    //$('#ddlcomp').val("0").trigger('change');
    $('#TxtEmployeecode').val("");
    $('#TxtEmployeeName').val("").trigger('change');
    $('#ddltrainame').val("");
    $('#txtstartdate').val("");
    $('#txtenddate').val("");
    $('#txttraininstitute').val("");
    $('#txttrainlocation').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbempcode = "";
}
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html(), 'usrole': $('#lblrole').html() }),
        url: "EmployeeTrainingServices.aspx/EmployeeTrainiNameshow",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldetail').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    var sttxt = "";
                    if (o.TrainingStatus == "Completed")
                    {
                        sttxt = "Completed";
                    }
                    if (o.TrainingStatus == "Incomplete") {
                        sttxt = "Incomplete&nbsp;&nbsp;<a href=javascript:markcomplete(" + o.EmpTrainingID + "); class=\"btn default btn-xs green\"><i class=\"fa fa-check\"></i> Mark Complete </a>";
                    }
                    //t.row.add([serial_no, o.CompanyID, o.EmpCode, o.EmpName, o.TrainingID, o.TrainingStartDate, o.TrainingEndDate, "<a href=javascript:editRecord(" + o.EmpTrainingID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.EmpTrainingID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.EmpCode, o.EmpName, o.TrainingID, o.TrainingInstituteName, o.TrainingLocationName, o.TrainingStartDate, o.TrainingEndDate, sttxt, "<a href=javascript:editRecord(" + o.EmpTrainingID + "," + o.EmpID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleterecord(" + o.EmpTrainingID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbempcode).draw();
            $('#tbldetail').show();
        }
    });
};
var editId = "";
// this method is used to edit Employee leave  
function editRecord(UserID, EmpID) {
    glbempcode = "";
    editId = UserID;
    glbEmpid = EmpID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID, 'empid': EmpID }),
        url: "EmployeeTrainingServices.aspx/EditTrainingList",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#TxtEmployeecode').val(varIndent.EmpCode);
            $('#TxtEmployeeName').val(varIndent.EmpName);
            $('#ddlcomp').val(varIndent.CompanyID).trigger('change');
            $('#ddltrainame').val(varIndent.TrainingID).trigger('change');
            $('#txtstartdate').val(varIndent.TrainingStartDate);
            $('#txtenddate').val(varIndent.TrainingEndDate);
            $('#txttraininstitute').val(varIndent.TrainingInstituteName);
            $('#txttrainlocation').val(varIndent.TrainingLocationName);
        }
    });
}
//this method used to update Employeeleave Details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcomp').val();
    if ($('#ddlcomp').val() == null || $('#ddlcomp').val() == "") {
        alert("Please select Company");
        return false;
    }

    AppObj.EmpCode = $('#TxtEmployeecode').val();
    if ($('#TxtEmployeecode').val() == null || $('#TxtEmployeecode').val() == "") {
        alert("Please  Enter Employee code");
        return false;
    }
    AppObj.EmpID = glbEmpid;

    AppObj.TrainingID = $('#ddltrainame').val();
    if ($('#ddltrainame').val() == null || $('#ddltrainame').val() == "") {
        alert("Please select Trainig Name");
        return false;
    }

   
    AppObj.TrainingInstituteName = $('#txttraininstitute').val();
    if ($('#txttraininstitute').val() == null || $('#txttraininstitute').val() == "") {
        alert("Please  Enter Training Institute Name");
        return false;
    }
    AppObj.TrainingLocationName = $('#txttrainlocation').val();
    if ($('#txttrainlocation').val() == null || $('#txttrainlocation').val() == "") {
        alert("Please  Enter Training Location Name");
        return false;
    }
    AppObj.TrainingStartDate = $('#txtstartdate').val();
    if ($('#txtstartdate').val() == null || $('#txtstartdate').val() == "") {
        alert("Please Select Training Start Date");
        return false;
    }
    AppObj.TrainingEndDate = $('#txtenddate').val();
    if ($('#txtenddate').val() == null || $('#txtenddate').val() == "") {
        alert("Please Select Training End Date");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();
    AppObj.EmpTrainingID = editId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'obj': AppObj }),
        url: "EmployeeTrainingServices.aspx/UpdatetraningDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            alert("Data Has Been Updated Successfully....");
            clearfield();
            glbempcode = AppObj.EmpCode;
            showDetails();
        }
    });
});
//this method used to Delete employeeleave details
function deleterecord(delid) {
    glbempcode = "";
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
                url: "EmployeeTrainingServices.aspx/deleteEmployeetraningDetails",
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

function markcomplete(id) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': id, 'usrname': $('#LoginName1').html() }),
        url: "EmployeeTrainingServices.aspx/Updatetraningstatus",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            alert("Data saved successfully..");
            showDetails();
        }
    });
}