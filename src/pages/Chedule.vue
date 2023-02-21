<template>
  <div class="grid m-0">
    <div v-for="item in staff" :key="item.id" class="col-12 md:col-6 xl:col-2 p-3">
      <div class="surface-card shadow-2 border-round p-3" style="border-radius: 6px;">
        <img :src="item.user.photo" class="mb-3 w-full">
        <ul class="list-none m-0 p-0">
          <li class="px-0 py-2 flex flex-column justify-content-between border-bottom-1 surface-border">
            <span class="text-600 font-medium text-sm">ФИО</span>
            <span class="text-900 font-medium text-sm">{{item.user.last_name}} {{item.user.first_name}} {{item.user.patronymic}}</span>
          </li>
          <li class="px-0 py-2 flex flex-column justify-content-between border-bottom-1 surface-border">
            <span class="text-600 font-medium text-sm">Специальность</span>
            <span class="text-900 font-medium text-sm">{{item.user.groups[0]}}</span>
          </li>
          <li class="px-0 py-2 flex flex-column justify-content-between border-bottom-1 surface-border">
            <span class="text-600 font-medium text-sm">Время работы</span>
            <span class="text-900 font-medium text-sm">{{item.start}} - {{item.end}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import staffapi from "../services/staff";
export default {
  created() {
    this.minDate = new Date();
  },
  data() {
    return {
      staff: null,
    }
  },
  methods: {
    getStaff() {
      staffapi.getStaff().then((res) => {
        this.staff = res.data;
      })
    }
  },
  mounted() {
    this.getStaff();
  }
}
</script>