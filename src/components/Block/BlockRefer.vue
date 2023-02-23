<template>
  <div class="block mt-5">
    <div class="wrapper">
      <div class="block__refer">
        <div class="d-flex justify-space-between mt-2">
          <span class="font-10"> Top Referrals </span>
          <span> View All </span>
        </div>
        <div class="block__refer-tags" v-for="(refer, idx) in referrals" :key="idx">
          <span class="d-flex gap-x-1"
            ><svg
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293
                3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14
                 0 01.865-.501 48.172 48.172
                0 003.423-.379c1.584-.233 2.707-1.626
                 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394
                48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746
                 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            {{ refer.name }}</span
          >
          <span class="text_gray">{{ refer.value }}</span>
        </div>
      </div>
      <div class="block__wave-graph">
        <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="block__donut">
      <apexchart type="donut" :options="chartOptionsPie" :series="seriesPie"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      referrals: [
        {
          name: 'Facebook',
          value: '242',
        },
        {
          name: 'Twitter',
          value: '242',
        },
        {
          name: 'Google',
          value: '242',
        },
        {
          name: 'Youtube',
          value: '242',
        },
      ],
      series: [
        {
          name: 'Facebook',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Youtube',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Twitter',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Google',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: false,
          },
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '01/01/2011 GMT',
            '01/02/2011 GMT',
            '01/03/2011 GMT',
            '01/04/2011 GMT',
            '01/05/2011 GMT',
            '01/06/2011 GMT',
          ],
        },
        legend: {
          position: 'right',
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },
      seriesPie: [75, 25],
      chartOptionsPie: {
        chart: {
          type: 'donut',
        },
        labels: ['Desktop', 'Mobile'],
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.block {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__refer {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    background: white;
    border-radius: 8px;
    gap: 10px;
    &-tags {
      display: flex;
      margin-top: 5px;
      justify-content: space-between;
    }
  }
  &__wave-graph {
    width: 90%;
    background: white;
    border-radius: 8px;
    padding: 0.75rem;
  }
  &__donut {
    width: 20%;
    background: white;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: center;

    align-items: center;
  }
}
.wrapper {
  width: 75%;
  display: flex;
  justify-content: end;
  gap: 30px;
}
.icon {
  width: 20px;
  height: 20px;
  align-content: center;
}
</style>
