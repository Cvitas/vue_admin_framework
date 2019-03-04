import * as type from "@/constants/mutation-types"

const state = {
    portalConfig: {
        home: {
            menus: [{
                componetName: "nav",
                componetId: "navId",
                show: true
            }]
        }
    }
}
const getters = {
    portalConfig: state => state.portalConfig
}
const mutations = {
    [type.CONFIG](state, portalConfig) {
        state.portalConfig = portalConfig
    }
}
const actions = {
    setConfig({ commit }, portalConfig) {
        commit(type.CONFIG, { ...state.portalConfig, ...portalConfig })
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}