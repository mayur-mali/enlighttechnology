import Vue from 'vue'
import App from './App.vue'
import Header from './assets/componets/Header'
import Info from './assets/componets/Info'
import Services from './assets/componets/Services'
import Pricing from './assets/componets/Pricing'
import Feature from './assets/componets/Feature'
import Talent from './assets/componets/Talent'
import Articles from './assets/componets/Articles'
import Testomonial from './assets/componets/Testomonial'
import Message from './assets/componets/Message'
import FooterSide from './assets/componets/FooterSide'
import Home from './assets/componets/Views/Home'
import About from './assets/componets/Views/About'
import Project from './assets/componets/Views/Projects'
import Aboutpagehead from './assets/componets/About-Page-Head'
import AboutiFeature from './assets/componets/About-iFeature'
import AboutMoreInfo from './assets/componets/About-MoreInfo'
import AboutTeam from './assets/componets/About-Team'
import ProjectArticles from './assets/componets/Project-Articles'

import Contact from './assets/componets/Views/Contact'
import ContactInfo from './assets/componets/Contact-Info';

import Navbar from './assets/componets/Navbar'
import VueRouter from 'vue-router'


Vue.component("Navbar",Navbar)
Vue.component("Home",Home)
Vue.component("Header",Header)
Vue.component("Info",Info)
Vue.component("Services",Services)
Vue.component("Pricing",Pricing)
Vue.component("Feature",Feature)
Vue.component("Talent",Talent)
Vue.component("Articles",Articles)
Vue.component("Testomonial",Testomonial)
Vue.component("Message",Message)
Vue.component("FooterSide",FooterSide)

Vue.component("About",About)
Vue.component("Aboutpagehead",Aboutpagehead)
Vue.component("AboutiFeature",AboutiFeature)
Vue.component("AboutMoreInfo",AboutMoreInfo)
Vue.component("AboutTeam",AboutTeam)

Vue.component("Project",Project)
Vue.component("ProjectArticles",ProjectArticles)

Vue.component("Contact",Contact)
Vue.component("ContactInfo",ContactInfo)


Vue.use(VueRouter)

const routes = [
  { path:"/", component: Home},
  { path:"/about", component: About},
  { path:"/project", component: Project},
  { path:"/contact", component: Contact}
];

const router = new VueRouter({

  routes:routes,
  mode:'history'

});





new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
