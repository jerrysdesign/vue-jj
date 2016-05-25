<template>
  <div class="page" transition="app">
    <div class="hd">
        <h1 class="page_title">JJ 教室</h1>
        <p class="page_desc">transition & transforms & animation</p>
    </div>
    <div class="bd">
      <Grid :items="items"></Grid>
    </div>
</div>
</template>

<script>

import Grid from './../../src/Grid.vue'

export default {

  name: 'IndexView',

  components: {
    Grid
  },

  data () {
    return {
      items: [{
        link: 'transition',
        no: '1.1',
        text: 'transition'
      }, {
        link: 'transitiontraining',
        no: '1.2',
        text: 'transition 應用'
      }, {
        link: 'transform',
        no: '2.1',
        text: 'transform'
      }, {
        link: 'transformtraining',
        no: '2.2',
        text: 'transform 應用'
      }, {
        link: 'animation',
        no: '3.1',
        text: 'animations'
      }, {
        link: 'animationtraining',
        no: '3.2',
        text: 'animation 應用'
      }, {
        link: 'keyframe',
        no: '4.1',
        text: 'keyframes'
      }, {
        link: 'nav1',
        no: '5.1',
        text: 'Nav-I'
      }, {
        link: 'nav2',
        no: '5.2',
        text: 'Nav-II  '
      }, {
        link: 'nav3',
        no: '5.3',
        text: 'Nav-III  '
      }]
    }
  },

  route: {
    data ({ to }) {
    }
  },

  created () {
    // store.on('topstories-updated', this.update)
  },

  destroyed () {
    // store.removeListener('topstories-updated', this.update)
  },

  methods: {
    update () {
      // store.fetchItemsByPage(this.page).then(items => {
      //   this.items = items
      // })
    }
  },

  filters: {
  }
}
</script>

<style lang="stylus">


</style>
