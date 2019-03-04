<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomePortal msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePortal from "@/components/HomePortal.vue";

export default {
  name: "home",
  components: {
      HomePortal
  }
};
</script>
