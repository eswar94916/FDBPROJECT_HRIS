<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ViewEmployeeDetails.aspx.cs" Inherits="Admin_Employee_ViewEmployeeDetails" %>

<!DOCTYPE html>

<html>
<head>
    <title>HRIS-View Employee</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>

    <script src="../../assets/jquery.min.js"></script>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <style type="text/css" media="print">
        @media print {
            body {
                zoom: 70%;
            }

            @page {
                size: A4 portrait;
            }
        }
    </style>
</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md" onload="onbodyload()">
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
                        <a href="ViewEmployeeDetails.aspx" class="nav-link nav-toggle">
                            <i class="icon-book-open"></i>
                            <span class="title">View Employee Details</span>
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
                    <div class="col-md-11">
                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                        <div class="portlet light portlet-fit ">
                            <div class="portlet-title hidden-print" id="divheading">
                                <div class="caption">
                                    <i class=" icon-docs font-red"></i>
                                    <span class="caption-subject bold uppercase">View Employee Details</span>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="form-horizontal">
                                    <div class="form-body hidden-print" id="divSlip">
                                        <div class="form-horizontal">
                                            <div class="form-group">
                                                <div id="divcomp">
                                                    <label class="control-label col-md-1">
                                                        Company                                                
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select id="ddlcompany" class=" form-control  select2me"></select>
                                                    </div>
                                                </div>
                                                <label class="control-label col-md-1">
                                                    Unit                                                
                                                </label>
                                                <div class="col-md-3">
                                                    <select id="ddlunit" class=" form-control  select2me"></select>
                                                </div>
                                                <label class="control-label col-md-1">
                                                    Department                                                
                                                </label>
                                                <div class="col-md-3">
                                                    <select id="ddldepart" class=" form-control  select2me"></select>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="button" class="btn green" id="btnshow" value="Show" />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div class="hidden-print" id="divtbl">
                                            <div class="tools"></div>
                                            <table class="table table-striped table-bordered table-hover order-column" id="sample_1">
                                                <thead style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                    <tr style="border-radius: 3px; border: 2px solid black">
                                                        <th>Unit  </th>
                                                        <th>Code </th>
                                                        <th>Name </th>
                                                        <th>Deptt</th>
                                                        <th>Desig</th>
                                                        <th>Location</th>
                                                        <th>Role </th>
                                                        <th>DOB</th>
                                                        <th>Contact</th>
                                                        <th>Email</th>
                                                        <th>Reporting<br />
                                                            Officer</th>
                                                        <th>Marital<br />
                                                            Status</th>
                                                        <th>Anniversary</th>
                                                        <th>Highest<br />
                                                            Education</th>
                                                        <th>Experience</th>
                                                        <th>Father<br />
                                                            Name</th>
                                                        <th>Aadhaar<br />
                                                            Card </th>
                                                        <th>PAN<br />
                                                            Card</th>
                                                        <th>Permanent<br />
                                                            Add.</th>
                                                        <th>Correspondence<br />
                                                            Add.</th>
                                                        <th>Domicile</th>
                                                        <th>Blood<br />
                                                            Group</th>
                                                        <th>Bank</th>
                                                        <th>Account<br />
                                                            No</th>
                                                        <th>UAN</th>
                                                        <th>ESI</th>
                                                        <th>Ref.<br />
                                                            Name 1</th>
                                                        <th>Ref.<br />
                                                            Contact 1</th>
                                                        <th>Ref.<br />
                                                            Name 2</th>
                                                        <th>Ref.<br />
                                                            Contact 2</th>
                                                        <th>Personal<br />
                                                            Info.</th>
                                                        <th>Appointment<br />
                                                            Letter</th>
                                                        <th>F&F<br />
                                                            Letter</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <hr />
                                    </div>
                                    <div class="form-body" id="divPrint">
                                    </div>
                                    <div class="form-body" id="divFNF">
                                    </div>

                                    <div class="form-group" id="divperinfo1" style="font-size: 1.6em !important; line-height: 1 !important; border: solid; border-color: black; border-width: 2px; font-family: Calibri">
                                        <table style="text-align: justify; width: 100%; page-break-inside: avoid" class="alert">
                                            <tr>
                                                <td colspan="6">
                                                    <center><span><b><br />Employee Information</b></span></center>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <table style="text-align: justify; width: 100%;">
                                                        <tr>
                                                            <td colspan="10">
                                                                <span><b>&nbsp;&nbsp;&nbsp;Personal Information</b></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="6">
                                                                <br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Name</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblname"></span>
                                                            </td>
                                                            <td><span><b>Gender</b></span></td>
                                                            <td>
                                                                <span id="lblgender"></span>
                                                            </td>
                                                            <td rowspan="7">
                                                                <div>
                                                                    <div class="profile-userpic">
                                                                        <img id="imgpro" class="img-responsive" style="height: 100px; width: 100px; border-style: solid; border-width: 2px; border-color: black" alt="">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Emp&nbsp;Code</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblempcode"></span>
                                                            </td>
                                                            <td><span><b>Department</b></span></td>
                                                            <td>
                                                                <span id="lbldep"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Designation</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lbldesig"></span>
                                                            </td>
                                                            <td><span><b>Role</b></span></td>
                                                            <td>
                                                                <span id="lblemprole"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>DOB</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lbldob"></span>
                                                            </td>

                                                            <td><span><b>DOJ</b></span></td>
                                                            <td>
                                                                <span id="lbldoj"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Father&nbsp;Name</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblfathname"></span>
                                                            </td>
                                                            <td><span><b>Married</b>(Y/N)</span></td>
                                                            <td>
                                                                <span id="lblmaritalsttaus"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Mobile&nbsp;No.</b></span></td>
                                                            <td>
                                                                <span id="lblmob"></span>
                                                            </td>
                                                            <td>
                                                                <span><b>Blood&nbsp;Group</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblbloodgroup"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Aadhaar&nbsp;Card</b></span></td>
                                                            <td>
                                                                <span id="lblaadhar"></span>
                                                            </td>
                                                            <td>
                                                                <span><b>PAN&nbsp;Card</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblpan"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>UAN&nbsp;No.</b></span></td>
                                                            <td>
                                                                <span id="lbluan"></span>
                                                            </td>
                                                            <td>
                                                                <span><b>ESI&nbsp;No.</b></span>
                                                            </td>
                                                            <td>
                                                                <span id="lblesino"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Contact&nbsp;Person</b><br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;(Emg.)</span></td>
                                                            <td class="text-left"><span id="lblcontactperson"></span>
                                                                <br />
                                                                &nbsp;
                                                            </td>
                                                            <td><span><b>Contact&nbsp;No.</b><br />
                                                                (Emg.)</span></td>
                                                            <td>
                                                                <span id="lblcontactno"></span>
                                                                <br />
                                                                &nbsp;
                                                            </td>
                                                            <td><span><b>Relation</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="lblrelation"></span><br />
                                                                &nbsp;</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Address&nbsp;(Perm.)</b></span></td>
                                                            <td colspan="3">
                                                                <span id="lblperadd"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Address&nbsp;(Corres.)</b></span>
                                                            </td>
                                                            <td colspan="3">
                                                                <span id="lblcoradd"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="6">
                                                                <br />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Bank Details</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Bank&nbsp;Name</b></td>
                                                <td><span id="lblbank"></span></td>
                                                <td><b>Branch</b></td>
                                                <td><span></span></td>
                                                <td><b></b></td>
                                                <td><span></span></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;IFSC</b></td>
                                                <td><span id="lbifsc"></span></td>
                                                <td><b>A/c No.</b></td>
                                                <td><span id="lblacc"></span></td>
                                                <td><b></b></td>
                                                <td><span></span></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Medical Insurance Details</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Operator</b></td>
                                                <td><span id="lbloperator"></span></td>
                                                <td><b>Policy&nbsp;No</b></td>
                                                <td><span id="lblpolicyno"></span></td>
                                                <td><b>Mode</b></td>
                                                <td><span id="lblmode"></span></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Valid</b>&nbsp;(From)</td>
                                                <td><span id="lblstdate"></span></td>
                                                <td><b>Valid</b>( Up To)</td>
                                                <td><span id="lblenddate"></span></td>
                                                <td><b>Amt. (K)</b></td>
                                                <td><span id="lblamount"></span></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Salary Details</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><b>&nbsp;&nbsp;&nbsp;Heads</b></td>
                                                <td colspan="2"><b>Others</b></td>
                                                <td colspan="2"><b>Deductions</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Basic</b></td>
                                                <td><span id="lblbasic"></span></td>
                                                <td><b>LTA</b></td>
                                                <td><span id="lbllta"></span></td>
                                                <td><b>PF</b></td>
                                                <td><span id="lblpf"></span></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;HRA</b></td>
                                                <td><span id="lblhra"></span></td>
                                                <td><b>Bonus</b> (Yearly)</td>
                                                <td><span id="lblbonus"></span></td>
                                                <td><b>ESI</b></td>
                                                <td><span id="lblesi"></span></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Spl. Allow.</b></td>
                                                <td><span id="lblspall"></span></td>
                                                <td><b>APB </b>(Yearly)</td>
                                                <td><span id="lblapb"></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Conv. Allow.</b></td>
                                                <td><span id="lbltransall"></span></td>
                                                <td><b>PF </b>(Employer)</td>
                                                <td><span id="lblpfemplyr"></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Medical Allow.</b></td>
                                                <td><span id="lblmedallo"></span></td>
                                                <td><b>ESI </b>(Employer)</td>
                                                <td><span id="lblesiemplyr"></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Car Allow.</b></td>
                                                <td><span id="lblcarall"></span></td>
                                                <td><b>Gratuity </b></td>
                                                <td><span id="lblgratuity"></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Driver Allow.</b></td>
                                                <td><span id="lbldriall"></span></td>
                                                <td><b></b></td>
                                                <td><span></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td><b>&nbsp;&nbsp;&nbsp;Gross Salary</b></td>
                                                <td><span id="lblgross"></span></td>
                                                <td><b>CTC</b></td>
                                                <td><span id="lblctc"></span></td>
                                                <td><b></b></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Leave Details (for last 3 months)</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td><b>EL</b></td>
                                                <td><b>CL</b></td>
                                                <td><b>SL</b></td>
                                                <td><b>Others</b></td>
                                                <td><b>Total</b></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;Availed</b>
                                                </td>
                                                <td>
                                                    <span id="lblel"></span>
                                                </td>
                                                <td>
                                                    <span id="lblcl"></span>
                                                </td>
                                                <td>
                                                    <span id="lblsl"></span>
                                                </td>
                                                <td>
                                                    <span id="lblotherl"></span>
                                                </td>
                                                <td>
                                                    <span id="lbltotala"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;Balance</b>
                                                </td>
                                                <td>
                                                    <span id="lblelb"></span>
                                                </td>
                                                <td>
                                                    <span id="lblclb"></span>
                                                </td>
                                                <td>
                                                    <span id="lblslb"></span>
                                                </td>
                                                <td>
                                                    <span id="lblotherlb"></span>
                                                </td>
                                                <td>
                                                    <span id="lbltotalb"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Increment History</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;Last Gross</b>
                                                </td>
                                                <td>
                                                    <span id="lbllastgross"></span>
                                                </td>
                                                <td>
                                                    <b>Current Gross</b>
                                                </td>
                                                <td>
                                                    <span id="lblgrosscurr"></span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;last Incr %</b>
                                                </td>
                                                <td>
                                                    <span id="lblincper"></span>
                                                </td>
                                                <td>
                                                    <b>Incre. Date</b>
                                                </td>
                                                <td>
                                                    <span id="lblincdate"></span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;Last Incr. Amount</b>
                                                </td>
                                                <td>
                                                    <span id="lblincamt"></span>
                                                </td>
                                                <td>
                                                    <b>Incr. Effect. Date</b>
                                                </td>
                                                <td>
                                                    <span id="lbleffdate"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Company Assets</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;<b>House</b></b>
                                                </td>
                                                <td>
                                                    <span id="lblhouse"></span>
                                                </td>
                                                <td>
                                                    <b>Lap top</b>
                                                </td>
                                                <td>
                                                    <span id="lbllaptop"></span>
                                                </td>
                                                <td>
                                                    <b>Others</b>
                                                </td>
                                                <td>
                                                    <span id="lblassother"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;<b>Car</b></b>
                                                </td>
                                                <td>
                                                    <span id="lblcar"></span>
                                                </td>
                                                <td>
                                                    <b>CUG</b>
                                                </td>
                                                <td>
                                                    <span id="lblcug"></span>
                                                </td>
                                                <td>
                                                    <b></b>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;<b>Mobile</b></b>
                                                </td>
                                                <td>
                                                    <span id="lblmobass"></span>
                                                </td>
                                                <td>
                                                    <b>Ipad</b>
                                                </td>
                                                <td>
                                                    <span id="lblipad"></span>
                                                </td>
                                                <td>
                                                    <b></b>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr style="border-bottom-color: lightgray; border-style: solid; border-width: 1px">
                                                <td colspan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span><b>&nbsp;&nbsp;&nbsp;Remarks ( If Any )</b></span>
                                                </td>
                                            </tr>
                                        </table>
                                        <div align="center" class="hidden-print">
                                            <button type="button" class="btn blue" id="btnPrint" onclick="javascript:window.print();">Print</button>&nbsp;&nbsp;
                                            <button type="button" class="btn" id="btnBack" onclick="hidedatainfo()" style="background-color: #98ce44; color: white;">Back</button>
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
        <a href="javascript:;" class="page-quick-sidebar-toggler">
            <i class="icon-login"></i>
        </a>
        <div class="page-footer">
            <div class="page-footer-inner">
                
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
            </div>
        </div>
        <!-- BEGIN CORE PLUGINS -->
        <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
        <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
        <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
        <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
        <script src="../../Script/ViewEmpDet.js"></script>
        <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
