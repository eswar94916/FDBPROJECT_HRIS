using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_IncomeTaxReportervices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOIncomeTaxReport> empincometaxreport(BOIncomeTaxReport obj)
    {
        BLIncomeTaxReport da = new BLIncomeTaxReport();
        return da.empincometaxreport(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOIncomeTaxReport> incometaxreport(BOIncomeTaxReport obj, string FromYear, string ToYear)
    {
        BLIncomeTaxReport da = new BLIncomeTaxReport();
        return da.incometaxreport(obj,FromYear,ToYear);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOIncomeTaxReport emplist(string id)
    {
        BLIncomeTaxReport da = new BLIncomeTaxReport();
        return da.emplist(id);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOIncomeTaxReport> monthwiseincometax(string id, string fromyear, string toyear)
    {
        BLIncomeTaxReport da = new BLIncomeTaxReport();
        return da.monthwiseincometax(id, fromyear, toyear);
    }
}