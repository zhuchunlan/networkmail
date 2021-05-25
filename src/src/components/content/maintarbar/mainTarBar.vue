<template>
  <div>
    <tar-bar>
      <tar-bar-item link='/home'>
        <img slot='item-icon' src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot='item-active-icon' src="../../../assets/img/tabbar/home_active.svg" alt="">
        <div slot='item-text'>首页</div>
      </tar-bar-item>
      <tar-bar-item link='/category'>
        <img slot='item-icon' src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot='item-active-icon' src="../../../assets/img/tabbar/category_active.svg" alt="">
        <div slot='item-text'>分类</div>
      </tar-bar-item>
      <tar-bar-item link='/cart'>
        <img slot='item-icon' src="../../../assets/img/tabbar/cart.svg" alt="">
        <img slot='item-active-icon' src="../../../assets/img/tabbar/cart_active.svg" alt="">
        <div slot='item-text'>购物车</div>
      </tar-bar-item>
      <tar-bar-item link='/profile'>
        <img slot='item-icon' src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot='item-active-icon' src="../../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot='item-text'>我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from '../../common/tabbar/TarBar'
import TarBarItem from '../../common/tabbar/TarBarItem'
export default {
  components:{
    TarBar,
    TarBarItem
  }
}
</script>

<style>
  
</style>
