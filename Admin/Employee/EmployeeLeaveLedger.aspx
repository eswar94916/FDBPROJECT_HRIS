<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeeLeaveLedger.aspx.cs" Inherits="Admin_Employee_EmployeeLeaveLedger" %>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee Leave Ledger</title>
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
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
                        <li class="nav-item start active open">
                            <a href="EmployeeLeaveLedger.aspx" class="nav-link nav-toggle">
                                <i class="icon-doc"></i>&nbsp;&nbsp;
                            <span class="title">Employee Leave Ledger</span>
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
                    <div class="modal fade" id="divlevdet" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                    <h4 class="modal-title">Leave Details</h4>
                                </div>
                                <div class="modal-body" style="text-align: justify">
                                    <table class="table text-center" id="tblleavedet">
                                        <thead>
                                            <tr style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                <th style="text-align: center;">Start From</th>
                                                <th style="text-align: center">To</th>
                                                <th style="text-align: center">No of Days</th>
                                                <th style="text-align: center">Reason</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn blue" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    <!-- END DASHBOARD STATS 1-->
                    <div class="row" id="divGeneric">
                        <div class="col-md-12">
                            <div class="portlet light">
                                <div class="portlet-title hidden-print">
                                    <div class="caption">
                                        <i class=" icon-docs font-red"></i>
                                        <span class="caption-subject bold uppercase">Employee Leave Ledger
                                        </span>
                                    </div>
                                </div>
                                <div class="portlet-body form">
                                    <form class="form-horizontal">
                                        <div class="form-body">
                                            <div id="divmain">
                                                <div class="form-group">
                                                    <div id="divcomp">
                                                        <label class="control-label col-md-1" id="lblunit">
                                                            Company
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlcomp">
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label class="control-label col-md-1">
                                                            Unit
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddlunit">
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label class="control-label col-md-1">
                                                            Department
                                                        </label>
                                                        <div class="col-md-2">
                                                            <select class="form-control select2me" id="ddldept">
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label class="control-label col-md-1">
                                                            Date From
                                                        </label>
                                                        <div class="col-md-3">
                                                            <div class="input-group date-picker input-daterange" data-date-format="dd/mm/yyyy">
                                                                <input type="text" class="form-control" name="from" id="datefrom">
                                                                <span class="input-group-addon">to </span>
                                                                <input type="text" class="form-control" name="to" id="dateto">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <button type="button" class="btn bg-purple" style="color: white" id="btnshow">Show</button>
                                                        <a href="EmployeeLeaveLedger.aspx" class="btn bg-yellow" style="color: white" id="btnreset">Reset</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        <div id="divdetails">
                                            <div class="form-body" id="divtbl">
                                                <br />
                                                <br />
                                                <br />
                                                <div class="tools"></div>
                                                <table class="table table-striped table-bordered table-hover order-column table-responsive" id="sample_2" style="border-radius: 8px; border: 4px black" border="1">
                                                    <thead>
                                                        <tr style="background-color: #116494; color: white; border-radius: 8px; border: 1px solid black">
                                                            <th>Unit </th>
                                                            <th>Name</th>
                                                            <th>Code</th>
                                                            <th>Deptt</th>
                                                            <th>Desig</th>
                                                            <th>EL</th>
                                                            <th>SL</th>
                                                            <th>CL</th>
                                                            <th>Others</th>
                                                            <th>Total</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>

                                        </div>
                                        <div id="divprint">
                                            <%--<table class="col-md-12 text-center" style="border-style: solid; border-width: 3px; border-color: black" border="1">
                                                    <caption style="border-style: solid; border-width: 2px; border-bottom-width: 0px; border-color: black;">
                                                        <center><h4 style="font-weight:bold;color:black">Leave Ledger</h4></center>
                                                    </caption>
                                                    <thead>
                                                        <tr>
                                                            <th colspan="6">&nbsp;</th>
                                                        </tr>
                                                        <tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 1px">
                                                            <th class="col-md-2  text-center">Unit</th>
                                                            <th class="col-md-2  text-center">DOJ</th>
                                                            <th class="col-md-2  text-center">Code</th>
                                                            <th class="col-md-2  text-center">Name</th>
                                                            <th class="col-md-2  text-center">Deptt</th>
                                                            <th class="col-md-2  text-center">Desig</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="col-md-2">Unnao</td>
                                                            <td class="col-md-2">1980-01-01</td>
                                                            <td class="col-md-2">roo32</td>
                                                            <td class="col-md-2">Ram Prakash</td>
                                                            <td class="col-md-2">Quality</td>
                                                            <td class="col-md-2">Chemsit</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="6">&nbsp;</td>
                                                        </tr>
                                                        <tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"><b>EL</b></td>
                                                            <td class="col-md-2"><b>SL</b></td>
                                                            <td class="col-md-2"><b>CL</b></td>
                                                            <td class="col-md-2"><b>OTHERS</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Opening Balance</b></td>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>
                                                            <td class="col-md-2">3</td>
                                                            <td class="col-md-2">5</td>
                                                            <td class="col-md-2">7</td>
                                                            <td class="col-md-2">0</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Year</b></td>
                                                            <td class="col-md-2" style="background-color: #C0D9AF"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                        </tr>
                                                        <tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 3px">
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Month</b></td>
                                                            <td class="col-md-2" style="background-color: #C0D9AF"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="6">&nbsp;</td>
                                                        </tr>
                                                        <tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"><b>EL</b></td>
                                                            <td class="col-md-2"><b>SL</b></td>
                                                            <td class="col-md-2"><b>CL</b></td>
                                                            <td class="col-md-2"><b>OTHERS</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Leave Availed</b></td>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>
                                                            <td class="col-md-2">3</td>
                                                            <td class="col-md-2">5</td>
                                                            <td class="col-md-2">7</td>
                                                            <td class="col-md-2">0</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Type</b></td>
                                                            <td class="col-md-2" rowspan="3" style="background-color: #C0D9AF"></td>
                                                            <td class="col-md-2" rowspan="3"></td>
                                                            <td class="col-md-2" rowspan="3"></td>
                                                            <td class="col-md-2" rowspan="3"></td>
                                                            <td class="col-md-2" rowspan="3"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>From</b></td>

                                                        </tr>
                                                        <tr style="border-bottom-style: solid; border-bottom-color: black; border-bottom-width: 3px">
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>To</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="6">&nbsp;</td>
                                                        </tr>
                                                        <tr style="border-top-style: solid; border-top-color: black; border-top-width: 3px">
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"><b>EL</b></td>
                                                            <td class="col-md-2"><b>SL</b></td>
                                                            <td class="col-md-2"><b>CL</b></td>
                                                            <td class="col-md-2"><b>OTHERS</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"><b>Closing Balance</b></td>
                                                            <td class="col-md-2 text-left" style="background-color: #F7FE2E"></td>
                                                            <td class="col-md-2">3</td>
                                                            <td class="col-md-2">5</td>
                                                            <td class="col-md-2">7</td>
                                                            <td class="col-md-2">0</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Year</b></td>
                                                            <td class="col-md-2" style="background-color: #C0D9AF"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="col-md-2 text-left" style="background-color: #C0D9AF"><b>Month</b></td>
                                                            <td class="col-md-2" style="background-color: #C0D9AF"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                            <td class="col-md-2"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>--%>
                                        </div>
                                    </form>
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
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <script src="../../assets/pages/scripts/components-editors.min.js" type="text/javascript"></script>
    <script src="../../script/empleaveledger.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>


