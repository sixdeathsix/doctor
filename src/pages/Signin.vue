<template>
  <div class="container">
    <form class="w-full p-3 lg:w-4" @submit="auth">
      <p class="text-center text-xl lg:text-3xl font-bold mb-3">Авторизация</p>
      <InputText placeholder="Введите логин" type="text" class="w-full mb-3" v-model="username" required />
      <InputText placeholder="Введите пароль" type="password" class="w-full mb-3" v-model="password" required />
      <Button type="submit" label="Войти" class="w-full mb-3" :disabled="password.length >= 6 ? false : true" />
      <router-link to="signup">Регистарция</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    auth(e) {
      e.preventDefault();
      this.$store.dispatch('onLogin', {
        username: this.username,
        password: this.password
      }).catch((e) => {
        this.$toast.add({severity:'error', detail: e.response.data.detail, life: 3000});
      });
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>