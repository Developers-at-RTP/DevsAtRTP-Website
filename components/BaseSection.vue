<template>
  <aside v-bind:aria-label="blok.aria_label" class="home-section" v-bind:class="[ blok.color_background ? 'color-background' : '']" :style="containerCSS">
    <div class="container" v-bind:class="[blok.image_position == 'left' ? 'reverse' : '']" >
      <div class="info">
        <h2 class="title">{{ blok.title }}</h2>
        <p class="blurb text">{{ blok.blurb }}</p>
        <a class="link" v-if="blok.call_to_action != ''" v-bind:href="blok.call_to_action_link" target="_blank" rel="noopener noreferrer">{{blok.call_to_action}}</a>
      </div>
      <img class="illustration" v-if="blok.use_image" v-bind:src="blok.image" v-bind:alt="blok.image_alt">
    </div>
    <div class="container">
      <component :key="blok._uid" v-for="blok in blok.other_content" :blok="blok" :is="blok.component | dashify"></component>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
      containerCSS () {
        return {
          /* variables you want to pass to css */
          '--custom-background-color': this.blok.background_color.color,
        }
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/css/variables.scss';
// animation is slow so you can see it, but probably should be .25 or .15
$thetransition: all .5s cubic-bezier(1,.25,0,.75) 0s;

.home-section{
  text-align: center;
  padding: 2em;
  color: black !important;
  background-color: var(--custom-background-color);

  .link {
      margin: 1em auto;
      color: black;
      text-decoration: none;
      position: relative;
      
      &:before, &:after {
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
          background-color: #17144B;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
      }

      &:after {
          background-color: $pink;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          visibility: hidden;
      }

      &:focus {
          outline: none;
          border: 1px solid #17144B;
          border-bottom: none;
          border-radius: 3px;
          padding: 1px;
      }

      &:hover, &:focus {
          color: #17144B;

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

  &.color-background {
    background: linear-gradient(180deg, #6c4aa4 0%, #25225c 100%);
    color: white !important;

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

  .img {
    width: 80vw;
  }

  
}
  
  
</style>
