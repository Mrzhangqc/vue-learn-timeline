import Vue from 'vue'
import Router from 'vue-router'
import LearnLodash from '@/components/views/LearnLodash'
import LearnGit from '@/components/views/LearnGit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LearnLodash',
      component: LearnLodash
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
