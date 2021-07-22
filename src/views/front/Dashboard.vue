<template>
  <frontNav></frontNav>
  <router-view></router-view>
  <foot></foot>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
import foot from '../../components/footer.vue'
export default {
  name: 'aa',
  data () {
    return {
      a: 0
    }
  },
  components: { frontNav, foot },
  mounted () {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
