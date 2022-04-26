using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_EmpSalReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalReport> empsalreport(BOEmpSalReport obj)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.empsalreport(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalReport> empsalfilterreport(BOEmpSalReport obj, string value)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.empsalfilterreport(obj, value);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpSalReport printsalslip(string id, string mon, string year, string unitid)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.printsalslip(id, mon, year,unitid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalReport> empearninglist(string id, string mon, string year)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.empearninglist(id, mon, year);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalReport> empdeductlist(string id, string mon, string year)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.empdeductlist(id, mon, year);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpSalReport leavedet(string id, string mon, string year, string compid, string unitid)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.leavedet(id, mon, year, compid,unitid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpSalReport> EmpSalCrossList(string unitid, string mon, string year)
    {
        BLEmpSalReport da = new BLEmpSalReport();
        return da.EmpSalCrossList(unitid, mon, year);
    }
}