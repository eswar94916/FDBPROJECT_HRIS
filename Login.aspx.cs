using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using BusinessLogicLayer;


public partial class LoginForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }

    protected void Login1_LoggedIn(object sender, EventArgs e)
    {
        try
        {
            string userName = Login1.UserName;
            MembershipUser user = Membership.GetUser(userName);

            if (Roles.IsUserInRole(user.UserName, "SuperAdmin"))
            {
                Response.Redirect("SuperAdmin/SuperAdminDashboard.aspx");
            }
            else if (Roles.IsUserInRole(user.UserName, "Admin"))
            {
                Response.Redirect("Admin/AdminDashboard.aspx");
            }
            else if (Roles.IsUserInRole(user.UserName, "UnitAdmin"))
            {
                Response.Redirect("UnitAdmin/UnitAdminDashboard.aspx");
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
        }
        catch
        {

        }
    }
}