import { createStore } from 'vuex';
import thumbnails from './modules/thumbnails';
import ui from './modules/ui'
import titles from './modules/titles'

export default createStore({
    modules: {
        thumbnails,
        ui,
        titles,
    }
});