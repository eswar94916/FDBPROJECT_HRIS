using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_PendingAPBServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOPendingAPB> emppendingapb(BOPendingAPB obj)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.emppendingapb(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOPendingAPB> empbonuslist(string unitid, string depid)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.empbonuslist(unitid, depid);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string insertapb(BOPendingAPB obj)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.insertapb(obj);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOPendingAPB> empapblist()
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.empapblist();
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOPendingAPB edit(string id)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.edit(id);
    }
    
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateDetails(BOPendingAPB hdbo)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.UpdateDetails(hdbo);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLPendingAPB da = new BLPendingAPB();
        return da.chkempcode(empcode, compid);
    }
}