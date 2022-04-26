<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeesLeaveManagement.aspx.cs" Inherits="EmployeesDetail_EmployeesLeaveManagement" %>


<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee Leave</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="#1 selling multi-purpose bootstrap admin theme sold in themeforest marketplace packed with angularjs, material design, rtl support with over thausands of templates and ui elements and plugins to power any type of web applications including saas and admin dashboards. Preview page of Theme #2 for bootstrap date, datetime and daterange pickers"
        name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
     <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
      <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
  
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="onbodyload()">
    <!-- BEGIN HEADER -->
    <form runat="server">
        <div class="page-header navbar navbar-fixed-top" style="background-color: #616D7E">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <!-- BEGIN LOGO -->
                <div class="page-logo" style="background-color: #E5252B">
                    <a style="text-decoration: none">
                        <img src="../../Image/logo.png" style="margin-top: 10px; margin-left: -10px" alt="logo" class="logo-default" />
                    </a>
                    <div class="menu-toggler sidebar-toggler">
                        <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
                    </div>
                </div>
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
                <!-- END LOGO -->
                <!-- END PAGE ACTIONS -->
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">
                    <!-- BEGIN HEADER SEARCH BOX -->
                    <!-- BEGIN TOP NAVIGATION MENU -->
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <!-- BEGIN NOTIFICATION DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->

                            <li class="dropdown dropdown-user">


                                <a class="dropdown-toggle" data-toggle="dropdown" data-close-others="true" style="text-decoration: none">
                                    <%-- <img alt="" class="img-circle" src="../assets/layouts/layout2/img/avatar3_small.jpg" />--%>
                                    <span class="username username-hide-on-mobile">
                                        <asp:LoginName ID="LoginName1" CssClass="username username-hide-on-mobile" runat="server" />
                                    </span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label class="control-label" style="font-size: 15px">Role:&nbsp;&nbsp;</label><label id="lblrole" class="control-label" runat="server" style="font-size: 15px"> </label>
                                    </li>
                                    <li>
                                        <asp:LoginStatus ID="LoginStatus1" runat="server" LogoutAction="Redirect" LogoutPageUrl="~/Login.aspx" LoginText="LOG IN" LogoutText="LOG OUT" />
                                    </li>

                                </ul>

                            </li>
                            <!-- END USER LOGIN DROPDOWN -->

                            <!-- END QUICK SIDEBAR TOGGLER -->
                        </ul>
                    </div>
                    <!-- END TOP NAVIGATION MENU -->
                </div>
                <!-- END PAGE TOP -->
            </div>
            <!-- END HEADER INNER -->
        </div>
    </form>
    <!-- END HEADER -->
    <!-- BEGIN HEADER & CONTENT DIVIDER -->
    <div class="clearfix"></div>
    <!-- END HEADER & CONTENT DIVIDER -->
    <!-- BEGIN CONTAINER -->
    <div class="page-container">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">
            <!-- END SIDEBAR -->
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <div class="page-sidebar navbar-collapse collapse">
                <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                    <li class="nav-item start active open">
                        <a href="EmployeesLeaveManagement.aspx" class="nav-link nav-toggle">
                            <i class="icon-home"></i>
                            <span class="title">Employee Leave Management</span>
                            <span class="selected"></span>
                            <span class="arrow open"></span>
                        </a>
                    </li>
                </ul>
                <!-- END SIDEBAR MENU -->
            </div>
            <!-- END SIDEBAR -->
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
            <!-- BEGIN CONTENT BODY -->
            <div class="page-content">
                <!-- BEGIN PAGE HEADER-->
                <!-- BEGIN THEME PANEL -->
                <div class="theme-panel">

                    <div class="toggler-close">
                        <i class="icon-close"></i>
                    </div>

                </div>

                <div class="clearfix"></div>
                <!-- END DASHBOARD STATS 1-->
                <div class="row" id="divGeneric">
                    <div class="col-md-12">
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class=" icon-docs font-red"></i>
                                    <span class="caption-subject bold uppercase">Employee Leave Management
                                    </span>
                                </div>

                            </div>
                            <div class="portlet-body form">
                                <form class="form-horizontal">

                                    <div class="form-body">
                                        <div class="form-group" id="divcomp">
                                            <label class="control-label col-md-4">
                                                Company Name
                                            </label>
                                            <div class="col-md-4">

                                                <select class="form-control select2me" id="ddlcomp"></select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4">
                                                Employee Code
                                               
                                            </label>
                                            <div class="col-md-4">
                                                <input type="text" id="TxtEmployeecode" class="form-control" />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-md-4">
                                                Employee Name 
                                               
                                            </label>
                                            <div class="col-md-4">
                                                <input type="text" id="TxtEmployeeName" class="form-control" readonly="readonly" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4">
                                                Type of Leave
                                            </label>
                                            <div class="col-md-4">
                                                <select class="form-control select2me" id="ddlLeaveType"></select>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4">Leave Date</label>
                                            <div class="col-md-4">
                                                <div class="input-group date-picker input-daterange" data-date-format="dd-M-yyyy">
                                                    <input type="text" class="form-control" placeholder="Start Date" name="from" id="txtstartdate" onchange="CalculateDiff()">
                                                    <span class="input-group-addon">to </span>
                                                    <input type="text" class="form-control" placeholder="End Date" name="to" id="txtenddate" onchange="CalculateDiff()">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4">
                                                No. of Days 
                                                <span class="required">* </span>
                                            </label>
                                            <div class="col-md-4">
                                                <label class="control-label" id="noofDays"></label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4">
                                                Reason   
                                        <span class="required">* </span>
                                            </label>
                                            <div class="col-md-4">
                                                <textarea class="form-control" id="txtreason" rows="3" cols="3"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div align="center">
                                        <button type="button" class="btn bg-green" style="color: white" id="btnsave">Save</button>
                                        <button type="button" class="btn bg-green" style="color: white" id="btnUpdate">Update</button>
                                        <button type="button" class="btn bg-yellow" style="color: white" id="btnreset">Reset</button>
                                        <button type="button" class="btn bg-purple" style="color: white" id="btnshow">Show</button>
                                    </div>
                                    <div class="form-actions">
                                        <div id="divDepartment">
                                            <table class="table table-striped table-bordered table-hover order-column" id="tblAssignLeaves">
                                                <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black;">
                                                    <tr style="border-radius: 3px; border: 2px solid black">
                                                        <th>SL NO.</th>
                                                        <th>Unit<br /></th>
                                                        <th> Code<br /></th>
                                                        <th> Name<br /></th>
                                                        <th>Leave<br /> Type</th>
                                                        <th>Start<br /> Date</th>
                                                        <th>End <br />Date</th>
                                                        <th>No. of<br /> Days</th>
                                                        <th>Reasons</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>

                                            </table>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
        <div class="modal fade" id="basic" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">Total No of leave as per the companies leave policies, It will not forwarded to next year or no cash encashment.It will lapsed.</h4>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- BEGIN QUICK SIDEBAR -->
        <a href="javascript:;" class="page-quick-sidebar-toggler">
            <i class="icon-login"></i>
        </a>

        <!-- END QUICK SIDEBAR -->
    </div>
    <!-- END CONTAINER -->
    <!-- BEGIN FOOTER -->
    <div class="page-footer">
        <div class="page-footer-inner">
            
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
    </div>
     <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
       <script src="../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
     <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
      <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
     <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>

    <script src="../../script/EmployeesleaveMangement.js" type="text/javascript"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>
