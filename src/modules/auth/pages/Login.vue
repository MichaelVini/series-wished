<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                required
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="Senha"
              />
            </div>
            <button class="btn btn-primary w-100">Entrar</button>
          </div>
        </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionSetUser']),
    submit () {
      this.ActionSetUser(this.form)
    }
  }
}
</script>

<style scoped lang="scss">
  .login-page {
    height: 100vh;
    background-color: #0073b1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 360px;
  }

  .form-group {
    margin-top: 20px;
  }

  .btn {
    background-color: #0b6fa5;
    margin-top: 20px;
    border-radius: 20px;
    padding: 9px;
    transition: 0.3s;
  }

  .btn:hover {
    background-color: #0f5880;
  }
</style>
