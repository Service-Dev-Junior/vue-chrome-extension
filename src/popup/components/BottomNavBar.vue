<template>
  <div>
    <v-bottom-nav
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        to="/"
      >
        <span>USB</span>
        <v-icon>usb</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
        to="/shortener"
      >
        <span>Shortener</span>
        <v-icon>transform</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNavBar',
  data () {
    return {
      bottomNav: 'recent',
    }
  },
}
</script>
