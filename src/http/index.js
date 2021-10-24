import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

// Define prefix default to URL (api address)
http.options.root = 'http://localhost:5000/'

export { http }
