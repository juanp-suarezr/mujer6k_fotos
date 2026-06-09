<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { computed } from "vue";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const props = defineProps({
  labels: Array,
  values: Array,
  title: String,
  color: Array, // opcional para colores personalizados
  horizontal: Boolean,
});


const palette = [
  "#ED1C24", //Títulos, botones estado HOVER
  "#004884",
  "#FFBA00",
  "#E20613", //Llamados de acción, botones, texto seleccionado
  "#1E40AF", // azul oscuro
  "#F9A100", // amarillo base
  "#3C50E0", // azul base
];

function getRandomColors(length) {
  const colors = [];
  const usedIndexes = new Set();
  for (let i = 0; i < length; i++) {
    let idx;
    do {
      idx = Math.floor(Math.random() * palette.length);
    } while (usedIndexes.has(idx) && usedIndexes.size < palette.length);
    usedIndexes.add(idx);
    colors.push(palette[idx]);
    if (usedIndexes.size === palette.length) usedIndexes.clear();
  }
  return colors;
}

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: props.title || "Datos",
      backgroundColor:
        props.color && props.color.length
          ? props.color
          : getRandomColors(props.values.length),
      data: props.values,
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  indexAxis: props.horizontal ? "y" : "x",
  plugins: {
    legend: { display: false },
    title: {
      display: !!props.title,
      text: props.title,
      color: "#64748b",
      font: {
        size: 18,
      },
    },
    datalabels: {
      color: "#fff",
      font: { weight: "normal", size: 12 },
      formatter: (value) => value,
    },
  },
}));
</script>
