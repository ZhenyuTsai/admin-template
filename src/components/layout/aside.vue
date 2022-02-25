<template>
  <div class="aside">
    <el-menu
      router
      :default-active="defultActive"
      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="item in menusList">
        <el-submenu v-if="item.children && item.children.length" :index="item.path" :key="item.path">
          <!-- 一级标题 -->
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="item1 in item.children">
            <el-submenu v-if="item1.children && item1.children.length"  :index="item1.path" :key="item1.path">
              <!-- 二级标题 -->
              <template slot="title">
                <i :class="item1.icon"></i>
                <span>{{item1.name}}</span>
              </template>
              <template v-for="item2 in item1.children">
                <!-- 三级标题 -->
                <el-submenu v-if="item2.children && item2.children.length" :index="item2.path" :key="item2.path">
                  <template slot="title">
                    <i :class="item2.icon"></i>
                    <span>{{item2.name}}</span>
                  </template>
                  <template v-for="item3 in item2.children">
                    <!-- 四级标题 -->
                    <el-submenu v-if="item3.children && item3.children.length" :index="item3.path" :key="item3.path">
                      <template slot="title">
                        <i :class="item3.icon"></i>
                        <span>{{item3.name}}</span>
                      </template>
                    </el-submenu>
                    <el-menu-item v-else :index="item3.path" :key="item3.path+'only'"><i :class="item3.icon"></i><span slot="title">{{item3.name}}</span></el-menu-item>
                  </template>
                </el-submenu>
                <el-menu-item v-else :index="item2.path" :key="item2.path+'only'"><i :class="item2.icon"></i><span slot="title">{{item2.name}}</span></el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="item1.path" :key="item1.path+'only'"><i :class="item1.icon"></i><span slot="title">{{item1.name}}</span></el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.path" :key="item.path+'only'"><i :class="item.icon"></i><span slot="title">{{item.name}}</span></el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menusList: {
      type: Array,
      default: () => {
        return [
          {
            path: '/home',
            icon: 'el-icon-eleme',
            name: '首页',
            children: []
          }
        ]
      }
    }
  },
  computed: {
    defultActive () {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.aside{
  width: 265px;
  background-color: #324157;
  overflow: auto;
  /deep/.el-menu{
    border-right:none;
  }
}
</style>
