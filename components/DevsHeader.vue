<template>
  <header class="Devs_RTP">
    <!-- <Menu/> -->
    <img src="~/assets/imgs/DevsLogoW.svg" alt="Developers at RTP logo">
    <p class="mission">We focus on engaging, inspiring, and supporting the tech community in the RTP area</p>
  </header>
</template>

<script>
import Menu from "~/components/Menu.vue";

export default {
  name: 'Header',
  components: {
    Menu
  }
}
</script>

<style lang='scss'>
  .Devs_RTP{
    margin: 1em auto 3em;
    
    img {
      max-width: 60vw;
      margin-bottom: 1em;
    }
  }
  .mission{
    margin: 1em;
  }
</style>
