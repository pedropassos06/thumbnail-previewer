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
        state.thumbnails = thumbnails.map((thumbnail, index) => {
            return {
                ...thumbnail,
                isSelected: index === 0,
            }
        })
    },
    addThumbnail(state, thumbnail) {
        state.thumbnails.push(thumbnail);
        if (state.thumbnails.length === 1) {
            state.thumbnails[0].isSelected = true;
        }
    },
    removeThumbnail(state, index) {
        state.thumbnails = state.thumbnails.filter((_, i) => i !== index);
        if (state.thumbnails.length > 0) {
            state.thumbnails[0].isSelected = true;
        }
    },
    selectThumbnail(state, index) {
        state.thumbnails = state.thumbnails.map((thumbnail, i) => {
            return {
                ...thumbnail,
                isSelected: i === index,
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