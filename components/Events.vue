<template>
  <aside aria-label="Devs@RTP Events" class="events">
   <h2 class="events-header">Join the Next Devs@RTP Event</h2>
   <p class="text">Attend one of our events to meet the group members and make new friends</p>
   <img class="illustration" src="~/assets/imgs/GroupWithDog.svg" alt="People talking in a group">
   <a class="events-link" href="https://www.meetup.com/DevsRTP/" target="_blank" rel="noopener noreferrer">Check Out Our Meetup Events</a>
  </aside>
</template>

<script>
export default {
  name: 'Events'
}
</script>

<style lang='scss'>
  .events{
    max-width: 80vw;
    text-align: center;
    margin: 0 auto 2em;
  }
  .events-header{
    font-family: "Trocchi", serif;
  }
  .events-img{
    width: 80vw;
  }
  
  // animation is slow so you can see it, but probably should be .25 or .15
  $thetransition: all .5s cubic-bezier(1,.25,0,.75) 0s;

  .events-link{
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
        background-color: #ff5776;
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
</style>
