import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { FontAwesomeIcon } from '@/components/icons/fontAwesome'
import ConfirmationModal from './components/UI/ConfirmationModal.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.component('ConfirmationModal', ConfirmationModal)
app.use(store);
app.use(router)
app.mount('#app')
