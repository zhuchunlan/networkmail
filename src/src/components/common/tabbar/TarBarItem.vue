<template>
   <div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // isActive:false
    }
  },
  props:{
    link:String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.link)
    }
  },
}
</script>


<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #ff5777;
}
</style>

