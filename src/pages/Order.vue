<template>
  <div className="container">
    <form className="w-full p-3 lg:w-4" @submit="createOrder">
      <p className="text-center text-xl lg:text-3xl font-bold mb-3">Записаться на прием</p>
      <Dropdown
          class="w-full mb-3 "
          v-model="doctor"
          :options="staff"
          optionLabel="user.groups"
          :filter="true"
          placeholder="Выберите врача"
          :showClear="true"
      >
        <template #value="props">
          <div class="country-item country-item-value flex align-items-center" v-if="props.value">
            <img class="img border-circle mr-2" :src="props.value.user.photo" />
            <div>{{props.value.user.last_name}} {{props.value.user.first_name}} {{props.value.user.patronymic}} - {{props.value.user.groups[0]}}</div>
          </div>
        </template>
        <template #option="props">
          <div class="country-item flex align-items-center">
            <img class="img border-circle mr-3" :src="props.option.user.photo" />
            <div>{{props.option.user.last_name}} {{props.option.user.first_name}} {{props.option.user.patronymic}} - {{props.option.user.groups[0]}}</div>
          </div>
        </template>
      </Dropdown>
      <Calendar
          class="w-full mb-3"
          placeholder="Выберите дату"
          :inline="true"
          :minDate="minDate"
          :disabledDays="[5, 6]"
          dateFormat="dd/mm/yy"
          v-model="date"
          :showTime="true"
          :showButtonBar="true"
      />
      <Button type="submit" label="Записаться" class="w-full mb-3" :disabled="doctor && date ? false : true" />
    </form>
  </div>
</template>

<script>
import staffapi from "../services/staff";
import orderapi from "../services/order";
export default {
  created() {
    this.minDate = new Date();
  },
  data() {
    return {
      date: null,
      doctor: null,
      minDate: null,
      staff: null,
    }
  },
  methods: {
    getStaff() {
      staffapi.getStaff().then((res) => {
        this.staff = res.data;
      })
    },
    createOrder(e) {

      e.preventDefault();

      orderapi.createOrder({
        staff: this.doctor.id,
        user: this.$store.state.user.user.user_id,
        order_date: this.date
      }).then(() => {
        this.$toast.add({severity: 'success', detail: "Запись успешно сохранена", life: 3000});
        this.doctor = null;
      }).catch((e) => {
        this.$toast.add({severity: 'error', detail: e.response.data.detail, life: 3000});
      });

    }
  },
  mounted() {
    this.getStaff();
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

.img {
  width: 40px;
}
</style>