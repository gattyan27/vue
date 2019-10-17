require('./bootstrap');

import Vue from 'vue';
import FormComponent from './components/FormComponent.vue';
import TimelineComponent from './components/TimelineComponent.vue';

Vue.component('form-component', FormComponent);
Vue.component('timeline-component', TimelineComponent);

const app = new Vue({
    el: '#app'
});