using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_EmployeeTransferServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTransferDet> CompanyList(string usrname, string usrrole)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.CompanyList(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTransferDet> UnitList(string compid, string empcode, string flg, string transfer_id)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.UnitList(compid, empcode, flg,transfer_id);
    }
    //[System.Web.Services.WebMethod()]
    //[System.Web.Script.Services.ScriptMethod()]
    //public static List<BOEmpTransferDet> UnitListEdit(string compid, string empcode)
    //{
    //    BLEmpTransferDet da = new BLEmpTransferDet();
    //    return da.UnitListEdit(compid, empcode);
    //}
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.chkempcode(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpTransferDet EmployeeDetails(string empcode, string compid)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.EmployeeDetails(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void inserttransferdet(BOEmpTransferDet obj)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        da.inserttransferdet(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpTransferDet> EmpTransferDet(string usrname, string usrole)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.EmpTransferDet(usrname, usrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpTransferDet EditTransferList(string id)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.EditTransferList(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdatetransferDetails(BOEmpTransferDet obj)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        return da.UpdatetransferDetails(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteEmptransferDetails(string del_id, string user_name)
    {
        BLEmpTransferDet da = new BLEmpTransferDet();
        da.deleteEmptransferDetails(del_id, user_name);
    }
}