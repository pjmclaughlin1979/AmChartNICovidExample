/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
 
// Set up data source
chart.dataSource.url = "https://opendata.arcgis.com/datasets/5f9d98f567f44f59b0c9e200bb699414_0.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "DateVal";

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "NewNIDeaths";
series1.dataFields.categoryX = "DateVal";
series1.name = "New Deaths";
series1.strokeWidth = 3;
series1.tensionX = 0.7;
series1.bullets.push(new am4charts.CircleBullet());

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "NewNICases";
series2.dataFields.categoryX = "DateVal";
series2.name = "New Cases";
series2.strokeWidth = 3;
series2.tensionX = 0.7;

series2.bullets.push(new am4charts.CircleBullet());





// Add horizontal scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.marginLeft = 0;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";
chart.cursor.lineX.disabled = false;




// Add legend
chart.legend = new am4charts.Legend();

