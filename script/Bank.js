var glbbank = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tblBank').hide();
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
        url: "ManageBankServices.aspx/CompanyList",
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
//this method is used to insert education details
jQuery('#btnsave').click(function () {
    glbbank = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.BankName = $('#txtBank').val();
    if ($('#txtBank').val() == null || $('#txtBank').val() == "") {
        alert("Please enter Bank Name");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageBankServices.aspx/InsertDetails",
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
    $('#txtBank').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glbbank = "";
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbbank = "";
    showDetails();
});
//this method is used to bind education details
function showDetails() {
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "ManageBankServices.aspx/getbank",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblBank').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $('#tblBank').css('text-align', 'left');
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.BankName, "<a href=javascript:editRecord(" + o.BankID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.BankID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.BankName, "<a href=javascript:editRecord(" + o.BankID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.BankID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbbank).draw();
            $('#tblBank').show();
        }
    });
};

var glbId = "";
//this method is used to edit education details
function editRecord(UserID) {
    glbbank = "";
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "ManageBankServices.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtBank').val(varIndent.BankName);
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update education details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.BankName = $('#txtBank').val();
    if ($('#txtBank').val() == null || $('#txtBank').val() == "") {
        alert("Please enter Bank Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.BankID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "ManageBankServices.aspx/UpdateDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbbank = AppObj.BankName;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("This Data already exist!!");
            }
        }
    });
});

//this method is used to delete education details
function deleteRecord(HosID) {
    glbbank = "";
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
                url: "ManageBankServices.aspx/delete",
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