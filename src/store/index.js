import { createStore } from 'vuex';

export default createStore({
    state: {
        thumbnails: [],
    },
    mutations: {
        setThumbnails(state, thumbnails) {
            state.thumbnails = thumbnails;
        },
        addThumbnail(state, thumbnail) {
            state.thumbnails.push(thumbnail);
        },
        removeThumbnail(state, thumbnailName) {
            state.thumbnails = state.thumbnails.filter(thumbnail => thumbnail.name !== thumbnailName);
        },
        selectThumbnail(state, thumbnailName) {
            state.thumbnails.forEach(thumbnail => {
                thumbnail.isSelected = thumbnail.name === thumbnailName;
            });
        },
    },
    actions: {
        updateThumbnails({commit}, thumbnails) {
            commit('setThumbnails', thumbnails);
        },
        addThumbnail({commit}, thumbnail) {
            commit('addThumbnail', thumbnail);
        },
        deleteThumbnail({commit}, thumbnailName) {
            commit('removeThumbnail', thumbnailName);
        },
        selectThumbnail({commit}, thumbnailName) {
            commit('selectThumbnail', thumbnailName);
        },
    },
    getters: {
        getThumbnails: state => state.thumbnails,
    },
});