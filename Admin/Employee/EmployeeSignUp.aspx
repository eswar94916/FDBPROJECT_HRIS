<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EmployeeSignUp.aspx.cs" Inherits="AddEmployees" %>

<!DOCTYPE html>


<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>HRIS-Employee SignUp</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
    <%:System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <style>
        .ThisLink {
            pointer-events: none;
            cursor: default;
        }
    </style>
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
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-3">
                                        <ul class="nav nav-pills nav-stacked nav-tabs-sm">
                                            <li class="btn btn-circle" id="tab10">
                                                <a href="#tab_0" data-toggle="tab" class="step active" id="step1">
                                                    <span class="desc">
                                                        <i class="fa fa-check"></i>Employee Details
                                                    (Step-1)</span>
                                                </a>
                                            </li>
                                            <li id="tab11" class="btn btn-circle">
                                                <a href="#tab_1" data-toggle="tab" class="step active" id="step2">
                                                    <span class="desc">
                                                        <i class="fa fa-check"></i>Personal Info.
                                                    (Step-2)</span>
                                                </a>
                                            </li>
                                            <li id="tab12" class="btn btn-circle" style="background-color: white;">
                                                <a href="#tab_2" data-toggle="tab" class="step active" id="step3">
                                                    <span class="desc">Upload Image
                                                    (Step-3)</span>
                                                </a>
                                            </li>
                                            <li id="tab13" class="btn btn-circle" style="background-color: white;">
                                                <a href="#tab_3" data-toggle="tab" class="step active" id="step4">
                                                    <span class="desc">Upload Resume
                                                    (Step-4)</span>
                                                </a>
                                            </li>
                                            <li id="tab14" class="btn btn-circle" style="background-color: white;">
                                                <a href="#tab_4" data-toggle="tab" class="step active" id="step5">
                                                    <span class="desc">Upload Marksheet
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
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab_0">
                                                <div class="col-md-11" id="div1">
                                                    <div class="portlet light bordered form-horizontal">
                                                        <h4 class="bold" style="margin-left: 15px;">Provide Employee Details</h4>
                                                        <br />
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">
                                                                Company Name
                                                            </label>
                                                            <div class="col-md-4">
                                                                <select class="form-control select2me" id="ddlcompany">
                                                                    <option value="0">Select</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-1" style="color: red">*</div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Unit</label>
                                                            <div class="col-md-4">
                                                                <select id="ddlunit" class="form-control select2me">
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
                                                                    <option value="0">Select</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Department</label>
                                                            <div class="col-md-4">
                                                                <select id="ddlDepartment" class=" form-control select2me">
                                                                    <option value="0">Select</option>
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
                                                                    <option value="0">Select</option>
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
                                                                <input class="form-control date-picker" type="text" id="doj" data-date-format="dd-M-yyyy" readonly />
                                                            </div>
                                                            <div class="col-md-1" style="color: red">*</div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-5">Date Of Birth</label>
                                                            <div class="col-md-4">
                                                                <input class="form-control  date-picker" type="text" id="dob" data-date-format="dd-M-yyyy" readonly />
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
                                                                <input class="form-control  date-picker" type="text" id="anniversry" data-date-format="dd-M-yyyy" readonly />
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
                                                                    <option value="0">Select</option>
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
                                                                    <option value="0">Select</option>
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
                                                            <input type="button" class="btn green" value="Save & Next" id="btnsave" />
                                                            <input type="button" class="btn green" value="Update" id="btnbupstp1" />
                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tab_1">
                                                <div>
                                                    <div class="col-md-11">
                                                        <div class="portlet light bordered form-horizontal">
                                                            <h4 class="bold" style="margin-left: 15px;">Provide Employee Details</h4>
                                                            <br />
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Father's Name</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtfname" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Aadhaar Card</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtaadhaar" maxlength="14" />
                                                                </div>
                                                                <%--  <div class="col-md-1" style="color: red">*</div>--%>
                                                                <span class="col-md-3" style="color: darkred">(Eg: 9684 1552 2551)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">PAN Card</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpan" />
                                                                </div>
                                                                <%--<div class="col-md-1" style="color: red">*</div>--%>
                                                                <span class="col-md-2" style="color: darkred">(Eg:&nbsp;bwbpk7166d)</span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Permanent Address</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtaddress" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Correspondence Address</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcoraddress" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Domicile</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtdomicile" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Blood Group</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtblodgp" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Mode Of Insurance</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlmode" class=" form-control select2me">

                                                                        <option value="1">C</option>
                                                                        <option value="2">D</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1" style="color: red"></div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Premium Amount</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpremiumamt" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red"></div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Employee Med. Insurance Start Date</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="insstdate" data-date-format="dd-M-yyyy" readonly />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Employee Med. Insurance Validity</label>
                                                                <div class="col-md-4">
                                                                    <input class="form-control  date-picker" type="text" id="insvalid" data-date-format="dd-M-yyyy" readonly />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Operator</label>
                                                                <div class="col-md-4">
                                                                    <select id="ddlOperator" class=" form-control select2me">
                                                                    </select>
                                                                </div>
                                                                <%--<div class="col-md-1" style="color: red">*</div>--%>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Policy No.</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtpolicy" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Contact Person Name (Emg.)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcontactperson" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Contact No (Emg.)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtcontactno" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Relationship</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrelation" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (House)</label>
                                                                <div class="col-md-4">
                                                                    <select id="txthouseaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (Car)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtcaraset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (Laptop)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtlapaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (Mobile)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtmobaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (Dongle)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtdongaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (CUG)</label>
                                                                <div class="col-md-4">

                                                                    <select id="txtcugaset" class=" form-control select2me">
                                                                        <option value="Y">Y</option>
                                                                        <option value="N">N</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Assets (Others)</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtothers" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Reference Name 1</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefname1" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Reference Contact Number 1</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefnum1" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Reference Name 2</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefname2" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Reference Contact Number 2</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtrefnum2" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">CTC offered at the time of joining</label>
                                                                <div class="col-md-4">
                                                                    <input type="text" class="form-control" id="txtctc" />
                                                                </div>
                                                                <div class="col-md-1" style="color: red">*</div>
                                                            </div>
                                                            <div class="form-group" align="center">
                                                                <input type="button" class="btn green" value="Save & Next" id="btnsavestep2" />
                                                                <input type="button" class="btn red" value="Back" id="btnbackone" />
                                                                <input type="button" class="btn green" value="Update" id="btnUpdatestep2" />
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
    <%:System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <%:System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>

    <!-- END THEME LAYOUT SCRIPTS -->
    <script src="../../script/employees.js"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
