import { createStore } from 'vuex';

export default createStore({
    state: {
        thumbnails: [],
        activeContextMenuIndex: -1,
        titles: [""],
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
        setActiveContextMenuIndex(state, index) {
            state.activeContextMenuIndex = index;
        },
        selectTitle(state, title) {
            state.titles = state.titles.map(t => {
                return {
                    ...t,
                    isSelected: t.name === title.name,
                };
            });
        },
        removeTitle(state, index) {
            state.titles = state.titles.filter((_, i) => i !== index);
        },
        addTitle(state, title) {
            state.titles.push(title);
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
        setActiveContextMenuIndex({commit}, index) {
            commit('setActiveContextMenuIndex', index);
        },
        selectTitle({commit}, title) {
            commit('selectTitle', title);
        },
        removeTitle({commit}, index) {
            commit('removeTitle', index);
        },
        addTitle({commit}, title) {
            commit('addTitle', title);
        },
    },
    getters: {
        getThumbnails: state => state.thumbnails,
        getSelectedThumbnail: state => state.thumbnails.find(t => t.isSelected),
        getActiveContextMenuIndex: state => state.activeContextMenuIndex,
        getTitles: state => state.titles,
    },
});