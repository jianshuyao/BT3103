import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,
    data: function() {
        return {
            datacollection: {
                labels: [1, 2, 3, 4, 5],
                datasets: [{
                    label: "Number of Students",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [0, 0, 5, 17, 22]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Average Rating of SEP Searcher platform by Users (over 5)'
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