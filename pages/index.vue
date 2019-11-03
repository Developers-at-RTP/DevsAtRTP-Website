<template>
  <div class="container">
    <div class="background">
      <header>
        <!-- <HamMenu /> -->
        <DevsLogo />
      </header>
      <main>
        <Mission v-maxWidth="'80vw'" />
        <LogoTableGroup />
        <Offer v-maxWidth="'80vw'" />
        <LogoJoinCommunity />
      </main>
    </div>
    <aside>
      <Slack v-maxWidth="'80vw'" />
      <a href="https://www.meetup.com/DevsRTP/" target="_blank" rel="noopener noreferrer">Check Out Our Meetup Events</a>
      <!-- <EventCalendar v-maxWidth="'80vw'" /> -->
    </aside>
  </div>
</template>

<script>
import HamMenu from "~/components/HamMenu.vue";
import DevsLogo from "~/components/DevsLogo.vue";
import Mission from "~/components/Mission.vue";
import LogoTableGroup from "~/components/LogoTableGroup.vue";
import Offer from "~/components/Offer.vue";
import LogoJoinCommunity from "~/components/LogoJoinCommunity.vue";
import Slack from "~/components/Slack.vue";
import EventCalendar from "~/components/EventCalendar.vue";

export default {
  components: {
    HamMenu,
    DevsLogo,
    Mission,
    LogoTableGroup,
    Offer,
    LogoJoinCommunity,
    Slack,
    EventCalendar
  }
};
</script>

<style>
body {
  font-family: "Ubuntu", Courier, monospace;
  font-size: 16px;
}
.background{
  /* background: rgb(240, 254, 249); */
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(240, 254, 249, 1) 25%,
    rgb(231, 255, 246) 50%,
    rgb(155, 177, 210) 75%,
    rgba(37, 34, 92, 1) 100%
  ); */
  background: rgb(240,254,249);
background: linear-gradient(0deg, rgba(240,254,249,1) 0%, rgba(240,254,249,1) 63%, rgba(255,255,255,1) 100%);
  background-repeat: no-repeat;
}
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
  margin: 2em auto;
}
.illustration_max {
  width: 100vw;
}
.midText {
  font-size: 1.2em;
  margin-bottom: 1em;
}
.communityList {
  margin: 1em auto;
}
</style>
