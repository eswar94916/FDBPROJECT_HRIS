using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using BusinessObjectLayer;
using BusinessLogicLayer;
using System.IO;
using System.Drawing;
using System.Net.Mail;

public partial class Admin_Employee_ChangeImage : System.Web.UI.Page
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

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        try
        {
            string Id = Request.QueryString["id"];

            if (IsPostBack && FileUpload1.PostedFile != null)
            {
                if (FileUpload1.PostedFile.FileName.Length > 0)
                {
                    //System.Drawing.Image img = System.Drawing.Image.FromStream(FileUpload1.PostedFile.InputStream);
                    //decimal size = Math.Round(((decimal)FileUpload1.PostedFile.ContentLength / (decimal)1024), 2);
                    //string getimagesize = "100";
                    //if (size > Convert.ToDecimal(getimagesize))
                    //{
                    //    string msg = "File size should not be greater than " + getimagesize + "KB. Only jpg, png and jpeg Files are allowed.";
                    //}
                    //else
                    //{
                    if (FileUpload1.HasFile)
                    {
                        string fileName = FileUpload1.FileName;
                        string FileExtension = fileName.Substring(fileName.LastIndexOf('.') + 1).ToLower();

                        if (FileExtension == "jpg" || FileExtension == "png" || FileExtension == "jpeg")
                        {
                            string FileName = Path.GetFileName(FileUpload1.PostedFile.FileName);
                            //Save files to disk
                            BLEmployeeSignUp bl = new BLEmployeeSignUp();
                            BOEmployeeSignUp ob = new BOEmployeeSignUp();
                            string imgc = bl.getphotoname(Id);
                            string UserName = User.Identity.Name;
                            string ID = Id + '_' + imgc + "." + FileExtension;

                            FileUpload1.SaveAs(Server.MapPath("~/Upload_Image/" + ID));
                            string filepath = imgc + "." + FileExtension;
                            bl.updateempphotopath(Id, UserName, filepath);
                            string message = "Image has been uploaded successfully...";
                            string url = "ChangeImage.aspx?id=" + Id;
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
                            Response.Write("<script type='text/javascript'> alert('Only jpg, png and jpeg files are allowed!!')</script>");
                        }
                        //}
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Response.Write("<script type='text/javascript'> alert('Only jpg, png and jpeg files are allowed!!')</script>");
        }
    }
}