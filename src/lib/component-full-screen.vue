<template>
  <div :class="{ 'full-screen': isFullScreen }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'component-full-screen',
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
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

  methods: {
    updateView() {
      if (this.isFullScreen) {
        document.body.appendChild(this.$el);
      } else {
        this.$parent.$parent.$el.appendChild(this.$el);
      }
    }
  },

  destroyed() {
    if (this.isFullScreen) {
      document.body.removeChild(this.$el);
    }
  }
};
</script>

<style scoped>
.full-screen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vm;
  height: 100vh;
}
</style>
