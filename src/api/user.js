import request from '@/utils/request'

export const getUserInfo = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
