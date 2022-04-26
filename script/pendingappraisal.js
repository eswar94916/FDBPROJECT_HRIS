function onbodyload() {
    bindnewempapplist();
    bindoldempapplist();
}

function bindnewempapplist() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html() }),
        url: "AppraisalServices.aspx/PendingNewEmpAppraisal",
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
                    //t.row.add(['<center>' + serial_no + '</center>', '<center>' + o.CompanyName + '</center>', '<center>' + o.UnitName + '</center>', '<center>' + o.EmployeeCode + '</center>', '<center>' + o.EmpName + '</center>', '<center>' + o.JoiningDate + '</center>', "<a href=javascript:sendapp(" + o.EmployeeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Send Appraisal </a>"]).draw();
                    t.row.add([serial_no,o.UnitName,o.EmployeeCode,o.EmpName,o.JoiningDate, "<a href=javascript:sendapp(" + o.EmployeeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Send Appraisal </a>"]).draw();
                });
            }
            $('#tbldetail').show();
        }
    });

}

function bindoldempapplist() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'usrname': $('#LoginName1').html() }),
        url: "AppraisalServices.aspx/PendingOldEmpAppraisal",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldetailold').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                t.clear();
                var serial_no = 0;
                $(varList).each(function (index, o) {
                    serial_no = serial_no + 1;
                    //t.row.add(['<center>' + serial_no + '</center>', '<center>' + o.CompanyName + '</center>', '<center>' + o.UnitName + '</center>', '<center>' + o.EmployeeCode + '</center>', '<center>' + o.EmpName + '</center>', '<center>' + o.JoiningDate + '</center>', "<a href=javascript:sendapp(" + o.EmployeeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Send Appraisal </a>"]).draw();
                    t.row.add([serial_no, o.UnitName,  o.EmployeeCode, o.EmpName ,o.JoiningDate , "<a href=javascript:sendapp(" + o.EmployeeID + "); class=\"btn default btn-xs purple\"><i class=\"fa fa-edit\"></i> Send Appraisal </a>"]).draw();
                });
            }
            $('#tbldetailold').show();
        }
    });

}

function sendapp(empid)
{
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'empid': empid }),
        url: "AppraisalServices.aspx/SendMail",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            alert("Mail has been sent successfully....");
        }
    });
}