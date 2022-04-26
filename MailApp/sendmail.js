function SendMail() {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    if (parseInt(hours) == 10) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: '{}',
            url: "SendMailService.aspx/SendMailDaily",
            dataType: "json",
            async: false,
            success: function (data, status) {
            }
        })
    }
}
SendMail();
setInterval(SendMail, 3600000);