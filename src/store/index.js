import { createStore } from 'vuex';

export default createStore({
    state: {
        files: [],
    },
    mutations: {
        setFiles(state, files) {
            state.files = files;
        },
        clearFiles(state) {
            state.files = [];
        },
    },
    actions: {
        updateFiles({ commit }, files) {
            commit('setFiles', files);
        },
        resetFiles({ commit }) {
            commit('clearFiles');
        },
    },
    getters: {
        getFiles: state => state.files,
    },
});