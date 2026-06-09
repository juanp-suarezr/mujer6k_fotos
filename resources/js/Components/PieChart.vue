<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const props = defineProps({
  labels: Array,
  values: Array,
  title: String,
});

// Paleta de colores semi dark
const palette = [
  "#ED1C24", //Títulos, botones estado HOVER
  "#004884",
  "#FFBA00",
  "#E20613", //Llamados de acción, botones, texto seleccionado
  "#1E40AF", // azul oscuro
  "#F9A100", // amarillo base
  "#3C50E0", // azul base

];

// Genera un array de colores de la paleta, repitiendo si es necesario
function getColors(length) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(palette[i % palette.length]);
  }
  return colors;
}

const chartData = computed(() => {
  const chartLabels = props.labels ?? ["Registrados", "Activos"];
  const chartValues = props.values ?? [0, 0];
  return {
    labels: chartLabels,
    datasets: [
      {
        data: chartValues,
        backgroundColor: getColors(chartLabels.length),
      },
    ],
  };
});

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    title: props.title
      ? { display: true, text: props.title }
      : { display: false },
    datalabels: {
      color: "#fff",
      font: { weight: "bold", size: 12 },
      formatter: (value) => value,
    },
  },
}));

// Consola para depuración
watchEffect(() => {
  console.log("PieChart props.labels:", props.labels);
  console.log("PieChart props.values:", props.values);
  console.log("PieChart chartData:", chartData.value);
});
</script>
