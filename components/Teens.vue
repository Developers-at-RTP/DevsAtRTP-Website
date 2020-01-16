<template>
  <aside alt="Devs@RTP Teens" class="teens">
    <div class="teen-container">
      <img src="~/assets/imgs/Teens.svg" class="teens-img" alt="Developers at RTP Teens logo" />
      <div>
        <p class="text">
          Devs@RTP Teens encourages young adults to collaborate and engage in coding activities.
          <br />We strongly support youth in learning coding and sharing knowledge.
        </p>
        <nuxt-link class="teens-link" to="/teens">Learn About Devs@RTP Teens</nuxt-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Teens"
};
</script>

<style lang='scss'>
@import "~assets/css/main.scss";

.teens {
  background-color: #17144b;
  margin: -2px auto 2em;
  padding: 2em;
  text-align: center;
  color: white;

  .teen-container {
    max-width: 900px;
    margin: auto;
  }
}

.teens-img {
  margin-bottom: 1em;
}

// animation is slow so you can see it, but probably should be .25 or .15
$thetransition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;

.teens-link {
  color: white;
  text-decoration: none;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    -webkit-transition: $thetransition;
    transition: $thetransition;
  }

  &:before {
    background-color: $pink;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  &:after {
    background-color: #fff;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    visibility: hidden;
  }

  &:focus {
    outline: none;
    border: 1px solid white;
    border-bottom: none;
    border-radius: 3px;
    padding: 1px;
  }

  &:hover,
  &:focus {
    color: $pink;

    &:before {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }

    &:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}
</style>
