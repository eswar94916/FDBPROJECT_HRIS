using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Security;
using System.Configuration;
using System.IO;
using System.Data.OleDb;
using System.Text.RegularExpressions;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class EmployeeDetails_ImportEmploeeDetails : System.Web.UI.Page
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
                    string FolderPath = ConfigurationManager.AppSettings["../../EmpApraisalFile/"];
                    string FilePath = Server.MapPath("../../EmpApraisalFile/" + Name);
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
            BLAppraisal empbl = new BLAppraisal();
            BOAppraisal obj = new BOAppraisal();

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
            cmd.CommandText = "SELECT emp_code,appraisal_date,ro1rate1,ro2rate1,ro1rate2,ro2rate2,ro1rate3,ro2rate3,ro1rate4,ro2rate4,ro1rate5,ro2rate5,ro1rate6,ro2rate6,ro1rate7,ro2rate7,ro1rate8,ro2rate8,ro1rate9,ro2rate9,ro1rate10,ro2rate10,point1cmnt,point2cmnt,point3cmnt,point4cmnt,point5cmnt,point6cmnt,point7cmnt,point8cmnt,point9cmnt,point10cmnt From [" + ExcelSheetName + "]";
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
                    if (empcode == "" || empcode == null)
                    {
                        glbc = glbc + 1;
                    }
                }
                if (glbc > 0)
                {
                    btnadddb.Visible = false;
                    gvdetails.DataSource = null;
                    gvdetails.DataBind();
                    Response.Write("<script language=javascript>alert('emp_code are mandatory field.');</script>");
                    return;
                }
                else
                {
                    string ro1rate1 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate1 = dr["ro1rate1"].ToString().Trim();
                        if (ro1rate1 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate1) >= 0 && Convert.ToInt32(ro1rate1) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Job Knowledge Rating By RO 1 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate1 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate1 = dr["ro2rate1"].ToString().Trim();
                        if (ro2rate1 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate1) >= 0 && Convert.ToInt32(ro2rate1) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Job Knowledge Rating By RO 2 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate2 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate2 = dr["ro1rate2"].ToString().Trim();
                        if (ro1rate2 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate2) >= 0 && Convert.ToInt32(ro1rate2) <= 20)
                            {

                            }
                            else
                            {
                                string almsg = "Job Performance & Decision making Rating By RO 1 should be less than equal to 20";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate2 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate2 = dr["ro2rate2"].ToString().Trim();
                        if (ro2rate2 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate2) >= 0 && Convert.ToInt32(ro2rate2) <= 20)
                            {

                            }
                            else
                            {
                                string almsg = "Job Performance & Decision making Rating By RO 2 should be less than equal to 20";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate3 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate3 = dr["ro1rate3"].ToString().Trim();
                        if (ro1rate3 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate3) >= 0 && Convert.ToInt32(ro1rate3) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Communicationg Rating By RO 1 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate3 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate3 = dr["ro2rate3"].ToString().Trim();
                        if (ro2rate3 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate3) >= 0 && Convert.ToInt32(ro2rate3) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Communicationg Rating By RO 2 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate4 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate4 = dr["ro1rate4"].ToString().Trim();
                        if (ro1rate4 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate4) >= 0 && Convert.ToInt32(ro1rate4) <= 20)
                            {

                            }
                            else
                            {
                                string almsg = "Integrity and Discipline Rating By RO 1 should be less than equal to 20";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate4 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate4 = dr["ro2rate4"].ToString().Trim();
                        if (ro2rate4 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate4) >= 0 && Convert.ToInt32(ro2rate4) <= 20)
                            {

                            }
                            else
                            {
                                string almsg = "Integrity and Discipline Rating By RO 2 should be less than equal to 20";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate5 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate5 = dr["ro1rate5"].ToString().Trim();
                        if (ro1rate5 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate5) >= 0 && Convert.ToInt32(ro1rate5) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Learning & Innovation Rating By RO 1 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate5 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate5 = dr["ro2rate5"].ToString().Trim();
                        if (ro2rate5 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate5) >= 0 && Convert.ToInt32(ro2rate5) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Learning & Innovation Rating By RO 2 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate6 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate6 = dr["ro1rate6"].ToString().Trim();
                        if (ro1rate6 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate6) >= 0 && Convert.ToInt32(ro1rate6) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "External Orientation Rating By RO 1 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate6 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate6 = dr["ro2rate6"].ToString().Trim();
                        if (ro2rate6 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate6) >= 0 && Convert.ToInt32(ro2rate6) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "External Orientation Rating By RO 2 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate7 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate7 = dr["ro1rate7"].ToString().Trim();
                        if (ro1rate7 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate7) >= 0 && Convert.ToInt32(ro1rate7) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Behavior/ conduct with Colleagues Rating By RO 1 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate7 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate7 = dr["ro2rate7"].ToString().Trim();
                        if (ro2rate7 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate7) >= 0 && Convert.ToInt32(ro2rate7) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Behavior/ conduct with Colleagues Rating By RO 2 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate8 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate8 = dr["ro1rate8"].ToString().Trim();
                        if (ro1rate8 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate8) >= 0 && Convert.ToInt32(ro1rate8) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Team work Rating By RO 1 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate8 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate8 = dr["ro2rate8"].ToString().Trim();
                        if (ro2rate8 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate8) >= 0 && Convert.ToInt32(ro2rate8) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Team work Rating By RO 2 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate9 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate9 = dr["ro1rate9"].ToString().Trim();
                        if (ro1rate9 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate9) >= 0 && Convert.ToInt32(ro1rate9) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Customer Feedback ( Internal) Rating By RO 1 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate9 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate9 = dr["ro2rate9"].ToString().Trim();
                        if (ro2rate9 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate9) >= 0 && Convert.ToInt32(ro2rate9) <= 5)
                            {

                            }
                            else
                            {
                                string almsg = "Customer Feedback ( Internal) Rating By RO 2 should be less than equal to 5";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro1rate10 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro1rate10 = dr["ro1rate10"].ToString().Trim();
                        if (ro1rate10 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro1rate10) >= 0 && Convert.ToInt32(ro1rate10) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Respecting company Systems Rating By RO 1 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
                    string ro2rate10 = "";
                    foreach (DataRow dr in dt.Rows)
                    {
                        ro2rate10 = dr["ro2rate10"].ToString().Trim();
                        if (ro2rate10 == "")
                        { }
                        else
                        {
                            if (Convert.ToInt32(ro2rate10) >= 0 && Convert.ToInt32(ro2rate10) <= 10)
                            {

                            }
                            else
                            {
                                string almsg = "Respecting company Systems Rating By RO 2 should be less than equal to 10";
                                Response.Write("<script language=javascript>alert('" + almsg + "');</script>");
                                return;
                            }
                        }
                    }
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
                                string getps = empbl.chkempcode(ddlunit.SelectedValue, empcode);
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
           
            BLAppraisal empbl = new BLAppraisal();
            BOAppraisal obj = new BOAppraisal();
            int tc = 0;
            DataTable dt = (DataTable)Session["empdet"];
            foreach (DataRow dr in dt.Rows)
            {
                obj.UnitID = ddlunit.SelectedValue;
                obj.CompanyID = ddlcompany.SelectedValue;
                obj.AppraisalDate = dr["appraisal_date"].ToString();
                obj.EmployeeCode = dr["emp_code"].ToString();
                obj.RO1RP1 = dr["ro1rate1"].ToString();
                obj.RO2RP1 = dr["ro2rate1"].ToString();
                obj.RO1RP2 = dr["ro1rate2"].ToString();
                obj.RO2RP2 = dr["ro2rate2"].ToString();
                obj.RO1RP3 = dr["ro1rate3"].ToString();
                obj.RO2RP3 =dr["ro2rate3"].ToString();
                obj.RO1RP4 = dr["ro1rate4"].ToString();
                obj.RO2RP4 = dr["ro2rate4"].ToString();
                obj.RO1RP5 = dr["ro1rate5"].ToString();
                obj.RO2RP5 = dr["ro2rate5"].ToString();
                obj.RO1RP6 = dr["ro1rate6"].ToString();
                obj.RO2RP6 = dr["ro2rate6"].ToString();
                obj.RO1RP7 = dr["ro1rate7"].ToString();
                obj.RO2RP7 = dr["ro2rate7"].ToString();
                obj.RO1RP8 = dr["ro1rate8"].ToString();
                obj.RO2RP8 = dr["ro2rate8"].ToString();
                obj.RO1RP9 = dr["ro1rate9"].ToString();
                obj.RO2RP9 = dr["ro2rate9"].ToString();
                obj.RO1RP10 = dr["ro1rate10"].ToString();
                obj.RO2RP10 = dr["ro2rate10"].ToString();
                obj.P1Coment = dr["point1cmnt"].ToString();
                obj.P2Coment = dr["point2cmnt"].ToString();
                obj.P3Coment = dr["point3cmnt"].ToString();
                obj.P4Coment = dr["point4cmnt"].ToString();
                obj.P5Coment = dr["point5cmnt"].ToString();
                obj.P6Coment = dr["point6cmnt"].ToString();
                obj.P7Coment = dr["point7cmnt"].ToString();
                obj.P8Coment = dr["point8cmnt"].ToString();
                obj.P9Coment = dr["point9cmnt"].ToString();
                obj.P10Coment = dr["point10cmnt"].ToString();
                
                obj.UserName = User.Identity.Name;

                string insdet = empbl.insertemployeeappraisaldetails(obj);
                if (insdet == null)
                {
                    tc = tc + 1;
                }
            }
            if (tc == 0)
            {
                string message = "Employee Appraisal details saved successfully...";
                string url = "ImportEmployeeAppraisalDetails.aspx";
                string script = "window.onload = function(){ alert('";
                script += message;
                script += "');";
                script += "window.location = '";
                script += url;
                script += "'; }";
                ClientScript.RegisterStartupScript(this.GetType(), "Redirect", script, true);
            }
            if (tc > 0)
            {
                string message = "Some error occured. Please try again later!!";
                string url = "ImportEmployeeAppraisalDetails.aspx";
                string script = "window.onload = function(){ alert('";
                script += message;
                script += "');";
                script += "window.location = '";
                script += url;
                script += "'; }";
                ClientScript.RegisterStartupScript(this.GetType(), "Redirect", script, true);
            }
        }
        catch
        {

        }
    }
}