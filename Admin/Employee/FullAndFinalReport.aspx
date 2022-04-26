<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FullAndFinalReport.aspx.cs" Inherits="Admin_Employee_FullAndFinalReport" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-F&F Report</title>
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
                            <a href="FullAndFinalReport.aspx" class="nav-link nav-toggle">
                                <i class="icon-book-open"></i>
                                <span class="title">Employee Full & Final Report</span>
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
                            <div class="portlet light " id="empjoinreport">
                                <div class="portlet-title">
                                    <div class="caption font-dark">
                                        <i class="icon-settings font-dark"></i>
                                        <span class="caption-subject bold uppercase">Employees Full & Final Report</span>
                                    </div>
                                    <div class="tools"></div>
                                </div>
                                <div class="portlet-body form">
                                    <form class="form-horizontal">

                                        <div class="form-body">
                                            <div id="divcomp">
                                                <label class="control-label col-md-1" id="lblgroup">
                                                    Company
                                                </label>
                                                <div class="col-md-2">
                                                    <select class="form-control select2me" id="ddlcompany">
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-md-2">
                                                    <label class="control-label" id="lblunit">
                                                        Unit
                                                    </label>
                                                    <select class="form-control select2me" id="ddlunit">
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
                                                    <label class="control-label" id="lblemp">
                                                        Employee
                                                    </label>
                                                    <select class="form-control select2me" id="ddlemp">
                                                        <option value="0">Select</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="control-label">
                                                        Month & Year                                             
                                                    </label>
                                                    <select class="form-control select2me" id="ddlmonth">
                                                        <option value="0">Month</option>
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
                                                <div class="col-md-2">
                                                    <label class="control-label">
                                                        &nbsp;                                          
                                                    </label>
                                                    <select class="form-control select2me" id="ddlyear">
                                                        <option value="0">Year</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                        <option value="2033">2033</option>
                                                        <option value="2034">2034</option>
                                                        <option value="2035">2035</option>
                                                        <option value="2036">2036</option>
                                                        <option value="2037">2037</option>
                                                        <option value="2038">2038</option>
                                                        <option value="2039">2039</option>
                                                        <option value="2040">2040</option>
                                                        <option value="2041">2041</option>
                                                        <option value="2042">2042</option>
                                                        <option value="2043">2043</option>
                                                        <option value="2044">2044</option>
                                                        <option value="2045">2045</option>
                                                        <option value="2046">2046</option>
                                                        <option value="2047">2047</option>
                                                        <option value="2048">2048</option>
                                                        <option value="2049">2049</option>
                                                        <option value="2050">2050</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group" align="center">
                                                <input type="button" class="btn green button" id="btnshow" value="Show" />
                                                <a href="FullAndFinalReport.aspx" class="btn purple button">Reset</a>
                                            </div>
                                    </form>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div id="divdetails">
                                    <div class="form-body">
                                        <div class="tools"></div>
                                        <table class="table table-striped table-bordered table-hover order-column table-responsive" id="sample_2" style="border-radius: 8px; border: 4px black" border="1">
                                            <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                <tr style="border-radius: 3px; border: 2px solid black">
                                                    <th>S.No</th>
                                                    <%--<th>Company </th>--%>
                                                    <th>Unit</th>
                                                    <th>Code </th>
                                                    <th>Name</th>
                                                    <th>Deptt</th>
                                                    <th>Desig</th>
                                                    <th>Month</th>
                                                    <th>Year</th>
                                                    <th>DOJ</th>
                                                    <th>Gross</th>
                                                    <th>CTC</th>
                                                    <th>Date of Resigning</th>
                                                    <th>Date of F&F</th>
                                                    <th>F&F Payment</th>
                                                    <th>F&F Cheque No.</th>
                                                </tr>
                                            </thead>
                                        </table>
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
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <script src="../../script/FullAndFinalReport.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
