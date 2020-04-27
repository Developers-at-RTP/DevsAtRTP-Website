<template>
  <div v-editable="blok" class="list">
    <component :key="blok._uid" v-for="blok in blok.items" :blok="blok" :is="blok.component | dashify"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.list {
  display:flex;
  flex-direction: column;
}
</style>