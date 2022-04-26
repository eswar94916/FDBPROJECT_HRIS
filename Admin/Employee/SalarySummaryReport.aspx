<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SalarySummaryReport.aspx.cs" Inherits="Admin_Employee_SalarySummaryReport" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Salary Summary Report</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <script src="../../assets2/jquery-1.8.3"></script>
    <script>
        $(document).ready(function () {

            var keyCodes = [61, 107, 173, 109, 187, 189];

            $(document).keydown(function (event) {
                if (event.ctrlKey == true && (keyCodes.indexOf(event.which) != -1)) {
                    event.preventDefault();
                }
            });
            $(window).bind('mousewheel DOMMouseScroll', function (event) {
                if (event.ctrlKey == true) {
                    event.preventDefault();
                }
            });
        });
    </script>
    <style>
        .rotate-table-grid {
            box-sizing: border-box;
            border-collapse: collapse;
        }

            .rotate-table-grid tr, .rotate-table-grid td, .rotate-table-grid th {
                border: 1px solid black;
                position: relative;
                padding: 20px;
            }

                .rotate-table-grid th span {
                    transform-origin: 0 50%;
                    transform: rotate(+270deg);
                    white-space: nowrap;
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                }

                .rotate-table-grid td span {
                    transform-origin: 0 50%;
                    transform: rotate(+270deg);
                    white-space: nowrap;
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                }

        th.rotate {
            /* Something you can count on */
            height: 140px;
            white-space: nowrap;
        }

        td.rotate {
            /* Something you can count on */
            height: 140px;
            white-space: nowrap;
        }

        th.rotate > div {
            transform:
            /* Magic Numbers */
            translate(25px, 51px)
            /* 45 is really 360 - 45 */
            rotate(90deg);
            width: 140px;
        }

        td.rotate > div {
            transform:
            /* Magic Numbers */
            translate(25px, 51px)
            /* 45 is really 360 - 45 */
            rotate(90deg);
            width: 140px;
        }

        th.rotate > div > span {
            border-bottom: 1px solid black;
            border-top-color: black;
            padding: 15px 30px;
        }

        td.rotate > div > span {
            border-bottom: 1px solid black;
            border-top-color: black;
            padding: 15px 30px;
        }
    </style>
    <style type="text/css" media="print,screen">
        @media print {
            @page {
                size: A3 landscape;
            }

            thead {
                display: table-header-group;
                overflow: visible !important;
                color: black;
            }

            tr {
                page-break-inside: avoid;
                overflow: visible !important;
                color: black;
            }
        }
    </style>
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

