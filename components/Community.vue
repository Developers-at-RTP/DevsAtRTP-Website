<template>
  <section aria-label="Join the Devs@RTP Community" class="community">
    <img
      class="illustration"
      src="~/assets/imgs/PeopleJumping.svg"
      alt="People jumping joyfully in a group"
    />
    <h3>SOCIAL EVENTS</h3>
    <p>Find our social events in the #outings channel on Slack!</p>
    <JoinSlack />
  </section>
</template>

<script>
import JoinSlack from "~/components/JoinSlack.vue";

export default {
  name: "Community",
  components: {
    JoinSlack
  }
};
</script>

<style lang="scss">
.community {
  background: linear-gradient(180deg, #6c4aa4 0%, #25225c 100%);
  color: white;
  text-align: center;
  padding: 2em;
}
</style>
