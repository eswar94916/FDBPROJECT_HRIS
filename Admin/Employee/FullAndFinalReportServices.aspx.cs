using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_Employee_FullAndFinalReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOFullAndFinalReport> empfullnfinalreport(BOFullAndFinalReport obj)
    {
        BLFullAndFinalReport da = new BLFullAndFinalReport();
        return da.empfullnfinalreport(obj);
    }
}