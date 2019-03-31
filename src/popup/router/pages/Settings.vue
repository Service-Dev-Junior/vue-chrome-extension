<template>
  <v-container fluid>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>Secret Key</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="인증키"
          v-model="this.secretKey"
          @focusout="updateSecretKey"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>Email</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="이메일"
          v-model="this.email"
          @focusout="updateEmail"
          suffix="@daou.co.kr"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      secretKey: '',
      email: '',
    }
  },
  methods: {
    updateSecretKey () {
      console.log(this.secretKey)
    },
    updateEmail () {
      console.log(this.email)
    },
  },
}
</script>
