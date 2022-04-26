using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmployeeSignUpServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> CompanyList(string usrname, string usrrole)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> UnitList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.UnitList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> DepartmentList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.DepartmentList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> RoleList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.RoleList(compid);
    }


    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> DesignationList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.DesignationList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> ReportingOfficerList(string unit_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.ReportingOfficerList(unit_id);
    }
    //this method is used to bind grade list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> GradeList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.GradeList(compid);
    }
    //this method is used to bind education list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> EducationList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.EducationList(compid);
    }
    //this method is used to bind bank list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> BankList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.BankList(compid);
    }
    //this method is used to bind operator list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> OperatorList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.OperatorList(compid);
    }
    //this method is used to bind location list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> LocationList(string compid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.LocationList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> EarningList(string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.EarningList(empid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> DeductionList(string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.DeductionList(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.chkempcode(empcode);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertempdetstep1(BOEmployeeSignUp hdbo)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.insertempdetstep1(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeeSignUp EmployeeDetails(string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.EmployeeDetails(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string updateempdetailsstep1(BOEmployeeSignUp hdbo, string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.updateempdetailsstep1(hdbo, empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertempdetstep2(BOEmployeeSignUp hdbo)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.insertempdetstep2(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOSearchEmployee EmployeeDetailsstep2(string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.EmployeeDetailsstep2(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateEmpDet2(BOSearchEmployee hdbo, string empid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.UpdateEmpDet2(hdbo, empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getphotoname(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getphotoname(emp_id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempphotopath(string empid, string usrname, string photopath)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempphotopath(empid, usrname, photopath);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getresumename(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getresumename(emp_id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempresumepath(string empid, string usrname, string path)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempresumepath(empid, usrname, path);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getmarksheetname(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getmarksheetname(emp_id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempmarksheetpath(string empid, string usrname, string path)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempmarksheetpath(empid, usrname, path);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getreflettername(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getreflettername(emp_id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateemprefletterpath(string empid, string usrname, string path)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateemprefletterpath(empid, usrname, path);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getchequename(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getchequename(emp_id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempchequepath(string empid, string usrname, string path)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempchequepath(empid, usrname, path);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string getaddidproofname(string emp_id)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.getaddidproofname(emp_id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempaddidproofpath(string empid, string usrname, string path)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempaddidproofpath(empid, usrname, path);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void insertearndet(string empid, string usrname, List<BOEmployeeSignUp> earnlist, string lta, string apb, string emp_pf, string emp_esi, string bonus, string Gratuity)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.insertearndet(empid, usrname, earnlist, lta, apb, emp_pf, emp_esi, bonus, Gratuity);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void insertdeductiondet(string empid, string usrname, List<BOEmployeeSignUp> deductlist)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.insertdeductiondet(empid, usrname, deductlist);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempdetfinal(BOEmployeeSignUp obj)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        da.updateempdetfinal(obj);
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


    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkmrgann(string joindate, string dob)
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

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> DocumentStatusList(string unit_id, string depid)
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.DocumentStatusList(unit_id, depid);
    }
}