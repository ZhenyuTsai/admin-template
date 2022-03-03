<template>
  <section class="tree-table">
    <div class="tree-table-header">
      <div class="left">
        <el-button type="primary" size="mini" @click="addFather">新增栏目</el-button>
      </div>
      <div class="right">
        <el-input v-model="search" size="mini" placeholder="请输入菜单名称" clearable @input="filterItem(search)"></el-input>
      </div>
    </div>
    <el-table :data="filterData" style="width:100%; margin-bottom: 20px;" max-height="570" row-key="code" default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}" :header-cell-style="{background:'#E6F0FF',color:'#101010'}">
      <el-table-column prop="date" label="日期">
        <template slot-scope="{row}">
          <el-input v-if="row.edit" v-model="row.date" placeholder="请输入" size="normal" clearable></el-input>
          <span v-else>{{row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="{row}">
          <el-input v-if="row.edit" v-model="row.name" placeholder="请输入" size="normal" clearable></el-input>
          <span v-else>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="{row}">
          <el-input v-if="row.edit" v-model="row.address" placeholder="请输入" size="normal" clearable></el-input>
          <span v-else>{{row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="{row}">
          <div v-if="row.code.length<4">
            <el-link v-if="!row.edit" type="primary" :underline="false" @click="editHandle(row)" class="mr10">编辑</el-link>
            <el-link v-if="row.edit" type="primary" :underline="false" @click="finishHandle(row)" class="mr10">完成</el-link>
            <el-link v-else type="primary" :underline="false" @click="addChild(row)">新增子节点</el-link>
            <el-link type="warning" :underline="false" @click="deleteHandle(row)">删除</el-link>
          </div>
          <div v-else>
            <el-link v-if="!row.edit" type="primary" :underline="false" @click="editHandle(row)" class="mr10">编辑</el-link>
            <el-link v-if="row.edit" type="primary" :underline="false" @click="finishHandle(row)" class="mr10">完成</el-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      tableData: [/*
        {
          code: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          code: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          code: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              code: '31',
              date: '2016-05-01',
              name: '王小虎8',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              code: '32',
              date: '2016-05-01',
              name: '王小虎9',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          code: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        } */
      ],
      showData: [],
      filterData: [/*
        {
          code: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          code: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          code: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              code: '31',
              date: '2016-05-01',
              name: '王小虎8',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              code: '32',
              date: '2016-05-01',
              name: '王小虎9',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          code: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        } */
      ]
    }
  },
  methods: {
    filterItem (search) {
      this.showData = []
      this.setShowData(this.tableData)
      const arr1 = this.showData.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map(item => item.code.slice(0, 1))
      const str = [...new Set(arr1)].join()
      this.filterData = this.tableData.filter(item => !search || str.includes(item.code))
      console.log(this.filterData)
    },
    setShowData (data) {
      if (data && data.length > 0) {
        data.forEach(item => {
          this.showData.push(item)
          this.setShowData(item.children)
        })
      }
    },
    addFather () {
      if (!this.tableData || this.tableData.length === 0) {
        this.tableData = []
        this.tableData.push({
          code: '1',
          date: '',
          name: '',
          address: '',
          edit: true
        })
      } else {
        this.tableData.push({
          code: (+this.tableData[this.tableData.length - 1].code + 1) + '',
          date: '',
          name: '',
          address: '',
          edit: true
        })
      }
      this.search = ''
      this.filterItem(this.search)
    },
    addChild (row) {
      const arr = row.code.split('')
      if (arr.length === 1) {
        const index = this.tableData.findIndex(item => item.code === row.code)
        if (!this.tableData[index].children || row.children.length === 0) {
          this.tableData[index].children = []
          this.tableData[index].children.push({
            code: row.code + 1,
            date: '',
            name: '',
            address: '',
            edit: true
          })
        } else {
          this.tableData[index].children.push({
            code: (+row.children[row.children.length - 1].code + 1) + '',
            date: '',
            name: '',
            address: '',
            edit: true
          })
        }
      } else if (arr.length === 2) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code)
        if (!this.tableData[index].children[index1].children || row.children.length === 0) {
          this.tableData[index].children[index1].children = []
          this.tableData[index].children[index1].children.push({
            code: row.code + 1,
            date: '',
            name: '',
            address: '',
            edit: true
          })
        } else {
          this.tableData[index].children[index1].children.push({
            code: (+row.children[row.children.length - 1].code + 1) + '',
            date: '',
            name: '',
            address: '',
            edit: true
          })
        }
      } else if (arr.length === 3) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 2))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code)
        if (!this.tableData[index].children[index1].children[index2].children || row.children.length === 0) {
          this.tableData[index].children[index1].children[index2].children = []
          this.tableData[index].children[index1].children[index2].children.push({
            code: row.code + 1,
            date: '',
            name: '',
            address: '',
            edit: true
          })
        } else {
          this.tableData[index].children[index1].children[index2].children.push({
            code: (+row.children[row.children.length - 1].code + 1) + '',
            date: '',
            name: '',
            address: '',
            edit: true
          })
        }
      }
      this.filterItem(this.search)
    },
    editHandle (row) {
      const arr = row.code.split('')
      if (arr.length === 1) {
        const index = this.tableData.findIndex(item => item.code === row.code)
        this.tableData[index].edit = true
      } else if (arr.length === 2) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 2))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].edit = true
      } else if (arr.length === 3) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 2))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 3))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children[index2].edit = true
      } else if (arr.length === 4) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 2))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 3))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code.slice(0, 4))
        const index3 = this.tableData[index].children[index1].children[index2].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children[index2].children[index3].edit = true
      }
      this.filterItem(this.search)
    },
    finishHandle (row) {
      const arr = row.code.split('')
      row.edit = false
      if (arr.length === 1) {
        const index = this.tableData.findIndex(item => item.code === row.code)
        this.tableData[index] = row
      } else if (arr.length === 2) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1] = row
      } else if (arr.length === 3) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 2))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children[index2] = row
      } else if (arr.length === 4) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 2))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code.slice(0, 3))
        const index3 = this.tableData[index].children[index1].children[index2].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children[index2].children[index3] = row
      }
      this.filterItem(this.search)
    },
    deleteHandle (row) {
      const arr = row.code.split('')
      if (arr.length === 1) {
        const index = this.tableData.findIndex(item => item.code === row.code)
        this.tableData.splice(index, 1)
      } else if (arr.length === 2) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code)
        this.tableData[index].children.splice(index1, 1)
      } else if (arr.length === 3) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 2))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children.splice(index2, 1)
      } else if (arr.length === 4) {
        const index = this.tableData.findIndex(item => item.code === row.code.slice(0, 1))
        const index1 = this.tableData[index].children.findIndex(item => item.code === row.code.slice(0, 2))
        const index2 = this.tableData[index].children[index1].children.findIndex(item => item.code === row.code.slice(0, 3))
        const index3 = this.tableData[index].children[index1].children[index2].children.findIndex(item => item.code === row.code)
        this.tableData[index].children[index1].children[index2].children.splice(index3, 1)
      }
      this.filterItem(this.search)
    }
  }
}
</script>

<style lang="less" scoped>
.tree-table{
  .tree-table-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  /deep/.el-table td.el-table__cell .cell{
    display: flex;
  }
}
</style>
