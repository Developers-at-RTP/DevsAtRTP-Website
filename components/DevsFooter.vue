<template>
  <footer class="footer">
    <nav aria-label="Social Media">
      <ul class="socialMedia">
        <li>
          <a href="http://bit.ly/DevsAtRTP" target="_blank" rel="noopener noreferrer">
            <img class="mediaIcon" src="~/assets/imgs/slack.svg" alt="Join us on Slack!" />
          </a>
        </li>
        <li>
          <a href="https://www.meetup.com/DevsRTP" target="_blank" rel="noopener noreferrer">
            <img class="mediaIcon" src="~/assets/imgs/meetup.svg" alt="Find us on Meetup!" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DevsRTP" target="_blank" rel="noopener noreferrer">
            <img class="mediaIcon" src="~/assets/imgs/twitter.svg" alt="Follow us on Twitter!" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang='scss'>

.footer {
  background-color: #17144b;
  padding: 2em 2em;
  text-align: center;
  color: white;
}

.socialMedia{
  max-width: 400px;
  margin: auto;
}

.socialMedia{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
}

.mediaIcon {
  height: 2em;
}
</style>
