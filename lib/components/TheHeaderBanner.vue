<template>
  <div class="banner">
    <div class="container">
      <div class="center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderBanner',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.banner
  cursor default
  height $bannerHeight
  border-bottom 1px solid $borderColor
  color $headerTitleColor
  .container
    height 100%
    display flex
    align-items center
    justify-content center
    .center
      z-index 19
      text-align center

</style>
