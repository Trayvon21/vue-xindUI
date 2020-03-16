import Vue from "vue";
// 基本
import XindButton from "../components/basic/xindButton/XindButton";
Vue.component("xButton", XindButton);
// 导航
import XindTags from "../components/xindTags/XindTags";
Vue.component("xTags", XindTags);
import XindSelectTags from "../components/xindTags/XindSelectTags";
Vue.component("xSelectTags", XindSelectTags);
import XindBackTop from "../components/xindBackTop/XindBackTop";
Vue.component("xBackTop", XindBackTop);
// 表单
import XindRadio from "../components/xindRadio/XindRadio";
Vue.component("xindRadio", XindRadio);
// 图表
import xindTrend from "../components/chart/xindTrend/XindTrend";
Vue.component("xindTrend", xindTrend);
import XindProgress from "../components/chart/xindProgress/XindProgress";
Vue.component("xProgress", XindProgress);
import XindImagePreview from "../components/chart/xindImagePreview/XindImagePreview";
Vue.component("xImagePreview", XindImagePreview);
import XindNoticeIcon from "../components/chart/xindNoticeIcon/XindNoticeIcon";
Vue.component("xNoticeIcon", XindNoticeIcon);
// 功能
import XindLock from "../components/career/XindLock";
Vue.component("xLock", XindLock);
import XindNoAuth from "../components/career/XindNoAuth";
Vue.component("xNoAuth", XindNoAuth);
import XindNoFind from "../components/career/XindNoFind";
Vue.component("xNoFind", XindNoFind);
import XindServerErr from "../components/career/XindServerErr";
Vue.component("xServerErr", XindServerErr);
// 复合
import xindLogin from "../components/xindLogin/XindLogin";
Vue.component("xindLogin", xindLogin);
import xindPhoneLogin from "../components/xindLogin/XindPhoneLogin";
Vue.component("xindPhoneLogin", xindPhoneLogin);
