<template>
  <div>
      <div class="skyline">
        <div class="bottomSVG">
          <DevsHeader
          :scr="logo"/>
          <Main />
        </div>
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

<style lang="scss">
.skyline {
  background: linear-gradient(180deg, #25225c 0%, #6c4aa4 100%);
  color: white;
  text-align: center;
}

.bottomSVG {
  background-image: url("~assets/imgs/gradientSkyline.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>