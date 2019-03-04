<template>
    <div>
        <portal to="nav" :order="2">
            nav
        </portal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"

    export default {
        name: "nav",
        data() {
            return {
                total: 0
            }
        },
        methods: {
            ...mapActions([]),
        },
        computed: mapGetters({}),
    }
</script>

<style scoped>

</style>