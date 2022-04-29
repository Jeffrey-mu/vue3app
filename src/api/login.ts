import request from '../utils/request'
interface Login {
    name: string;
    psd: string
}
export const login = (data: Login) => {
    return request({
        url: '/login',
        method: 'get',
        params: data
    })
}