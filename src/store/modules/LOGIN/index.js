import * as type from "@/constants/mutation-types"

const state = {
    portal: {},
}
const getters = {
    portal: state => state.portal,
}
const mutations = {
    [type.CONFIG](state, portal) {
        state.portal = portal
    }
}
const actions = {
    getConfig({ commit }, portal) {
        commit(type.CONFIG, { ...state.portal, ...portal })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
