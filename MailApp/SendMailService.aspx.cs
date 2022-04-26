using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using System.Net.Mail;
using BusinessLogicLayer;
using BusinessObjectLayer;
using System.Web.Security;

public partial class SendMailService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void SendMailDaily()
    {
        try
        {
            BLSendMail da = new BLSendMail();
            List<BOSendMail> birthlist = da.BirthDayMailList();

            foreach (var obj in birthlist)
            {
                string body = obj.BirthDayMsg;
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient();
                mail.Subject = "Birthday Mail";

                mail.To.Add(obj.Email);
                mail.Body = body;
                mail.IsBodyHtml = true;
                SmtpServer.Send(mail);
                mail.To.Clear();
            }

            List<BOSendMail> joblist = da.JobAMailList();

            foreach (var obj in joblist)
            {
                string body = obj.JobMsg;
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient();
                mail.Subject = "Jon Anniversary Mail";

                mail.To.Add(obj.Email);
                mail.Body = body;
                mail.IsBodyHtml = true;
                SmtpServer.Send(mail);
                mail.To.Clear();
            }

            List<BOSendMail> malist = da.MarriageAMailList();

            foreach (var obj in malist)
            {
                string body = obj.MarriageMsg;
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient();
                mail.Subject = "Marriage Anniversary Mail";

                mail.To.Add(obj.Email);
                mail.Body = body;
                mail.IsBodyHtml = true;
                SmtpServer.Send(mail);
                mail.To.Clear();
            }
        }
        catch
        {
        }
    }
}