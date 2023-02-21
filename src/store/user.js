import jwt_decode from "jwt-decode";
import {$axios} from "../services/index";
import userapi from "../services/user";
import {router} from "../router/index.js";

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
        onLogin({commit}, {username, password}) {
            return userapi.login({username, password}).then((res) => {
                commit('setToken', res.data.access);
                commit('setUserId', res.data.user_id);
                $axios.defaults.headers['authorization'] = `Bearer ${res.data.access}`;
                router.push({name: 'home'});
            });
        },

        onLogout({ commit }) {
            commit('setToken', null);
            commit('setUserId', null);
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            router.push({name: 'signin'});
            delete $axios.defaults.headers['authorization'];
        }
    }
}