<template>
  <div v-editable="blok" class="grid-item" :style="customCSS">
    <div class="image" v-if="blok.image != ''">
      <img v-bind:src="blok.image" v-bind:alt="blok.text">
    </div>
    <component class="caption" :is="(blok.link_url.url != '' ? 'a' : 'div') | dashify" :href="blok.link_url.url || false" :target="blok.link_url.url ? 'blank' : false">
      {{ blok.text }}
    </component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
      customCSS () {
        return {
          /* variables you want to pass to css */
          '--custom-background-color': this.blok.background_color.color,
          '--custom-text-color': this.blok.text_color.color,
          '--custom-border-color': this.blok.border_color.color
        }
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~/assets/css/variables.scss';
// animation is slow so you can see it, but probably should be .25 or .15
$thetransition: all .5s cubic-bezier(1,.25,0,.75) 0s;

.grid-item{
  flex: 1 0 100%;
  text-align: center;
  margin: 0.5%;
  color: var(--custom-text-color) !important;
  font-weight: bold;
  background-color: var(--custom-background-color);
  border: 1px solid var(--custom-border-color);

  // TODO: Find a way to set the color here based on text color above. Issue here is adding the opacity because the color comes from storyblok only as hex string
  &:hover {
    box-shadow: 0 0 10px rgba(108, 99, 255, 0.25);
  }

  a {
    color: var(--custom-text-color) !important;
    text-decoration: none;
  }

  .caption {
    display: block;
    padding: 1.5em;
  }
  
}

@media only screen and (min-width: 850px) {
  .grid-item{
    flex: 0 0 24%;
  }
}
  
  
</style>