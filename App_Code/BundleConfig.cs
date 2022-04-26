using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

/// <summary>
/// Summary description for BundleConfig
/// </summary>
public class BundleConfig
{
    public static void ResigterBundles(BundleCollection bundles)
    {
        bundles.Add(new StyleBundle("~/bundles/Configuration").Include(
             "~/assets/global/plugins/bootstrap/css/bootstrap.min.css",
             "~/assets/global/plugins/uniform/css/uniform.default.css",
              "~/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css",
               "~/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css",
                "~/assets/global/plugins/fullcalendar/fullcalendar.min.css",
                 "~/assets/global/css/components-md.min.css",
                  "~/assets/global/css/plugins-md.min.css",
            //"~/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css",
            // "~/assets/global/plugins/datatables/datatables.min.css",

                     "~/assets/layouts/layout2/css/layout.min.css",
                      "~/assets/layouts/layout2/css/themes/blue.min.css",
                       "~/assets/layouts/layout2/css/custom.min.css").Include("~/assets/global/plugins/font-awesome/css/font-awesome.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/simple-line-icons/simple-line-icons.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/bootstrap/css/bootstrap.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/uniform/css/uniform.default.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/css/components-md.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/css/plugins-md.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/datatables/datatables.min.css", new CssRewriteUrlTransform()).Include("~/assets/layouts/layout2/css/layout.min.css", new CssRewriteUrlTransform()).Include("~/assets/layouts/layout2/css/themes/blue.min.css", new CssRewriteUrlTransform()));

        bundles.Add(new StyleBundle("~/bundles/Configuration1").Include(
     "~/assets/global/plugins/bootstrap/css/bootstrap.min.css",
     "~/assets/global/plugins/uniform/css/uniform.default.css",
      "~/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css",
       "~/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css",
        "~/assets/global/plugins/fullcalendar/fullcalendar.min.css",
         "~/assets/global/css/components-md.min.css",
          "~/assets/global/css/plugins-md.min.css",
            //"~/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css",
            // "~/assets/global/plugins/datatables/datatables.min.css",

             "~/assets/layouts/layout2/css/layout.min.css",
              "~/assets/layouts/layout2/css/themes/blue.min.css",
               "~/assets/layouts/layout2/css/custom.min.css").Include("~/assets/global/plugins/font-awesome/css/font-awesome.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/simple-line-icons/simple-line-icons.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/bootstrap/css/bootstrap.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/uniform/css/uniform.default.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/css/components-md.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/css/plugins-md.min.css", new CssRewriteUrlTransform()).Include("~/assets/layouts/layout2/css/layout.min.css", new CssRewriteUrlTransform()).Include("~/assets/layouts/layout2/css/themes/blue.min.css", new CssRewriteUrlTransform()));


        BundleTable.EnableOptimizations = false;
        bundles.Add(new StyleBundle("~/bundles/CSSDate").Include(
                "~/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css",
               "~/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css",
                "~/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css",
                 "~/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css",
                  "~/assets/global/plugins/clockface/css/clockface.css",
                   "~/assets/global/plugins/select2/css/select2.min.css",
                    "~/assets/global/plugins/select2/css/select2-bootstrap.min.css"));


        bundles.Add(new ScriptBundle("~/bundles/ConfigurationJS").Include(
          "~/assets/global/plugins/jquery.min.js",
         "~/assets/global/plugins/bootstrap/js/bootstrap.min.js",
         "~/assets/global/plugins/js.cookie.min.js",
         "~/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
            "~/assets/global/plugins/jquery.blockui.min.js",
            "~/assets/global/plugins/moment.min.js",
            "~/assets/global/scripts/datatable.js",
            "~/assets/global/plugins/datatables/datatables.min.js",
            "~/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js",
            "~/assets/global/scripts/app.min.js",
            "~/assets/layouts/layout2/scripts/layout.min.js",
             "~/assets/layouts/layout2/scripts/demo.min.js",
              "~/assets/layouts/global/scripts/quick-sidebar.min.js",
               "~/assets/layouts/global/scripts/quick-nav.min.js"));

        bundles.Add(new ScriptBundle("~/bundles/ConfigurationJS1").Include(
         "~/assets/global/plugins/jquery.min.js",
        "~/assets/global/plugins/bootstrap/js/bootstrap.min.js",
        "~/assets/global/plugins/js.cookie.min.js",
        "~/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
           "~/assets/global/plugins/jquery.blockui.min.js",
           "~/assets/global/plugins/moment.min.js",
           "~/assets/global/scripts/app.min.js",
           "~/assets/layouts/layout2/scripts/layout.min.js",
            "~/assets/layouts/layout2/scripts/demo.min.js",
             "~/assets/layouts/global/scripts/quick-sidebar.min.js",
              "~/assets/layouts/global/scripts/quick-nav.min.js"));

        bundles.Add(new ScriptBundle("~/bundles/JSDate").Include(
   "~/assets/global/plugins/select2/js/select2.full.min.js",
  "~/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js",
 "~/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js",
 "~/assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js",
 "~/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js",
 "~/assets/global/plugins/clockface/js/clockface.js",
            // "~/assets/global/plugins/jquery-validation/js/jquery.validate.min.js",
            // "~/assets/global/plugins/jquery-validation/js/additional-methods.min.js",
  "~/assets/global/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js",
  "~//assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js"
  ));
        bundles.Add(new ScriptBundle("~/bundles/LoginJS").Include(
                             "~/assets/global/plugins/jquery.min.js",
                             "~/assets/global/plugins/bootstrap/js/bootstrap.min.js",
                             "~/assets/global/plugins/js.cookie.min.js",
                            "~/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                             "~/assets/global/plugins/jquery.blockui.min.js",
                             "~/assets/global/plugins/jquery-validation/js/jquery.validate.min.js",
                             "~/assets/global/plugins/jquery-validation/js/additional-methods.min.js",
                             "~/assets/global/plugins/select2/js/select2.full.min.js",
                             "~/assets/global/plugins/backstretch/jquery.backstretch.min.js",
                             "~/assets/global/scripts/app.min.js",
                             "~/assets/pages/scripts/login-4.min.js"
                            ));
        bundles.Add(new StyleBundle("~/bundles/LoginCSS").Include(
            // "~/assets/global/plugins/font-awesome/css/font-awesome.min.css",
            //"~/assets/global/plugins/simple-line-icons/simple-line-icons.min.css",
            //"~/assets/global/plugins/bootstrap/css/bootstrap.min.css",
            //"~/assets/global/plugins/select2/css/select2.min.css",
            // "~/assets/global/plugins/select2/css/select2-bootstrap.min.css",
            // "~/assets/global/css/components-md.min.css"
            //"~/assets/global/css/plugins-md.min.css"

            ).Include("~/assets/global/plugins/font-awesome/css/font-awesome.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/simple-line-icons/simple-line-icons.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/plugins/bootstrap/css/bootstrap.min.css", new CssRewriteUrlTransform()).Include("~/assets/pages/css/login-4.min.css", new CssRewriteUrlTransform()).Include("~/assets/global/css/components-md.min.css", new CssRewriteUrlTransform()));


    }
}