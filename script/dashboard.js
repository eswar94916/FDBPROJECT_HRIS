function onbodyload() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: '{}',
        url: "DashboardService.aspx/totalemployee",
        dataType: "json",
        async: true,
        success: function (data, status) {
            var varList = (data.d);
            $('#unitcount').empty();
            var tc = 0;
            $(varList).each(function (index, o) {
                var color = "";

                tc = tc + 1;
                var id = "count" + tc;
                var ida = "animated" + tc;
                var idp = "progress" + tc;

                if (tc == 1) {
                    color = "#4B77BE";
                }
                if (tc == 2) {
                    color = "#C8D046";
                }

                if (tc == 3) {
                    color = "#8E44AD";
                }
                if (tc == 4) {
                    color = "#F3C200";
                }
                if (tc == 5) {
                    color = "#32C5D2";
                }
                if (tc == 6) {
                    color = "#F2784B";
                }
                if (tc == 7) {
                    color = "#5E738B";
                }
                if (tc == 8) {
                    color = "#5C9BD1";
                }
                if (tc == 9) {
                    color = "#29B4B6";
                }
                if (tc == 10) {
                    color = "#8877A9";
                }
                $('#unitcount').append('<svg id="' + ida + '" viewbox="0 0 100 100" style="width: 18%">' +
                                '<circle cx="50" cy="50" r="45" fill="' + color + '" />' +
                                '<path id="' + idp + '" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="none" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path>' +
                                     '<text x="50" y="50" text-anchor="middle" dy="-3" font-size="8" fill="#fff">' + o.UnitName + ' </text>' +
                                     '<text id="' + id + '" x="50" y="50" text-anchor="middle" dy="10" font-size="8" fill="#fff"></text>' +
                                 '</svg>');
                $('#' + id + '').text(o.TotalEmployee);
                var count = $('#' + id + '');
                $({ Counter: 0 }).animate(
                  { Counter: count.text() },
                  {
                      duration: 3000,
                      easing: "linear",
                      step: function () {
                          count.text(Math.ceil(o.TotalEmployee));
                      }
                  }
                );

                var s = Snap('#' + ida + '');
                var progress = s.select('#' + idp + '');

                progress.attr({ strokeDasharray: "0, 251.2" });
                Snap.animate(
                  0,
                  251.2,
                  function (value) {
                      progress.attr({ "stroke-dasharray": value + ",251.2" });
                  },
                  3000
                );
            })
        }
    })
}