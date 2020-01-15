<template>
  <section aria-label="Join the Devs@RTP Community" class="community">
    <div class="community-container">
      <img
        class="illustration community-img"
        src="~/assets/imgs/PeopleJumping.svg"
        alt="People jumping joyfully in a group"
      />
      <div class="community-info">
        <h3>SOCIAL EVENTS</h3>
        <p class="comminity-text">Find our social events in the #outings channel on Slack!</p>
        <JoinSlack />
      </div>
    </div>
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
  margin-bottom: -2px;

  .community-container{
    max-width: 900px;
    margin: auto;
  }

  .community-img{
    max-width: 400px;
  }

  .comminity-text{
    padding: 15px 0 0;
  }
}
</style>
