<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AdminDashboard.aspx.cs" Inherits="Admin_AdminDashboard" %>

<%    
    if (User.IsInRole("Admin"))
    {
        lblrole.InnerText = "Admin";
    }    
%>
<!DOCTYPE html>

<html lang="en">
<head>
    <title>HRIS-Dashboard</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js"></script>
    <script>
        google.charts.load('current', { 'packages': ['corechart'] });
        //google.charts.setOnLoadCallback(drawChart);
    </script>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" onload="onbodyload()">
    <form runat="server">
        <div class="page-header navbar navbar-fixed-top" style="background-color: #616D7E">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <div class="page-logo" style="background-color: #E5252B">
                    <a style="text-decoration: none">
                        <img src="../Image/logo.png" style="margin-top: 10px; margin-left: -10px" alt="logo" class="logo-default" />
                    </a>
                    <div class="menu-toggler sidebar-toggler">
                        <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
                    </div>
                </div>
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                <!-- BEGIN PAGE ACTIONS -->
                <!-- DOC: Remove "hide" class to enable the page header actions -->
                <div class="page-actions">
                    <div class="btn-group">
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-docs"></i>New Post </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-tag"></i>New Comment </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-share"></i>Share </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-flag"></i>Comments
                                    <span class="badge badge-success">4</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-users"></i>Feedbacks
                                    <span class="badge badge-danger">2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- END PAGE ACTIONS -->
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">

                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <li class="dropdown dropdown-user">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
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

                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li class="nav-item start active open">
                            <a href="AdminDashboard.aspx" class="nav-link nav-toggle">
                                <i class="icon-home"></i>
                                <span class="title">Dashboard</span>
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

                    <!-- END THEME PANEL -->

                    <h1 class="page-title">Admin Dashboard</h1>
                    <div class="page-bar">

                        <ul class="page-breadcrumb">
                            <li>
                                <i class="icon-home"></i>
                                <a>Home</a>
                                <i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <span>Dashboard</span>
                            </li>
                        </ul>
                    </div>
                    <!-- END PAGE HEADER-->
                    <!-- BEGIN DASHBOARD STATS 1-->
                    <div id="divAdmin" runat="server">
                        <div id="unitcount" align="center">
                        </div>
                        <%--<div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;&nbsp;Configurations</h3>
                                <hr />
                                <a class="more" href="Configurations/ManageUnit.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat red">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Unit<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="Configurations/ManageDepartment.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Department
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageRole.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Role
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageDesignation.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-mint">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Designation
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageLocation.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat purple">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Location<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageEarningDeduction.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat dashboard-stat green-dark ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Earning/Deduction List
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageLeave.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Leave Type
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageLeaveYearly.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat   purple-sharp ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Leave Yearly
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageTrainingMode.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-dark">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Training Mode
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageTraining.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-casablanca ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Training
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageGrade.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-steel">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Grade
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageEducation.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-cascade">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Education
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageBank.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green-meadow">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Bank
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageOperator.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-mint">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Insurance Operator
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Configurations/ManageHoliday.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-hoki">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Holiday Calendar
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>--%>
                        <div class="row form-horizontal">

                            <div>
                                <h3>&nbsp;Employee Management</h3>
                                <hr />
                                <a class="more" href="Employee/EmployeeSignUp.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat purple">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Employee SignUp
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                               <%-- <a class="more" href="Employee/ImportEmployeeDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-casablanca">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Import Employee<br />
                                                    Details
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>--%>

                                <a class="more" href="Employee/ViewEmployeeDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat purple-sharp ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    View Employee Details<br />
                                                    (Personal Info./Appointment<br />
                                                    /F&F Letter)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="Employee/SearchEmployee.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Search & Edit Employee<br />
                                                    Details
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmployeeTraining.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat  green-meadow">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Employee<br />
                                                    Training
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmployeesLeaveManagement.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Employee<br />
                                                    Leave                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="Employee/EmpPromotionDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat red">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Employee<br />
                                                    Increment
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="Employee/ImportEmpIncrementDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-gallery">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Import Employee<br />
                                                    Increment
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                              
                                <a class="more" href="Employee/EmployeeSalarySlip.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-chambray">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Employee<br />
                                                    Salary
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="Employee/AppraisalForm.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat  yellow-mint ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Appraisal Form<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/ImportEmployeeAppraisalDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat  green ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Import Appraisal<br />
                                                    Details

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/PendingAppraisalList.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-steel">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Pending Appraisals
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/SendMail.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-mint">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Send Mail<br />
                                                    (Birthday/Marriage Anniversary/<br />
                                                    Job Anniversary)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmployeeTransferDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-dark">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage Employee Transfer
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                              <%--  <a class="more" href="Employee/ManageAPB.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green-dark">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Manage APB
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>--%>
                            </div>
                        </div>
                        <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;Reports</h3>
                                <hr />
                                <a class="more" href="Employee/AnnexureEmployee.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-mint">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Annexure 
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/IncomeTaxReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat purple">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Income Tax<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/MonthWiseIncomeTaxReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-gallery">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Monthwise Income Tax<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/employeepromotion.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat red-pink ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Increment Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/MedicalInsReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-madison">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Medical Insurance<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmployeeAssetReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-hoki">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Assets
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/FullAndFinalReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green-dark">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Full & Final<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>


                                <a class="more" href="Employee/AppraisalReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-chambray">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Appraisal
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/AppraisalHistory.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green-meadow">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Appraisal History<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/JoiningReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-silver">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Joining
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/ResginationReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat green">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Resignation
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmpTrainingReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Training
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                               
                                <a class="more" href="Employee/SalarySummaryReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-casablanca">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Salary Summary Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/EmployeeLeaveLedger.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-dark">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Leave Ledger
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                               <%-- <a class="more" href="Employee/PendingAPB.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat red ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    APB Due Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>--%>
                                <a class="more" href="Employee/EmployeeBonusDetails.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat yellow-haze ">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Bonus Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/MonthlyPFLedger.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-cascade">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    PF & ESI Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/SendMailReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat blue-steel">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Birthday/Marriage Anniversary/
                                                    <br />
                                                    Job Anniversary Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="Employee/DocumentStatusReport.aspx" target="_blank">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="dashboard-stat grey-salsa">
                                            <div class="visual">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="details">
                                                <div class="number">
                                                    <span></span>
                                                </div>
                                                <div class="desc">
                                                    Document Status Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- END CONTENT BODY -->

        <div class="page-footer">
            
        </div>
    </form>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../script/dashboard.js"></script>

    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>
