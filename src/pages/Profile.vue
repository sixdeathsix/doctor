<template>
  <div class="card" v-if="user">
    <div class="col-12 md:col-6 xl:col-4 p-3">
      <div class="surface-card shadow-2 border-round p-4">
        <div class="flex border-bottom-1 surface-border pb-4">
          <img :src="user.photo" class="mr-3 border-circle" style="width: 70px; height: 70px;">
          <div class="flex flex-column align-items-start">
            <span class="text-xl text-900 font-medium mb-1">{{user.last_name}} {{user.first_name}} {{user.patronymic}}</span>
            <span class="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">{{user.groups[0]}}</span>
          </div>
        </div>
        <div class="flex justify-content-between pt-4">
          <button @click="logout" class="p-button p-component p-button-outlined p-button-secondary w-full mr-2" type="button" aria-label="View">
            <span class="p-button-label">Выйти</span>
          </button>
        </div>
      </div>
    </div>
    <DataTable
        :value="filterOrders"
        :paginator="true"
        class="p-datatable-customers"
        :rows="5"
        filterDisplay="row"
        responsiveLayout="scroll"
        :globalFilterFields="['statuses']"
    >
      <Column field="name" header="Врач" style="width:20%">
        <template #body="{data}">
          {{data.staff.user.last_name}} {{data.staff.user.first_name}} {{data.staff.user.patronymic}}
        </template>
      </Column>
      <Column field="name" header="Специальность" style="width:20%">
        <template #body="{data}">
          {{data.staff.user.groups[0]}}
        </template>
      </Column>
      <Column field="name" header="Дата записи" style="width:20%">
        <template #body="{data}">
          {{data.order_date}}
        </template>
      </Column>
      <Column field="name" header="Статус" style="width:20%">
        <template #body="{data}">
          <div v-if="Date.parse(data.order_date) > Date.now()">Активная</div>
          <div v-else>Прошедшая</div>
        </template>
        <template #filter="{filterModel,filterCallback}">
          <Dropdown v-model="date" @change="filtere" :options="statuses" placeholder="Все" :showClear="true">
            <template #value="slotProps">
              <span class="customer-badge" v-if="slotProps.value">{{slotProps.value.status}}</span>
            </template>
            <template #option="slotProps">
              <span class="customer-badge">{{slotProps.option.status}}</span>
            </template>
          </Dropdown>
        </template>
      </Column>
      <Column field="name" style="width:20%">
        <template #body="{data}">
          <Button @click="cancelOrder(data)" v-if="Date.parse(data.order_date) > Date.now()" label="Отменить запись" class="p-button-danger" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import userapi from "../services/user";
import orderapi from "../services/order";
export default {
  data() {
    return {
      user: null,
      orders: null,
      statuses:  [{status: 'Все'}, {status: 'Активные'}, {status: 'Прошедшие'}],
      date: null,
      filterOrders: null
    }
  },
  methods: {
    async getOrders() {
      await userapi.userOrders(this.count).then((res) => {
        this.user = res.data;
        this.orders = res.data.orders;
        this.filterOrders = res.data.orders;
      })
    },
    filtere() {
      this.filterOrders = this.orders.filter((e) => {
        if (this.date.status == 'Активные') {
          return Date.parse(e.order_date) > Date.now()
        } else if(this.date.status == 'Прошедшие') {
          return Date.parse(e.order_date) < Date.now()
        } else {
          return true;
        }
      })
    },
    cancelOrder(id) {
      orderapi.cancelOrder(id.id).then(() => {
        this.$toast.add({severity: 'success', detail: "Запись успешно удалена", life: 3000});
        this.getOrders();
      }).catch((e) => {
        this.$toast.add({severity: 'error', detail: e.response.data.detail, life: 3000});
      });
    },
    logout() {
      this.$store.dispatch('onLogout').then(async () => {
        await this.$router.isReady().then(() => {
          this.$router.push({ name: 'signin' });
        })
      });
    }
  },
  mounted() {
    this.getOrders();
  },
  computed: {
    count () {
      return this.$store.state.user.user.user_id;
    }
  }
}
</script>

<style scoped>
</style>