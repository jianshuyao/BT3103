import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['FASS', 'FoE', "Music", "FoS", "Business", "D&E", "SoC", "Dentistry"],
            datasets: [{
                label: "Number of Students",
                backgroundColor: '#f87979',
                data: [7, 5, 4, 7, 6, 3, 8, 4]
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