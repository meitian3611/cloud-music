// top-header.vue文件的hook
import { reactive, ref } from 'vue'

export default () => {
    type IArrayInfo = {
        name: string, path: string, [propName: string]: any
    }
    interface IdataInfo {
        listIndex: number,
        subListIndex: number,
        topList: IArrayInfo[],
        subList: IArrayInfo[]
    }


    const data = reactive<IdataInfo>({
        listIndex: 0,
        subListIndex: 0,
        topList: [{
            name: '发现音乐',
            path: '/#',
        },
        {
            name: '我的音乐',
            path: '/#'
        },
        {
            name: '关注',
            path: '/#'
        },
        {
            name: '商城',
            path: '/#'
        },
        {
            name: '音乐人',
            path: '/#'
        },
        {
            name: '云推歌',
            path: '/#'
        },
        {
            name: '下载客户端',
            path: '/#'
        }],
        subList: [
            {
                name: '推荐',
                path: '/#'
            },
            {
                name: '排行榜',
                path: '/#'
            },
            {
                name: '歌单',
                path: '/#'
            },
            {
                name: '主播电台',
                path: '/#'
            },
            {
                name: '歌手',
                path: '/#'
            },
            {
                name: '新碟上架',
                path: '/#'
            }
        ]
    }
    )

    const listNavClick = (item: any, index: number) => {
        data.listIndex = index
    }


    const subListClick = (item: any, index: number) => {
        data.subListIndex = index
    }
    return {
        data, listNavClick, subListClick
    }
}
