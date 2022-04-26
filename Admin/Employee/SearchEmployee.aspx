<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SearchEmployee.aspx.cs" Inherits="Admin_Employee_SearchEmployee" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Search & Edit</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <link href="../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/pages/css/profile.min.css" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>

    <link rel="shortcut icon" href="favicon.ico" />
    <script src="../../assets/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.js-example-basic-multiple').select2();
        });
    </script>
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
                        <a href="SearchEmployee.aspx" class="nav-link nav-toggle">
                            <i class="icon-book-open"></i>
                            <span class="title">Search Employee</span>
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

                <!-- BEGIN EXAMPLE TABLE PORTLET-->
                <div class="portlet light portlet-fit ">
                    <div class="portlet-title">
                        <div class="caption ">
                            <i class=" icon-docs font-red"></i>
                            <span class="caption-subject bold uppercase">Search Employee</span>
                        </div>
                    </div>

                </div>

                <div class="row" id="divemployeeSearch">
                    <div class="col-md-12">
                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                        <div class="portlet light portlet-fit ">

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
                                                        Unit                                                
                                                    </label>
                                                    <div class="col-md-4">
                                                        <select id="ddlunitname" class=" form-control  select2me"></select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label text-center col-md-4">
                                                        Search By 
                                                    </label>
                                                    <label class="control-label col-md-1">
                                                        Name&nbsp;&nbsp;<input type="radio" name="rdb1" value="1" checked />
                                                    </label>
                                                    <label class="control-label col-md-2">
                                                        Employee Code&nbsp;&nbsp;<input type="radio" name="rdb1" value="2" />
                                                    </label>
                                                </div>
                                                <br />

                                                <div class="form-group">
                                                    <label class="control-label text-center col-md-4">
                                                        Employee
                                                    </label>
                                                    <div class="col-md-4">
                                                        <div id="ddlEmployees">
                                                            <select class="form-control select2me" id="ddlempname">
                                                                <option value="0">Select</option>
                                                            </select>
                                                        </div>
                                                        <br />
                                                        <button type="button" class="btn purple-intense" id="btnsearch" style="margin-left: 150px;">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- END EXAMPLE TABLE PORTLET-->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row" id="profile">
                    <div class="col-md-12">
                        <div class="profile-sidebar">
                            <div class="portlet light profile-sidebar-portlet">
                                <div class="profile-userpic">
                                    <img id="imgpro" class="img-responsive" alt="">
                                </div>
                                <div class="profile-usertitle">
                                    <div class="profile-usertitle-name">
                                        <label id="lblusrname"></label>
                                    </div>
                                    <div class="profile-usertitle-job">
                                        <label id="lbldesig"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="portlet light ">
                                        <div class="portlet-title tabbable-line">
                                            <div class="caption caption-md">
                                                <i class="icon-globe theme-font hide"></i>
                                                <span class="caption-subject font-blue-madison bold uppercase">Profile Account</span>
                                            </div>
                                            <ul class="nav nav-tabs">
                                                <li id="li1" class="active">
                                                    <a href="#tab_1_1" data-toggle="tab">Personal Info</a>
                                                </li>
                                                <li id="li2">
                                                    <a href="#tab_1_2" data-toggle="tab">Address Details</a>
                                                </li>
                                                <li id="li3">
                                                    <a href="#tab_1_3" data-toggle="tab">Document/Photo Upload</a>
                                                </li>

                                                <li id="li4">
                                                    <a href="#tab_1_5" data-toggle="tab">Earning Details</a>
                                                </li>
                                                <li id="li5">
                                                    <a href="#tab_1_6" data-toggle="tab">Deduction Details</a>
                                                </li>
                                                <li id="li6">
                                                    <a href="#tab_1_4" data-toggle="tab">Resignation Details</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portlet-body">
                                            <div class="tab-content">
                                                <!-- PERSONAL INFO TAB -->
                                                <div class="tab-pane active" id="tab_1_1">
                                                    <form role="form" action="#">
                                                        <div class="portlet light bordered form-horizontal">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">
                                                                    Company Name
                                                                </label>
                                                                <div class="col-md-4">
                                                                    <select class="form-control select2me" id="ddlcompany1" disabled>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>

                                                            <%--<div class="form-group">
                                                                <label class="control-label col-md-5">Serial No</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtserial" readonly />
                                                                </div>
                                                            </div>--%>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Unit</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlunit" class="form-control select2me" disabled>
                                                                        <option value="0">Select</option>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Location</label>
                                                                <div class="col-md-4">
                                                                    <select id="txtlocation" class="form-control select2me">
                                                                        <option value="0">Select</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Name</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtname" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Employee Code</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="lblempcode" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Gender</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlGender" class=" form-control select2me">
                                                                        <option value="0">Select  </option>
                                                                        <option value="Male">Male </option>
                                                                        <option value="Female">Female </option>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Grade</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlgrade" class=" form-control select2me">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Department</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlDepartment" class=" form-control select2me">
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Designation</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddldesignation" class=" form-control select2me">
                                                                        <option value="0">Select</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reporting Officer</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlReportingOfficer" class=" form-control select2me">
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Role</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlrole" class=" form-control select2me">
                                                                        <option value="0">Select</option>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Date of Joining</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control date-picker" type="text" id="doj" data-date-format="dd-M-yyyy" />
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Date Of Birth</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="dob" data-date-format="dd-M-yyyy" />
                                                                </div>

                                                                <div class="col-md-1" style="color: red">*</div>
                                                                <label class="control-label col-md-1">Age</label>
                                                                <label class="control-label col-md-1" id="lblAge"></label>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Marital Status (M / UM)</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlMarital" class=" form-control select2me">
                                                                        <option value="0">Select  </option>
                                                                        <option value="Married">Married </option>
                                                                        <option value="UnMarried">UnMarried </option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Marriage Anniversary</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="anniversry" data-date-format="dd-M-yyyy" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Mobile Number</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtmobile" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Email</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtmail" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Education (Highest)</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddleducation" class=" form-control select2me">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Past Experience</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtexp" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Bank</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlBank" class=" form-control select2me">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Account No</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtAcNo" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">IFSC Code</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtifsccode" />
                                                                </div>
                                                                <span class="col-md-2" style="color: darkred">(Eg:IFSC0098124)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">UAN No</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtUNno" />
                                                                </div>
                                                                <span class="col-md-2" style="color: darkred">(Eg:998713456700)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">ESI No</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtESINo" />
                                                                </div>
                                                                <span class="col-md-2" style="color: darkred">(Eg:9876345763)</span>
                                                            </div>

                                                            <div class="form-group" align="center">
                                                                <input type="button" class="btn green" value="Save Changes" id="btnsave1" />
                                                            </div>
                                                            <br />

                                                        </div>
                                                    </form>
                                                </div>
                                                <!-- END PERSONAL INFO TAB -->
                                                <!-- CHANGE AVATAR TAB -->
                                                <div class="tab-pane" id="tab_1_2">
                                                    <form action="#" role="form">
                                                        <div class="portlet light bordered form-horizontal">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Father's Name</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtfname" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Aadhaar Card</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtaadhaar" maxlength="14" />
                                                                </div>
                                                                <span class="col-md-3" style="color: darkred">(Eg: 9684 1552 2551)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">PAN Card</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpan" />
                                                                </div>
                                                                <span class="col-md-2" style="color: darkred">(Eg: bwbpk7166d)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Permanent Address</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtaddress" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Correspondence Address</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcoraddress" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Domicile</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtdomicile" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Blood Group</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtblodgp" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Mode Of Insurance</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlmode" class=" form-control select2me">

                                                                        <option value="1">C</option>
                                                                        <option value="2">D</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1" style="color: red"></div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Premium Amount</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpremiumamt" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red"></div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Employee Med. Insurance Start Date</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="insstdate" data-date-format="dd-M-yyyy" readonly />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Employee Med. Insurance Validity</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="insvalid" data-date-format="dd-M-yyyy" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Operator</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlOperator" class=" form-control select2me">
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Policy No.</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpolicy" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Contact Person Name (Emg.)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcontactperson" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Contact No (Emg.)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcontactno" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Relationship</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrelation" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (House)</label>
                                                                <div class="col-md-4">
                                                                    <select id="txthouseaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (Car)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtcaraset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (Laptop)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtlapaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (Mobile)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtmobaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (Dongle)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtdongaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (CUG)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtcugaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Company Assets (Others)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtothers" />
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reference Name 1</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefname1" />
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reference Contact Number 1</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefnum1" />
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reference Name 2</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefname2" />
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">Reference Contact Number 2</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefnum2" />
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-5">CTC offered at the time of joining</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtctc" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group" align="center">
                                                                <input type="button" class="btn green" value="Save Changes" id="btnsave2" />
                                                            </div>
                                                            <br />
                                                        </div>
                                                    </form>
                                                </div>
                                                <!-- END CHANGE AVATAR TAB -->
                                                <!-- CHANGE AVATAR TAB -->
                                                <div class="tab-pane" id="tab_1_3">
                                                    <div class="form-horizontal">

                                                        <div class="form-group">
                                                            <label class="control-label col-md-3 ">
                                                                Photo
                                                            </label>
                                                            <div class="col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                                                        <img alt="" id="imgsrc" />
                                                                    </div>
                                                                    <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"></div>
                                                                    <div>
                                                                        <%--<span class="btn default btn-file">
                                                                           <span class="fileinput-new">Select image </span>
                                                                          
                                                                            <span class="fileinput-exists">Change </span>
                                                                            <input type="file" name="...">
                                                                        </span>--%>
                                                                        <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput">Remove </a>
                                                                        <input type="button" id="btnrefresh" value="Refresh" class="btn green" />
                                                                        <input type="button" id="btnchgimg" value="Change" class="btn red" />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label  col-md-3 ">Resume</label>
                                                            <div class="col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgresum" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshresm" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="cvlink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3 ">Marksheet</label>
                                                            <div class="col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;
                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgmarkshet" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshmrksht" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="marklink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3 ">Reference Letter</label>
                                                            <div class="col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;
                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgreflet" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshreflt" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="refletlink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3">Cheques</label>
                                                            <div class=" col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;
                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgcheq" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshcheq" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="cheqlink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3">PAN Card</label>
                                                            <div class=" col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;
                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgpan" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshpan" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="panlink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label  col-md-3">Aadhaar Card</label>
                                                            <div class=" col-md-7">
                                                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                                                    <span class="fileinput-filename"></span>&nbsp;                                                       
                                                                <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"></a>
                                                                    <input type="button" id="btnchgidprof" value="Change File" class="btn red" />
                                                                    <input type="button" id="btnrefreshidprf" value="Refresh" class="btn green" />
                                                                </div>
                                                                <a target="_blank" class="btn purple" id="addprooflink">View/Download</a>
                                                            </div>
                                                        </div>
                                                        <div class="margiv-top-10" align="center">
                                                            <input type="button" id="btnnext" class="btn green" value="Next" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END CHANGE AVATAR TAB -->
                                                <!-- CHANGE PASSWORD TAB -->
                                                <div class="tab-pane" id="tab_1_4">
                                                    <form action="#">
                                                        <div class="portlet light bordered form-horizontal">
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
                                                                <label class="control-label col-md-5">Exit Interview(By)</label>
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
                                                            <div class="margiv-top-10" align="center">
                                                                <input type="button" id="btnsavefinal" class="btn green" value="Save Changes" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane" id="tab_1_5">
                                                    <form action="#" role="form">
                                                        <div class="portlet light bordered form-horizontal">
                                                            <div class="portlet white">
                                                                <br />
                                                                <h4 class="bold" style="margin-left: 20px;">
                                                                    <center>Earnings</center>
                                                                </h4>
                                                                <br />
                                                                <div class="portlet-body white" id="divearninglist" style="margin-left: 20px; margin-right: 20px;">
                                                                    <table class="table table-striped table-bordered table-hover order-column text-center" id="tblearning" style="border-radius: 8px; border: 4px black" border="1">
                                                                        <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                                            <tr style="border-radius: 3px; border: 2px solid black">


                                                                                <td style="text-align: center">Type</td>
                                                                                <td style="text-align: center">Earning Name</td>
                                                                                <%-- <td style="text-align: center">Value Type</td>--%>
                                                                                <td style="text-align: center">Value or Percentage</td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            LTA                                             
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtlta" class=" form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            APB                                             
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtapb" class=" form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            Gratuity                                             
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtGratuity" class=" form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            Bonus                                             
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtbonus" class=" form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            PF (Employer)                                              
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtpfemployer" class=" form-control"  />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4">
                                                                            ESI (Employer)                                              
                                                                        </label>
                                                                        <div class="col-md-4">
                                                                            <input type="text" id="txtesiemployer" class=" form-control"  />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br />
                                                                <div class="form-group" align="center">
                                                                    <input type="button" class="btn green" value="Save & Next" id="btnsave9" />

                                                                </div>
                                                                <br />
                                                            </div>
                                                            <br />

                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane" id="tab_1_6">
                                                    <form action="#" role="form">
                                                        <div class="portlet light bordered form-horizontal">
                                                            <div class="portlet white">
                                                                <br />
                                                                <h4 class="bold" style="margin-left: 20px;">
                                                                    <center>Deductions</center>
                                                                </h4>
                                                                <br />
                                                                <div class="portlet-body white" id="divdeductionlist" style="margin-left: 20px; margin-right: 20px;">
                                                                    <table class="table table-striped table-bordered table-hover order-column text-center" id="tbldeduction" style="border-radius: 8px; border: 4px black" border="1">
                                                                        <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                                            <tr style="border-radius: 3px; border: 2px solid black">
                                                                                <td style="text-align: center">Type</td>
                                                                                <td style="text-align: center">Deduction Name</td>
                                                                                <%--<td style="text-align: center">Value Type</td>--%>
                                                                                <td style="text-align: center">Value or Percentage</td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                </div>
                                                                <br />
                                                                <div class="form-group" align="center">
                                                                    <input type="button" class="btn green" value="Save & Next" id="btnsave10" />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <br />

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <center>                                          
                                            <a href="SearchEmployee.aspx" class="btn purple">Back to Search</a>
                                        </center>
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
        </div>
    </div>
    <!-- END CONTAINER -->
    <!-- BEGIN FOOTER -->
    <div class="page-footer">
      
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        
    </div>
    <!-- BEGIN CORE PLUGINS -->
    <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
    <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/profile.min.js" type="text/javascript"></script>
    <script src="../../script/search.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
