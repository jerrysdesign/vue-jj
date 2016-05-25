<template>
  <div class="page transform">
     <div class="hd"><h1 class="page_title">JJ 教室</h1></div>
    <section class="section">
      <div class="center">
        <div class="header">
          <h1>CSS Transition Transform Animation</h1>
          <h2 class="title">Transform</h2>
          <h3>1.1 transform 介紹</h3>
        </div>
        <section class="pop">
          <p>transform 屬性可針對元素做 2D 或 3D 的轉換。如旋轉、縮放、移動或傾斜。</p>
          <ul>
            <li>transform-functions: </li>
          </ul>
          <ol>
            <li>none 不進行轉換</li>
            <li>matrix(n , n, n, n, n, n ) 定義2D 轉換，使用六個值的矩陣。</li>
            <li>matrix3d(n, n, n, n, n, n, n, n, n, n, n, n ,n ,n ,n ,n )定義3D 轉換，使用16 個值的4x4 矩陣。</li>
            <li>translate( x, y ) 定義2D 轉換。</li>
            <li>translateX( x ) 定義轉換，只是用X 軸的值。</li>
            <li>translateY( y ) 定義轉換，只是用Y 軸的值。</li>
            <li>translateZ() 定義3D 轉換，只是用Z 軸的值。</li>
            <li>translate3d( x, y, z) 定義3D 轉換。</li>
            <li>scale( x , y ) 定義2D 縮放轉換。</li>
            <li>scaleX( x , y, z) 通過設置X 軸的值來定義縮放轉換。</li>
            <li>scaleY( y ) 通過設置Y 軸的值來定義縮放轉換。</li>
            <li>scaleZ( z ) 通過設置Z 軸的值來定義3D 縮放轉換。</li>
            <li>scale3d( x , y, z) 定義3D 縮放轉換。</li>
            <li>rotate( angle ) 定義2D 旋轉，在參數中規定角度。</li>
            <li>rotateX( angle ) 定義沿著X 軸的3D 旋轉。</li>
            <li>rotateY( angle ) 定義沿著Y 軸的3D 旋轉。</li>
            <li>rotateZ( angle ) 定義沿著Z 軸的3D 旋轉。</li>
            <li>rotate3d(  x , y, z, angle) 定義3D 旋轉。</li>
            <li>skew( x-angle, y-angle ) 定義沿著X 和Y 軸的2D 傾斜轉換。</li>
            <li>skewX( angle ) 定義沿著X 軸的2D 傾斜轉換。</li>
            <li>skewY( angle ) 定義沿著Y 軸的2D 傾斜轉換。</li>
            <li>perspective( n ) 為3D 轉換元素定義透視視圖。</li>
          </ol>
        </section>

        <ul class="cube-list">
          <li class="cube-list__item"></li>
          <li class="cube-list__item"></li>
          <li class="cube-list__item"></li>
        </ul>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TransformView'
}
</script>

<style lang="stylus">

.cube-list
  text-align center
  margin 6em 0

.cube-list__item
  width 120px
  height 120px
  background #ddd
  display inline-block
  box-shadow inset 0 0 0 10px rgba(0,0,0,.2)
  &:nth-of-type(2)
    background #444
    transition transform .3s
  &:nth-of-type(2)
    &:hover
      transform scale(2)

</style>
