<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />

    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data.message)
    }
  }
}
</script>

<style scoped>

</style>
