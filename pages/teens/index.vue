<template>
  <div>
    <div class="skyline">
      <div class="bottomSVG">
        <header class="Devs_RTP">
          <img src="~/assets/imgs/Teens.svg" alt="Developers at RTP Teens logo" />
          <p
            class="mission"
          >We focus on engaging, inspiring, and supporting the tech community in the RTP area</p>
        </header>
        <main class="main">
          <img
            class="illustration right"
            src="~/assets/imgs/groupTeens.svg"
            alt="Group of teens working on their devices"
          />
          <div class="container-main">
            <h2 class="headerCommunity">Our Mission</h2>
            <p
              class="text"
            >We encourage and inspire teens to accelerate their growth and jump start their career!</p>
            <JoinSlack />
          </div>
        </main>
      </div>
    </div>
    <div>
      <aside alt="Devs@RTP Teens" class="teens">
        <div class="teen-container">
          <img
            src="~/assets/imgs/DevsLogoW.svg"
            class="illustration devs-img"
            alt="Developers at RTP logo"
          />
          <div>
            <p
              class="text"
            >Devs@RTP is an inclusive group of local developers who enjoy supporting tech enthusiasts.</p>
            <nuxt-link class="teens-link" to="/">Learn About Devs@RTP</nuxt-link>
          </div>
        </div>
      </aside>
    </div>
    <aside aria-label="Devs@RTP Events" class="events">
      <img class="illustration" src="~/assets/imgs/GirlSitting.svg" alt="Join our next event" />
      <div>
        <a
          class="events-link"
          href="https://www.meetup.com/DevsRTP/"
          target="_blank"
          rel="noopener noreferrer"
        >Check Out Our Meetup Events</a>
      </div>
    </aside>
    <section aria-label="Join the Devs@RTP Community" class="community">
      <div class="community-container">
        <h2 class="events-header">Upcoming Devs@RTP Teens Event</h2>
        <div>
          <p class="text">
            March 23rd, 2020
            <br />10:00am-12:00pm
            <br />Pendo
            <br />150 Fayetteville St #1400, Raleigh, NC 27601
          </p>
        </div>
        <a
          class="slack-link linkLined"
          href="https://www.eventbrite.com/e/devsrtp-teens-kickoff-event-tickets-83734972557"
          rel="noopener noreferrer"
          target="_blank"
        >Register Now</a>
      </div>
    </section>
    <DevsFooter />
  </div>
</template>

<script>
import DevsFooter from "~/components/DevsFooter.vue";

export default {
  components: {
    DevsFooter
  }
};
</script>

<style lang="scss" scoped>
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

.devs-img {
  max-width: 200px;
  max-width: auto;
}
.Devs_RTP img {
  height: 5em;
  margin: 3em 1em 0;
}
.container-main {
    padding-bottom: 30px;
    text-align: center;
    margin: auto;
}
.text {
  text-align: center;
  line-height: 1.5em;
}

.community {
  background: linear-gradient(180deg, #6c4aa4 0%, #25225c 100%);
  color: white;
  text-align: center;
  padding: 2em;
  margin-bottom: -2px;

  .community-container {
    max-width: 900px;
    margin: auto; 
  }
  
  @media only screen and (min-width: 850px){
    .community-container {
        display: block;
    }
  }

  .comminity-text {
    padding: 15px 0 0;
  }

  .slack-link::before {
    left: 0;
  }
}
  
</style>