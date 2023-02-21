<template>
  <div className="container">
    <form className="w-full p-3 lg:w-4" @submit="register">
      <p className="text-center text-xl lg:text-3xl font-bold mb-3">Регистрация</p>
      <InputText placeholder="Фамилия" type="text" class="w-full mb-3" v-model="surname" required />
      <InputText placeholder="Имя" type="text" class="w-full mb-3" v-model="name" required />
      <InputText placeholder="Отчество" type="text" class="w-full mb-3" v-model="patronymic" required />
      <InputText placeholder="Электронный адрес" type="email" class="w-full mb-3" v-model="email" required />
      <InputText placeholder="Имя пользователя" type="text" class="w-full mb-3" v-model="login" required />
      <InputText placeholder="Пароль" type="password" class="w-full mb-3" v-model="password" minlength="6" required />
      <InputText placeholder="Подтвердите пароль" type="password" class="w-full mb-3" v-model="password_confirm" minlength="6" required />
      <Button type="submit" label="Зарегистрироваться" class="w-full mb-3" />
      <router-link to="signin">Войти</router-link>
    </form>
  </div>
</template>

<script>
import userapi from "../services/user";
export default {
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
      login: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async register(e) {
      e.preventDefault();

      if (this.password != this.password_confirm) {
        this.$toast.add({severity: 'error', detail: "Пароли не совпадают", life: 3000});
      } else

      await userapi.register({
        last_name: this.surname,
        first_name: this.name,
        patronymic: this.patronymic,
        email: this.email,
        username: this.login,
        password: this.password
      }).then(() => {
        this.$store.dispatch('onLogin', {
          username: this.login,
          password: this.password
        });
      }).catch((e) => {
        this.$toast.add({severity: 'error', detail: e.response.data.detail, life: 3000});
      });

    },
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