<template>
  <div class="leaderboard">
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <span slot="status" slot-scope="status">
        <a-tag :color="getStatusColor(status)">{{
          status.toUpperCase()
        }}</a-tag>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating"
  },
  {
    title: "User name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" }
  }
];

const data = [
  {
    key: "1",
    rating: 1,
    name: "Sayazhan",
    city: "Boston",
    status: "active"
  },
  {
    key: "2",
    rating: 2,
    name: "Daniyar",
    city: "Washington",
    status: "active"
  },
  {
    key: "3",
    rating: 3,
    name: "Azat",
    city: "New York",
    status: "not active"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    getStatusColor(status) {
      const statusColors = {
        active: "green",
        "not active": "volcano"
      };
      return statusColors[status];
    }
  }
};
</script>

<style scoped>
.leaderboard {
  width: 90%;
  margin: auto;
}
</style>
