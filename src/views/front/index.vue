<template>
  <frontNav></frontNav>
  <router-view></router-view>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
export default {
  name: 'aa',
  data () {
    return {
      a: 0
    }
  },
  components: { frontNav },
  mounted () {},
  methods: {}
}
</script>

<style>

</style>
