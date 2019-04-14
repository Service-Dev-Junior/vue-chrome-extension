<template>
  <!--  <v-container fluid>-->

  <!--    <v-layout row>-->
  <!--      <v-flex xs4>-->
  <!--        <v-subheader>Secret Key</v-subheader>-->
  <!--      </v-flex>-->
  <!--      <v-flex xs8>-->
  <!--        <v-text-field-->
  <!--          label="인증키"-->
  <!--          v-model="this.secretKey"-->
  <!--          @focusout="updateSecretKey"-->
  <!--        ></v-text-field>-->
  <!--      </v-flex>-->
  <!--    </v-layout>-->

  <!--    <v-layout row>-->
  <!--      <v-flex xs4>-->
  <!--        <v-subheader>Email</v-subheader>-->
  <!--      </v-flex>-->
  <!--      <v-flex xs8>-->
  <!--        <v-text-field-->
  <!--          label="이메일"-->
  <!--          v-model="this.email"-->
  <!--          @focusout="updateEmail"-->
  <!--          suffix="@daou.co.kr"-->
  <!--        ></v-text-field>-->
  <!--      </v-flex>-->
  <!--    </v-layout>-->
  <!--  </v-container>-->
  <v-card
    class="hide-overflow"
    color="indigo lighten-1"
    dark
  >
    <v-toolbar
      card
      color="indigo"
    >
      <v-icon>settings</v-icon>
      <v-toolbar-title class="font-weight-light">Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="indigo"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">lock_open</v-icon>
        <v-icon v-else>lock</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="secret Key"
      ></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="email"
        label="email"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      정보가 일치하지 않습니다
    </v-snackbar>
  </v-card>
</template>

<script>
// import { mapMutations, mapActions } from 'vuex'
//
// export default {
//   created () {
//     this.loadSettings()
//   },
//   data () {
//     return {
//       secretKey: 'test',
//       email: '',
//     }
//   },
//   methods: {
//     ...mapMutations([
//       'UPDATE_EMAIL',
//       'UPDATE_SECRET_KEY'
//     ]),
//     ...mapActions([
//       'loadSettings'
//     ]),
//     updateSecretKey () {
//       //this.UPDATE_SECRET_KEY(this.secretKey)
//     },
//     updateEmail () {
//       alert(this.secretKey)
//       chrome.storage.sync.set({ value: 'test' }, function () {
//         // 저장 완료
//       })
//       //this.UPDATE_EMAIL('asdsadasdsadas')
//     },
//   },
// }
export default {
  data () {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { email: 'wodn4131@daou.co.kr', name: '김재우', id: 1 },
        { email: 'supreme@daou.co.kr', name: '한대호', id: 2 },
        { email: 'dahye@daou.co.kr', name: '김다혜', id: 3 }
      ],
    }
  },
  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.email.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },
  },
}
</script>
