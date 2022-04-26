using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessObjectLayer;
using BusinessLogicLayer;

public partial class Admin_EmployeeTrainingServices : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string chkempcode(string empcode, string compid)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.chkempcode(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeTraining> EmployeeDetails(string empcode, string compid)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.EmployeeDetails(empcode, compid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeTraining>trainingdetails(string usrname, string usrrole)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.trainingdetails(usrname, usrrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void inserttraningdetails(BOEmployeeTraining obj)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        da.inserttraningdetails(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static List<BOEmployeeTraining> EmployeeTrainiNameshow(string usrname, string usrole)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.EmployeeTrainiNameshow(usrname, usrole);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static BOEmployeeTraining EditTrainingList(string id, string empid)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.EditTrainingList(id,empid);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static string UpdatetraningDetails(BOEmployeeTraining obj)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        return da.UpdatetraningDetails(obj);
    }
    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void deleteEmployeetraningDetails(string del_id, string user_name)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        da.deleteEmployeetraningDetails(del_id, user_name);
    }

    [System.Web.Services.WebMethod()]
    [System.Web.Script.Services.ScriptMethod()]
    public static void Updatetraningstatus(string id, string usrname)
    {
        BLEmployeeTraining da = new BLEmployeeTraining();
        da.Updatetraningstatus(id, usrname);
    }
}