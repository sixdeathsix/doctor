<template>
  <div class="footer">
    <div class="surface-section px-4 md:px-6 lg:px-8">
      <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
        <div><img class="logo" src="https://juststickers.in/wp-content/uploads/2017/06/doctor-symbol-b.png" alt="Image" height="40">
          <div class="mt-2 line-height-3">© 2023 DOCTOR, Все права защищены</div>
        </div><div class="mt-3 sm:mt-0">
        <a class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
          <i class="pi pi-twitter text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
          <i class="pi pi-facebook text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
          <i class="pi pi-github text-xl"></i>
        </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  width: 100%;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
}

.logo {
  width: 70px;
  height: 70px;
}

@media only screen and (max-width : 1100px){ /* You can edit the max-width value to match what you need */
  .footer {
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top:30px;
  }
}
</style>