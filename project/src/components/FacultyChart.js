import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['FASS', 'FoE', "FoS", "Business", "SDE", "SoC", "Dentistry"],
            datasets: [{
                label: "Number of Students",
                backgroundColor: '#f87979',
                data: [2180, 1370, 3220, 2490, 540, 1650, 1250]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scaleBeginAtZero: true,
            title: {
                display: true,
                text: "Number of Students doing SEP per Faculty"
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
                        suggestedMax: 10
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            },
        }
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
}