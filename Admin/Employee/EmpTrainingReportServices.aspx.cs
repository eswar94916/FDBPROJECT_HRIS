using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmpTrainingReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTrainingReport> CompanyList(string usrname, string usrrole)
    {
        BLEmpTrainingReport da = new BLEmpTrainingReport();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTrainingReport> UnitList(string compid)
    {
        BLEmpTrainingReport da = new BLEmpTrainingReport();
        return da.UnitList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTrainingReport> DepartmentList(string compid)
    {
        BLEmpTrainingReport da = new BLEmpTrainingReport();
        return da.DepartmentList(compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTrainingReport> EmpList(string id, string filtertype)
    {
        BLEmpTrainingReport da = new BLEmpTrainingReport();
        return da.EmpList(id, filtertype);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTrainingReport> emptrainingreport(BOEmpTrainingReport obj)
    {
        BLEmpTrainingReport da = new BLEmpTrainingReport();
        return da.emptrainingreport(obj);
    }
}