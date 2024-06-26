import axios from '@/service/axios'
import * as T from './types'

const home: T.IManageListApi = {
    getSearchHotList() {
        return axios.get('/search/hot')
    }
}

export default home
