<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AppraisalReport.aspx.cs" Inherits="EmployeeDetails_appraisalrate" %>

<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8" />
    <title>HRIS-Appraisal Report</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <!-- END GLOBAL MANDATORY STYLES -->
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
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label class="control-label" style="font-size: 15px">Role:&nbsp;&nbsp;</label><label id="lblrole" class="control-label" runat="server" style="font-size: 15px">Admin </label>
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
                            <a href="AppraisalReport.aspx" class="nav-link nav-toggle">
                                <i class="icon-book-open"></i>
                                <span class="title">Appraisal Rating Records</span>
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
                    <div class="row">
                        <div class="col-md-12">
                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                            <div class="portlet light portlet-fit ">
                                <div class="portlet-title hidden-print">
                                    <div class="caption">
                                        <i class="icon-settings font-red"></i>
                                        <span class="caption-subject font-red sbold uppercase">Appraisal Rating Records</span>
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <form class="form-horizontal">
                                        <div class="form-body hidden-print" id="divmain">
                                            <div class="form-horizontal">
                                                <div class="form-group">
                                                    <div id="divcomp" runat="server">
                                                        <label class="control-label col-md-1">
                                                            Company
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlcompany">
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <label class="control-label col-md-1">
                                                        Unit
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddlunit">
                                                        </select>
                                                    </div>
                                                    <label class="control-label col-md-1">
                                                        Department
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddldept">
                                                        </select>
                                                    </div>
                                                    <label class="control-label col-md-1">Quarter</label>
                                                    <div class="col-md-3">
                                                        <select class="form-control select2me" id="ddlquarter">
                                                           
                                                            <option value="1">Q1</option>
                                                            <option value="2">Q2</option>
                                                            <option value="3">Q3</option>
                                                            <option value="4">Q4</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <input type="button" class="btn green button" id="btnshow" value="Show" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-body hidden-print" id="divdetails">
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <div class="hidden-print portlet-body form-body" id="divtbl">
                                                <div class="tools"></div>
                                                <table class="table table-striped table-bordered table-hover order-column table-responsive" id="sample_2" style="border-radius: 8px; border: 4px black" border="1">
                                                    <thead style="font-weight: bold;">
                                                        <tr class="text-center">
                                                            <td style="text-align: center" colspan="21">Appraisal Report</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: center" rowspan="2">Sl</td>
                                                            <td style="text-align: center" rowspan="2">Quarter</td>
                                                            <td style="text-align: center" colspan="6">Employee Details</td>
                                                            <td style="text-align: center" colspan="2">Period</td>
                                                            <td style="text-align: center" colspan="11">Performance Parameter</td>

                                                        </tr>
                                                        <tr>
                                                            <th>Unit</th>
                                                            <th>Code</th>
                                                            <th>Name</th>
                                                            <th>Deptt</th>
                                                            <th>Desig</th>
                                                            <th>DOJ</th>
                                                            <th>Job<br />
                                                                Knowledge</th>
                                                            <th>Job Performance<br />
                                                                &
                                                            <br />
                                                                Decision making</th>
                                                            <th>Comm.</th>
                                                            <th>Integrity and<br />
                                                                Discipline</th>
                                                            <th>Learning  &<br />
                                                                Innovation</th>
                                                            <th>External
                                                            <br />
                                                                Orientation</th>
                                                            <th>Behavior/ conduct<br />
                                                                with Colleagues</th>
                                                            <th>Team
                                                            <br />
                                                                work</th>
                                                            <th>Customer
                                                            <br />
                                                                Feedback (Internal)</th>
                                                            <th>Respecting
                                                            <br />
                                                                company Systems</th>
                                                            <th>Sum Total</th>
                                                            <th>Print</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="divreport">
                                            <table class="col-md-12 text-center" style="border-radius: 8px; border: 4px black; width: 100%; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" border="1">
                                                <thead style="color: black; border-radius: 8px;">
                                                    <tr style="border: 1px solid black">
                                                        <td style="text-align: center" colspan="6">
                                                            <h4><b>
                                                                <span id="lblcomp"></span>
                                                            </b></h4>
                                                        </td>
                                                    </tr>
                                                    <tr style="border: 1px solid black">
                                                        <td style="text-align: center" colspan="6">
                                                            <h5><b>Performance Appraisal Evaluation Form</b></h5>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                            <table class="col-md-12 text-center" id="tblempdetails" cellspacing="10" style="font-size: 1.0em !important; line-height: 1 !important; border-radius: 8px; border-color: black" border="1">
                                                <tbody>
                                                    <tr style="background-color: #D8D8D8;">
                                                        <th style="text-align: center">
                                                            <br />
                                                            Name<br />
                                                            &nbsp;</th>
                                                        <th style="text-align: center">Department</th>
                                                        <th style="text-align: center">&nbsp;Designation&nbsp;</th>
                                                        <th style="text-align: center">DOJ</th>
                                                        <th></th>
                                                        <th style="text-align: center">Reporting Officer</th>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: center">
                                                            <label id="empname"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label id="empdept"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label id="empdesig"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label id="empjoindate"></label>
                                                        </td>
                                                        <td></td>
                                                        <td style="text-align: center">
                                                            <label id="emprepoff"></label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody style="background-color: #D8D8D8; color: black; border-radius: 8px;">
                                                    <tr style="border: 1px solid black">
                                                        <th style="text-align: center">Appraisal Points</th>
                                                        <th style="text-align: center">Explanation</th>
                                                        <th style="text-align: center">Wt.age</th>
                                                        <th style="text-align: center">Rating By RO 1</th>
                                                        <th style="text-align: center">Rating By RO 2</th>
                                                        <th style="text-align: center">Special Comments<br />
                                                            ( If Any )</th>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">1. Job Knowledge</td>
                                                        <td style="text-align: left">Understanding & Knowledge of his Job </td>
                                                        <td style="text-align: center">10</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p1"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p1"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt1"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">2. Job Performance & Decision making</td>
                                                        <td style="text-align: left">How is the overall "job performance" and decision making  </td>
                                                        <td style="text-align: center">20</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p2"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p2"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt2"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">3. Communication</td>
                                                        <td style="text-align: left">How is his Communication with Team   </td>
                                                        <td style="text-align: center">5</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p3"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p3"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt3"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">4. Integrity and Discipline</td>
                                                        <td style="text-align: left">What about His integrity, discipline and conduct  </td>
                                                        <td style="text-align: center">20</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p4"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p4"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt4"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">5. Learning  & Innovation</td>
                                                        <td style="text-align: left">Is he ready to learn new things and evolve new ideas   </td>
                                                        <td style="text-align: center">10</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p5"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p5"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt5"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">6. External Orientation</td>
                                                        <td style="text-align: left">How is his networking outside   </td>
                                                        <td style="text-align: center">5</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p6"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p6"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt6"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">7. Behavior/ conduct with Colleagues</td>
                                                        <td style="text-align: left">How is his behavior  with Other Colleague </td>
                                                        <td style="text-align: center">5</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p7"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p7"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt7"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">8. Team work</td>
                                                        <td style="text-align: left">Is he a good team player with team spirit </td>
                                                        <td style="text-align: center">10</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p8"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p8"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt8"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">9. Customer Feedback ( Internal)</td>
                                                        <td style="text-align: left">What is customer Feedback </td>
                                                        <td style="text-align: center">5</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p9"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p9"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt9"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">10.Respecting company  Systems</td>
                                                        <td style="text-align: left">Does he respect Company systems &  norms with Humility</td>
                                                        <td style="text-align: center">10</td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro1p10"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblro2p10"></label>
                                                        </td>
                                                        <td style="text-align: center">
                                                            <label class="control-label" id="lblcmnt10"></label>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left"></td>
                                                        <td style="text-align: left"></td>
                                                        <td style="text-align: center">
                                                            <label class="control-label">100</label></td>
                                                        <td style="text-align: center">
                                                            <label id="lbltotalavg" class="control-label"></label>
                                                        </td>
                                                        <td style="text-align: center"></td>
                                                        <td style="text-align: center"></td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: center" rowspan="2"><b>Your sucession Planning For this candidate</b></td>
                                                        <td style="text-align: center" rowspan="2"><b>Do you have a second line ready</b></td>
                                                        <td style="text-align: left">If  Yes</td>
                                                        <td style="text-align: left" colspan="3"><b>Name : </b>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left">If No. </td>
                                                        <td style="text-align: left" colspan="3"><b>To Whom You are Developing :    </b>
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left" colspan="6"><b><u>
                                                            <br />
                                                            Remarks by Reporting officer :<br />
                                                            &nbsp;</u></b></td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left; font-weight: bold" colspan="6">
                                                            <br />
                                                            <u>Affidavit from Reporting Officer  :</u><br />
                                                            <br />
                                                            <b><span style="text-align: justify">I hereby certify that all evaluation and information given above is true, correct and unbiased to best of my assessment. If any information is found wrong biased or misleading, management will have right to take strict action against me.<br />
                                                                <br />
                                                                (मैं एतद्द्वारा प्रमाणित करता हूं कि ऊपर दिए गए सभी मूल्यांकन और सूचना सही और निष्पक्ष है। यदि कोई सूचना गलत, पक्षपातपूर्ण या भ्रामक पाया जाता है, तो प्रबंधन को मेरे खिलाफ सख्त कार्रवाई करने का अधिकार होगा|)</span>
                                                            </b>
                                                            <br />
                                                            <br />
                                                            <center>
                                                        <span style="text-align:center">Reporting Officer Sign :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date :</span></center>
                                                            <br />
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr style="border-width: 1px; border-style: solid; border-color: black">
                                                        <td style="text-align: left; border-left-color: black; border-left-style: solid; border-left-width: 1px" colspan="6">
                                                            <br />
                                                            <b>&nbsp;PH / SH/ FH   Head  Sign & Comments</b><br />
                                                            &nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="table text-center" style="border-radius: 8px; border: 2px black" border="1">
                                                <tbody style="color: black; border-radius: 8px;">
                                                    <tr style="border: 1px solid black">
                                                        <td style="text-align: center"><b>Point Rating  :     Score  :  >  85     "A"   ( Excellent )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score : 70  ~   85  :  "B"   ( Good )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score :  50  ~ 69   :   "C"  (Average )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score : = <   50      "D" ( Poor )</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="form-group hidden-print">
                                                <div class=" col-md-offset-5">
                                                    <button type="button" class="btn blue" id="btnPrint" style="width: 120px" onclick="javascript:window.print();">Print</button>
                                                    <button type="button" class="btn" id="btnBack" onclick="hidedata()" style="background-color: #98ce44; color: white; width: 120px">Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- END EXAMPLE TABLE PORTLET-->
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
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <script src="../../Script/appraisalreport.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>
