<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index.js";
export default {
  props:{
    banners:Array,
    default(){
      return []
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style></style>
