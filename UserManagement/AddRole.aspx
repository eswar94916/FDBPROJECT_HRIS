<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AddRole.aspx.cs" Inherits="SuperAdmin_CreateUser" EnableEventValidation="false" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <title>Exam on Cloud</title>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%: System.Web.Optimization.Styles.Render("~/bundles/Configuration") %>
      <%: System.Web.Optimization.Styles.Render("~/bundles/CSSDate") %>
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />

</head>
<!-- END HEAD -->

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md">
    <form runat="server">
        <!-- BEGIN HEADER -->
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">

                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                <!-- BEGIN PAGE ACTIONS -->
                <!-- DOC: Remove "hide" class to enable the page header actions -->
                <div class="page-actions">
                    <div class="btn-group">

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-docs"></i>New Post </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-tag"></i>New Comment </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-share"></i>Share </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-flag"></i>Comments
                                    <span class="badge badge-success">4</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="icon-users"></i>Feedbacks
                                    <span class="badge badge-danger">2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- END PAGE ACTIONS -->
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">

                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <li class="dropdown dropdown-user">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <span class="username username-hide-on-mobile">
                                        <asp:LoginName ID="LoginName1" CssClass="username username-hide-on-mobile" runat="server" />
                                    </span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label class="control-label" style="font-size: 15px">Role:&nbsp;&nbsp;</label><label id="lblrole" class="control-label" runat="server" style="font-size: 15px">Super Admin </label>
                                    </li>
                                    <li>
                                        <asp:LoginStatus ID="LoginStatus1" runat="server" LogoutAction="Redirect" LogoutPageUrl="~/LoginForm.aspx" LoginText="LOG IN" LogoutText="LOG OUT" />
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
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li class="nav-item active open" id="liPatSetAppointment">
                            <a href="AddRole.aspx" class="nav-link nav-toggle">
                                <i class="icon-doc"></i>
                                <span class="title">Add Role</span>
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
                    <div class="page-bar">
                        <ul class="page-breadcrumb">
                            <li>
                                <i class="icon-home"></i>
                                <a>Home</a>
                                <i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <span>Add Role</span>
                            </li>
                        </ul>
                    </div>
                    <!-- END PAGE HEADER-->
                    <div class="modal fade hidden-print" id="divremark" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body" style="text-align: justify">
                                    <br />
                                    <br />
                                    <div class="row">
                                        <div class="form-group col-sm-4 col-md-3">
                                            <label class="control-label" style="font-size: 12px">Remarks</label>
                                        </div>
                                        <div class="form-group col-sm-4 col-md-5">
                                            <textarea class="form-control" id="txtremarks"></textarea>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="form-group col-sm-4 col-md-offset-4">
                                            <button type="button" id="btnSumitmodal1" class="btn green-meadow" data-dismiss="modal">Submit</button>
                                            <button type="button" class="btn blue" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="background-color: white">


                        <div class="row">
                            <div class="portlet-body form">
                                <div class="form-body">
                                    <div class="form-group">
                                        <label class="control-label col-md-5 text-right">Role Name</label>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="txtRoleName" runat="server" placeholder="Enter Role Name" />
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="row">
                                        <div class="col-md-offset-6">
                                            <asp:Button ID="CreateRoleButton" runat="server" Text="Create Role" class="btn green bg-green-meadow" ForeColor="White" OnClick="CreateRoleButton_Click" />
                                        </div>
                                    </div>
                                    <div class="form-body text-center">
                                        <asp:GridView ID="RoleList" Width="600px" runat="server" AutoGenerateColumns="False" AllowPaging="True" CellPadding="4" ForeColor="#333333" GridLines="None" CssClass="table table-striped table-bordered table-hover text-center" align="center" OnRowDeleting="RoleList_RowDeleting" OnPageIndexChanging="RoleList_PageIndexChanging">
                                            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                            <Columns>
                                                <asp:TemplateField HeaderStyle-CssClass="text-center">
                                                    <HeaderTemplate>
                                                        SL No.
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:Label ID="lblSRNO" runat="server"
                                                            Text='<%#Container.DataItemIndex+1 %>'></asp:Label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Role" HeaderStyle-CssClass="text-center">
                                                    <ItemTemplate>
                                                        <asp:Label runat="server" ID="RoleNameLabel" Text='<%# Container.DataItem %>' />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:CommandField ShowDeleteButton="true" />
                                            </Columns>
                                            <EditRowStyle BackColor="#999999" />
                                            <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                            <HeaderStyle BackColor="White" Font-Bold="True" ForeColor="black" />
                                            <PagerStyle BackColor="White" ForeColor="black" HorizontalAlign="Center" />
                                            <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                                            <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                                            <SortedAscendingCellStyle BackColor="#E9E7E2" />
                                            <SortedAscendingHeaderStyle BackColor="#506C8C" />
                                            <SortedDescendingCellStyle BackColor="#FFFDF8" />
                                            <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
                                        </asp:GridView>
                                    </div>
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
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
     <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
</body>

</html>




