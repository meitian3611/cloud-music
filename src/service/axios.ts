import axios from 'axios'

// 设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 0
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return error
    }
)

// 响应拦截 对异常信息做弹窗展示之类
axios.interceptors.response.use((res) => {
    // if (res.data.code != 200) {
    //     ElMessage.warning(res.data.msg)
    // }
    return res
}, (error) => {
    return error
})

interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?: string
}
interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>
    post<T>(url: string, params?: unknown): Promise<ResType<T>>
    // upload<T>(url: string, params: unknown): Promise<ResType<T>>
    // download(url: string): void
}
const service: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then((res) => {
                resolve(res?.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
}
export default service