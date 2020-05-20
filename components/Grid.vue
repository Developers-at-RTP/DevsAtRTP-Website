<template>
  <div v-editable="blok" class="grid">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component | dashify"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped lang="scss">

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .column {
    flex: 1;
  }
}

</style>
