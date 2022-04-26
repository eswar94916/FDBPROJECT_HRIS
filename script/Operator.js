var glboprtr = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#tblOperator').hide();
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
        url: "OperatorServices.aspx/CompanyList",
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
//this method is used to insert Operator details
jQuery('#btnsave').click(function () {
    glboprtr = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.OperatorName = $('#txtOperator').val();
    if ($('#txtOperator').val() == null || $('#txtOperator').val() == "") {
        alert("Please enter Operator Name");
        return false;
    }
    AppObj.UserName = $('#LoginName1').html();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "OperatorServices.aspx/InsertDetails",
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
    $('#txtOperator').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    glboprtr = "";
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glboprtr = "";
    showDetails();
});
//this method is used to bind Operator details
function showDetails() {
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role }),
        url: "OperatorServices.aspx/getOperator",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblOperator').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add([serial_no, o.CompanyID, o.OperatorName, "<a href=javascript:editRecord(" + o.OperatorID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.OperatorID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                    t.row.add([serial_no, o.OperatorName, "<a href=javascript:editRecord(" + o.OperatorID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.OperatorID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glboprtr).draw();
            $('#tblOperator').show();
        }
    });
};

var glbId = "";
//this method is used to edit Operator details
function editRecord(UserID) {
    glboprtr = "";
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "OperatorServices.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtOperator').val(varIndent.OperatorName);
        }
    });
}

//here we are creating click event of Reset button
jQuery('#btnreset').click(function () {
    clearfield();
});

//this method is used to update Operator details
jQuery('#btnUpdate').click(function () {

    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.OperatorName = $('#txtOperator').val();
    if ($('#txtOperator').val() == null || $('#txtOperator').val() == "") {
        alert("Please enter Operator Name");
        return false;
    }

    AppObj.UserName = $('#LoginName1').html();
    AppObj.OperatorID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "OperatorServices.aspx/UpdateDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glboprtr = AppObj.OperatorName;
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
    glboprtr = "";
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
                url: "OperatorServices.aspx/delete",
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