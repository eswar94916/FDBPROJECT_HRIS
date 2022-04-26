using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmpSalarySlipService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    //this method is used to bind company list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalarySlip> CompanyList(string usrname, string usrrole)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        return da.chkempcode(empcode,compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalarySlip> EmployeeDetails(string empcode, string compid)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        return da.EmployeeDetails(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertsalmain(string empid, string mon, string yr, string usrname, string compid)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        return da.insertsalmain(empid, mon, yr,usrname,compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalarySlip> EmpSallist(string usrname, string usrrole)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        return da.EmpSallist(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteempsaldet(string del_id, string user_name)
    {
        BLEmpSalarySlip da = new BLEmpSalarySlip();
        da.deleteempsaldet(del_id, user_name);
    }
}