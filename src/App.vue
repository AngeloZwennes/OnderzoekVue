<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goDashboard() {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style>

</style>
