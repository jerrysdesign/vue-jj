'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import App from './modules/App.vue'
import IndexView from './modules/IndexView.vue'
import TransitionView from './modules/TransitionView.vue'
import TransitionTrainingView from './modules/TransitionTrainingView.vue'
import TransformView from './modules/TransformView.vue'
import TransformTrainingView from './modules/TransformTrainingView.vue'
import AnimationView from './modules/AnimationView.vue'
import AnimationTrainingView from './modules/AnimationTrainingView.vue'
import KeyframeView from './modules/KeyframeView.vue'
import Nav1View from './modules/Nav1View.vue'
import Nav2View from './modules/Nav2View.vue'
import Nav3View from './modules/Nav3View.vue'

// install router
Vue.use(Router)

// register filters globally

// routing
var router = new Router()

router.map({
  '/': {
    name: 'index',
    component: IndexView
  },
  '/transition': {
    component: TransitionView
  },
  '/transitiontraining': {
    component: TransitionTrainingView
  },
  '/transform': {
    component: TransformView
  },
  '/transformtraining': {
    component: TransformTrainingView
  },
  '/animation': {
    component: AnimationView
  },
  '/animationtraining': {
    component: AnimationTrainingView
  },
  '/keyframe': {
    component: KeyframeView
  },
  '/nav1': {
    component: Nav1View
  },
  '/nav2': {
    component: Nav2View
  },
  '/nav3': {
    component: Nav3View
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')

// function aa(){console.log('hahah')}
