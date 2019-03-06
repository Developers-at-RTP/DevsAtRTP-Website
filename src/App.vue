<template>
  <div>
    <Header></Header>
    <!-- <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Home,
    Header,
    Footer
  }
}
</script>
