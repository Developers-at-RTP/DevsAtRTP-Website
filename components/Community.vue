<template>
  <section aria-label="Join the Devs@RTP Community" class="community">
    <h2 class="subhead">We love our community</h2>
    <p
      class="midText"
    >Devs@RTP is an inclusive community of local developers who enjoy supportin those interested in careers in tech.</p>
    <p>We host technical lectures, workshops, conferences.</p>
    <p>We provide mentorship and social gatherings where you can network with other tech professionals.</p>
    <p>Interested in volunteer opportunities? We sure could use your help.</p>

    <img class="illustration" src="~/assets/imgs/PeopleJumping.png" alt="People talking in a group">

    <h3>SOCIAL EVENTS</h3>
    <p>Find our social events in the #outings channel on Slack!</p>
    <JoinSlack/>
    <!-- <p class="midText">Interested in Volunteering? We have plenty of opportunities available!</p> -->
    <!-- <p>Don’t hesitate to reach out to @MariaLamardo through our Slack group!</p> -->
  </section>
</template>

<script>
import JoinSlack from "~/components/JoinSlack.vue";

export default {
  name: 'Community',
  components: {
    JoinSlack
  }
}
</script>

<style lang="scss">
.community{
  background: linear-gradient(180deg, #6C4AA4 0%, #25225C 100%);
  color: white;
}
</style>
