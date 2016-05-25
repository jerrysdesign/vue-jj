<template>
  <div class="page animation">
    <h1 class="page_title">JJ 教室</h1>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Animation</h2>
          <h3>3.1 animation 介紹</h3>
          <section class="pop">
            <p>animation 屬性是一個速寫屬性，用於設置六個動畫屬性：</p>
            <ul>
              <li>animation 屬性是一個速寫屬性，用於設置六個動畫屬性：</li>
            </ul>
            <ol>
              <li>animation-name</li>
              <li>animation-duration</li>
              <li>animation-timing-function</li>
              <li>animation-delay</li>
              <li>animation-iteration-count</li>
              <li>animation-direction</li>
            </ol>
          </section>
        </div>
        
        <div class="animation-wrapper">
          <div class="animation-1"></div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AnimationView'
}
</script>

<style lang="stylus">

.animation-wrapper
  height: 100px
  width: 100px
  margin: 4em auto
  .animation-1
    display: block
    height: 100%
    width: 100%
    background-color: red
    transform: scale(.5)

  &:hover
    .animation-1
      animation-name: scale-up
      animation-duration: 2s
      // animation-delay: 1s
      // animation-iteration-count: infinite 
      // animation-direction: alternate //逆轉
      animation-fill-mode: forwards

@keyframes scale-up
  0%
    transform: scale(0)
    // transform: scale(2)
    // background-color: black
  100%
    transform: scale(1)

</style>
