<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  html,body,#app{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  ul,ol{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .mb5{
    margin-bottom: 5px;
  }
  .mt10 {
    margin-top: 10px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .mr10 {
    margin-right: 10px;
  }
  .ml10{
    margin-left: 10px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .mr20 {
    margin-right: 20px;
  }

  /* 清除浮动对父类元素的影响 */
  .clearfix:before,
  .clearfix:after {
      content: '';
      display: table;
  }
  .clearfix:after {
      clear: both;
  }

  /** 滚动条样式-宽高 **/
  ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
  }
  /** 滚动条样式-轨道 **/
  ::-webkit-scrollbar-track{
    background-color: rgba(50,50,50,.1);
    border-radius:1em;
  }
  /** 滚动条样式-滑块 **/
  ::-webkit-scrollbar-thumb {
    background-color: rgba(50,50,50,.3);
    border-radius:1em;
  }
</style>
