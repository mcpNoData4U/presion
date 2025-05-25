import React from 'react';
import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { initialTasks } from '../../data/initialData';

function ProductivityReports() {
  // Datos de ejemplo para los gráficos
  const taskCompletionData = {
    labels: ['Completadas', 'Pendientes', 'En Progreso'],
    series: [30, 40, 30], // Example values representing percentages
  };

  const timeDistributionData = {
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    series: [
      {
        name: 'Tareas Completadas',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Tareas Creadas',
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
  };

  const pieChartOptions = {
    chart: {
      type: 'donut',
      foreColor: 'var(--text-color)', // Usar variable CSS para el color del texto
    },
    labels: taskCompletionData.labels,
    colors: ['#00E396', '#FEB019', '#FF4560'], // Colores para Completadas, Pendientes, En Progreso
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + "%"
      },
      style: {
        colors: ['#fff']
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Tareas',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
              }
            }
          }
        }
      }
    },
    theme: {
      mode: document.documentElement.classList.contains('dark')? 'dark' : 'light',
    }
  };

  const lineChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      foreColor: 'var(--text-color)',
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: timeDistributionData.categories,
    },
    grid: {
      borderColor: 'var(--border-color)',
      row: {
        colors: ['var(--bg-color-light)', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    theme: {
      mode: document.documentElement.classList.contains('dark')? 'dark' : 'light',
    }
  };

  // Actualizar el tema de los gráficos dinámicamente
  React.useEffect(() => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    const textColor = isDarkMode? '#E5E7EB' : '#1F2937'; // gray-200 vs gray-800
    const borderColor = isDarkMode? '#4B5563' : '#E5E7EB'; // gray-600 vs gray-200
    const bgColorLight = isDarkMode? '#374151' : '#F9FAFB'; // gray-700 vs gray-50

    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--border-color', borderColor);
    root.style.setProperty('--bg-color-light', bgColorLight);

    // Forzar re-render de los gráficos para aplicar el nuevo tema
    // Esto es un hack, en una app real se usaría un contexto o un estado global
    // para pasar el tema a los gráficos de forma más reactiva.
    // O se podría usar el `key` prop en el componente Chart para forzar su recreación.
  }, [document.documentElement.classList.contains('dark')]);


  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Reportes de Productividad</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Cumplimiento de Tareas</h3>
          <Chart
            options={pieChartOptions}
            series={taskCompletionData.series}
            type="donut"
            height={300}
          />
        </motion.div>

        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Tendencias de Productividad</h3>
          <Chart
            options={lineChartOptions}
            series={timeDistributionData.series}
            type="line"
            height={300}
          />
        </motion.div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Opciones de Exportación</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Puedes exportar tus reportes en formato CSV o JSON.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Exportar a CSV
          </button>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors duration-200">
            Exportar a JSON
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductivityReports;