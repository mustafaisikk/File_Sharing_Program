<script>
import Header from '@/components/Header'
export default{
  components: {
    Header
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<style src="../static/style.css">
</style>
