<template>
  <div class="page transition">
    <div class="hd"><h1 class="page_title">JJ 教室</h1></div>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Transition</h2>
          <h3>1.1 transition 介紹</h3>
          <section class="pop">
            <p>透過 transition，使元素從一種樣式變換為另一種樣式</p>
            <ul>
              <li>transition 速寫屬性，用於在一個屬性中設置四個 transition 屬性。</li>
            </ul>
            <ol>
              <li>transition-property 規定應用 transition 的CSS 屬性的名稱。</li>
              <li>transition-duration 定義過 transition 果花費的時間。</li>
              <li>transition-timing-function 規定 transition 效果的時間曲線。
                <ul>
                  <li>linear  規定以相同速度開始至結束的過渡效果（等於cubic-bezier(0,0,1,1)）。</li>
                  <li>ease  規定慢速開始，然後變快，然後慢速結束的過渡效果（cubic-bezier(0.25,0.1,0.25,1)）。</li>
                  <li>ease-in 規定以慢速開始的過渡效果（等於cubic-bezier(0.42,0,1,1)）。</li>
                  <li>ease-out  規定以慢速結束的過渡效果（等於cubic-bezier(0,0,0.58,1)）。</li>
                  <li>ease-in-out 規定以慢速開始和結束的過渡效果（等於cubic-bezier(0.42,0,0.58,1)）。</li>
                  <li>cubic-bezier( n , n , n , n ) 在cubic-bezier 函數中定義自己的值。可能的值是0 至1 之間的數值。</li>
                </ul>
              <li>transition-delay 規定 transition 效果何時開始。</li>
            </ol>
          </section>
        </div>
        <div class="transition-1-1"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TransitionView'
}
</script>

<style lang="stylus">
.page
  width: 100%
  height: 100vh
.section
  width: 100%
  display: table
  .center
    display: table-cell
    vertical-align: middle
    text-align: center
.header
  text-align: left
  padding-left: 5%
  margin-left: 20%
  margin-top: 5em
  border-left: 4px solid #3CC51F
  h1
    font-size: 17px
    font-weight:400
    margin-bottom: .75em
  h2
    font-size: 16px
    font-weight:400
    margin-bottom: .3em
  h3
    font-weight:400
    font-size: 15px
.pop
  color: #61749B
  font-size: .8em
  margin-top: 1em
  margin-bottom: 2em
  ul
    margin-top: .5em
    margin-bottom: .5em
  li
    margin-left: 2em
.transition-1-1
  display: block
  width: 100px
  height: 100px
  background: #444
  margin: 6em auto
  transition: all .5s
  &:hover
    width: 200px
    height: 200px
    background: red
    transition: all 2s

</style>
