<template>
  <div class="loading-wrap d-flex justify-content-center align-items-center">
    <div class="spinner-border" role="status">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style>
.loading-wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
}
.spinner-border{
  width: 6rem;
  height: 6rem;
}

</style>
