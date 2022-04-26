function onbodyload() {
    $('#divattdetails').hide();
}

jQuery('#btnshow').click(function () {
    showDetails();
});

//this method is used to bind company details
function showDetails() {

    $('#divattdetails').show();
    var t = $('#tbldetails').DataTable();
    t.clear().draw();

};

jQuery('#btnshowatt').click(function () {
    var unit = $('#ddlunit').val();
    if (unit == "" || unit == null) {
        alert("Please select Unit");
        return false;
    }
    var mon = $('#ddlmon').val();
    var yr = $('#ddlyr').val();
    if (mon == "" || mon == "0" || mon == null || yr == "" || yr == null || yr == "0") {
        alert("Please select both Month & Year");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ 'unitid': unit, 'mon': mon, 'yr': yr }),
        url: "ImportAttendanceServices.aspx/EmpAttendanceDetails",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            var t = $('#tbldetails').DataTable();
            if (varList.length == 0) {
                t.clear().draw();
            }
            else {
                var slno = 0;
                t.clear();
                $(varList).each(function (index, o) {
                    slno = slno + 1;
                    t.row.add([slno, o.EmpCode, o.EmpName, o.EmpPaidDays, o.WeekOffSunday, o.OfficeDuty, o.Leaves, o.Absent, o.HolidayOff, o.NoofDays, o.Arrear, o.Bonus, o.LTA, o.APB, o.Gratuity]).draw();
                });
            }
            $('#divattdetails').show();
        }
    });
});