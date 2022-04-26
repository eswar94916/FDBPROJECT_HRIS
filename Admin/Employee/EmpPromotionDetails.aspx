<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmpPromotionDetails.aspx.cs" Inherits="EmployeeDetails_EmpPromotionDetails" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <title>HRIS-Employee Increment</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>

    <script src="../../assets/jquery.min.js"></script>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />

</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="onload()">
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
                                    <%-- <img alt="" class="img-circle" src="../../assets/layouts/layout2/img/avatar3_small.jpg" />--%>
                                    <span class="username username-hide-on-mobile">
                                        <asp:LoginName ID="LoginName1" CssClass="username username-hide-on-mobile" runat="server" />
                                    </span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label class="control-label" style="font-size: 15px">Role:&nbsp;&nbsp;</label><label id="lblrole" class="control-label" runat="server" style="font-size: 15px"></label>
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
                            <a href="EmpPromotionDetails.aspx" class="nav-link nav-toggle">
                                <i class="icon-home"></i>
                                <span class="title">Manage Employee Increment</span>
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
                                        <span class="caption-subject bold uppercase">Manage Employee Increment
                                        </span>
                                    </div>
                                </div>
                                <div class="portlet-body form">
                                    <div class="form-horizontal">
                                        <div class="form-body">
                                            <div class="form-group" id="divcomp">
                                                <label class="control-label col-md-4">
                                                    Company                                                
                                                </label>
                                                <div class="col-md-4">
                                                    <select id="ddlcompany" class=" form-control  select2me"></select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Employee Code                                                
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtEmployeeID" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Employee Name 
                                               
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtEmployeeName" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Department                                                
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtempdep" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Designation                                                
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtempdesig" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Last Gross                                               
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtlastctc" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    APB                                         
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtapb" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Last Gross + APB                                         
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtapbgross" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Increment Date                                          
                                                </label>
                                                <div class="col-md-4">
                                                    <input class="form-control  date-picker" type="text" id="txtincdate" data-date-format="dd-M-yyyy" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Increment (%)                                               
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtincrement" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Increment Amount                                               
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtrevision" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    New Gross                                          
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtnewctc" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    New APB                                          
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtnewapb" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    New Gross + New APB                                         
                                                </label>
                                                <div class="col-md-4">
                                                    <input type="text" id="txtnewapbgross" class="form-control" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Effective Date                                          
                                                </label>
                                                <div class="col-md-4">
                                                    <input class="form-control  date-picker" type="text" id="txteffectivedate" data-date-format="dd-M-yyyy" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Next Increment Date                                          
                                                </label>
                                                <div class="col-md-4">
                                                    <input class="form-control" type="text" id="txtincdatenext" data-date-format="dd-M-yyyy" readonly />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                    Remarks                                 
                                                </label>
                                                <div class="col-md-4">
                                                    <textarea class="form-control" cols="3" id="txtremarks">  </textarea>
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
                                            <div id="divleave">
                                                <table class="table table-striped table-bordered table-hover order-column" id="tblpromotion">
                                                    <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black;">
                                                        <tr style="border-radius: 3px; border: 2px solid black">
                                                            <th>S.NO.</th>
                                                            <th>Unit</th>
                                                            <th>Code</th>
                                                            <th>Name</th>
                                                            <th>Deptt</th>
                                                            <th>Desig</th>
                                                            <th>Increment<br />
                                                                Date</th>
                                                            <th>Increment<br />
                                                                (%)</th>
                                                            <th>Increment<br />
                                                                Amount</th>
                                                            <th>New
                                                                <br />
                                                                Gross</th>
                                                            <th>New
                                                                <br />
                                                                APB</th>
                                                            <th>Effective<br />
                                                                Date</th>
                                                            <th>Next
                                                                <br />
                                                                Increment<br />
                                                                Date</th>
                                                            <th>Remarks</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>

                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->

            <!-- BEGIN QUICK SIDEBAR -->
            <a href="javascript:;" class="page-quick-sidebar-toggler">
                <i class="icon-login"></i>
            </a>

            <div class="page-footer">
                <div class="page-footer-inner">
                    
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
                </div>
            </div>
    </form>
    <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>

    <script src="../../script/emppromotion.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
