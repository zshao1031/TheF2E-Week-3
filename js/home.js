window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    drawLineCanvas(ctx,lineChartData);
};


// 繪圖的資料
var lineChartData = {
    labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"], //顯示區間名稱
    datasets: [{
        label: 'TOTAL REVENUE', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#7ED321",
        borderColor: "#7ED321",
        borderWidth: 2,
        data: [7260, 7000, 5500, 7300, 5680, 6340, 7620, 7400], // 資料
        fill: false // 是否填滿色彩
    }, {
        label: 'TOTAL COST',
        lineTension: 0,
        backgroundColor: "#D0021B",
        borderColor: "#D0021B",
        borderWidth: 2,
        data: [600, 600, 2650, 3000, 2420, 600, 940, 2000],
        fill: false
    },{
        label: 'NET INCOME',
        lineTension: 0,
        backgroundColor: "#4A90E2",
        borderColor: "#4A90E2",
        borderWidth: 2,
        data: [6100, 5430, 1980, 4020, 3760, 5480, 6500, 4980],
        fill: false
    }]
};

// 繪圖用chart的函式
function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { display: true }, //是否要顯示圖示
                tooltips: { enabled: true }, //是否要顯示 tooltip
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{ display: true }],
                    yAxes: [{ display: true }]
                }
        }
    });
};


