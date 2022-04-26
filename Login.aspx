<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="LoginForm" %>

<!DOCTYPE html>

<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8" />
    <title>HRIS</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="author" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <%:System.Web.Optimization.Styles.Render("~/bundles/LoginCSS") %>
    <link rel="shortcut icon" href="favicon.ico" />
</head>
<!-- END HEAD -->

<body class=" login">
    <!-- BEGIN LOGO -->
    <div class="logo">
        <a style="text-decoration: none">
            <h3 class="form-title" style="color: snow"><b>HRIS</b></h3>
        </a>
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
        <!-- BEGIN LOGIN FORM -->
        <form class="login-form" runat="server">
            <asp:Login ID="Login1" runat="server" FailureText="Your User Name and/or Password is incorrect. Please try again." OnLoggedIn="Login1_LoggedIn">
                <LayoutTemplate>
                    <h3 class="form-title font-white">Login to your account</h3>
                    <div class="form-group">
                        <asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName" CssClass="control-label visible-ie8 visible-ie9">User Name:</asp:Label>
                        <asp:TextBox ID="UserName" runat="server" CssClass="form-control form-control-solid placeholder-no-fix" placeholder="User Name"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName" ErrorMessage="User Name is required." ToolTip="User Name is required." ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                    </div>
                    <div class="form-group">
                        <asp:Label ID="Label1" runat="server" AssociatedControlID="UserName" CssClass="control-label visible-ie8 visible-ie9">Password:</asp:Label>
                        <asp:TextBox ID="Password" runat="server" CssClass="form-control form-control-solid placeholder-no-fix" TextMode="Password" placeholder="Password"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                    </div>
                    <div class="form-actions">
                        <asp:Button ID="Button1" CssClass="btn green uppercase" runat="server" CommandName="Login" Text="Log In" ValidationGroup="Login1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="rememberme check">
                            <asp:CheckBox ID="CheckBox1" runat="server" Text="Remember me next time." />
                            <br />
                            <b style="color: darkred">
                                <asp:Literal ID="FailureText" runat="server" EnableViewState="False"></asp:Literal></b>
                    </div>
                </LayoutTemplate>
            </asp:Login>
        </form>
    </div>
    
    <%:System.Web.Optimization.Scripts.Render("~/bundles/LoginJS") %>
</body>

</html>
