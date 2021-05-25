<template>
  <div id='home'>
   <nav-bar class='home-nav'>
      <div slot="center">购物街</div>
   </nav-bar>
   <home-swiper :banners='banners'/>
   <recommend-view :recommends='recommends'/>
   <feature-view/>
   <tab-control class='tab-control' :titles="['流行','新款','精选']"/>

  <ul>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
   <li>11</li>
    
  </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/nav/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import TabControl from '../../components/content/tabControl/TabControl'

import {getHomeMultidata} from '../../network/home.js'
export default {
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  created() {
    getHomeMultidata().then(res=>{
      //当函数调用完成后，内存将会被释放，得到的res没有被引用就会被回收，所以用一个变量保存
      console.log(res)
      this.banners = res.banner.list
      this.recommends = res.recommend.list
    })
  },
};
</script>

<style>
#home {
  /* position: relative; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
