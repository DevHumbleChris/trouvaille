import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initializeApp } from 'firebase/app'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

library.add(fas, far, fab)

const firebaseConfig = {
  apiKey: 'AIzaSyB5YlhCr3ZAmZRGSxUpPlohZFG5Iuac0ro',
  authDomain: 'trouvaille-ke.firebaseapp.com',
  projectId: 'trouvaille-ke',
  storageBucket: 'trouvaille-ke.appspot.com',
  messagingSenderId: '20100828721',
  appId: '1:20100828721:web:924bff082eddb9a2078f10'
}

initializeApp(firebaseConfig)

let app
const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (!app) {
    createApp(App)
      .component('FontAwesomeIcon', FontAwesomeIcon)
      .use(store)
      .use(router)
      .mount('#app')
  }
})
