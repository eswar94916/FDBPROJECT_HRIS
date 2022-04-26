<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SendMailReport.aspx.cs" Inherits="Admin_Employee_SendMail" EnableEventValidation="false" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8" />
    <title>HRIS-Mail Report</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="#1 selling multi-purpose bootstrap admin theme sold in themeforest marketplace packed with angularjs, material design, rtl support with over thausands of templates and ui elements and plugins to power any type of web applications including saas and admin dashboards. Preview page of Theme #2 for bootstrap date, datetime and daterange pickers"
        name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <style>
        #dvLoading {
            background: url(../../Image/loading.gif) no-repeat center center;
            position: fixed;
            z-index: 999;
            height: 100%;
            width: 100%;
            top: 0;
            background-color: white;
            filter: alpha(opacity=60);
            opacity: 1.0;
            -moz-opacity: 0.8;
        }
    </style>
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="onload()">
    <div id="dvLoading"></div>
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
                    <!-- BEGIN SIDEBAR MENU -->
                    <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                    <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                    <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                    <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                        <li class="nav-item start active open">
                            <a href="SendMailReport.aspx" class="nav-link nav-toggle">
                                <i class="icon-home"></i>
                                <span class="title">BirthDay/Anniversary/Job Anniversary Report</span>
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

                    <div class="row">
                        <div class="col-md-12">
                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                            <div class="portlet light portlet-fit ">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class=" icon-docs font-red"></i>
                                        <span class="caption-subject bold uppercase">BirthDay/Anniversary/Job Anniversary Report</span>
                                    </div>
                                </div>
                                <div class="portlet-body">

                                    <div class="form-horizontal">
                                        <div class="form-body hidden-print" id="empclaim">
                                            <div class="form-horizontal">
                                                <div class="form-group">
                                                    <div id="divcomp">
                                                        <label class="control-label col-md-1" id="lblgroup">
                                                            Company
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlcompany">
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-md-1" id="lblunit">
                                                        Unit
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddlunit">
                                                        </select>
                                                    </div>
                                                    <label class="control-label col-md-2" id="lbldept">
                                                        Department
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddlDepartment">
                                                            <option value="0">All</option>
                                                        </select>
                                                    </div>
                                                    <label class="control-label col-md-2">
                                                        Month
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddlMonth">
                                                            <option value="0">Select</option>
                                                            <option value="1">January</option>
                                                            <option value="2">February</option>
                                                            <option value="3">March</option>
                                                            <option value="4">April</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">August</option>
                                                            <option value="9">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <div class="form-group" align="center">
                                                    <button type="button" class="btn bg-green" style="color: white" id="btnshow">Show Birthday List</button>
                                                    <button type="button" class="btn bg-purple" style="color: white" id="btnshow2">Show Anniversary List</button>
                                                    <button type="button" class="btn bg-blue" style="color: white" id="btnshow3">Show Job Anniversary List</button>
                                                    <a href="SendMailReport.aspx" class="btn blue-chambray">Reset</a>
                                                </div>
                                                <br />
                                                 <br />
                                                 <br />
                                                 <br />
                                                <div class="form-actions">
                                                    <div id="divclaimdetails">
                                                        <table class="table table-striped table-bordered table-hover order-column" id="sample_2" style="border-radius: 8px; border: 4px black" border="1">
                                                            <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                                <tr style="border-radius: 3px; border: 2px solid black">
                                                                    <th style="width: 100px;">S.No.</th>
                                                                    <th style="width: 100px;">Unit</th>
                                                                    <th style="width: 100px;">Department</th>
                                                                    <th style="width: 100px;">Designation</th>
                                                                    <th style="width: 100px;">Name</th>
                                                                    <th style="width: 100px;">Email</th>
                                                                    <th style="width: 100px;">Date</th>
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
                            <!-- END EXAMPLE TABLE PORTLET-->
                        </div>
                    </div>
                </div>
                <!-- END CONTENT BODY -->
            </div>
        </div>
        <div class="page-footer">
            <div class="page-footer-inner">
                                                                                                             
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
            </div>
        </div>
        <!-- BEGIN CORE PLUGINS -->
    </form>
      <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <script src="../../script/SendMailReport.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
