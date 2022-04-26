using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;
using BusinessObjectLayer;

public partial class Admin_Employee_AnnexureEmployeeServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOAnnexureEmployee> annexurereport(BOAnnexureEmployee obj)
    {
        BLAnnexureEmployee da = new BLAnnexureEmployee();
        return da.annexurereport(obj);
    }
}