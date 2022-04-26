using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataAccessLayer;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class SuperAdmin_ManageCompanyService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string InsertDetails(BOManageCompany hdbo)
    {
        BLManageCompany da = new BLManageCompany();
        return da.InsertDetails(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOManageCompany> getcompany()
    {
        BLManageCompany da = new BLManageCompany();
        return da.getcompany();
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOManageCompany edit(string id)
    {
        BLManageCompany da = new BLManageCompany();
        return da.edit(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdateDetails(BOManageCompany hdbo)
    {
        BLManageCompany da = new BLManageCompany();
        return da.UpdateDetails(hdbo);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void delete(string del_id, string user_name)
    {
        BLManageCompany da = new BLManageCompany();
        da.delete(del_id, user_name);
    }
}