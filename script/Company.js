function onload()
{
    $('#btnUpdate,#tblcompany').hide();
}
//this method is used to insert company details
jQuery('#btnsave').click(function () {
   
    AppObj = {};
    AppObj.CompanyName = $('#txtCompany').val();
    if ($('#txtCompany').val() == null || $('#txtCompany').val() == "") {
        alert("Please enter Company Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageCompanyService.aspx/InsertDetails",
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

    $('#txtCompany').val("");  
    $('#btnUpdate').hide();
    $('#btnsave').show();
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    showDetails();
});
//this method is used to bind company details
function showDetails() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: "{}",
        url: "ManageCompanyService.aspx/getcompany",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblcompany').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.CompanyName, "<a href=javascript:editRecord(" + o.CompanyID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.CompanyID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            $('#tblcompany').show();
        }
    });
};

var glbId = "";
//this method is used to edit company details
function editRecord(UserID) {
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageCompanyService.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#txtCompany').val(varIndent.CompanyName);    
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update company details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyName = $('#txtCompany').val();
    if ($('#txtCompany').val() == null || $('#txtCompany').val() == "") {
        alert("Please enter Company Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.CompanyID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageCompanyService.aspx/UpdateDetails",
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

//this method is used to delete company details
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
                url: "ManageCompanyService.aspx/delete",
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