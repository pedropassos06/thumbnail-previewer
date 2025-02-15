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
    deleteThumbnail({commit}, index) {
        commit('removeThumbnail', index);
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
    removeThumbnail(state, index) {
        state.thumbnails = state.thumbnails.filter((_, i) => i !== index);
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