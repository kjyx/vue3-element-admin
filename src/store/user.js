import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'

export let login = defineStore('login', {
  state: () => {
    return {}
  },
  actions: {
    async getLogin(data) {
      const result = await getUserInfo(data)
      console.log(result)
    }
  },
  getters: {}
})
