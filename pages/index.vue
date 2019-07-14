<template>
  <div class="container">
    <header>
      <DevsLogo />
    </header>
    <main>
      <Mission />
      <LogoTableGroup />
      <Offer />
      <LogoJoinCommunity />
      <Slack />
      <EventCalendar />
    </main>
  </div>
</template>

<script>
import DevsLogo from '~/components/DevsLogo.vue'
import Mission from '~/components/Mission.vue'
import LogoTableGroup from '~/components/LogoTableGroup.vue'
import Offer from '~/components/Offer.vue'
import LogoJoinCommunity from '~/components/LogoJoinCommunity.vue'
import Slack from '~/components/Slack.vue'
import EventCalendar from '~/components/EventCalendar.vue'

export default {
  components: {
    DevsLogo,
    Mission,
    LogoTableGroup,
    Offer,
    LogoJoinCommunity,
    Slack,
    EventCalendar
  }
}
</script>

<style>
  body{
    font-family:'Ubuntu', Courier, monospace;
    background: rgb(240,254,249);
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(240,254,249,1) 30%, rgba(111,139,181,1) 68%, rgba(37,34,92,1) 100%) */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(240,254,249,1) 25%, rgb(231, 255, 246) 50%, rgb(155, 177, 210) 75%, rgba(37,34,92,1) 100%);
    background-repeat: no-repeat;
    min-height: 100vh;
    max-width: 100vw;
  }
  .subhead{
    font-family:'Trocchi', 'Ubuntu', monospace;
  }
</style>
