using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_EmpJoiningReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpJoiningReport> CompanyList(string usrname, string usrrole)
    {
        BLEmpJoiningReport da = new BLEmpJoiningReport();
        return da.CompanyList(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpJoiningReport> UnitList(string compid)
    {
        BLEmpJoiningReport da = new BLEmpJoiningReport();
        return da.UnitList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpJoiningReport> DepartmentList(string compid)
    {
        BLEmpJoiningReport da = new BLEmpJoiningReport();
        return da.DepartmentList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpJoiningReport> EmpList(string id, string filtertype)
    {
        BLEmpJoiningReport da = new BLEmpJoiningReport();
        return da.EmpList(id, filtertype);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpJoiningReport> empjoinigreport(BOEmpJoiningReport obj)
    {
        BLEmpJoiningReport da = new BLEmpJoiningReport();
        return da.empjoinigreport(obj);
    }
}