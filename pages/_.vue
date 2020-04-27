<!-- I think theoretically, no routing (i.e. no other pages inside the 'pages' folder) should be necessary and this single file can handle loading any page we define in StoryBlok (see 'asyncData' below for more), but I am not sure if this is a good idea -->
<template>
  <div>
    <div class="skyline">
      <div class="bottomSVG">
        <DevsHeader />
        <Main />
      </div>
    </div>
    <div>
    </div>
    <!-- Components are dynamically defined from the StoryBlok JSON that is passed to this template as the 'story' data -->
    <!-- StoryBlok-compatible components should define a 'blok' prop through which its content is passed -->
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component | dashify"></component>
    <devs-footer />
  </div>
</template>

<script>
import DevsHeader from "~/components/DevsHeader.vue";
import Main from "~/components/Main.vue";

// StoryBlok data is loaded here.
// 'api' is an object created by the StoryBlok plugin for Nuxt and passed through a context in the 'asyncData' function below
const loadData = function({api, cacheVersion, errorCallback, version, path}) {
  return api.get(`cdn/stories/${path}`, {
    version: version,
    cv: cacheVersion
  }).then((res) => {
    return res.data
  }).catch((res) => {
    if (!res.response) {
      console.error(res)
      errorCallback({ statusCode: 404, message: 'Failed to receive content form api' })
    } else {
      console.error(res.response.data)
      errorCallback({ statusCode: res.response.status, message: res.response.data })
    }
  })
}

export default {
  components: {
    DevsHeader,
    Main
  },

  data () {
    return { story: { content: {} } }
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  asyncData (context) {
    // Check if we are in the editing mode
    let editMode = false

    if (context.query._storyblok || context.isDev || (typeof window !== 'undefined' && window.localStorage.getItem('_storyblok_draft_mode'))) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location == window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }

      editMode = true
    }

    let version = editMode ? 'draft' : 'published'
    let path = context.route.path == '/' ? 'home' : context.route.path // This creates a path to load data from StoryBlok based on the route of the page currently being built. So, theoretically any route can be handled with this single top-level Page

    // Load the JSON from the API
    return loadData({
      version: version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path: path
    })
  }
}
</script>

<style lang="scss">
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
</style>
