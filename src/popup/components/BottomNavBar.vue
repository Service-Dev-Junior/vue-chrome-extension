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
        to="/"
      >
        <span>USB</span>
        <v-icon>usb</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/settings"
      >
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNavBar',
}
</script>
