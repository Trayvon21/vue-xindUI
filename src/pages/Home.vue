<template>
  <div class="flex x-container">
    <div class="left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-submenu v-for="item in navList" :key="item.id" :index="item.index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="i in item.children" :key="i.id" :index="i.url">
              <template slot="title">
                <i :class="i.icon"></i>
                <span>{{i.name}}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>

    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data() {
    return {
      navList: [
        {
          name: "基本组件",
          index: "1",
          children: [
            {
              name: "按钮",
              url: "/xButton",
              icon: "el-icon-s-data"
            },
            {
              name: "图标",
              url: "/xIcon",
              icon: "el-icon-s-data"
            },
            {
              name: "色彩",
              url: "/xColor",
              icon: "el-icon-s-data"
            },
            {
              name: "样式",
              url: "/xStyle",
              icon: "el-icon-question"
            }
          ]
        },
        {
          name: "导航",
          index: "2",
          children: [
            {
              name: "标签选择器",
              url: "/xTags",
              icon: "el-icon-price-tag"
            },
            {
              name: "回到顶部",
              url: "/xBackTop",
              icon: "el-icon-caret-top"
            },
            {
              name: "底部工具栏",
              url: "/xFootToolBar",
              icon: "el-icon-position"
            },
            {
              name: "导航菜单",
              url: "/xMenu",
              icon: "el-icon-position"
            },
            {
              name: "标签页",
              url: "/xTag",
              icon: "el-icon-position"
            }
          ]
        },
        {
          name: "表单",
          index: "3",
          children: [
            {
              name: "输入框",
              url: "/xInput",
              icon: "el-icon-s-data"
            },
            {
              name: "单选框",
              url: "/xRadio",
              icon: "el-icon-s-data"
            },
            {
              name: "多选框",
              url: "/xCheckBox",
              icon: "el-icon-s-data"
            },
            {
              name: "开关",
              url: "/xSwitch",
              icon: "el-icon-s-data"
            },
            {
              name: "计数器",
              url: "/xStep",
              icon: "el-icon-s-data"
            },
            {
              name: "表格",
              url: "/xTable",
              icon: "el-icon-s-data"
            },
            {
              name: "选择器",
              url: "/xSelect",
              icon: "el-icon-s-data"
            },
            {
              name: "滑块",
              url: "/xSlider",
              icon: "el-icon-s-data"
            },
            {
              name: "日期/时间选择器",
              url: "/xPicker",
              icon: "el-icon-s-data"
            }
          ]
        },
        {
          name: "图表组件",
          index: "4",
          children: [
            {
              name: "趋势",
              url: "/xTrend",
              icon: "el-icon-s-data"
            },
            {
              name: "进度条",
              url: "/xProgress",
              icon: "el-icon-open"
            },
            {
              name: "图片预览",
              url: "/xImagePreview",
              icon: "el-icon-picture"
            },
            {
              name: "通知图标",
              url: "/xNoticeIcon",
              icon: "el-icon-bell"
            }
          ]
        },
        {
          name: "功能",
          index: "5",
          children: [
            {
              name: "锁屏",
              url: "/xLock",
              icon: "el-icon-lock"
            },
            {
              name: "全屏",
              url: "/xFullScreen",
              icon: "el-icon-menu"
            },
            {
              name: "拖拽dialog",
              url: "/xDialog",
              icon: "el-icon-s-grid"
            },
            {
              name: "403",
              url: "/403",
              icon: "el-icon-close"
            },
            {
              name: "404",
              url: "/404",
              icon: "el-icon-close"
            },
            {
              name: "500",
              url: "/500",
              icon: "el-icon-position"
            }
          ]
        },
        {
          name: "复合组件",
          index: "6",
          children: [
            {
              name: "通用登录",
              url: "/xLogin",
              icon: "el-icon-user"
            },
            {
              name: "行内可编辑表格",
              url: "/xInlineTable",
              icon: "el-icon-tickets"
            },
            {
              name: "单元格可编辑表格",
              url: "/xEditTable",
              icon: "el-icon-edit-outline"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    to(path) {
      this.$router.push(path);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.x-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.left {
  background: #545c64;
  width: 15%;
  min-width: 280px;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-menu-vertical-demo {
  width: 100%;
  overflow: hidden;
}
.right {
  width: 85%;
}
</style>
