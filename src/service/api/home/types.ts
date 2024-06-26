// 此文件定义接口类型，接口约束
export interface IGetListParams {
    // size: number
    // listType: string
    // [propName: string]: any
}
export interface IManageListApi {
    getSearchHotList: () => Promise<any>
}