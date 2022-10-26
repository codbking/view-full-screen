<template>
  <div :style="style" :class="{[fullScreenCls]:isFullScreen}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'view-full-screen',
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
    },
    fullScreenCls:{
      type: String,
      default: ''
    }
  },
  watch: {
    isFullScreen: {
      handler: function () {
        this.$nextTick(() => {
          this.updateView();
        });
      },
      immediate: true
    }
  },
  computed: {
    style() {
      if(!this.isFullScreen || this.fullScreenCls){
        return {}
      }
      return {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: '100vm',
        height:' 100vh',
      }
    }
  },

  methods: {
    updateView() {
      if(!this.parentNode){
        this.parentNode=this.$el.parentNode
      }
      if (this.isFullScreen) {
        document.body.appendChild(this.$el);
      } else {
        this.$el.remove()
        this.parentNode.appendChild(this.$el)
      }
    }
  },

  destroyed() {
    if (this.isFullScreen) {
      document.body.removeChild(this.$el);
      this.parentNode=undefined
    }
  }
};
</script>

<style scoped>

</style>
