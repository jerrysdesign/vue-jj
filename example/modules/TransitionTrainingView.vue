<template>
  <div class="page transitiontraining">
     <div class="hd"><h1 class="page_title">JJ 教室</h1></div>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Transition</h2>
          <h3>1.2 transition training</h3>
        </div>

        <a class="transition-trigger" href="#!">
          <div class="transition-1-2">
            <em class="text">Download</em>
            <span class="icon-download"></span>
            <!-- <img class="icon-download" src="/example/images/icon-download.svg" /> -->
          </div>
        </a>

      </div>
    </section>
  </div>
</template>

<script>
// import icon_nav_button from './images/icon-download-01.png';
export default {
  name: 'TransformTrainingView'
}
</script>



<style lang="stylus">

$triggerBg = #04BE02
$tipBg = rgba(#576B95,.5)

$transitionDefault
  transition: all .3s
$transitionTop
  transition: top .3s
  
.transition-trigger
  position: relative
  background: $triggerBg
  display: inline-block
  width: 200px
  height: 60px
  border-radius: 50em
  box-shadow: 0 2px 10px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)
  color: white
  margin-top: 10em
  @extend $transitionDefault
  &:hover
    box-shadow: 0 2px 2px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)

$fullSize
  position: absolute
  width: 100%
  height: 100%
  left: 0

.transition-1-2
  overflow: hidden
  @extend $fullSize


.text
  top: 0
  line-height: 60px
  @extend $fullSize
  @extend $transitionTop
  .transition-trigger:hover &
    top: -100%

.icon-download
  top: 100%
  background: url('/example/images/icon-download-01.png') no-repeat center center
  @extend $fullSize
  @extend $transitionTop
  z-index: 999
  .transition-trigger:hover &
    top: 0

$hideTip
  position: absolute
  opacity: 0
  visibility: hidden
$showTip
  opacity: 1
  visibility: visible

.transition-trigger
  &:before
    content: 'File Size: 1024Mb'
    width: 140px
    height: 60px
    line-height: 60px
    background: $tipBg
    border-radius: .25em
    bottom: 90px
    left: calc(50% - 70px)

  &:after
    content: ''
    width: 0
    height: 0
    border: 10px solid transparent
    border-top-color: $tipBg
    left: calc(50% - 10px)
    bottom: 70px

  &:before
    @extend $hideTip
    @extend $transitionDefault
    
  &:after
    @extend $hideTip
    @extend $transitionDefault
  
  &:hover
    &:before
      @extend $showTip
    &:after
      @extend $showTip
    &:before
      bottom: 80px
    &:after
      bottom: 60px

</style>
