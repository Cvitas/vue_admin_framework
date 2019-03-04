<template>
    <div>
        <Nav></Nav>
        <Activity></Activity>
        <portal-target name="nav" v-if="true"/>
        <portal-target name="activity" v-if="true"/>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"
    import Nav from "./home/nav.vue"
    import Activity from "./home/activity.vue"

    export default {
        name: "home-potal",
        components: {
            Nav,
            Activity
        },
        data() {
            return {
                total: 0
            }
        },
        methods: {
            ...mapActions([]),
        },
        computed: mapGetters({
            config: "config"
        }),
    }
</script>

<style scoped></style>
