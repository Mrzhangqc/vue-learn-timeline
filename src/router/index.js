import Vue from 'vue'
import Router from 'vue-router'

import LearnTimeLine from '@/components/views/LearnTimeLine'
import LearnLodash from '@/components/views/LearnLodash'
import LearnGit from '@/components/views/LearnGit'
import LearnNgnix from '@/components/views/LearnNgnix'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: LearnTimeLine
    },
    {
      path: '/learn-git',
      name: 'learn-git',
      meta: {
        title: 'Git学习'
      },
      component: LearnGit
    },
    {
      path: '/learn-lodash',
      name: 'learn-lodash',
      meta: {
        title: 'Lodash学习'
      },
      component: LearnLodash
    },
    {
      path: '/learn-ngnix',
      name: 'learn-ngnix',
      meta: {
        title: 'Ngnix学习'
      },
      component: LearnNgnix
    }
  ]
})
