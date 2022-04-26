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

public partial class Admin_Employee_SendMail : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Roles.IsUserInRole(User.Identity.Name, "SuperAdmin"))
        {
            lblrole.InnerText = "SuperAdmin";
        }

        if (Roles.IsUserInRole(User.Identity.Name, "Admin"))
        {
            lblrole.InnerText = "Admin";
        }
    }

    //protected void btnsendmail_click1(object sender, EventArgs e)
    //{
    //    try
    //    {
    //        BLSendMail bl = new BLSendMail();
    //        List<BOSendMail> maillist = bl.BirthMailList();

    //        foreach (var obj in maillist)
    //        {
    //            string body = obj.BirthDayMsg;
    //            MailMessage mail = new MailMessage();
    //            SmtpClient SmtpServer = new SmtpClient();
    //            mail.Subject = "Birthday Mail";

    //            mail.To.Add(obj.Email);
    //            mail.Body = body;
    //            mail.IsBodyHtml = true;
    //            SmtpServer.Send(mail);
    //            mail.To.Clear();
    //        }
    //        Response.Write("<script type='text/javascript'> alert('Mail has been sent successfully...')</script>");
    //    }
    //    catch
    //    {

    //    }
    //}
    //protected void btnmarriagemail_Click(object sender, EventArgs e)
    //{
    //    try
    //    {
    //        BLSendMail bl = new BLSendMail();
    //        List<BOSendMail> maillist = bl.MAMailList();
    //        foreach (var obj in maillist)
    //        {
    //            string body = "Hello " + obj.EmpName + ", <br/><br/>Wish you a very Happy Marriage Anniversary.<br/><br/>Regards,<br/>Team Coca Cola Group";
    //            MailMessage mail = new MailMessage();
    //            SmtpClient SmtpServer = new SmtpClient();
    //            mail.Subject = "Marriage Anniversary Mail";

    //            mail.To.Add(obj.Email);
    //            mail.Body = body;
    //            mail.IsBodyHtml = true;
    //            SmtpServer.Send(mail);
    //            mail.To.Clear();
    //        }
    //        Response.Write("<script type='text/javascript'> alert('Mail has been sent successfully...')</script>");
    //    }
    //    catch
    //    {

    //    }
    //}
    //protected void btnjobannemail_Click(object sender, EventArgs e)
    //{
    //    try
    //    {
    //        BLSendMail bl = new BLSendMail();
    //        List<BOSendMail> maillist = bl.JAMailList();

    //        foreach (var obj in maillist)
    //        {
    //            string body = "Hello " + obj.EmpName + ",<br/><br/> Wish you a very Happy Job Anniversary.<br/><br/>Regards,<br/>Team Coca Cola Group";
    //            MailMessage mail = new MailMessage();
    //            SmtpClient SmtpServer = new SmtpClient();
    //            mail.Subject = "Job Anniversary Mail";

    //            mail.To.Add(obj.Email);
    //            mail.Body = body;
    //            mail.IsBodyHtml = true;
    //            SmtpServer.Send(mail);
    //            mail.To.Clear();
    //        }
    //        Response.Write("<script type='text/javascript'> alert('Mail has been sent successfully...')</script>");
    //    }
    //    catch
    //    {

    //    }
    //}
   
    
}