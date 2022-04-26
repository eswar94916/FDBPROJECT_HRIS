using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class SuperAdmin_CreateUser : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            DisplayRolesInGrid();
        }
        if (User.Identity.Name == "")
        {
            //Response.Redirect("~/LoginForm.aspx");
        }
    }

    protected void CreateRoleButton_Click(object sender, EventArgs e)
    {
        string newRoleName = txtRoleName.Value.Trim();
        if (!Roles.RoleExists(newRoleName))
        {
            // Create the role    
            Roles.CreateRole(newRoleName);

            // Refresh the RoleList Grid    
            DisplayRolesInGrid();
        }
        txtRoleName.Value = string.Empty;
    }

    private void DisplayRolesInGrid()
    {
        RoleList.DataSource = Roles.GetAllRoles();
        RoleList.DataBind();
    }

    protected void RoleList_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        Label RoleNameLabel = RoleList.Rows[e.RowIndex].FindControl("RoleNameLabel") as Label;
        Roles.DeleteRole(RoleNameLabel.Text, false);
        DisplayRolesInGrid();
    }

    protected void RoleList_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        RoleList.PageIndex = e.NewPageIndex;
        DisplayRolesInGrid();
    }
}