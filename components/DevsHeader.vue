<template>
  <header class="Devs_RTP">
    <!-- <Menu/> -->
    <img src="~/assets/DevsLogo.svg" alt="Developers at RTP logo">
    <p class="mission">Devs@RTP is a group focused on engaging, inspiring, and supporting the tech community in the RTP area.</p>
  </header>
</template>

<script>
import Menu from "~/components/Menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang='scss'>
  .Devs_RTP{
    margin: 3em auto;
    
    img {
      max-width: 80vw
    }
  }
  .mission{
    margin: 1em;
  }
</style>
