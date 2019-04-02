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
import { mapMutations, mapActions } from 'vuex'

export default {
  created () {
    this.loadSettings()
  },
  data () {
    return {
      secretKey: 'test',
      email: '',
    }
  },
  methods: {
    ...mapMutations([
      'UPDATE_EMAIL',
      'UPDATE_SECRET_KEY'
    ]),
    ...mapActions([
      'loadSettings'
    ]),
    updateSecretKey () {
      //this.UPDATE_SECRET_KEY(this.secretKey)
    },
    updateEmail () {
      alert(this.secretKey)
      chrome.storage.sync.set({ value: 'test' }, function () {
        // 저장 완료
      })
      //this.UPDATE_EMAIL('asdsadasdsadas')
    },
  },
}
</script>
