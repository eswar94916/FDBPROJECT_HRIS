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

public partial class Admin_Employee_SendMailService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> BirthMailList(string unitid, string depid)
    {
        BLSendMail da = new BLSendMail();
        return da.BirthMailList(unitid, depid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void birthdetails(List<BOSendMail> birthlist)
    {
        BLSendMail da = new BLSendMail();
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
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> MAMailList(string unitid, string depid)
    {
        BLSendMail da = new BLSendMail();
        return da.MAMailList(unitid, depid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void Marriagedetails(List<BOSendMail> MAMailList)
    {
        BLSendMail da = new BLSendMail();
        foreach (var obj in MAMailList)
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

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> JAMailList(string unitid, string depid)
    {
        BLSendMail da = new BLSendMail();
        return da.JAMailList(unitid, depid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void JobAnnivrydetls(List<BOSendMail> JAMailList)
    {
        BLSendMail da = new BLSendMail();
        foreach (var obj in JAMailList)
        {
            string body = obj.JobMsg;
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient();
            mail.Subject = "Job Anniversary Mail";

            mail.To.Add(obj.Email);
            mail.Body = body;
            mail.IsBodyHtml = true;
            SmtpServer.Send(mail);
            mail.To.Clear();
        }
    }

   
}