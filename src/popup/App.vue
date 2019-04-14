<template>
  <v-app>
    <div>
      <v-card width="400px" height="330px" flat>
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
