import request from '../utils/request'
export const upload = (data) => {
    return request({
        url: '/upload',
        method: 'post',
        data
    })
}