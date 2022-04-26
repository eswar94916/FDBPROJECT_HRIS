var glbdeptname = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tblDepartment').hide();
    companydetials();
}
//this method is used to bind company details
function companydetials() {
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageDepartmentService.aspx/CompanyList",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var varList = (data.d);
            $('#ddlcompany').empty();
            //  $("#ddlcompany").append($("<option></option>").val("0").html("Select.."));
            $(varList).each(function (index, o) {
                var $option = $("<option/>").attr("value", o.CompanyID).text(o.CompanyName);
                $('#ddlcompany').append($option);

            });
        }
    });
}
//this method is used to insert department details
jQuery('#btnsave').click(function () {
    glbdeptname = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.DepartmentName = $('#txtDepartment').val();
    if ($('#txtDepartment').val() == null || $('#txtDepartment').val() == "") {
        alert("Please enter Department Name");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageDepartmentService.aspx/InsertDetails",
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
    $('#txtDepartment').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbdeptname = "";
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbdeptname = "";
    showDetails();
});
//this method is used to bind department details
function showDetails() {
  
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageDepartmentService.aspx/getdepartment",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblDepartment').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $('#tblDepartment').css('text-align', 'left');
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.DepartmentName, "<a href=javascript:editRecord(" + o.DepartmentID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.DepartmentID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.DepartmentName, "<a href=javascript:editRecord(" + o.DepartmentID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.DepartmentID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbdeptname).draw();
            $('#tblDepartment').show();
        }
    });
};

var glbId = "";
//this method is used to edit department details
function editRecord(UserID) {
    glbdeptname = "";
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageDepartmentService.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtDepartment').val(varIndent.DepartmentName);
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update department details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.DepartmentName = $('#txtDepartment').val();
    if ($('#txtDepartment').val() == null || $('#txtDepartment').val() == "") {
        alert("Please enter Department Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.DepartmentID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageDepartmentService.aspx/UpdateDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbdeptname = AppObj.DepartmentName;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Data already exist!!");
            }
        }
    });
});

//this method is used to delete department details
function deleteRecord(HosID) {
    glbdeptname = "";
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
                url: "ManageDepartmentService.aspx/delete",
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