<template>
  <div class="page transformtraining">
     <div class="hd"><h1 class="page_title">JJ 教室</h1></div>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Transform</h2>
          <h3>1.1 transform 練習</h3>
        </div>
        
        <button class="transform-trigger">
          Menu <span></span>
        </button>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TransformTrainingView'
}
</script>

<style lang="stylus">

transform-top()
  transform: translateX(-2px) translateY(5px) rotate(-45deg)
transform-bottom()
  transform: translateX(-2px) translateY(-5px) rotate(45deg)

button()
  position: relative
  background: #444
  width: 120px
  height: 120px
  border: none
  border-radius: 50%
  overflow: hidden
  text-indent: 100%
  color: transparent
  white-space: nowrap
  cursor: pointer
  margin-top: 5em

.transform-trigger
  button()
  // arrow
  span
    top: calc(50% - 2px)
    left: calc(50% - 22px)
    transition: transform .3s
    &:before
      bottom: 12px
    &:after
      top: 12px
span
  .transform-trigger:hover &
    transform: rotate(180deg)
    &:before
      width 50%
      transform-top()
    &:after
      width 50%
      transform-bottom()

$arrow
  position: absolute
  width: 44px
  height: 4px
  border-radius: 4px
  background: white
  
.transform-trigger
  span
    @extend $arrow
    &:before
    &:after
      content: ''
      left: 0
      transition: transform .3s, width .3s
      @extend $arrow

</style>
