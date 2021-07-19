import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-student/student/page',
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
    url: '/api/blade-student/student/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const update = (params) => {
  return request({
    url: '/api/blade-student/student/save',
    method: 'post',
    params: {
      teacherId: params,
    }
  })
}

