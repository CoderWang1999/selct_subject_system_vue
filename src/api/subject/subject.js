import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-subject/subject/list',
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
    url: '/api/blade-subject/subject/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-subject/subject/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-subject/subject/save',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-subject/subject/update',
    method: 'post',
    data: row
  })
}

export const select = (id) => {
  return request({
    url: '/api/blade-subject/subject/select',
    method: 'post',
    params: {
      id
    }
  })
}

