# view-full-screen


一个用于将任意组件放大到铺满全屏，不受父控件样式约束的vue组件

## Project setup
```
npm i view-full-screen

```

## Project use
```
import viewFullScreen from "view-full-screen"

Vue.use(viewFullScreen)
```

## vue
```vue
<view-full-screen :is-full-screen="isFullScreen"  class="right">
<!--your code-->

</view-full-screen>

data() {
 return {
    isFullScreen: false
    }
},

```




[演示地址](https://codbking.github.io/view-full-screen)


