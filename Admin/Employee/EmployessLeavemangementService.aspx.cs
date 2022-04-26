using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_EmployessLeavemangementService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> bindleavedetails(string id)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.bindleavedetails(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.chkempcode(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> EmployeeDetails(string empcode, string compid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.EmployeeDetails(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void insertempleavedetails(BOEmployeesLeaveManagement obj)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        da.insertempleavedetails(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> Employeeleaveshow(string usrname, string usrole)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.Employeeleaveshow(usrname, usrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeesLeaveManagement EditliveEmployee(string id)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.EditliveEmployee(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateEmployeeLeaveDetails(BOEmployeesLeaveManagement obj)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.UpdateEmployeeLeaveDetails(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteEmployeeLeaveDetails(string del_id, string user_name)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        da.deleteEmployeeLeaveDetails(del_id, user_name);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeesLeaveManagement leaveopening(string compid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.leaveopening(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> leaveledger(string unitid, string deptid, string yr, string compid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.leaveledger(unitid, deptid, yr, compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> empleavedaysdetails(string empid, string yr, string leaveid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.empleavedaysdetails(empid, yr, leaveid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeesLeaveManagement empdetails(string empid, string mon, string yr, string compid, string selyr, string unitid)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.empdetails(empid, mon, yr, compid, selyr, unitid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeesLeaveManagement> empleaveledger(string unitid, string deptid, string yr, string compid, string mon)
    {
        BLEmployessLeaveManagement da = new BLEmployessLeaveManagement();
        return da.empleaveledger(unitid, deptid, yr, compid, mon);
    }
}