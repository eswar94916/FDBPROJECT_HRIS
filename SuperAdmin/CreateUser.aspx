<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateUser.aspx.cs" Inherits="SuperAdmin_CreateUser" %>

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
                    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li class="nav-item active open" id="liPatSetAppointment">
                            <a href="CreateUser.aspx" class="nav-link nav-toggle">
                                <i class="icon-doc"></i>
                                <span class="title">Create User</span>
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
                   
                    <div class="page-bar">
                        <ul class="page-breadcrumb">
                            <li>
                                <i class="icon-home"></i>
                                <a>Home</a>
                                <i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <span>Create User</span>
                            </li>
                        </ul>
                    </div>

                    <div id="divGroup" style="background-color: white">
                        <br />
                        <h3>&nbsp; &nbsp;Create New User</h3>
                        <div class="row">
                            <div class="portlet-body form">
                                <div class="form-body">
                                    <div id="divRole" runat="server">
                                        <div class="col-sm-12 row-no-padding marginTopmd" runat="server">
                                            <div class="col-sm-4" style="text-align: right">
                                                <label class="marginTopsml">Role</label>
                                            </div>
                                            <div class="col-sm-6 row-no-padding">
                                                <%--<select id="ddlRoles" name="ddlRoles" class="form-control select2" style="border-color: black" tabindex="4" runat="server">
                                                    <option value="SuperAdmin">SuperAdmin</option>
                                                    <option value="Admin">Admin</option>
                                                </select>--%>
                                                <asp:DropDownList runat="server" ID="ddlRoles" CssClass="form-control select2" OnSelectedIndexChanged="ddlRoles_SelectedIndexChanged" AutoPostBack="true">
                                                    <%--<asp:ListItem Value="SuperAdmin">SuperAdmin</asp:ListItem>--%>
                                                    <asp:ListItem Value="Admin">Admin</asp:ListItem>
                                                    <asp:ListItem Value="UnitAdmin">UnitAdmin</asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div class="col-sm-12 row-no-padding marginTopmd" runat="server">
                                            <div class="col-sm-4" style="text-align: right">
                                                <label class="marginTopsml">Company</label>
                                            </div>
                                            <div class="col-sm-6 row-no-padding">
                                                <asp:DropDownList runat="server" ID="ddlcompany" CssClass="form-control select2" OnSelectedIndexChanged="ddlcompany_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div class="col-sm-12 row-no-padding marginTopmd" runat="server" id="divunit">
                                            <div class="col-sm-4" style="text-align: right">
                                                <label class="marginTopsml">Unit</label>
                                            </div>
                                            <div class="col-sm-6 row-no-padding">
                                                <asp:DropDownList runat="server" ID="ddlunit" CssClass="form-control select2" ></asp:DropDownList>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                    <asp:CreateUserWizard ID="CreateUserWizard2" runat="server" OnCreatedUser="CreateUserWizard2_CreatedUser" LoginCreatedUser="false" OnCreatingUser="CreateUserWizard2_CreatingUser">
                                        <WizardSteps>
                                            <asp:CreateUserWizardStep ID="CreateUserWizardStep2" runat="server">
                                                <ContentTemplate>
                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <span class="control-label" style="font-size: large;">Sign-Up User:</span>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName" CssClass="marginTopsml">User Name:</asp:Label>
                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">
                                                            <asp:TextBox ID="UserName" runat="server" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName" ErrorMessage="User Name is required." ToolTip="User Name is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>
                                                        </div>

                                                    </div>
                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password" CssClass="marginTopsml">Password:</asp:Label>
                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">

                                                            <asp:TextBox ID="Password" runat="server" TextMode="Password" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>

                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="Label2" runat="server" AssociatedControlID="ConfirmPassword" CssClass="marginTopsml">Confirm Password:</asp:Label>
                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">

                                                            <asp:TextBox ID="ConfirmPassword" runat="server" TextMode="Password" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ConfirmPassword" ErrorMessage="Confirm Password is required." ToolTip="Confirm Password is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>

                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="EmailLabel" runat="server" AssociatedControlID="Email" CssClass="marginTopsml">E-mail:</asp:Label>

                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">

                                                            <asp:TextBox ID="Email" runat="server" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="EmailRequired" runat="server" ControlToValidate="Email" ErrorMessage="E-mail is required." ToolTip="E-mail is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>

                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 row-no-padding marginTopmd" id="divSQ">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="QuestionLabel" runat="server" AssociatedControlID="Question">Security Question:</asp:Label>
                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">
                                                            <asp:TextBox ID="Question" runat="server" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="QuestionRequired" runat="server" ControlToValidate="Question" ErrorMessage="Security question is required." ToolTip="Security question is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 row-no-padding marginTopmd">
                                                        <div class="col-sm-4" style="text-align: right">
                                                            <asp:Label ID="AnswerLabel" runat="server" AssociatedControlID="Answer" CssClass="marginTopsml">Security Answer:</asp:Label>
                                                        </div>
                                                        <div class="col-sm-6 row-no-padding">

                                                            <asp:TextBox ID="Answer" runat="server" CssClass="form-control"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="AnswerRequired" runat="server" ControlToValidate="Answer" ErrorMessage="Security answer is required." ToolTip="Security answer is required." ValidationGroup="CreateUserWizard1">*</asp:RequiredFieldValidator>

                                                        </div>
                                                    </div>
                                                    <div class="input-group">
                                                        <asp:CompareValidator ID="PasswordCompare" runat="server" ControlToCompare="Password" ControlToValidate="ConfirmPassword" Display="Dynamic" ErrorMessage="The Password and Confirmation Password must match." ValidationGroup="CreateUserWizard1"></asp:CompareValidator>

                                                    </div>

                                                    <div class="input-group" align="center" style="color: Red;" runat="server">
                                                        <asp:Literal ID="ErrorMessage" runat="server" EnableViewState="False"></asp:Literal>

                                                    </div>
                                                </ContentTemplate>
                                                <CustomNavigationTemplate>
                                                    <br />
                                                    <div class="col-md-8">
                                                        <div style="align-content: center">
                                                            <asp:Button ID="StepNextButton" CssClass="btn bg-green green-meadow" runat="server" Width="200px" CommandName="MoveNext" Text="Create User" ValidationGroup="CreateUserWizard2" />
                                                        </div>
                                                    </div>
                                                </CustomNavigationTemplate>
                                            </asp:CreateUserWizardStep>

                                            <asp:CompleteWizardStep ID="CompleteWizardStep2" runat="server">
                                                <ContentTemplate>
                                                    <div class="col-md-12 col-md-offset-10">
                                                        <table align="center" runat="server">
                                                            <tr>
                                                                <td>
                                                                    <h3>Complete</h3>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>Your Account Has Been Created Successfully.</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <asp:Button ID="ContinueButton" Width="120px" CssClass="btn bg-green green-meadow" runat="server" CausesValidation="False" CommandName="Continue" Text="Continue" ValidationGroup="CreateUserWizard2" OnClick="ContinueButton_Click" />
                                                                    <asp:Button ID="btnBack" Width="120px" runat="server" Text="Back" CssClass="btn bg-purple " ForeColor="White" OnClick="btnBack_Click" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:CompleteWizardStep>
                                        </WizardSteps>
                                    </asp:CreateUserWizard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-footer">
            <div class="copyright" style="color: white">2017 © Exam on Cloud</div>
        </div>
    </form>
     <%: System.Web.Optimization.Scripts.Render("~/bundles/ConfigurationJS") %>
    <script src="../../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/JSDate") %>
    <script src="../../assets/pages/scripts/table-datatables-buttons.min.js" type="text/javascript"></script>
    <script src="../../assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
    <!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>




