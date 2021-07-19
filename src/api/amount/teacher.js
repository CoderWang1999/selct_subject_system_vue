import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-amount/teacher/page',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const getDetail = (id) => {
  return request({
    url: '/api/blade-amount/teacher/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-amount/teacher/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (params) => {
  return request({
    url: '/api/blade-amount/teacher/save',
    method: 'post',
    params: {
      ...params,
    }
  })
}

export const update = (params) => {
  return request({
    url: '/api/blade-amount/teacher/update',
    method: 'post',
    params: {
      ...params,
    }
  })
}

