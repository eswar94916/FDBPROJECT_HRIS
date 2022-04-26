using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_DashboardService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeSignUp> totalemployee()
    {
        BLEmployeeSignUp da = new BLEmployeeSignUp();
        return da.totalemployee();
    }
}