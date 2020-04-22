import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    data: function() {
        return {
            datacollection: {
                labels: ["North America", "Asia Pacific", "Europe"],
                datasets: [{
                    label: "Number of Students",
                    backgroundColor: "#3e95cd",
                    data: [5300, 2730, 4670]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scaleBeginAtZero: true,
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Number of Students doing SEP in Each Continent'
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
            }
        }
    },
    mounted() {
        this.renderChart(this.datacollection, this.options)
    }
}