import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Start from '@/components/Start'
import GameMap from '@/components/GameMap'
import Question from '@/components/Question'
import Histogram from '@/components/Histogram'
import RadarMap from '@/components/RadarMap'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:'Hello',
    //   component:Hello
    // },
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/gameMap',
      name: 'gameMap',
      component: GameMap
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/histogram',
      name: 'histogram',
      component: Histogram
    },
    {
      path: '/radarMap',
      name: 'radarMap',
      component: RadarMap
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    }
  ]
})
