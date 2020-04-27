<template>
  <aside v-bind:alt="blok.section_alt" class="half-section">
    <div class="container">
      <img v-bind:src="blok.image" class="img" v-bind:alt="blok.image_alt" />
      <div>
        <p class="blurb text">{{blok.blurb}}</p>
        <nuxt-link class="link" v-bind:to="blok.call_to_action_link">{{ blok.call_to_action }}</nuxt-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<!--<script>
export default {
  name: "Teens"
};
</script>-->

<style lang='scss'>
@import "~assets/css/main.scss";

// animation is slow so you can see it, but probably should be .25 or .15
$thetransition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;

.half-section {
  background-color: #17144b;
  /*margin: -2px auto 2em;*/
  padding: 2em;
  text-align: center;
  color: white;

  .container {
    max-width: 900px;
    margin: auto;
  }

  .img {
    margin-bottom: 1em;
  }

  .link {
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
}

</style>
