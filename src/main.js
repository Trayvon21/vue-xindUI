import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element-ui
import {
  Icon,
  Input,
  Message,
  Button,
  Backtop,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Aside,
  Main
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './global'
Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Input)
Vue.use(Button)
Vue.use(Backtop)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.prototype.$message = Message;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')