var glbholname = "";

function bodyonload() {
    if ($('#lblrole').html() == "Admin") {
        $('#divcomp').hide();
    }
    if ($('#lblrole').html() == "SuperAdmin") {
        $('#divcomp').show();
    }
    $('#btnUpdate,#divDepartment').hide();
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
        url: "HolidayServices.aspx/CompanyList",
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
    glbholname = "";
    AppObj = {};
    AppObj.CompanyID = $('#ddlcompany').val();
    if (AppObj.CompanyID == "0" || AppObj.CompanyID == "Select.." || AppObj.CompanyID == "") {
        alert("Please Select Company Name");
        return false;
    }
    AppObj.HolidayName = $('#txtholname').val();
    if ($('#txtholname').val() == null || $('#txtholname').val() == "") {
        alert("Please enter Holiday Name");
        return false;
    }
    AppObj.StartFrom = $('#txtstartdate').val();
    if (AppObj.StartFrom == "" || AppObj.StartFrom == null) {
        alert("Please Select Start From Date");
        return false;
    }
    AppObj.To = $('#txtenddate').val();
    if (AppObj.To == "" || AppObj.To == null) {
        alert("Please Select To Date");
        return false;
    }
    AppObj.NoofDays = $('#noofDays').html();
    AppObj.Remarks = $('#txtremark').val();
    AppObj.UserName = $('#LoginName1').html();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "HolidayServices.aspx/InsertDetails",
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
                alert("This Holiday Name already added for this year!!");
                clearfield();
            }
        }
    });
});
//this method is clear fields of form
function clearfield() {
    //$('#ddlcompany').val("0").trigger('change');
    $('#txtholname').val("");
    $('#txtstartdate').val("");
    $('#txtenddate').val("");
    $('#txtremark').val("");
    $('#btnUpdate').hide();
    $('#btnsave').show();
    $('#noofDays').html("");
    glbholname = "";
}
//here we are creating click event of Show button
jQuery('#btnshow').click(function () {
    glbholname = "";
    $('#ddlmonth').val("0").trigger('change');
    $('#ddlyear').val("0").trigger('change');
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
        url: "HolidayServices.aspx/getholiday",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblhol').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.HolidayName, o.StartFrom, o.To, o.NoofDays, o.Remarks, "<a href=javascript:editRecord(" + o.HolidayID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.HolidayID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbholname).draw();
            $('#divDepartment').show();
        }
    });
};


jQuery('#btnshowdet').click(function () {
    glbholname = "";
    showDetailsmonyr();
});

function showDetailsmonyr() {
    var Username = $('#LoginName1').html();
    var role = $('#lblrole').html();
    var mon = $('#ddlmonth').val();
    if (mon == "" || mon == null || mon == "0") {
        alert("Please Select Month");
        return false;
    }
    var yer = $('#ddlyear').val();
    if (yer == "" || yer == null || yer == "0") {
        alert("Please Select Year");
        return false;
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': Username, 'usrrole': role, 'mon': mon, 'yr': yer }),
        url: "HolidayServices.aspx/getholidaymonyr",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tblhol').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    t.row.add([serial_no, o.HolidayName, o.StartFrom, o.To, o.NoofDays, o.Remarks, "<a href=javascript:editRecord(" + o.HolidayID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Edit </a>", "<a href=javascript:deleteRecord(" + o.HolidayID + "); class=\"btn default btn-xs red\"><i class=\"fa fa-edit\"></i> Delete </a>"]).draw();
                });
            }
            t.search(glbholname).draw();
            $('#divDepartment').show();
        }
    });
};

var glbId = "";
//this method is used to edit education details
function editRecord(UserID) {
    glbholname = "";
    glbId = UserID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'id': UserID }),
        url: "HolidayServices.aspx/edit",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndent = (data.d);
            $('#btnUpdate').show();
            $('#btnsave').hide();
            $('#ddlcompany').val(varIndent.CompanyID).trigger('change');
            $('#txtholname').val(varIndent.HolidayName);
            $('#txtstartdate').val(varIndent.StartFrom);
            $('#txtenddate').val(varIndent.To);
            $('#noofDays').html(varIndent.NoofDays);
            $('#txtremark').val(varIndent.Remarks).trigger('change');
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
    AppObj.HolidayName = $('#txtholname').val();
    if ($('#txtholname').val() == null || $('#txtholname').val() == "") {
        alert("Please enter Holiday Name");
        return false;
    }
    AppObj.StartFrom = $('#txtstartdate').val();
    if (AppObj.StartFrom == "" || AppObj.StartFrom == null) {
        alert("Please Select Start From Date");
        return false;
    }
    AppObj.To = $('#txtenddate').val();
    if (AppObj.To == "" || AppObj.To == null) {
        alert("Please Select To Date");
        return false;
    }
    AppObj.NoofDays = $('#noofDays').html();
    AppObj.Remarks = $('#txtremark').val();
    AppObj.UserName = $('#LoginName1').html();
    AppObj.HolidayID = glbId;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'hdbo': AppObj }),
        url: "HolidayServices.aspx/UpdateDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varIndentList = (data.d);
            if (varIndentList == "1") {
                alert('Data Has Been Updated Successfully....');
                clearfield();
                glbholname = AppObj.HolidayName;
                showDetails();
            }
            if (varIndentList == "2") {
                alert("Entered Holiday Name already added for this year!!");
            }
        }
    });
});

//this method is used to delete education details
function deleteRecord(HosID) {
    glbholname = "";
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
                url: "HolidayServices.aspx/delete",
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


function CalculateDiff() {
    if ($("#txtstartdate").val() == "" || $("#txtstartdate").val() == null || $("#txtenddate").val() == "" || $("#txtenddate").val() == null) { }
    else {
        if ($("#txtstartdate").val() == $("#txtenddate").val()) {
            document.getElementById("noofDays").innerHTML = Math.round("1");
        }
        else {
            var day_start = new Date($("#txtstartdate").val());
            var day_end = new Date($("#txtenddate").val());
            var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
            document.getElementById("noofDays").innerHTML = Math.round(total_days + 1);
        }
    }
}