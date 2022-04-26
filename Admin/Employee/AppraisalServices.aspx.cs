using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;
using System.Net;
using System.Net.Mail;

public partial class Admin_Employee_AppraisalServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> CompanyList(string usrname, string usrrole)
    {
        BLAppraisal da = new BLAppraisal();
        return da.CompanyList(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> EmpList(string id)
    {
        BLAppraisal da = new BLAppraisal();
        return da.EmpList(id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOAppraisal EmployeeDetails(string empid)
    {
        BLAppraisal da = new BLAppraisal();
        return da.EmployeeDetails(empid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> AppraisalDetails(string id, string seldate)
    {
        BLAppraisal da = new BLAppraisal();
        return da.AppraisalDetails(id, seldate);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void insertdetails(BOAppraisal obj)
    {
        BLAppraisal da = new BLAppraisal();
        da.insertdetails(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updatedetails(BOAppraisal obj)
    {
        BLAppraisal da = new BLAppraisal();
        da.updatedetails(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deletedetails(string id, string usrname)
    {
        BLAppraisal da = new BLAppraisal();
        da.deletedetails(id, usrname);
    }


    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> UnitList(string compid)
    {
        BLAppraisal da = new BLAppraisal();
        return da.UnitList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> DepartmentList(string compid)
    {
        BLAppraisal da = new BLAppraisal();
        return da.DepartmentList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> empappraisallist(string unitid, string datefrom, string deptid)
    {
        BLAppraisal da = new BLAppraisal();
        return da.empappraisallist(unitid, datefrom, deptid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> EmpAppraisalDetails(string id)
    {
        BLAppraisal da = new BLAppraisal();
        return da.EmpAppraisalDetails(id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> PendingNewEmpAppraisal(string usrname)
    {
        BLAppraisal da = new BLAppraisal();
        return da.PendingNewEmpAppraisal(usrname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> PendingOldEmpAppraisal(string usrname)
    {
        BLAppraisal da = new BLAppraisal();
        return da.PendingOldEmpAppraisal(usrname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void SendMail(string empid)
    {
        try
        {
            BLAppraisal da = new BLAppraisal();
            BLSearchEmployee bl = new BLSearchEmployee();
            BOAppraisal bo = new BOAppraisal();
            BOSearchEmployee obj = new BOSearchEmployee();
            obj = bl.EmployeeDetails(empid);
            string email = da.getmailid(empid);

            MailMessage msg = new MailMessage();
            if (email == "" || email == null)
            { }
            else
            {
                msg.To.Add(email);
                msg.BodyEncoding = System.Text.Encoding.GetEncoding("utf-8");
                Attachment at = new Attachment(System.Web.HttpContext.Current.Server.MapPath("../../DemoFile/AppraisalForm.xls"));
                msg.Attachments.Add(at);
                msg.Priority = MailPriority.High;
                msg.Subject = "Appraisal Form for Employee " + obj.EmployeeName + " & Employee Code: " + obj.EmployeeCode;
                SmtpClient smtp = new SmtpClient();
                smtp.Send(msg);
            }
        }
        catch
        {
        }
    }
}