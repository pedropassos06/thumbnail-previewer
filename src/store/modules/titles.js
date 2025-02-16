const state = {
    titles: [{
        value: '',
        isSelected: false,
    }],
};

const getters = {
    getTitles: state => state.titles,
};

const actions = {
    selectTitle({commit}, index) {
        commit('selectTitle', index);
    },
    removeTitle({commit}, index) {
        commit('removeTitle', index);
    },
    addTitle({commit}, title) {
        commit('addTitle', title);
    },
};

const mutations = {
    selectTitle(state, index) {
        state.titles = state.titles.map((t, i) => {
            return {
                ...t,
                isSelected: i === index,
            };
        });
    },
    removeTitle(state, index) {
        state.titles = state.titles.filter((_, i) => i !== index)
    },
    addTitle(state, title) {
        state.titles.push(title)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}