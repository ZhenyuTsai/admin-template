<template>
  <section class="env-list">
    <div class="list-header">
      <div class="left">
        <el-button type="primary" size="mini" @click="dialogFormVisible=true">添加站点</el-button>
      </div>
      <div class="right">
        <el-input size="mini" placeholder="请输入站点名称" v-model="input2">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-table :data="list"  stripe :header-cell-style="{background:'#E6F0FF',color:'#101010'}">
      <el-table-column prop="name" label="站点名称"></el-table-column>
      <el-table-column prop="address" label="IP端口"></el-table-column>
      <el-table-column prop="proxy" label="proxy"></el-table-column>
      <el-table-column prop="type" label="工程类型"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <el-link type="primary" :underline="false" class="mr10" @click="dialogSetVisible=true">设置</el-link>
        <el-link type="primary" :underline="false">删除</el-link>
      </el-table-column>
    </el-table>
    <el-dialog class="form-center" title="新增" :visible.sync="dialogFormVisible" width="600px">
      <el-form :model="addForm" label-position="right" label-width="80px" style="width:400px;margin: 0 auto;">
        <el-form-item label="站点名称">
          <el-input v-model="addForm.channelCode" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="IP端口">
          <el-input v-model="addForm.channelCode" type="textarea" :rows="2" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="proxy">
          <el-input v-model="addForm.channelName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="工程类型">
          <el-input v-model="addForm.channelDes" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="addForm.channelDes" type="textarea" :rows="2" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog class="form-center" title="设置" :visible.sync="dialogSetVisible" width="900px">
      <el-tabs tab-position="left" style="height: 600px;">
        <el-tab-pane label="基本信息">基本信息</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="菜单管理">菜单管理</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      dialogSetVisible: false,
      addForm: {
        name: '理赔管理',
        address: '172.16.0.32:8089',
        proxy: 'claim',
        type: 'Vue',
        remark: ''
      },
      list: [
        {
          name: '理赔管理',
          address: '172.16.0.32:8089',
          proxy: 'claim',
          type: 'Vue',
          status: '已发布',
          remark: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.env-list{
  .list-header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  /deep/.el-tabs__item,.el-tabs__item:last-child{
    padding: 0 5px;
  }
  /deep/.el-tabs__item::before {
    content: '';
    display: inline-block;
    opacity: 0;
  }
  /deep/.el-tabs__item::after {
    content: '';
    display: inline-block;
    opacity: 0;
  }
}
.ml10{
  margin-left: 10px;
}
.mr10{
  margin-right: 10px;
}
</style>
