using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_MedicalInsReportServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOMedicalInsReport> empmedinsreport(string compid, string datefrom, string dateto, string unit, string dept)
    {
        BLMedicalInsReport da = new BLMedicalInsReport();
        return da.empmedinsreport(compid, datefrom, dateto, unit, dept);
    }
}