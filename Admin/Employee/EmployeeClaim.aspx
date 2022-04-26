<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeeClaim.aspx.cs" Inherits="Admin_Employee_EmployeeClaim" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee Claim</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <link href="../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css" />

    <!-- END PAGE LEVEL PLUGINS -->
    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="../../assets/global/plugins/datatables/datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/css/components-md.min.css" rel="stylesheet" id="style_components" type="text/css" />
    <link href="../../assets/global/css/plugins-md.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME GLOBAL STYLES -->
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="../../assets/pages/css/profile.min.css" rel="stylesheet" type="text/css" />
    <!-- END PAGE LEVEL STYLES -->
    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="../../assets/layouts/layout2/css/layout.min.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/layouts/layout2/css/themes/blue.min.css" rel="stylesheet" type="text/css" id="style_color" />
    <link href="../../assets/layouts/layout2/css/custom.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <script src="../../assets/jquery.min.js"></script>
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="bodyonload()">
    <!-- BEGIN HEADER -->
    <form runat="server">
        <div class="page-header navbar navbar-fixed-top">
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
            <div class="page-sidebar navbar-collapse ">
                <!-- BEGIN SIDEBAR MENU -->
                <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="true" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                    <li class="nav-item active open" id="liSalarySlip">
                        <a href="EmployeeClaim.aspx" class="nav-link nav-toggle">
                            <i class="icon-book-open"></i>
                            <span class="title">Employee Claim</span>
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
                <!-- BEGIN PAGE HEADER-->

                <!-- END PAGE HEADER-->
                <div class="row" id="divemployeeSearch">
                    <div class="col-md-12">
                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                        <div class="portlet light portlet-fit ">
                            <div class="portlet-title">
                                <div class="caption ">
                                    <i class=" icon-docs font-red"></i>
                                    <span class="caption-subject bold uppercase">Employee Claim</span>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <form class="form-horizontal">
                                    <div class="form-body hidden-print" id="divSlip">
                                        <div class="form-horizontal">
                                            <div class="row">
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
                                                        <input type="text" id="txtempcode" class=" form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">
                                                        Employee Name                                                
                                                    </label>
                                                    <div class="col-md-4">
                                                        <input type="text" id="txtempname" class=" form-control" readonly />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">
                                                        Department                                                
                                                    </label>
                                                    <div class="col-md-4">
                                                        <input type="text" id="txtdept" class=" form-control" readonly />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">
                                                        Date                                                
                                                    </label>
                                                    <div class="col-md-4">
                                                        <div class="date-picker input-daterange" data-date-format="dd/mm/yyyy">
                                                            <input type="text" class="form-control" name="from" id="txtclaimdate" readonly>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="divclaim">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4">
                                                            Claim                                                
                                                        </label>
                                                        <div class="col-md-4">
                                                            <select id="ddlclaim" class=" form-control  select2me"></select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4">
                                                            Amount                                                
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input type="text" id="txtamount" class=" form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div align="center">
                                                    <button type="button" class="btn bg-green" style="color: white" id="btnsave">Save & Manage Claim</button>
                                                    <button type="button" class="btn bg-green" style="color: white" id="btnsaveclaim">Save</button>
                                                    <button type="button" class="btn bg-green" style="color: white" id="btnupdate">Update & Manage Claim</button>
                                                    <button type="button" class="btn bg-yellow" style="color: white" id="btnreset">Reset </button>
                                                    <button type="button" class="btn bg-yellow" style="color: white" id="btnresetclaim">Reset</button>
                                                    <button type="button" class="btn bg-purple" style="color: white" id="btnshow">Show</button>
                                                </div>
                                                <div class="form-actions">
                                                    <div id="divclaimdetails">
                                                        <table class="table table-striped table-bordered table-hover order-column text-center" id="tblclaim" style="border-radius: 8px; border: 4px black" border="1">
                                                            <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                                <tr style="border-radius: 3px; border: 2px solid black">
                                                                    <th style="text-align: center">S.No.</th>
                                                                    <th style="text-align: center">Claim Name</th>
                                                                    <th style="text-align: center">Amount</th>
                                                                    <th style="text-align: center"></th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                        <div align="center">
                                                            <button type="button" class="btn bg-green" style="color: white" id="btnsubmit">Save & Submit</button>
                                                            <button type="button" class="btn bg-green" style="color: white" id="btnupdatesubmit">Update & Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div class="form-actions" id="divdetails">
                                                    <div>
                                                        <table class="table table-striped table-bordered table-hover order-column text-center" id="tbldetails" style="border-radius: 8px; border: 4px black" border="1">
                                                            <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                                <tr style="border-radius: 3px; border: 2px solid black">
                                                                    <th style="text-align: center">S.No.</th>
                                                                    <%--<th style="text-align: center">Company</th>--%>
                                                                    <th style="text-align: center">Employee Code</th>
                                                                    <th style="text-align: center">Employee Name</th>
                                                                    <th style="text-align: center">Department</th>
                                                                    <th style="text-align: center">Date</th>
                                                                    <th style="text-align: center">Claims</th>
                                                                    <th style="text-align: center"></th>
                                                                    <th style="text-align: center"></th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
    <!-- END CONTAINER -->
    <!-- BEGIN FOOTER -->
    <div class="page-footer">
        <div class="page-footer-inner">
            
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
    </div>
    <!-- BEGIN CORE PLUGINS -->
    <script src="../../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/js.cookie.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
    <!-- END CORE PLUGINS -->
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <script src="../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL PLUGINS -->
    <!-- BEGIN THEME GLOBAL SCRIPTS -->
    <script src="../../assets/global/scripts/app.min.js" type="text/javascript"></script>
    <!-- END THEME GLOBAL SCRIPTS -->
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="../../assets/pages/scripts/profile.min.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL SCRIPTS -->
    <script src="../../assets/global/scripts/datatable.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/datatables/datatables.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
    <!-- BEGIN THEME LAYOUT SCRIPTS -->
    <script src="../../assets/layouts/layout2/scripts/layout.min.js" type="text/javascript"></script>
    <script src="../../assets/layouts/layout2/scripts/demo.min.js" type="text/javascript"></script>
    <script src="../../assets/layouts/global/scripts/quick-sidebar.min.js" type="text/javascript"></script>
    <script src="../../script/EmployeeClaim.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
