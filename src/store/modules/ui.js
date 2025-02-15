const state = {
    activeContextMenuIndex: -1,
};

const getters = {
    getActiveContextMenuIndex: state => state.activeContextMenuIndex,
};

const actions = {
    setActiveContextMenuIndex({commit}, index) {
        commit('setActiveContextMenuIndex', index);
    },
};

const mutations = {
    setActiveContextMenuIndex(state, index) {
        state.activeContextMenuIndex = index;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}