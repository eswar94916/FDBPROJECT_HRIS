using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_EmployeeAssetReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeAssetReport> empassetreport(string compid, string datefrom, string dateto, string unit, string dept, string assettype)
    {
        BLEmployeeAssetReport da = new BLEmployeeAssetReport();
        return da.empassetreport(compid, datefrom, dateto, unit, dept,assettype);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeAssetReport> empassetreportfilter(string compid, string datefrom, string dateto, string unit, string dept, string assettype)
    {
        BLEmployeeAssetReport da = new BLEmployeeAssetReport();
        return da.empassetreportfilter(compid, datefrom, dateto, unit, dept, assettype);
    }
}