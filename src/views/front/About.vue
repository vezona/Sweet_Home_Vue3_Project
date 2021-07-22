<template>
  <div class="container">
    <h1>This is an about page</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  data () {
    return {}
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 500px;
}
</style>
