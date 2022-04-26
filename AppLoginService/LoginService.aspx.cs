using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using BusinessLogicLayer;
using BusinessObjectLayer;
using DataAccessLayer;


public partial class AppLoginService_LoginService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UserAuthenticate(string username, string password)
    {
        string msg = "";
        MembershipUser user = Membership.GetUser(username);
        try
        {
            if (Membership.ValidateUser(username, password) && Roles.IsUserInRole(user.UserName, "admin"))
            { msg = "1"; }
            else
            { msg = "2"; }
            return msg;
        }
        catch (Exception ex)
        {
            return null;
        }

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string companyname(string admin)
    {
        BLApp da = new BLApp();
        return da.companyname(admin);
    }

  
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOApp> unitlist(string compname)
    {
        BLApp da = new BLApp();
        return da.unitlist(compname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOApp> emplist(string unitid)
    {
        BLApp da = new BLApp();
        return da.emplist(unitid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
     public static BOApp empdetails(string Empid)
     {
         BLApp da = new BLApp();
         return da.empdetails(Empid);
     }

      [System.Web.Services.WebMethod()]
      [System.Web.Script.Services.ScriptMethod()] 
    public static List<BOApp> salarydetails(string Empid)
    {
        BLApp da = new BLApp();
        return da.salarydetails(Empid);
    }

}