<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="headline text-xs-center pa-5">
    <div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <span v-on="on">{{getMessage}}</span>
        </template>
        <span>Tooltip</span>
      </v-tooltip>
      <v-textarea
        outline
        no-resize="true"
        height="80"
        single-line="true"
        clearable="true"
        name="input-7-4"
        label="USB 사용목적"
        value=""
      ></v-textarea>
      <v-btn @click.prevent="start" color="success">사용하기</v-btn>
      <v-btn @click.prevent="stop" color="error">반납하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isUsed: true,
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
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
