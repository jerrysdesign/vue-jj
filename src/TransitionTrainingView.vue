<template>
  <div class="page article">
    <div class="hd">
      <h1 class="page_title">JJ 教室</h1>
    </div>
    <div class="bd">
      <article class="jj_article">
        <h1>CSS Transition Transform Animation</h1>
        <section>
          <h2 class="title">Transition</h2>
          <section>
          <h3>1.2 transition training</h3>
          
          <section>
            <div class="center">
              <a class="trigger" href="#!">
                <div class="transition-1-2">
                  <em class="text">Download</em>
                  <i aria-hidden="true" class="icon-download"></i>
                </div>
              </a>
            </div>
          </section>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransformTrainingView'
}
</script>



<style lang="stylus">

section
  width: 100%
  height: 100vh
  display: table
  
  .center
    display: table-cell
    vertical-align: middle
    text-align: center

$triggerBg = #04BE02
$tipBg = rgba(#576B95,.5)

$transitionDefault
  transition: all .3s
$transitionTop
  transition: top .3s
  
.trigger
  position: relative
  background: $triggerBg
  display: inline-block
  width: 200px
  height: 60px
  border-radius: 50em
  box-shadow: 0 2px 10px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255, .2)
  color: white
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
  .trigger:hover &
    top: -100%

.icon-download
  top: 100%
  background: url("/example/images/icon-download.svg") no-repeat center center
  @extend $fullSize
  @extend $transitionTop
  .trigger:hover &
     top: 0

$hideTip
  position: absolute
  opacity: 0
  visibility: hidden
$showTip
  opacity: 1
  visibility: visible

.trigger
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
