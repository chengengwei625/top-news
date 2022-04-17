import Vue from 'vue'
import { NavBar, Form, Field, Button, Toast, Tabbar, TabbarItem, Icon, Tab, Tabs, Cell, List, PullRefresh, ActionSheet, Popup, Badge, Col, Row, Search, Image as VanImage, Divider, CellGroup, Tag, Dialog, DatetimePicker, Loading, Lazyload } from 'vant'
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Badge)
Vue.use(Col)
Vue.use(Row)
Vue.use(Search)
Vue.use(VanImage)
Vue.use(Divider)
Vue.use(CellGroup)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(DatetimePicker)
Vue.use(Loading)
Vue.use(Lazyload, {
  preLoad: 0.9, //屏幕宽度的百分比
  error: 'https://s1.ax1x.com/2022/04/17/LapA8H.png'
})