using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmployeeClaimService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeClaim> CompanyList(string usrname, string usrrole)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.CompanyList(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {

        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.chkempcode(empcode, compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeeClaim EmployeeDetails(string empcode, string compid)
    {

        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.EmployeeDetails(empcode, compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertempclaim(BOEmployeeClaim obj)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.insertempclaim(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeClaim> ClaimList(string compid)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.ClaimList(compid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertempclaimdetails(BOEmployeeClaim obj)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.insertempclaimdetails(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeClaim> AddedClaimList(string claimid)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.AddedClaimList(claimid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteempclaimdetails(string claimid, string usrname)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        da.deleteempclaimdetails(claimid, usrname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeClaim> ClaimDetails(string usrname, string usrrole)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.ClaimDetails(usrname, usrrole);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeeClaim EditClaim(string id)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.EditClaim(id);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void updateempclaimdetails(BOEmployeeClaim obj)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        da.updateempclaimdetails(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteclaimdetails(string claimid, string usrname)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        da.deleteclaimdetails(claimid, usrname);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeClaim> empclaimreport(BOEmployeeClaim obj)
    {
        BLEmployeeClaim da = new BLEmployeeClaim();
        return da.empclaimreport(obj);

    }
}