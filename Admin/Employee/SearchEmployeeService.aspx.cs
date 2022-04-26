using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_SearchEmployeeService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> CompanyList(string usrname, string usrrole)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> UnitList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.UnitList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> DepartmentList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.DepartmentList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> DesignationList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.DesignationList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> ReportingOfficerList(string unit_id)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.ReportingOfficerList(unit_id);
    }
    //this method is used to bind grade list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> GradeList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.GradeList(compid);
    }
    //this method is used to bind education list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> EducationList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.EducationList(compid);
    }
    //this method is used to bind bank list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> BankList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.BankList(compid);
    }
    //this method is used to bind operator list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> OperatorList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.OperatorList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> EmployeeList(string compid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.EmployeeList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOSearchEmployee EmployeeDetails(string empid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.EmployeeDetails(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> EarningList(string empid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.EarningList(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> DeductionList(string empid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.DeductionList(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateEmpDet(BOSearchEmployee hdbo)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.UpdateEmpDet(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateEmpDet2(BOSearchEmployee hdbo)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.UpdateEmpDet2(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateEmpDetFinal(BOSearchEmployee hdbo)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.UpdateEmpDetFinal(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateearndet(string empid, string usrname, List<BOSearchEmployee> earnlist, string lta, string apb, string bonus, string Gratuity)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        da.updateearndet(empid, usrname, earnlist, lta, apb, bonus, Gratuity);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updatedeductiondet(string empid, string usrname, List<BOSearchEmployee> deductlist)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        da.updatedeductiondet(empid, usrname, deductlist);
    }

    //this method is used to bind employee name,code and serial no.
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSearchEmployee> EmployeeListnew(string unitid)
    {
        BLSearchEmployee da = new BLSearchEmployee();
        return da.EmployeeListnew(unitid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkaadhaarcard(string acrd, string id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.chkaadhaarcard(acrd, id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkpancard(string pcrd, string id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.chkpancard(pcrd, id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkdate(string strdate, string enddate)
    {
        string msg = "";
        if (Convert.ToDateTime(strdate) < Convert.ToDateTime(enddate))
        {
        }
        else
        {
            msg = "1";
        }
        return msg;
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkjoindate(string joindate, string dob)
    {
        string msg = "";
        if (Convert.ToDateTime(joindate) > Convert.ToDateTime(dob))
        {
        }
        else
        {
            msg = "1";
        }
        return msg;
    }
}