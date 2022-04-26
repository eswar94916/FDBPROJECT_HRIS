using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_ViewEmpDetService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOViewEmpDet> CompanyList(string usrname, string usrrole)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOViewEmpDet> UnitList(string compid)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.UnitList(compid);
    }

    //this method is used to bind department list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOViewEmpDet> DepartmentList(string compid)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.DepartmentList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOViewEmpDet> EmpDetList(string unit_id, string depid)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.EmpDetList(unit_id, depid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOViewEmpDet AppEmpDetList(string id)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.AppEmpDetList(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOViewEmpDet FNFEmpDetList(string id)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.FNFEmpDetList(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateFNFDetails(BOViewEmpDet hdbo)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.UpdateFNFDetails(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOViewEmpDet> empearninglist(string id, string mon, string year)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.empearninglist(id, mon, year);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOViewEmpDet empearndeduct(string id, string mon, string year)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.empearndeduct(id, mon, year);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOViewEmpDet gerempdetails(string id)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        return da.gerempdetails(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void delempdet(string id, string usrname)
    {
        BLViewEmpDet da = new BLViewEmpDet();
        da.delempdet(id, usrname);
    }
}