using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_EmpResignReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpResignReport> CompanyList(string usrname, string usrrole)
    {
        BLEmpResignReport da = new BLEmpResignReport();
        return da.CompanyList(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpResignReport> UnitList(string compid)
    {
        BLEmpResignReport da = new BLEmpResignReport();
        return da.UnitList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpResignReport> DepartmentList(string compid)
    {
        BLEmpResignReport da = new BLEmpResignReport();
        return da.DepartmentList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpResignReport> EmpList(string id, string filtertype)
    {
        BLEmpResignReport da = new BLEmpResignReport();
        return da.EmpList(id, filtertype);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpResignReport> empresignreport(BOEmpResignReport obj)
    {
        BLEmpResignReport da = new BLEmpResignReport();
        return da.empresignreport(obj);
    }
}