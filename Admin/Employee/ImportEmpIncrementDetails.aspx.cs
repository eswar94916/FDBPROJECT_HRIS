using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;
using System.Data;
using System.Web.Security;
using System.Configuration;
using System.IO;
using System.Data.OleDb;
using System.Text.RegularExpressions;

public partial class Admin_Employee_ImportEmpIncrementDetails : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Roles.IsUserInRole(User.Identity.Name, "SuperAdmin"))
        {
            lblrole.InnerText = "SuperAdmin";
        }

        if (Roles.IsUserInRole(User.Identity.Name, "Admin"))
        {
            lblrole.InnerText = "Admin";
        }
        if (!IsPostBack)
        {
            bindcomp();
            btnadddb.Visible = false;
        }
    }
    protected void ddlcompany_SelectedIndexChanged(object sender, EventArgs e)
    {
        bindUnit();
    }

    public void bindcomp()
    {
        try
        {
            BLImportEmployeeDetails bl = new BLImportEmployeeDetails();
            DataTable dt = bl.CompanyList(User.Identity.Name, lblrole.InnerText);
            ddlcompany.DataSource = dt;
            ddlcompany.DataTextField = "company_name";
            ddlcompany.DataValueField = "company_id";
            ddlcompany.DataBind();
            bindUnit();
        }
        catch
        {
        }
    }

    public void bindUnit()
    {
        try
        {
            BLImportEmployeeDetails bl = new BLImportEmployeeDetails();
            DataTable dt = bl.UnitList(ddlcompany.SelectedValue);
            ddlunit.DataSource = dt;
            ddlunit.DataTextField = "unit_name";
            ddlunit.DataValueField = "unit_id";
            ddlunit.DataBind();
        }
        catch
        {

        }
    }

    protected void btnImport_Click(object sender, EventArgs e)
    {
        try
        {
            if (FileUploadControl.HasFile)
            {
                string Ext = Path.GetExtension(FileUploadControl.PostedFile.FileName);
                if (Ext == ".xls" || Ext == ".xlsx")
                {
                    string Name = Path.GetFileName(FileUploadControl.PostedFile.FileName);
                    string FolderPath = ConfigurationManager.AppSettings["../../EmpIncrementFile/"];
                    string FilePath = Server.MapPath("../../EmpIncrementFile/" + Name);
                    FileUploadControl.SaveAs(FilePath);
                    FillGridFromExcelSheet(FilePath, Ext, "Yes");
                }
                else
                {
                    gvdetails.DataSource = null;
                    gvdetails.DataBind();
                }
            }
        }
        catch
        {

        }
    }

    private void FillGridFromExcelSheet(string FilePath, string ext, string isHader)
    {
        try
        {
            BLEmpPromotion empbl = new BLEmpPromotion();
            BOEmpPromotion obj = new BOEmpPromotion();

            string connectionString = "";
            if (ext == ".xls")
            {   //For Excel 97-03
                connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0};Extended Properties='Excel 8.0;HDR={1}'";
            }
            else if (ext == ".xlsx")
            {    //For Excel 07 and greater
                connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties='Excel 8.0;HDR={1}'";
            }
            connectionString = String.Format(connectionString, FilePath, isHader);
            OleDbConnection conn = new OleDbConnection(connectionString);
            OleDbCommand cmd = new OleDbCommand();
            OleDbDataAdapter dataAdapter = new OleDbDataAdapter();
            DataTable dt = new DataTable();
            cmd.Connection = conn;
            //Fetch 1st Sheet Name
            conn.Open();
            DataTable dtSchema;
            dtSchema = conn.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
            string ExcelSheetName = dtSchema.Rows[0]["TABLE_NAME"].ToString();
            conn.Close();
            //Read all data of fetched Sheet to a Data Table
            conn.Open();
            cmd.CommandText = "SELECT emp_code,increment_date,increment_percent,new_apb,effective_date,remarks From [" + ExcelSheetName + "]";
            dataAdapter.SelectCommand = cmd;
            dataAdapter.Fill(dt);
            conn.Close();
            int glbc = 0;
            if (dt.Rows.Count == 0)
            {
                Response.Write("<script language=javascript>alert('Your Excel File is empty..');</script>");
                return;
            }
            else
            {
                foreach (DataRow dr in dt.Rows)
                {
                    string empcode = dr["emp_code"].ToString();
                    string increment_date = dr["increment_date"].ToString();
                    string increment_percent = dr["increment_percent"].ToString();
                    string new_apb = dr["new_apb"].ToString();
                    string effective_date = dr["effective_date"].ToString();
                    string remarks = dr["remarks"].ToString();
                    if (empcode == "" || empcode == null || increment_date == "" || increment_date == null || increment_percent == "" || increment_percent == null || new_apb == "" || new_apb == null || effective_date == "" || effective_date == null || remarks == "" || remarks == null)
                    {
                        glbc = glbc + 1;
                    }
                }
                if (glbc > 0)
                {
                    btnadddb.Visible = false;
                    gvdetails.DataSource = null;
                    gvdetails.DataBind();
                    Response.Write("<script language=javascript>alert('emp_code,increment_date,increment_percent,new_apb,effective_date,remarks are mandatory field.');</script>");
                    return;
                }
                else
                {
                    int glbemptc = 0;
                    string empc = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        string emplcode = dr["emp_code"].ToString().Trim();

                        int glbsrtc1e = 0;
                        foreach (DataRow dr1 in dt.Rows)
                        {
                            string emplcode1 = dr1["emp_code"].ToString().Trim();
                            if (emplcode == emplcode1)
                            {
                                glbsrtc1e = glbsrtc1e + 1;
                            }
                        }
                        if (glbsrtc1e > 1)
                        {
                            glbemptc = glbemptc + 1;
                            if (empc == "")
                            {
                                empc = emplcode;
                            }
                            else
                            {
                                bool b = empc.Contains(emplcode);
                                if (b == false)
                                {
                                    empc = empc + ", " + emplcode;
                                }
                            }
                        }
                    }
                    if (glbemptc > 0)
                    {
                        string almsg = "Employee Code(s): " + empc + " is/are repeating";
                        Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                        return;
                    }
                    else
                    {
                        string empname = "";
                        int depttc = 0;
                        foreach (DataRow dr in dt.Rows)
                        {
                            string empcode = dr["emp_code"].ToString().Trim();
                            if (empcode == "")
                            { }
                            else
                            {
                                string getps = empbl.chkempcode1(ddlunit.SelectedValue, empcode);
                                if (getps == "1")
                                {
                                    depttc = depttc + 1;
                                    if (empname == "")
                                    {
                                        empname = empcode;
                                    }
                                    else
                                    {
                                        bool b = empname.Contains(empcode);
                                        if (b == false)
                                        {
                                            empname = empname + ", " + empcode;
                                        }
                                    }
                                }
                            }
                        }
                        if (depttc > 0)
                        {
                            string almsg = "Employee Code(s): " + empname + " does not exist";
                            Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                            return;
                        }
                        else
                        {
                            Session["empdet"] = dt;
                            gvdetails.DataSource = dt;
                            gvdetails.DataBind();
                            btnadddb.Visible = true;
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            string almsg = ex.Message;
            lblmsg.Text = almsg;
            Response.Write("<script language=javascript>alert('Error');</script>");
        }
    }

    protected void btnadddb_Click(object sender, EventArgs e)
    {
        try
        {
            BLEmpPromotion empbl = new BLEmpPromotion();
            BOEmpPromotion obj = new BOEmpPromotion();
            DataTable dt = (DataTable)Session["empdet"];
            foreach (DataRow dr in dt.Rows)
            {
                obj.UnitID = ddlunit.SelectedValue;
                obj.CompanyID = ddlcompany.SelectedValue;
                obj.EmployeeCode = dr["emp_code"].ToString();
                obj.IncrementDate = dr["increment_date"].ToString();
                obj.Increment = dr["increment_percent"].ToString();
                obj.APB = dr["new_apb"].ToString();
                obj.EffectiveDate = dr["effective_date"].ToString();
                obj.Remarks = dr["remarks"].ToString();
                obj.UserName = User.Identity.Name;

                string insdet = empbl.insertemployeeincrementdetails(obj);
            }
            string message = "Employee Increment details saved successfully...";
            string url = "ImportEmpIncrementDetails.aspx";
            string script = "window.onload = function(){ alert('";
            script += message;
            script += "');";
            script += "window.location = '";
            script += url;
            script += "'; }";
            ClientScript.RegisterStartupScript(this.GetType(), "Redirect", script, true);
        }
        catch
        {

        }
    }
}