import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import List from '~/components/List.vue'
import HomeSection from '~/components/HomeSection.vue'
import HalfSection from '~/components/HalfSection.vue'
import BaseSection from '~/components/BaseSection.vue'
import SimpleGirdItem from '~/components/SimpleGridItem.vue'
import Footer from '~/components/DevsFooter.vue'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('half-section', HalfSection)
Vue.component('home-section', HomeSection)
Vue.component('base-section', BaseSection)
Vue.component('simple-grid-item', SimpleGirdItem)
Vue.component('list', List)
Vue.component('devs-footer', Footer)
