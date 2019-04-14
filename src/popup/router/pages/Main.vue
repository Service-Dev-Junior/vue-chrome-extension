<template>
<!--  <div class="headline text-xs-center pa-5">-->
<!--    <div>-->
<!--      <v-tooltip bottom>-->
<!--        <template v-slot:activator="{ on }">-->
<!--          <span v-on="on">{{getMessage}}</span>-->
<!--        </template>-->
<!--        <span>Tooltip</span>-->
<!--      </v-tooltip>-->
<!--      <v-textarea-->
<!--        outline-->
<!--        no-resize="true"-->
<!--        height="80"-->
<!--        single-line="true"-->
<!--        clearable="true"-->
<!--        name="input-7-4"-->
<!--        label="USB 사용목적"-->
<!--        value=""-->
<!--      ></v-textarea>-->
<!--      <v-layout>-->
<!--        <v-flex-->
<!--          xs12-->
<!--        >-->
<!--          <v-btn @click.prevent="start" color="success" dark style="background: aquamarine">사용하기</v-btn>-->
<!--        </v-flex>-->
<!--        <v-flex-->
<!--          xs12-->
<!--        >-->
<!--          <v-btn @click.prevent="stop" color="error">반납하기</v-btn>-->
<!--        </v-flex>-->
<!--      </v-layout>-->
<!--    </div>-->
<!--  </div>-->
  <v-card
    class="hide-overflow"
    color="indigo lighten-1"
    dark
  >
    <v-toolbar
      card
      color="indigo"
    >
      <v-icon>usb</v-icon>
      <v-toolbar-title class="font-weight-light">Security Usb</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        color="white"
        label="Secret Key"
      ></v-text-field>
      <v-text-field
        color="white"
        label="purpose of use"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
      >
        사용
      </v-btn>
      <v-btn
        color="error"
      >
        반납
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="isUsed"
      :timeout="2000"
      absolute
      bottom
      left
    >
      보안USB 상태가 변경되었습니다
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      isUsed: true,
      valid: false,
    }
  },
  computed: {
    getMessage () {
      return this.isUsed ? 'USB 사용중' : 'USB 미사용중'
    },
  },
  methods: {
    start () {
      alert('사용하기')
    },
    stop () {
      alert('반납하기')
    },
  },
}
</script>
