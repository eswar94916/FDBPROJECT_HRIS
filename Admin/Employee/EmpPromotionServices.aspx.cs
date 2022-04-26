using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmpPromotionServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    //this method is used to bind company list
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpPromotion> CompanyList(string usrname, string usrrole)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.CompanyList(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.chkempcode(empcode, compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpPromotion EmployeeDetails(string empcode, string compid)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.EmployeeDetails(empcode, compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void insertprodet(BOEmpPromotion hdbo)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        da.insertprodet(hdbo);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpPromotion> promotionlist(string usrname, string usrrole)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.promotionlist(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deletepromotiondetails(string delid, string usrname)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        da.deletepromotiondetails(delid, usrname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmpPromotion editemppromotion(string empproid)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.editemppromotion(empproid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updatepromotiondetails(BOEmpPromotion obj)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        da.updatepromotiondetails(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmpPromotion> emppromotionreport(string compid, string datefrom, string dateto, string unit, string dept)
    {
        BLEmpPromotion da = new BLEmpPromotion();
        return da.emppromotionreport(compid, datefrom, dateto, unit, dept);
    }
}