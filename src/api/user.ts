import request from '../utils/request'

export const user = (data: any) => {
    return request({
        url: '/user',
        method: 'post',
        data
    })
}