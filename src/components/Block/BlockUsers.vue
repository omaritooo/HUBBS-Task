<template>
  <div class="users">
    <div class="users__container">
      <div class="users__cards">
        <Card v-for="(card, idx) in Cards" :key="idx" :stat="card.stat" :name="card.name" />
      </div>
      <div class="users__graph">
        <apexchart type="area" height="250" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="users__list">
      <h2>Discussion</h2>
      <User v-for="(user, idx) in Users" :name="user" :key="idx" />
    </div>
  </div>
</template>
<script>
import Card from '../Base/BaseStatCard.vue';
import User from '../Base/BaseUserCard.vue';

export default {
  components: {
    Card,
    User,
  },
  data() {
    return {
      Cards: [
        {
          name: 'Subscribers',
          stat: 720,
        },
        {
          name: 'Posts',
          stat: 500,
        },
        {
          name: 'Pages',
          stat: 850,
        },
        {
          name: 'Comments',
          stat: 720,
        },
      ],
      Users: ['Omar', 'Ahmed', 'Magdy', 'Adel'],
      series: [
        {
          name: 'Sample 1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Sample 2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
.users {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  &__container {
    width: 75%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 20px;
  }
  &__cards {
    display: flex;
    width: 100%;
    gap: 20px;

    justify-content: space-between;
  }
  &__list {
    width: 20%;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    padding: 1rem;
    min-height: 100%;
    gap: 5px;
    h2 {
      text-align: left;
      margin-left: 10px;
    }
  }
  &__graph {
    background: white;
    border-radius: 8px;
    padding: 1rem;
  }
}
</style>
