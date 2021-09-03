import { createStore } from 'vuex'
// import { getLyric } from '@/api/index.js'
// import { phoneLogin } from '@/api/index.js'
import api from '@/api/index.js'
export default createStore({
    state: {
        playlist: [{
            name: '蛋姐的翻唱',
            id: 1444647610,
            al: {
                id: 88192165,
                name: "蛋姐的翻唱",
                pic: 109951164918744180,
                picUrl: "http://p4.music.126.net/ycE1SaCDYZLtfp3p-0lsKg==/109951164918744182.jpg",
                pic_str: "109951164918744182"
            }
        }],
        playCurrentIndex: 0,
        lyric: '',
        user: {
            isLogin: true,
            userDetail: {},
            account: {}
        },
        paused: true
    },
    getters: {
        lyricList: function(state) {
            let arr = state.lyric.split(/\n/igs).map((item, i) => {
                let min = item.splice(1, 3);
                let sec = item.splice(4, 6);
                let mill = item.splice(7, 10);
                return {
                    min,
                    sec,
                    mill,
                    lyric: item.splice(12, item.length),
                    content: item,
                    time: parseInt(mill) + parseInt(sec) * 1000 + parseInt(min) * 60 * 1000
                }
            })
            console.log(arr);
            return arr
        }
    },
    mutations: {
        setPlaylist(state, value) {
            state.playlist = value
        },
        pushPlaylist(state, value) {
            state.playlist.push(value)
        },
        setPlayIndex(state, value) {
            state.playCurrentIndex = value
        },
        setLyric(state, value) {
            state.lyric = value
        },
        setUser(state, value) {
            state.user = value
        },
        setPuased(state, value) {
            state.paused = !state.paused
        }
    },
    actions: {
        async reqLyric(content, payload) {
            // console.log(payload);
            let result = await api.getLyric(payload.id)
                // console.log(result);
            content.commit(`setLyric`, result.data.lrc)
        },
        async phoneLogin(content, payload) {
            let result = await api.phoneLogin(payload.phone, payload.password)
            if (result.data.code == 200) {
                content.state.user.isLogin = true
                content.state.user.account = result.data.account

                let userDetail = await api.userDetail(result.data.account.id)
                content.state.user.userDetail = userDetail.data
                localStorage.userData = JSON.stringify(content.state.user)
                content.commit('setUser', content.state.user)
            }
            return result
                // console.log(result);
        }
    },
    modules: {}
})