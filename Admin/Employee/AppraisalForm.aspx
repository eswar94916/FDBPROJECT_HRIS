<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AppraisalForm.aspx.cs" Inherits="EmployeeDetails_AppraisalForm" %>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>HRIS-Appraisal Form</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <!-- END GLOBAL MANDATORY STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />

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
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                        <li class="nav-item start active open">
                            <a href="AppraisalForm.aspx" class="nav-link nav-toggle">
                                <i class="icon-doc"></i>&nbsp;&nbsp;
                            <span class="title">Appraisal Form</span>
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
                                        <span class="caption-subject bold uppercase">Appraisal Form
                                        </span>
                                    </div>
                                </div>
                                <div class="portlet-body form">
                                    <div class="form-horizontal">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <div id="divcomp">
                                                    <label class="control-label col-md-1" id="lblunit">
                                                        Company
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2" id="ddlcompany">
                                                        </select>
                                                    </div>
                                                </div>
                                                <label class="control-label col-md-2">
                                                    Employee Code
                                                </label>
                                                <div class="col-md-3">
                                                    <select class="form-control select2me" id="ddlEmpCode">
                                                    </select>
                                                </div>
                                                <label class="control-label col-md-1">
                                                    Date
                                                </label>
                                                <div class="col-md-2">
                                                    <input class="form-control  date-picker" type="text" data-date-format="dd-mm-yyyy" id="txtdate" />
                                                </div>
                                                <div class="col-md-2">
                                                    <button type="button" class="btn bg-purple" style="color: white" id="btnshow">Show</button>
                                                    <button type="reset" class="btn bg-yellow" style="color: white" id="btnreset">Reset</button>
                                                </div>
                                            </div>
                                            <div class="form-actions">
                                                <div id="divappraisal">
                                                    <table class="table text-center" id="tblempdetails" style="border-radius: 8px; border: 4px black" border="1">
                                                        <thead style="color: black; border-radius: 8px;">
                                                            <tr style="border: 3px solid black">
                                                                <th style="text-align: center" colspan="6">
                                                                    <h3><b>
                                                                        <label id="compname" style="font-weight: bold"></label>
                                                                    </b></h3>
                                                                </th>
                                                            </tr>
                                                            <tr style="border: 3px solid black">
                                                                <th style="text-align: center" colspan="6">
                                                                    <h4><b>Performance Appraisal Evaluation Form</b></h4>
                                                                </th>
                                                            </tr>
                                                            <tr style="border: 3px solid black; background-color: #D8D8D8;">
                                                                <th style="text-align: center">Name</th>
                                                                <th style="text-align: center">Department</th>
                                                                <th style="text-align: center">Designation</th>
                                                                <th style="text-align: center">Date of Joining</th>
                                                                <th></th>
                                                                <th style="text-align: center">Reporting Officer</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
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
                                                            <tr style="border: 3px solid black">
                                                                <th style="text-align: center">Appraisal Points</th>
                                                                <th style="text-align: center">Explanation</th>
                                                                <th style="text-align: center">Wt.age</th>
                                                                <th style="text-align: center">Rating By RO 1</th>
                                                                <th style="text-align: center">Rating By RO 2</th>
                                                                <th style="text-align: center">Special Comments ( If Any )</th>
                                                            </tr>
                                                        </tbody>
                                                        <tbody>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">1. Job Knowledge</td>
                                                                <td style="text-align: left">Understanding & Knowledge of his Job </td>
                                                                <td style="text-align: center">10</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p1" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p1" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt1"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">2. Job Performance & Decision making</td>
                                                                <td style="text-align: left">How is the overall "job performance" and decision making  </td>
                                                                <td style="text-align: center">20</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p2" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p2" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt2"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">3. Communication</td>
                                                                <td style="text-align: left">How is his Communication with Team   </td>
                                                                <td style="text-align: center">5</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p3" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p3" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt3"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">4. Integrity and Discipline</td>
                                                                <td style="text-align: left">What about His integrity, discipline and conduct  </td>
                                                                <td style="text-align: center">20</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p4" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p4" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt4"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">5. Learning  & Innovation</td>
                                                                <td style="text-align: left">Is he ready to learn new things and evolve new ideas   </td>
                                                                <td style="text-align: center">10</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p5" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p5" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt5"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">6. External Orientation</td>
                                                                <td style="text-align: left">How is his networking outside   </td>
                                                                <td style="text-align: center">5</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p6" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p6" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt6"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">7. Behavior/ conduct with Colleagues</td>
                                                                <td style="text-align: left">How is his behavior  with Other Colleague </td>
                                                                <td style="text-align: center">5</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p7" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p7" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt7"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">8. Team work</td>
                                                                <td style="text-align: left">Is he a good team player with team spirit </td>
                                                                <td style="text-align: center">10</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p8" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p8" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt8"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">9. Customer Feedback ( Internal)</td>
                                                                <td style="text-align: left">What is customer Feedback </td>
                                                                <td style="text-align: center">5</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p9" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p9" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt9"></textarea></td>
                                                            </tr>
                                                            <tr style="border-width: 2px; border-style: solid; border-color: black">
                                                                <td style="text-align: left">10.Respecting company  Systems</td>
                                                                <td style="text-align: left">Does he respect Company systems &  norms with Humility</td>
                                                                <td style="text-align: center">10</td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro1p10" /></td>
                                                                <td style="text-align: center">
                                                                    <input type="text" class="form-control groupOfTexbox" id="txtro2p10" /></td>
                                                                <td style="text-align: center">
                                                                    <textarea class="form-control" id="txtcmnt10"></textarea></td>
                                                            </tr>
                                                            <%-- <tr style="border-width: 3px; border-style: solid; border-color: black">
                                                            <td style="text-align: left"></td>
                                                            <td style="text-align: left"></td>
                                                            <td style="text-align: center">
                                                                <label class="control-label">100</label></td>
                                                            <td style="text-align: center">
                                                                <label id="lbltotalavg" class="control-label"></label>
                                                            </td>
                                                            <td style="text-align: center"></td>
                                                            <td style="text-align: center"></td>
                                                        </tr>--%>
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                    <div align="center">
                                                        <button type="button" class="btn bg-green" style="color: white" id="btnsubmit">Submit</button>
                                                        <button type="button" class="btn bg-green" style="color: white" id="btnupdate">Update</button>
                                                        <button type="button" class="btn red" style="color: white" id="btndelete">Delete</button>
                                                    </div>
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
    <!-- BEGIN CORE PLUGINS -->
    <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
    <script src="../../script/appraisal.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>

