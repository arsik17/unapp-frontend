<template>
  <div class="universities">
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <span slot="scholarship" slot-scope="scholarship">
        <a-tag :color="getScholarshipColor(scholarship)">
          {{ scholarship.toUpperCase() }}
        </a-tag>
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
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city"
  },
  {
    title: "Scholarship",
    key: "scholarship",
    dataIndex: "scholarship",
    scopedSlots: { customRender: "scholarship" }
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost"
  }
];

const data = [
  {
    key: "1",
    rating: 345,
    name: "MIT",
    city: "Boston",
    scholarship: "full",
    cost: "40,000$"
  },
  {
    key: "2",
    rating: 345,
    name: "Harvard",
    city: "Washington",
    scholarship: "partial",
    cost: "22,000$"
  },
  {
    key: "3",
    rating: 345,
    name: "Stanford",
    city: "New York",
    scholarship: "no",
    cost: "30,000$"
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
    getScholarshipColor(scholarship) {
      const scholarshipColors = {
        full: "green",
        no: "volcano",
        partial: "orange"
      };
      return scholarshipColors[scholarship];
    }
  }
};
</script>

<style scoped>
.universities {
  width: 90%;
  margin: auto;
}
</style>
