<template>
  <div class="chart">
    <h4>Number of Students doing SEP per Faculty</h4>
    <chart></chart>
  </div>
</template>
    
<script>
    import Chart from "./../Chart.js";
    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {
          this.datacollection = {
            labels: [
              "FASS",
              "FoE",
              "Music",
              "FoS",
              "Business",
              "D&E",
              "SoC",
              "Dentistry",
            ],
            datasets: [
              {
                label: "Number of Students",
                backgroundColor: "#f87979",
                data: [7, 5, 4, 7, 6, 3, 8, 4]
              },
            ]
          };
        },
      }
    };
    </script>
    
<style>
</style>