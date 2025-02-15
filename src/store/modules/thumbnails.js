const state = {
    thumbnails: []
};

const getters = {
    getThumbnails: state => state.thumbnails,
    getSelectedThumbnail: state => state.thumbnails.find(t => t.isSelected),
};

const actions = {
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
}

const mutations = {
    setThumbnails(state, thumbnails) {
        state.thumbnails = thumbnails;
    },
    addThumbnail(state, thumbnail) {
        state.thumbnails.push(thumbnail);
    },
    removeThumbnail(state, thumbnail) {
        state.thumbnails = state.thumbnails.filter(t => thumbnail.file.name !== t.file.name);
    },
    selectThumbnail(state, thumbnailName) {
        state.thumbnails = state.thumbnails.map(thumbnail => {
            return {
                ...thumbnail,
                isSelected: thumbnail.file.name === thumbnailName,
            };
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};