<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SuperAdminDashboard.aspx.cs" Inherits="SuperAdmin_SuperAdminDashboard" %>

<!DOCTYPE html>
<%    
    if (User.IsInRole("SuperAdmin"))
    {
        lblrole.InnerText = "SuperAdmin";
    }    
%>
<!DOCTYPE html>

<html lang="en">
<head>
    <title>HRIS</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
     <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md">
    <form runat="server">
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">

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

                    <h1 class="page-title">SuperAdmin Dashboard</h1>
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
                        <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;&nbsp;Configurations</h3>
                                <hr />
                                <a class="more" href="ManageCompany.aspx" target="_blank">
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
                                                    Manage Company<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageUnit.aspx" target="_blank">
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
                                <a class="more" href="../Admin/Configurations/ManageClaim.aspx" target="_blank">
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
                                                    Manage Claim<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageDepartment.aspx" target="_blank">
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
                                <a class="more" href="../Admin/Configurations/ManageDesignation.aspx" target="_blank">
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
                                                    Manage Designation
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageEarningDeduction.aspx" target="_blank">
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
                                                    Manage Earning/Deduction
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageLeave.aspx" target="_blank">
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
                                                    Manage Leave
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageTrainingMode.aspx" target="_blank">
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
                                                    Manage Training Mode
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Configurations/ManageTraining.aspx" target="_blank">
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
                                                    Manage Training
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;User Management</h3>
                                <hr />
                                <a class="more" href="CreateUser.aspx" target="_blank">
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
                                                    Create User
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row form-horizontal">

                            <div>
                                <h3>&nbsp;Employee Management</h3>
                                <hr />

                                <a class="more" href="../Admin/Employee/EmployeeTraining.aspx" target="_blank">
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
                                                    Employee Training
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/EmployeesLeaveManagement.aspx" target="_blank">
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
                                                    Employee Leave<br />
                                                    Management
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="../Admin/Employee/EmpPromotionDetails.aspx" target="_blank">
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
                                                    Promotion

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/SearchEmployee.aspx" target="_blank">
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
                                <a class="more" href="../Admin/Employee/EmployeeSalarySlip.aspx" target="_blank">
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
                                                    Employee Salary<br />
                                                    Slip
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/EmployeeClaim.aspx" target="_blank">
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
                                                    Employee Claim<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/AppraisalForm.aspx" target="_blank">
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
                                                    Appraisal Form<br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;View Reports</h3>
                                <hr />
                                <a class="more" href="../Admin/Employee/employeepromotion.aspx" target="_blank">
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
                                                    Employees Promotion<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/employee_claim_report.aspx" target="_blank">
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
                                                    Employees Claim<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/AppraisalReport.aspx" target="_blank">
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
                                                    Employees Appraisal<br />
                                                    Report

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/ResginationReport.aspx" target="_blank">
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
                                                    Employees Resgination<br />
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/JoiningReport.aspx" target="_blank">
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
                                                    Employees Joining<br />
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/EmpTrainingReport.aspx" target="_blank">
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
                                                    Employees Training<br />
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/EmpSalaryReport.aspx" target="_blank">
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
                                                    Employees Salary<br />
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="../Admin/Employee/ViewEmployeeDetails.aspx" target="_blank">
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
                                                    View Employee<br />
                                                    Details
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <%-- <a class="more" href="../InstituteAdmin/CandidateBranchMapping.aspx" target="_blank">
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
                                                    Manage Candidate Batch<br />
                                                    Mapping
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                
                                <a class="more" href="ResetPassword.aspx" target="_blank">
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
                                                    Reset Users'<br />
                                                    Password
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="more" href="ActivateDeactivateUserAccount.aspx" target="_blank">
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
                                                    Activate-Deactivate<br />
                                                    User's Account
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="more" href="UserRoleManagement.aspx" target="_blank">
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
                                                    Add/Remove User<br />
                                                    From Role
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>--%>
                            </div>
                        </div>
                        <%-- <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;File Size Management</h3>
                                <hr />
                                <a class="more" href="ManageImagePDFFileSize.aspx" target="_blank">
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
                                                    Manage File<br />
                                                    Size
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div class="row form-horizontal">
                            <div>
                                <h3>&nbsp;Report Dashboard</h3>
                                <hr />
                                <a class="more" href="#">
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
                                                    Report Dashboard-<br />
                                                    Cash
                                                    Flow
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>--%>
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
    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>
