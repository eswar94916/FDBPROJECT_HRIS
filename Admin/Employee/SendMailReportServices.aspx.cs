using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;


public partial class Admin_Employee_SendMailReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }    
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> BirthMailListReort(string unitid, string depid, string mon)
    {
        BLSendMail da = new BLSendMail();
        return da.BirthMailListReort(unitid, depid, mon);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> MAMailListReort(string unitid, string depid, string mon)
    {
        BLSendMail da = new BLSendMail();
        return da.MAMailListReort(unitid, depid, mon);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOSendMail> JAMailListReort(string unitid, string depid, string mon)
    {
        BLSendMail da = new BLSendMail();
        return da.JAMailListReort(unitid, depid, mon);
    }
}