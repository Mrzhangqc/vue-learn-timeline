import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import LearnLodash from '@/components/LearnLodash'
import LearnGit from '@/components/LearnGit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/learn-lodash',
      name: 'learn-lodash',
      component: LearnLodash
    },
    {
      path: '/learn-git',
      name: 'learn-git',
      component: LearnGit
    }
  ]
})
