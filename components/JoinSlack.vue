<template>
  <div class="slack">
    <a
      href="http://bit.ly/DevsAtRTP"
      class="slack-link linkLined"
      target="_blank"
      rel="noopener noreferrer"
      @focus="toggleHover(true)"
      @mouseover="toggleFocus(true)"
      @blur="toggleHover(false)"
      @mouseleave="toggleFocus(false)">
    <svg title="Slack Icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.62212 13.9019C4.62212 15.1739 3.58304 16.2129 2.31106 16.2129C1.03908 16.2129 0 15.1739 0 13.9019C0 12.6299 1.03908 11.5908 2.31106 11.5908H4.62212V13.9019Z" :fill="color"/>
        <path d="M5.78613 13.9019C5.78613 12.6299 6.82521 11.5908 8.09719 11.5908C9.36917 11.5908 10.4083 12.6299 10.4083 13.9019V19.6885C10.4083 20.9605 9.36917 21.9996 8.09719 21.9996C6.82521 21.9996 5.78613 20.9605 5.78613 19.6885V13.9019Z" :fill="color"/>
        <path d="M8.09719 4.62212C6.82521 4.62212 5.78613 3.58304 5.78613 2.31106C5.78613 1.03908 6.82521 0 8.09719 0C9.36917 0 10.4083 1.03908 10.4083 2.31106V4.62212H8.09719Z" :fill="color"/>
        <path d="M8.09767 5.78613C9.36965 5.78613 10.4087 6.82521 10.4087 8.09719C10.4087 9.36917 9.36965 10.4083 8.09767 10.4083H2.31106C1.03908 10.4083 0 9.36917 0 8.09719C0 6.82521 1.03908 5.78613 2.31106 5.78613H8.09767Z" :fill="color"/>
        <path d="M17.3779 8.09719C17.3779 6.82521 18.417 5.78613 19.689 5.78613C20.961 5.78613 22.0001 6.82521 22.0001 8.09719C22.0001 9.36917 20.961 10.4083 19.689 10.4083H17.3779V8.09719Z" :fill="color"/>
        <path d="M16.2129 8.09767C16.2129 9.36965 15.1739 10.4087 13.9019 10.4087C12.6299 10.4087 11.5908 9.36965 11.5908 8.09767V2.31106C11.5908 1.03908 12.6299 0 13.9019 0C15.1739 0 16.2129 1.03908 16.2129 2.31106V8.09767Z" :fill="color"/>
        <path d="M13.9019 17.3779C15.1739 17.3779 16.2129 18.417 16.2129 19.689C16.2129 20.961 15.1739 22.0001 13.9019 22.0001C12.6299 22.0001 11.5908 20.961 11.5908 19.689V17.3779H13.9019Z" :fill="color"/>
        <path d="M13.9019 16.2129C12.6299 16.2129 11.5908 15.1739 11.5908 13.9019C11.5908 12.6299 12.6299 11.5908 13.9019 11.5908H19.6885C20.9605 11.5908 21.9996 12.6299 21.9996 13.9019C21.9996 15.1739 20.9605 16.2129 19.6885 16.2129H13.9019Z" :fill="color"/>
    </svg>
    Join Us On slack
    </a>
  </div>
</template>

<script>
  export default {
    name: 'JoinSlack',
    data: function () {
        return {
            hover: false,
            focus: false,
            pink: '#FF5776',
            white: '#fff',
            color: '#FF5776'
        }
    },
    methods : {
        toggleHover(hover){
            hover ? this.color = this.white : this.color = this.pink
            this.hover = hover;
        },
        toggleFocus(focus){
            focus ? this.color = this.white : !this.hover ? this.color = this.pink : this.color = this.white
            this.focus = focus;
        }
    }
  }
</script>

<style lang="scss">
.slack {
  margin: 2em auto;
}

.slack-img {
  height: 1.5em;
  vertical-align: middle;
}

.linkLined {
  /* RESET */
  line-height: 1;
  text-decoration: none;
  color: white;
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 5px 5px;
  transition: color 0.3s ease-out;
  vertical-align: bottom;
  z-index: 0;

  &::before {
    content: "";
    background-color: #ff5776;
    border-radius: .3em;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    transform: translateY(calc(100% - 2px));
    transition: transform 0.25s ease-out;
  }

  &:focus{
    outline: none;
    border: 1px solid #ffffff;
    border-radius: .3em;
  }

  &:hover,
  &:focus {
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    &::before {
      transform: translateY(0);
      transition: transform 0.25s ease-out;
      left: 0;
    }
  }
}

.slack-link{
  &::before {
    border-radius: .5em;
    left: 20px;
  }
  &:focus{
    border-radius: .5em;
  }
}
</style>