<body class="page-header-fixed page-container-bg-solid page-sidebar-closed page-md" onload="onbodyload()">
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
                </div>
                <div class="search-form-expanded col-md-offset-3 col-md-3">
                    <br />
                    <div class="input-group">
                        <i class=" icon-list font-black"></i>&nbsp;
                    <span class="caption-subject bold uppercase" id="lbltopheader">Salary Summary Report</span>
                    </div>
                </div>
                <!-- END LOGO -->
                <!-- END PAGE ACTIONS -->
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">
                    <!-- BEGIN HEADER SEARCH BOX -->
                    <!-- BEGIN TOP NAVIGATION MENU -->
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
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
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label class="control-label" style="font-size: 15px">Role:&nbsp;&nbsp;</label><label id="lblrole" class="control-label" runat="server" style="font-size: 15px"></label>
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
        <div class="page-container" style="background-color: white">
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <div class="row">
                        <div>
                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                            <div class="portlet light" id="empjoinreport">
                                <div class="portlet-body form">
                                    <div class="form-horizontal  hidden-print" id="divfilter">

                                        <div class="form-body">
                                            <div class="form-group">
                                                <div id="divcomp">
                                                    <label class="control-label col-md-1" id="lblgroup">
                                                        Company
                                                    </label>
                                                    <div class="col-md-2">
                                                        <select class="form-control select2me" id="ddlcompany">
                                                        </select>
                                                    </div>
                                                </div>
                                                <label class="control-label col-md-1" id="lblunit">
                                                    Unit
                                                </label>
                                                <div class="col-md-2">
                                                    <select class="form-control select2me" id="ddlunit">
                                                        <option value="0">Select</option>
                                                    </select>
                                                </div>
                                                <label class="control-label col-md-2 text-center">
                                                    Month & Year                                             
                                                </label>
                                                <div class="col-md-2">
                                                    <select class="form-control select2me" id="ddlmonth">
                                                        <option value="1">January</option>
                                                        <option value="2">February</option>
                                                        <option value="3">March</option>
                                                        <option value="4">April</option>
                                                        <option value="5">May</option>
                                                        <option value="6">June</option>
                                                        <option value="7">July</option>
                                                        <option value="8">August</option>
                                                        <option value="9">September</option>
                                                        <option value="10">October</option>
                                                        <option value="11">November</option>
                                                        <option value="12">December</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">
                                                    <select class="form-control select2me" id="ddlyear">
                                                        <option value="2017" selected>2017</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                        <option value="2033">2033</option>
                                                        <option value="2034">2034</option>
                                                        <option value="2035">2035</option>
                                                        <option value="2036">2036</option>
                                                        <option value="2037">2037</option>
                                                        <option value="2038">2038</option>
                                                        <option value="2039">2039</option>
                                                        <option value="2040">2040</option>
                                                        <option value="2041">2041</option>
                                                        <option value="2042">2042</option>
                                                        <option value="2043">2043</option>
                                                        <option value="2044">2044</option>
                                                        <option value="2045">2045</option>
                                                        <option value="2046">2046</option>
                                                        <option value="2047">2047</option>
                                                        <option value="2048">2048</option>
                                                        <option value="2049">2049</option>
                                                        <option value="2050">2050</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-6" align="center" style="margin-left: 250px;">
                                                <input type="button" class="btn green button" id="btnexport" value="Export" />
                                                <a href="SalarySummaryReport.aspx" class="btn blue button">Reset</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div class="portlet-body" id="divexport">
                                    <br />
                                    <br />
                                    <table class="table" id="sample_2" border="1" style="border-style: solid; border-width: 2px; border-color: black">
                                        <thead>
                                            <tr style="border-bottom-style: solid; border-bottom-width: 2px; border-bottom-color: black" class="text-center">
                                                <th style="font-weight: bold;" class="text-center" colspan="42">Salary Sheet</th>
                                            </tr>
                                            <tr style="border-radius: 3px; border: 2px solid black">
                                                <th style="font-weight: bold;"></th>
                                                <th style="font-weight: bold; text-align: center;" colspan="6">Employee
                                                </th>
                                                <th style="font-weight: bold; text-align: center;" colspan="3">Bank Details
                                                </th>
                                                 <th style="font-weight: bold; text-align: center;" colspan="3">Medical Insurance Details
                                                </th>
                                                <th style="font-weight: bold; text-align: center;" colspan="9">Salary Structure
                                                </th>
                                                <th style="font-weight: bold; text-align: center;" colspan="2">Other Payments
                                                </th>
                                                <th style="font-weight: bold; text-align: center;" colspan="7">Salary Days
                                                </th>
                                                <th style="font-weight: bold; text-align: center;"></th>
                                                <th style="font-weight: bold; text-align: center;" colspan="7">Deduction
                                                </th>
                                                <th style="font-weight: bold;" rowspan="2">Net Payable Salary
                                                </th>
                                                <th style="font-weight: bold;" rowspan="2">Payment Mode(BT/CH)
                                                </th>
                                                <th style="font-weight: bold;" rowspan="2">Remarks
                                                </th>
                                            </tr>
                                            <tr style="border-radius: 3px; border: 2px solid black">
                                                <th></th>
                                                <th style="font-weight: bold; width: 100px;">Unit </th>
                                                <th style="font-weight: bold;">Location</th>
                                                <th style="font-weight: bold;">Code</th>
                                                <th style="font-weight: bold;">Name</th>
                                                <th style="font-weight: bold;">Deptt </th>
                                                <th style="font-weight: bold;">Desig</th>

                                                <th style="font-weight: bold;">Bank</th>
                                                <th style="font-weight: bold;">IFSC Code</th>
                                                <th style="font-weight: bold;">A/c No.</th>

                                                <th style="font-weight: bold;">Active/Inactive</th>
                                                <th style="font-weight: bold;">Start Date</th>
                                                <th style="font-weight: bold;">End Date</th>
                                                

                                                <th style="font-weight: bold;">Basic</th>
                                                <th style="font-weight: bold;">HRA</th>
                                                <th style="font-weight: bold;">SA</th>
                                                <th style="font-weight: bold;">TA</th>
                                                <th style="font-weight: bold;">MA</th>
                                                <th style="font-weight: bold;">Car Maint</th>
                                                <th style="font-weight: bold;">Driver Alow.</th>
                                                <th style="font-weight: bold;">Other</th>
                                                <th style="font-weight: bold;">Gross</th>
                                                <th style="font-weight: bold;">Bonus</th>
                                                <th style="font-weight: bold;">Arrear</th>
                                                <th style="font-weight: bold;">Present Days</th>
                                                <th style="font-weight: bold;">Week off/ Sunday</th>
                                                <th style="font-weight: bold;">OD</th>
                                                <th style="font-weight: bold;">Leaves</th>
                                                <th style="font-weight: bold;">Absent</th>
                                                <th style="font-weight: bold;">Holiday</th>
                                                <th style="font-weight: bold;">Payable Days</th>
                                                <th style="font-weight: bold;">Total Earnings</th>
                                                <th style="font-weight: bold;">PF (Employee)</th>
                                                <th style="font-weight: bold;">ESI (Employee)
                                                </th>
                                                <th style="font-weight: bold;">TDS</th>
                                                <th style="font-weight: bold;">Adv/Imp.</th>
                                                <th style="font-weight: bold;">Phone Bill</th>
                                                <th style="font-weight: bold;">Others</th>
                                                <th style="font-weight: bold;">Total Deduction</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <div class="form-group hidden-print">
                                        <div align="center">
                                            <input type="button" class="btn green button" id="btnback1" value="Back" />
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
    </form>
    <!-- BEGIN CORE PLUGINS -->
    <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="../../assets2/js/table-datatables-rowreorder.min.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL SCRIPTS -->
    <script src="../../script/SalSumReport.js"></script>

    <!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>

