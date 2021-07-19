<template>
  <basic-container>
    <avue-crud :option="option"
               :table-loading="loading"
               :data="data"
               :page="page"
               :before-open="beforeOpen"
               v-model="form"
               ref="crud"
               @row-update="rowUpdate"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @current-change="currentChange"
               @size-change="sizeChange"
               @on-load="onLoad">
      <template slot-scope="scope" slot="menu">
        <el-button style="margin-left:10px;" size="small" type="text" icon="el-icon-user" @click="updatedd(scope)" @click.native="tip">选择</el-button>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
  import {getList, getDetail,update} from "@/api/student/student";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        form: {},
        query: {},
        loading: true,
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        selectionList: [],
        option: {
          height: 'auto',
          calcHeight: 210,
          searchShow: false,
          searchMenuSpan: 6,
          tip: false,
          border: true,
          index: true,
          viewBtn: true,
          delBtn: false,
          editBtn: false,
          selection: true,
          addBtn: false,
          column: [
            {
              label: "老师姓名",
              prop: "teacherName",
              editDisplay:false,
              rules: [{
                required: false,
                message: "请输入姓名",
                trigger: "blur"
              }]
            },
            {
              label: "职称",
              prop: "postName",
              editDisplay:false,
              rules: [{
                required: false,
                message: "请输入职称",
                trigger: "blur"
              }]
            },
            {
              label: "所属学院",
              prop: "dept",
              editDisplay:false,
              rules: [{
                required: false,
                message: "请输入所属学院",
                trigger: "blur"
              }]
            },
            {
              label: "联系方式",
              prop: "teacherPhoneNumber",
              editDisplay:false,
              rules: [{
                required: false,
                message: "请输入学院",
                trigger: "blur"
              }]
            },
            {
              label: "剩余名额",
              prop: "residualAmount",
              editDisplay:false,
              rules: [{
                required: false,
                message: "请输入剩余名额",
                trigger: "blur"
              }]
            },
            {
              label: "已选择",
              prop: "booleanChoose",
              editDisplay:false,
              rules: [{
                required: false,
                message: "是否已选择",
                trigger: "blur"
              }]
            },
          ]
        },
        data: []
      };
    },
    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          viewBtn: this.vaildData(this.permission.student_view, false),
          editBtn: this.vaildData(this.permission.student_edit, false)
        };
      }
    },
    methods: {
      async updatedd(ee) {
        await update(ee.row.teacherId)
        this.$message.success('操作成功')
        await this.onLoad(this.page, {})
        console.log(ee.row.teacherId, '书记')
      },
      rowUpdate(row, index, done, loading) {
        update(row).then(() => {
          done();
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        }, error => {
          window.console.log(error);
          loading();
        });
      },
      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getDetail(this.form.id).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      searchReset() {
        this.query = {};
        this.onLoad(this.page);
      },
      searchChange(params, done) {
        this.query = params;
        this.page.currentPage = 1;
        this.onLoad(this.page, params);
        done();
      },
      selectionChange(list) {
        this.selectionList = list;
      },
      selectionClear() {
        this.selectionList = [];
        this.$refs.crud.toggleSelection();
      },
      currentChange(currentPage){
        this.page.currentPage = currentPage;
      },
      sizeChange(pageSize){
        this.page.pageSize = pageSize;
      },
      onLoad(page, params = {}) {
        this.loading = true;
        getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
          const data = res.data.data;
          this.page.total = data.total;
          this.data = data.records;
          this.loading = false;
          this.selectionClear();
        });
      }
    }
  };
</script>

<style>
</style>
