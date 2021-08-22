import request from '@/utils/request'

export function fetchCoupon() {
  return request({
    url: 'coupons',
    method: 'get'
  })
}
