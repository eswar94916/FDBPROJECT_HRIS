<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeeSignupFinal.aspx.cs" Inherits="Admin_Employee_EmployeeSignupFinal" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee SignUp</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="bodyonload()">
    <form runat="server">
        <!-- BEGIN HEADER -->
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
                <div class="search-form-expanded col-md-offset-3 col-md-3">
                    <br />
                    <div class="input-group">
                        <i class=" icon-list font-black"></i>&nbsp;
                    <span class="caption-subject bold uppercase" id="lbltopheader">Signup form</span>
                    </div>
                </div>
                <div class="page-top">
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <li class="dropdown dropdown-user">
                                <a class="dropdown-toggle" data-toggle="dropdown" data-close-others="true" style="text-decoration: none">
                                    <img alt="" class="img-circle" src="" id="imgdrdp" />
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
                <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">

                    <li class="nav-item active open ">
                        <a href="EmployeeSignUp.aspx" class="nav-link nav-toggle">
                            <i class="icon-diamond"></i>
                            <span class="title">Employee Signup</span>
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
                <div class="row" id="divEnterDetails">
                    <div class="col-md-12">
                        <div class="col-md-3">
                            <ul class="nav nav-pills nav-stacked nav-tabs-sm">
                                <li class="btn btn-circle" id="tab10" style="background-color: white;">
                                    <a href="#tab_0" data-toggle="tab" class="step active" id="step1">
                                        <span class="desc">
                                            <i class="fa fa-check"></i>Employee Details
                                                    (Step-1)</span>
                                    </a>
                                </li>
                                <li id="tab11" class="btn btn-circle" style="background-color: white;">
                                    <a href="#tab_1" data-toggle="tab" class="step active" id="step2">
                                        <span class="desc">
                                            <i class="fa fa-check"></i>Personal Info.
                                                    (Step-2)</span>
                                    </a>
                                </li>

                                <li id="tab12" class="btn btn-circle" style="background-color: white;">
                                    <a href="#tab_2" data-toggle="tab" class="step active" id="step3">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Image
                                                    (Step-3)</span>
                                    </a>
                                </li>
                                <li id="tab13" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_3" data-toggle="tab" class="step active" id="step4">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Resume
                                                    (Step-4)</span>
                                    </a>
                                </li>
                                <li id="tab14" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_4" data-toggle="tab" class="step active" id="step5">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Marksheet
                                                    (Step-5)</span>
                                    </a>
                                </li>
                                <li id="tab15" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_5" data-toggle="tab" class="step active" id="step6">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Ref. Letter
                                                    (Step-6)</span>
                                    </a>
                                </li>

                            </ul>
                            <ul class="nav nav-pills nav-stacked nav-tabs-sm">
                                <li id="tab16" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_6" data-toggle="tab" class="step active" id="step7">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Cheques
                                                    (Step-7)</span>
                                    </a>
                                </li>
                                <li id="tab21" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_7" data-toggle="tab" class="step active" id="step12">
                                        <span class="desc"><i class="fa fa-check"></i>Upload PAN
                                                      
                                                    Card
                                                        (Step-8)</span>
                                    </a>
                                </li>
                                <li id="tab17" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_7" data-toggle="tab" class="step active" id="step8">
                                        <span class="desc"><i class="fa fa-check"></i>Upload Aadhaar
                                                    Card
                                                        (Step-9)</span>
                                    </a>
                                </li>
                                <li id="tab18" class="btn btn-circle" style="background-color: white;">
                                    <a href="#tab_8" data-toggle="tab" class="step active" id="step9">
                                        <span class="desc"><i class="fa fa-check"></i>Earnings
                                                    (Step-10)</span>
                                    </a>
                                </li>
                                <li id="tab19" class=" btn btn-circle" style="background-color: white;">
                                    <a href="#tab_9" data-toggle="tab" class="step active" id="step10">
                                        <span class="desc"><i class="fa fa-check"></i>Deductions
                                                    (Step-11)</span>
                                    </a>
                                </li>
                                <li id="tab20" class="active btn btn-circle" style="background-color: #337AB7">
                                    <a href="#tab_10" data-toggle="tab" class="step active" id="step11">
                                        <span class="desc"><i class="fa fa-check"></i>Resign Details
                                                    (Step-12)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <div id="form_wizard_1">
                                <div class="form-wizard form-horizontal">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tab1">
                                            <div>
                                                <div class="col-md-11" id="div11">

                                                    <div class="portlet light bordered">
                                                        <br />
                                                        <h4 class="bold" style="margin-left: 15px;">Resign Details</h4>
                                                        <br />
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Date Of Resigning</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" data-date-format="dd-M-yyyy" id="txtresigndate" readonly />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Last Working Date</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" data-date-format="dd-M-yyyy" id="txtlastworkdate" readonly />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Exit Interview(Y/N)</label>
                                                            <div class="col-md-4">
                                                                <input type="text" class="form-control" id="txtexitint" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Exit Interview (By)</label>
                                                            <div class="col-md-4">
                                                                <input type="text" class="form-control" id="txtexitintby" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Inactive</label>
                                                            <div class="col-md-4">
                                                                <select id="ddlinactive" class="form-control select2me">
                                                                    <option value="">Select</option>
                                                                    <option value="Y">Y</option>
                                                                    <option value="N">N</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div id="divinactive">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Case</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlcase" class="form-control select2me">
                                                                        <option value="0">Select</option>
                                                                        <option value="1">Absconded</option>
                                                                        <option value="2">Resign</option>
                                                                        <option value="3">Terminate</option>
                                                                        <option value="4">Retirement</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reason</label>
                                                                <div class="col-md-4">
                                                                    <textarea class="form-control" id="txtreason"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Date of NOC</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" data-date-format="dd-M-yyyy" id="txtdatenoc" readonly />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Date of Relieving</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" data-date-format="dd-M-yyyy" id="txtdaterelieving" readonly />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Date of F&F</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" data-date-format="dd-M-yyyy" id="txtdatefnf" readonly />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">F&F Cheque No.</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control" type="text" id="txtfnfchqno" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Remarks</label>
                                                            <div class="col-md-4">
                                                                <textarea class="form-control" cols="60" rows="7" id="txtremarks"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-group" align="center">
                                                            <input type="button" class="btn green" value="Save & Submit" id="btnsavefinal" />
                                                            <input type="button" class="btn red" value="Back" id="btnback" />
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </div>
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

                <!-- END QUICK SIDEBAR -->
            </div>
            <div class="page-footer">
                <div class="page-footer-inner">
                    
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
                </div>
            </div>
        </div>
    </div>
    <!-- BEGIN CORE PLUGINS -->
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../script/empsignupfinal.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->

    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
