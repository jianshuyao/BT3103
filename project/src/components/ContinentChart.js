import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    data: function() {
        return {
            datacollection: {
                labels: ["USA", "China", "Japan", "UK", "Singapore"],
                datasets: [{
                    label: "Number of Students",
                    backgroundColor: "#3e95cd",
                    data: [13, 10, 5, 9, 7]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scaleBeginAtZero: true,
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Number of Students doing SEP in Each Country'
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