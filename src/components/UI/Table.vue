<template>
  <div class="ui-table">
      <div class="ui-table__col ui-table__col_header">ID</div>
      <div class="ui-table__col ui-table__col_header">Date</div>
      <div class="ui-table__col ui-table__col_header">Name</div>
      <div class="ui-table__col ui-table__col_header">Money</div>
      <template v-for="(item, index) in dataTable">
        <div :key="index" class="ui-table__col ui-table__col_body">{{item.id}}</div>
        <div :key="index" class="ui-table__col ui-table__col_body">{{item.date}}</div>
        <div :key="index" class="ui-table__col ui-table__col_body">{{item.fullName}}</div>
        <div :key="index" class="ui-table__col ui-table__col_body">{{item.sum}}</div>
      </template>
  </div>
</template>

<script>
export default {
  name: 'UiTable',
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      dataTable: [
        {
          id: 1, date: '12.01.2020', fullName: 'John Dear', sum: 10000,
        },
        {
          id: 2, date: '01.01.2021', fullName: 'Tom Johns', sum: 100000,
        },
        {
          id: 3, date: '02.03.2019', fullName: 'Nick Smith', sum: 100,
        },
        {
          id: 4, date: '11.12.2020', fullName: 'Carl Tramp', sum: 20000,
        },
        {
          id: 5, date: '13.03.2018', fullName: 'Marry Jackson', sum: 90000,
        },
      ],
    };
  },
};
</script>
