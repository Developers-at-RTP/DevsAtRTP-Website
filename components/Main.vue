<template>
  <main class="main">
    <img class="illustration right" src="~/assets/imgs/TableGroup.svg" alt="People working at a table" />
    <div class="container-main">
      <h2 class="headerCommunity">We love our community</h2>
      <p class="text"
      >Devs@RTP is an inclusive group of local developers who enjoy supporting tech enthusiasts.</p>
      <p class="text"
      >We host community led social gatherings, mentorship, professional readiness activities such as resume reviews & mock interviews.</p>
      <p class="text">Interested in volunteer opportunities? We sure could use your help.</p>
      <p class="text">Don’t hesitate to reach out on Slack!</p>
      <JoinSlack/>
    </div>
  </main>
</template>

<script>
import JoinSlack from "~/components/JoinSlack.vue";

export default {
  name: 'Main',
  components: {
    JoinSlack
  }
}
</script>

<style lang="scss">
.container-main {
  margin: 30px 15px 0;
  text-align: left;
}
.headerCommunity {
  font-size: 1.3em;
  font-family: "Trocchi", serif;
}
</style>