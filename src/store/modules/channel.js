const state = {
    channelName: '',
    channelProfilePic: '',
};

const getters = {
    getChannelName: state => state.channelName,
    getChannelProfilePic: state => state.channelProfilePic,
};

const actions = {
    setChannelName({ commit }, channelName) {
        commit('setChannelName', channelName);
    },
    setChannelProfilePic({ commit }, channelProfilePic) {
        commit('setChannelProfilePic', channelProfilePic);
    },
};

const mutations = {
    setChannelName: (state, channelName) => (state.channelName = channelName),
    setChannelProfilePic: (state, channelProfilePic) => (state.channelProfilePic = channelProfilePic),
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};