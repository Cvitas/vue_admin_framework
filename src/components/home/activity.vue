<template>
    <div>
        <portal to="activity" :order="2">
            activity
        </portal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"

    export default {
        name: "activity",
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