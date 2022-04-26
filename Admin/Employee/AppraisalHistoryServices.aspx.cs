using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_AppraisalHistoryServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOAppraisal EmployeeDetails1(string empid)
    {
        BLAppraisalHistory da = new BLAppraisalHistory();
        return da.EmployeeDetails1(empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> empappraisallisthistory(string unitid, string fromyear, string toyear, string deptid)
    {
        BLAppraisalHistory da = new BLAppraisalHistory();
        return da.empappraisallisthistory(unitid, fromyear, toyear, deptid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOAppraisal empappraisallisthislist(string fromyear, string toyear, string id)
    {
        BLAppraisalHistory da = new BLAppraisalHistory();
        return da.empappraisallisthislist(fromyear, toyear, id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAppraisal> empappraisallist(string fromyear, string toyear, string id)
    {
        BLAppraisalHistory da = new BLAppraisalHistory();
        return da.empappraisallist(fromyear, toyear, id);
    }
}