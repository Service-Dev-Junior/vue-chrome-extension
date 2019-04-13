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
    color="purple lighten-1"
    dark
  >
    <v-toolbar
      card
      color="purple"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="purple darken-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
      ></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
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
      Your profile has been updated
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
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 }
      ]
    }
  },

  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    }
  }
}
</script>
