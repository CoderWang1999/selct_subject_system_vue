<template>
  <div>
    <img src="http://www.ahstu.edu.cn/__local/8/00/5B/C5DF99E9A863869CECA1705534B_D063AD34_85BBA.jpg?e=.jpg"/>
    <img src="http://www.ahstu.edu.cn/__local/7/B4/57/748B950C909D5454A0385A427B2_1A8BD44F_9C4B4.jpg?e=.jpg"/>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1', '2', '3', '5'],
        logActiveNames: ['23']
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  };
</script>

<style>
  .el-divider--horizontal {
    margin: 12px 0 !important;
  }

  .el-font-size {
    font-size: 14px;
  }
</style>

