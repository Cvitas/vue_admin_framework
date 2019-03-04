"use strict";
import Vue from 'vue'
import Vuex from 'vuex'

import LOGIN from './modules/LOGIN'
import PORTAL from './modules/PORTAL'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        LOGIN,
        PORTAL
    },
})