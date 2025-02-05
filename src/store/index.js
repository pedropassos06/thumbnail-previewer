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
        removeThumbnail(state, thumbnail) {
            state.thumbnails = state.thumbnails.filter(t => t.file.name !== thumbnail.file.name);
        },
        selectThumbnail(state, thumbnailName) {
            state.thumbnails = state.thumbnails.map(thumbnail => {
                return {
                    ...thumbnail,
                    isSelected: thumbnail.file.name === thumbnailName,
                };
            });
        },
    },
    actions: {
        updateThumbnails({commit}, thumbnails) {
            commit('setThumbnails', thumbnails);
        },
        addThumbnails({commit}, thumbnails) {
            thumbnails.forEach(thumbnail => {
                commit('addThumbnail', thumbnail);
            });
        },
        deleteThumbnail({commit}, thumbnail) {
            commit('removeThumbnail', thumbnail);
        },
        selectThumbnail({commit}, thumbnailName) {
            commit('selectThumbnail', thumbnailName);
        },
    },
    getters: {
        getThumbnails: state => state.thumbnails,
    },
});