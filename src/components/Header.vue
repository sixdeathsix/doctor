<template>
  <div
    class="surface-overlay px-6 shadow-2 flex justify-content-between relative lg:static"
    style="min-height: 70px"
  >
    <router-link
      :to="{ name: 'home' }"
      class="cursor-pointer block align-self-center text-700 mt-1 p-ripple logo"
    >
      <img
        src="https://juststickers.in/wp-content/uploads/2017/06/doctor-symbol-b.png"
        alt="Image"
        width="40"
        height="40"
        class="mr-0 lg:mr-6 align-self-center"
      />
    </router-link>
    <div
      class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
    >
      <div
        class="list-none p-0 m-0 flex select-none flex-column lg:flex-row"
      ></div>
      <ul
        class="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none"
        v-if="user != null"
      >
        <li>
          <router-link
            :to="{ name: 'schedule' }"
            class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <span class="block font-medium">Расписание</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'order' }"
            class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <span class="block font-medium">Запись на прием</span>
          </router-link>
        </li>
        <li class="border-top-1 surface-border lg:border-top-none">
          <router-link
            :to="{ name: 'profile' }"
            class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <img
              :src="avatar"
              class="border-circle mr-3 lg:mr-0"
              style="width: 40px; height: 40px"
            />
          </router-link>
        </li>
      </ul>
      <ul class="flex flex-row surface-border" v-else>
        <li>
          <router-link
            :to="{ name: 'schedule' }"
            class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <span class="block font-medium">Расписание</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'signin' }"
            class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <span class="block font-medium">Вход</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar:
        "http://127.0.0.1:8000/media/blank-profile-picture-973460_1280_4aN0yRN.webp",
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user.user_id;
    },
  },
};
</script>

<style scoped>
.logo {
  width: 70px;
  height: 70px;
}
</style>
