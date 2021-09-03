import axios from 'axios';

let baseUrl = 'http://music.cpengx.cn'
    // 获取轮播图的api
export function getBanner(type) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

//获取推荐歌单
export function getMusicList(limit = 20) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单的详情
export function getPlaylistDetail(id) {
    return axios.get(`${baseUrl}/Playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id) {
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}
//获取歌曲
export function searchMusic(keyword) {
    return axios.get(`${baseUrl}/search?keywords=${keyword}`)
}
//手机登录
export function phoneLogin(phone, password) {
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}
//获取用户信息
export function userDetail(uid) {
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

export default {
    getBanner,
    getMusicList,
    getPlaylistDetail,
    getLyric,
    searchMusic,
    phoneLogin,
    userDetail
}