<template>
  <div class="page transition">
    <div class="hd"><h1 class="page_title">JJ 教室</h1></div>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Animation</h2>
          <h3>3.2 animation 應用</h3>
        </div>
        
          <div class="loder border"></div>
          <div class="loder bar"></div>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'AnimationView'
}
;
</script>

<style lang="stylus">
$colorPrimary2 = hsl(260,67.5,69.8)
$colorPrimary = alpha(hsl(260,67.5,69.8),20%)

.loder
  margin: 50px auto
  display: block

.border
  width: 0
  height: 0
  border: 20px solid $colorPrimary
  border-top-color: $colorPrimary2
  box-shadow: 0 0 0 1px $colorPrimary
  border-radius: 100%
  animation: borderloader infinite 0.8s linear

@keyframes borderloader
  0%
    border-color: $colorPrimary
    border-top-color: $colorPrimary2

  25%
    border-color: $colorPrimary
    border-right-color: $colorPrimary2

  50%
    border-color: $colorPrimary
    border-bottom-color: $colorPrimary2

  75%
    border-color: $colorPrimary
    border-left-color: $colorPrimary2

.bar
  width: 100px
  height: 10px
  background: $colorPrimary
  border-right: 90px solid $colorPrimary2
  border-left: 0px solid $colorPrimary2
  box-shadow: 0 0 0 1px $colorPrimary
  animation: barloader infinite 1.5s linear

@keyframes barloader
  50%
    border-left: 90px solid $colorPrimary
    border-right: 0px solid $colorPrimary

</style>
