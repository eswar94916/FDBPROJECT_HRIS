<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UploadMarksheet.aspx.cs" Inherits="Admin_Employee_UploadMarksheet" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <title>HRIS-Upload Marksheet</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    
    <!-- END THEME LAYOUT STYLES -->

</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="bodyonload()">
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
                            <a href="EmployeeSignUp.aspx" class="nav-link nav-toggle">
                                <i class="icon-home"></i>
                                <span class="title">Employee SignUp</span>
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
                    <h3 class="page-title"></h3>
                    <div class="row" id="divuploadques">
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
                                    <li id="tab14" class="active btn btn-circle" style="background-color: #337AB7">
                                        <a href="#tab_4" data-toggle="tab" class="step active" id="step5">
                                            <span class="desc"><i class="fa fa-check"></i>Upload Marksheet
                                                    (Step-5)</span>
                                        </a>
                                    </li>
                                    <li id="tab15" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_5" data-toggle="tab" class="step active" id="step6">
                                            <span class="desc">Upload Ref. Letter
                                                    (Step-6)</span>
                                        </a>
                                    </li>

                                </ul>
                                <ul class="nav nav-pills nav-stacked nav-tabs-sm">
                                    <li id="tab16" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_6" data-toggle="tab" class="step active" id="step7">
                                            <span class="desc">Upload Cheques
                                                    (Step-7)</span>
                                        </a>
                                    </li>
                                    <li id="tab21" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_7" data-toggle="tab" class="step active" id="step12">
                                            <span class="desc">Upload PAN
                                                      
                                                    Card
                                                        (Step-8)</span>
                                        </a>
                                    </li>
                                    <li id="tab17" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_7" data-toggle="tab" class="step active" id="step8">
                                            <span class="desc">Upload Aadhaar
                                                    Card
                                                        (Step-9)</span>
                                        </a>
                                    </li>
                                    <li id="tab18" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_8" data-toggle="tab" class="step active" id="step9">
                                            <span class="desc">Earnings
                                                    (Step-10)</span>
                                        </a>
                                    </li>
                                    <li id="tab19" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_9" data-toggle="tab" class="step active" id="step10">
                                            <span class="desc">Deductions
                                                    (Step-11)</span>
                                        </a>
                                    </li>
                                    <li id="tab20" class="btn btn-circle" style="background-color: white;">
                                        <a href="#tab_10" data-toggle="tab" class="step active" id="step11">
                                            <span class="desc">Resign Details
                                                    (Step-12)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-9">
                                <div class="portlet light">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class=" icon-docs font-red"></i>
                                            <span class="caption-subject bold uppercase">Upload Marksheet
                                            </span>
                                        </div>
                                    </div>
                                    <div class="portlet-body form-horizontal">
                                        <div class="form-body">

                                            <div class="form-group">
                                                <label class="control-label col-md-5">
                                                    Upload Marksheet
                                                </label>
                                                <div class="col-md-7">
                                                    <asp:FileUpload ID="FileUpload1" runat="server" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-4">
                                                </label>
                                                <div class="col-md-8">
                                                    <label class="control-label col-md-8" id="lblmsg" runat="server">
                                                    </label>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="col-md-offset-5">
                                                <asp:Button runat="server" ID="btnUpload" CssClass="btn green-meadow" Text="Submit" OnClick="btnUpload_Click" />
                                                <asp:Button runat="server" ID="btnback" CssClass="btn red" Text="Back" OnClick="btnBack_Click" />
                                            </div>
                                        </div>
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
                                    <br />
                                    <br />
                                    <br />
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
        <div class="page-footer">
            
        </div>
    </form>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../script/common.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
