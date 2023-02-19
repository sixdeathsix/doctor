import jwt_decode from "jwt-decode";
import api from "../services/index";

export default {
    state() {
        return {
            user: {
                token: localStorage.getItem('token') || null,
                user_id: localStorage.getItem('user_id') || null
            }
        }
    },
    getters: {
        getUserId: (state) => state.user.user_id
    },
    mutations: {
        setToken(state, token) {
            state.user.token = token;
            localStorage.setItem('token', token);
        },

        setUserId(state, user_id) {
            state.user.user_id = user_id;
            localStorage.setItem('user_id', user_id);
        }
    },
    actions: {
        onLogin({commit}, {login, password}) {
            api.login({login, password}).then((res) => {
                let decode = jwt_decode(res);
                commit('setToken', res.access);
                commit('setUserId', decode.user_id);
            })
        },

        onLogout({ commit }) {
            commit('setToken', null);
            commit('setUserId', null);
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
        }
    }
}