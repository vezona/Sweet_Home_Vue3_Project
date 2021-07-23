<template>
  <div class="tabWrap mb-5">
    <ul class="nav nav-tabs text-center">
        <li class="nav-item col-4" v-for="(i, index) in tabs" :key="i.index">
        <p class="tab"
            :class="{ active: tabIndex === index }">
            {{ i }}
        </p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tab-index'],
  data () {
    return {
      tabs: ['購物車', '填寫資料', '完成訂單']
    }
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>

.tab {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.tab.active {
  border-bottom: 4px solid #2b6d7e;
  // background-color: #2b6d7e;
  color: #2b6d7e;
  font-weight: bold;
}

.tabContent {
  height: 400px;
  background-color: rgba(43, 109, 126, 0.1);
}

</style>
