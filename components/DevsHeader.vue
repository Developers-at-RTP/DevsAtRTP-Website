<template>
  <header class="Devs_RTP">
    <img src="~/assets/imgs/DevsLogoW.svg" alt="Developers at RTP logo">
    <p class="mission">We focus on engaging, inspiring, and supporting the tech community in the RTP area</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss'>
  .Devs_RTP{
    margin: 0 auto 3em;
    padding: 0 2em;
    text-align: left;
    max-width: 900px;
    
    img {
      max-width: 200px;
      margin: 3em 1em 2em;
    }
  }
  .mission{
    margin: 1em;
  }
</style>
