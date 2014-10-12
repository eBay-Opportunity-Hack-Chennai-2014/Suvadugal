// Flot Charts sample data for SB Admin template

// Flot Pie Chart with Tooltips
$(function() {

    var data = [{
        label: "Blood Donation",
        data: 1
    }, {
        label: "Education",
        data: 3
    }, {
        label: "Disabled",
        data: 9
    }, {
        label: "Others",
        data: 20
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});
