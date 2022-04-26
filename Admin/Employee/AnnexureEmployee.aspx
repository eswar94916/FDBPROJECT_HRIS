<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AnnexureEmployee.aspx.cs" Inherits="Admin_Employee_AnnexureEmployee" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <title>HRIS-Employee Annexure</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <style>
        .scrollmenu {
            overflow: auto;
            white-space: nowrap;
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

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="bodyonload()">
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
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                        <li class="nav-item start active open">
                            <a href="AnnexureEmployee.aspx" class="nav-link nav-toggle">
                                <i class="icon-home"></i>&nbsp;&nbsp;
                            <span class="title">Employee's Annexure</span>
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
                                        <span class="caption-subject bold uppercase">Employee's Annexure
                                        </span>
                                    </div>

                                </div>
                                <div class="portlet-body form">
                                    <form class="form-horizontal">

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
                                                        <label class="control-label col-md-1" id="lblunit">
                                                            Unit
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlunit">
                                                                <option value="0">Select</option>
                                                            </select>
                                                        </div>
                                                        <label class="control-label col-md-1" id="lbldept">
                                                            Department
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlDepartment">
                                                                <option value="0">Select</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <input type="button" class="btn green button" id="btnshow" value="Show" />&nbsp;&nbsp;
                                                            <a href="AnnexureEmployee.aspx" class="btn purple button">Reset</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="form-actions">
                                            <br />
                                            <div id="divDepartment">
                                                <div class="portlet-body">
                                                    <table class="table table-striped table-bordered table-hover order-column" id="sample_2" data-export-title="test">                                                      
                                                        <thead style="background-color: #116494; color: white;">
                                                            <tr style="border-radius: 3px; border: 2px solid black">
                                                                <th>S.No.</th>
                                                                <th>Unit</th>
                                                                <th>Code</th>
                                                                <th>Name</th>
                                                                <th>Deptt</th>
                                                                <th>Desig</th>
                                                                <th>Gross</th>
                                                                <th>Bonus</th>
                                                                <th>APB</th>
                                                                <th>Gratuity</th>
                                                                <th>Employer PF</th>
                                                                <th>Employer ESI</th>
                                                                <th>CTC</th>
                                                                <th>Deduction</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

        <!-- END CONTAINER -->
        <!-- BEGIN FOOTER -->
        <div class="page-footer">
            <div class="page-footer-inner">
                
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
            </div>
        </div>
    </form>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
    <script src="../../script/AnnexureEmployee.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
