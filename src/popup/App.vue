<template>
  <div>
    <v-card width="500px" height="300px" flat>
      <router-view></router-view>
      <BottomNavBar></BottomNavBar>
    </v-card>
  </div>
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
