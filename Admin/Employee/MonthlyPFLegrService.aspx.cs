using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_MonthlyPFLegrService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOMonthlyPFLegr> empsalreport(BOMonthlyPFLegr obj, string saltype)
    {
        BLMonthlyPFLegr da = new BLMonthlyPFLegr();
        return da.empsalreport(obj,saltype);
    }

}