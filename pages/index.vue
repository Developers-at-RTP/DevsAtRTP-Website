<template>
  <!-- <div class="container" v-maxWidth="'80vw'"> -->
  <div>
    <div class="skyline">
      <DevsHeader />
      <Main />
    </div>
    <div>
      <Teens />
    </div>
    <Events />
    <Community />
    <DevsFooter />
  </div>
</template>

<script>
import DevsHeader from "~/components/DevsHeader.vue";
import Main from "~/components/Main.vue";
import Teens from "~/components/Teens.vue";
import Community from "~/components/Community.vue";
import Events from "~/components/Events.vue";
import DevsFooter from "~/components/DevsFooter.vue";

export default {
  components: {
    DevsHeader,
    Main,
    Teens,
    Community,
    Events,
    DevsFooter
  }
};
</script>

<style>
body {
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
}
/* html{ */
/* background: rgb(240, 254, 249); */
/* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(240, 254, 249, 1) 25%,
    rgb(231, 255, 246) 50%,
    rgb(155, 177, 210) 75%,
    rgba(37, 34, 92, 1) 100%
  ); */
/* background: rgb(240,254,249);
background: linear-gradient(0deg, rgba(240,254,249,1) 0%, rgba(240,254,249,1) 63%, rgba(255,255,255,1) 100%);
  background-repeat: no-repeat; */

/* background-image: linear-gradient(to bottom, #fff, #ebfef7, #e8fcfb, #e7fafd, #e7f8ff, #eaf5ff, #d6e1f2, #c6cde4, #bab8d5, #938fb6, #6e6997, #494479, #25225c); */
/* } */
.container {
  margin: auto;
}
.subhead {
  /* font-family: Trocchi, Ubuntu, monospace; */
  color: #4f4f4f;
  font-family: Trocchi;
  font-weight: normal;
  font-size: 2.5em;
  margin: 0 auto 1em;
}
.illustration {
  max-width: 80vw;
  margin: 0 auto 2em;
}

.midText {
  font-size: 1.2em;
  margin-bottom: 1em;
}
.communityList {
  margin: 1em auto;
}

.skyline {
  background-image: url("~assets/imgs/gradientSkylineSmall.svg");
  padding: 25px 25px 100px;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.text {
  padding: 15px 0;
  text-align: left;
}
</style>
