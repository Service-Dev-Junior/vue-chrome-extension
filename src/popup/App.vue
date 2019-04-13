<template>
  <v-app>
    <div>
      <v-card width="400px" height="300px" flat color="">
        <router-view></router-view>
        <BottomNavBar></BottomNavBar>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import BottomNavBar from './components/BottomNavBar'

export default {
  components: {
    BottomNavBar,
  },
  data () {
    return {}
  },
}
</script>
