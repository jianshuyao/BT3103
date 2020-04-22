import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data: function() {
        return {
            datacollection: {
                labels: ["2016", "2017", "2018", "2019"],
                datasets: [{
                    data: [1540, 2680, 3970, 4510],
                    label: "Number of Students",
                    borderColor: "#32CD32",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Number of Students doing SEP each Year'
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                            mirror: false,
                            suggestedMin: 0,
                        }
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.datacollection, this.options)
    }
}