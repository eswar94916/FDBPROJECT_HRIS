using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using BusinessLogicLayer;
using System.Text.RegularExpressions;
using BusinessObjectLayer;

public partial class SuperAdmin_CreateUser : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (User.Identity.Name == "")
        {
            Response.Redirect("~/Login.aspx");
        }
        if (!IsPostBack)
        {
            bindcompanylist();
            divunit.Visible = false;
        }
    }

    protected void CreateUserWizard2_CreatedUser(object sender, EventArgs e)
    {
        try
        {
            Roles.AddUserToRole(CreateUserWizard2.UserName, ddlRoles.SelectedValue);
            BLAdminDetails bl = new BLAdminDetails();
            BOAdminDetails bo = new BOAdminDetails();
            bo.AdminName = (CreateUserWizard2.UserName).Trim();
            bo.CompanyID = ddlcompany.SelectedValue;
            bo.UserName = User.Identity.Name;
            bo.UserRole = ddlRoles.SelectedValue;
            if (ddlRoles.SelectedValue == "UnitAdmin")
            {
                bo.UnitID = ddlunit.SelectedValue;
            }
            else
            {
                bo.UnitID = "0";
            }
            bl.InsertDetails(bo);
            divRole.Visible = false;
        }
        catch
        {

        }
    }
    protected void ContinueButton_Click(object sender, EventArgs e)
    {
        try
        {
            Response.Redirect("~/Login.aspx");
        }
        catch
        {

        }
    }
    protected void btnBack_Click(object sender, EventArgs e)
    {
        try
        {
            Response.Redirect("CreateUser.aspx");
        }
        catch
        {

        }
    }

    public void bindcompanylist()
    {
        try
        {
            BLAdminDetails bl = new BLAdminDetails();
            ddlcompany.DataSource = bl.companylist();
            ddlcompany.DataValueField = "company_id";
            ddlcompany.DataTextField = "company_name";
            ddlcompany.DataBind();
        }
        catch
        {

        }
    }

    public void bindunitlist()
    {
        try
        {
            BLAdminDetails bl = new BLAdminDetails();
            ddlunit.DataSource = bl.unitlist(ddlcompany.SelectedValue);
            ddlunit.DataValueField = "unit_id";
            ddlunit.DataTextField = "unit_name";
            ddlunit.DataBind();
        }
        catch
        {
        }
    }

    protected void CreateUserWizard2_CreatingUser(object sender, LoginCancelEventArgs e)
    {
        string myStr = CreateUserWizard2.UserName;

        string pattern = @"\s";
        Regex expr = new Regex(pattern);
        MatchCollection matches = expr.Matches(myStr);
        int tc = 0;
        foreach (Match match in matches)
        {
            tc = tc + 1;
        }
        if (tc > 0)
        {
            Response.Write("<script type='text/javascript'> alert('Please remove all spaces from User Name')</script>");
            e.Cancel = true;
        }
    }
    protected void ddlRoles_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlRoles.SelectedValue == "UnitAdmin")
        {
            divunit.Visible = true;
            bindunitlist();
        }
        else
        {
            divunit.Visible = false;
        }
    }

    protected void ddlcompany_SelectedIndexChanged(object sender, EventArgs e)
    {
        bindunitlist();
    }
}