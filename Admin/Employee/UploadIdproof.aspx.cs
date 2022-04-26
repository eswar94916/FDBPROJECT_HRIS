using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Reflection;
using System.Drawing;
using System.Net.Mail;
using BusinessObjectLayer;
using BusinessLogicLayer;
using System.Web.Security;

public partial class Admin_Employee_UploadIdproof : System.Web.UI.Page
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
    }
    string FileName;
    protected void btnUpload_Click(object sender, EventArgs e)
    {
        try
        {
            string Id = Request.QueryString["id"];

            if (IsPostBack && FileUpload1.PostedFile != null)
            {
                if (FileUpload1.PostedFile.FileName.Length > 0)
                {
                    //decimal size = Math.Round(((decimal)FileUpload1.PostedFile.ContentLength / (decimal)1024), 2);
                    //string getsize = "1024";
                    //if (size > Convert.ToDecimal(getsize))
                    //{
                    //    string msg = "File size should not be greater than " + getsize + "KB. Only doc, docx and pdf Files are allowed.";
                    //}
                    //else
                    //{
                    if (FileUpload1.HasFile)
                    {
                        string fileName = FileUpload1.FileName;
                        string FileExtension = fileName.Substring(fileName.LastIndexOf('.') + 1).ToLower();

                        if (FileExtension == "doc" || FileExtension == "docx" || FileExtension == "pdf" || FileExtension == "jpg" || FileExtension == "png" || FileExtension == "jpeg")
                        {
                            FileName = Path.GetFileName(FileUpload1.PostedFile.FileName);
                            //Save files to disk
                            BLEmployeeSignUp bl = new BLEmployeeSignUp();
                            BOEmployeeSignUp ob = new BOEmployeeSignUp();
                            string st = bl.getaddidproofname(Id);

                            string ID = Id + '_' + st + "." + FileExtension;
                            FileUpload1.SaveAs(Server.MapPath("~/UploadIdProof/" + ID));
                            //ob.ResumePath = st + "." + FileExtension;
                            string filepath = st + "." + FileExtension;
                            //ob.UserName = User.Identity.Name;
                            string UserName = User.Identity.Name;
                            bl.updateempaddidproofpath(Id, UserName, filepath);
                            string message = "Aadhaar Card has been uploaded successfully...";
                            string url = "EmployeeEarningList.aspx?id=" + Id;
                            string script = "window.onload = function(){ alert('";
                            script += message;
                            script += "');";
                            script += "window.location = '";
                            script += url;
                            script += "'; }";
                            ClientScript.RegisterStartupScript(this.GetType(), "Redirect", script, true);
                        }
                        else
                        {
                            Response.Write("<script type='text/javascript'> alert('Only doc, docx, pdf, jpg, jpeg and png files are allowed!!')</script>");
                        }
                        //}
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Response.Write("<script type='text/javascript'> alert('Only doc, docx, pdf, jpg, jpeg and png files are allowed!!')</script>");
        }
    }
    protected void btnBack_Click(object sender, EventArgs e)
    {
        string Id = Request.QueryString["id"];
        Response.Redirect("UploadPanCard.aspx?id=" + Id);
    }
}