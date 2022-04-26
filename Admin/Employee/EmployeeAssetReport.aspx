<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeeAssetReport.aspx.cs" Inherits="Admin_Employee_EmployeeAssetReport" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee Assets Report</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>

    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <style>
        @media print {
            @page {
                size: 5.5in 8.5in;
                size: portrait;
            }
        }
    </style>
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

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="onbodyload()">
    <!-- BEGIN HEADER -->
    <div id="dvLoading"></div>
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
                    <!-- BEGIN SIDEBAR MENU -->
                    <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                    <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                    <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                    <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">

                        <li class="nav-item active open" id="liSalarySlip">
                            <a href="EmployeeAssetReport.aspx" class="nav-link nav-toggle">
                                <i class="icon-book-open"></i>
                                <span class="title">Employee Assets Report</span>
                                <span class="arrow"></span>
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
                            <div class="portlet light hidden-print" id="empjoinreport">
                                <div class="portlet-title">
                                    <div class="caption font-dark">
                                        <i class="icon-settings font-dark"></i>
                                        <span class="caption-subject bold uppercase">Employee Assets Report</span>
                                    </div>
                                    <div class="tools"></div>
                                </div>
                                <div class="portlet-body form">
                                    <div class="form-horizontal" id="divfilter">
                                        <div class="form-body">
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
                                                <div class="col-md-2">
                                                    <label class="control-label" id="lblunit">
                                                        Unit
                                                    </label>

                                                    <select class="form-control select2me" id="ddlunit">
                                                        <option value="0">Select</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="control-label" id="lbldept">
                                                        Department
                                                    </label>

                                                    <select class="form-control select2me" id="ddlDepartment">
                                                        <option value="0">Select</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="control-label">
                                                        Company Assets
                                                    </label>
                                                    <select class="form-control select2me" id="ddlassets">
                                                        <option value="0">All</option>
                                                        <option value="1">Company Assets (House)</option>
                                                        <option value="2">Company Assets (Car)</option>
                                                        <option value="3">Company Assets (Laptop)</option>
                                                        <option value="4">Company Assets (Mobile)</option>
                                                        <option value="5">Company Assets (Dongle)</option>
                                                        <option value="6">Company Assets (CUG)</option>
                                                        <option value="7">Company Assets (Others)</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">
                                                    <br />
                                                    <input type="button" class="btn green" id="btnshow" value="Show" />
                                                    <a href="EmployeeAssetReport.aspx" class="btn purple button">Reset</a>
                                                </div>
                                                <div class="col-md-3" style="visibility: hidden">
                                                    <label class="control-label">Date From</label>
                                                    <div class="input-group date-picker input-daterange" data-date-format="dd/mm/yyyy">
                                                        <input type="text" class="form-control" name="from" id="datefrom">
                                                        <span class="input-group-addon">to </span>
                                                        <input type="text" class="form-control" name="to" id="dateto">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-body">
                                        </div>
                                        <br />
                                    </div>
                                </div>
                                <div id="divdetails">
                                    <div class="form-body">
                                        <div>
                                            <table class="table table-striped table-bordered table-hover order-column" id="sample_1" style="border-radius: 8px; border: 4px black" border="1">
                                                <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                    <tr style="border-radius: 3px; border: 2px solid black">
                                                        <th>S.No<br />
                                                            &nbsp;</th>
                                                        <th>Unit<br />
                                                            &nbsp; </th>
                                                        <th>Code<br />
                                                            &nbsp; </th>
                                                        <th>Name<br />
                                                            &nbsp;</th>
                                                        <th>Deptt<br />
                                                            &nbsp; </th>
                                                        <th>Desig<br />
                                                            &nbsp;</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (House)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (Car)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (Laptop)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (Mobile)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (Dongle)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (CUG)</th>
                                                        <th>Company<br />
                                                            Assets<br />
                                                            (Others)</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div id="divdetails1">
                                    <div class="form-body">
                                        <div class="tools"></div>
                                        <table class="table table-striped table-bordered table-hover order-column" id="sample_2" style="border-radius: 8px; border: 4px black" border="1">
                                            <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                <tr style="border-radius: 3px; border: 2px solid black">
                                                    <th>S.No</th>
                                                    <th>Unit </th>
                                                    <th>Code </th>
                                                    <th>Name</th>
                                                    <th>Deptt </th>
                                                    <th>Desig</th>
                                                    <th id="thname"></th>
                                                </tr>
                                            </thead>
                                        </table>
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

            <!-- END QUICK SIDEBAR -->
        </div>
        <div class="page-footer">
            <div class="page-footer-inner">
               
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
            </div>
        </div>
    </form>
    <!-- BEGIN CORE PLUGINS -->
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../script/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <script src="../../script/EmployeeAssetReport.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>
