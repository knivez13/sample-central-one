<script setup>
import { ref, onMounted, reactive } from "vue";
import { cafeteriaShedSave } from "@/api/cafeteriaApi.js";

import { useCafeteriaStore } from "@/stores/cafeteriaStore.js";
const cafeteriaStore = useCafeteriaStore();

onMounted(async () => {
  await cafeteriaStore.fetchAll();
  await cafeteriaStore.fetchShedAll();
});

const form = reactive({
  food_menu_id: "",
  date: "",
});

const headers = [
  { text: "Food Name", value: "food_menu.name" },
  { text: "Date", value: "date" },
  { text: "Like Counts", value: "like" },
  { text: "Dislike Counts", value: "dislike" },
];

const dateselected = ref(null);

const filterdate = async () => {
  await cafeteriaStore.fetchShedByidAll({ date: dateselected.value });
};

const submit = async () => {
  await cafeteriaShedSave(form).then(({ data }) => {
    cafeteriaStore.fetchShedAll();
    form.food_menu_id = "";
    form.date = "";
  });
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Sched Food Menu</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <form @submit.prevent="submit" id="myform">
              <div class="mb-3 input-group">
                <select
                  id="inputState"
                  class="form-select"
                  required
                  v-model="form.food_menu_id"
                >
                  <option value="">Choose Food</option>
                  <option
                    v-for="item in cafeteriaStore.get_menu"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Choose a date"
                  v-model="form.date"
                  required
                />
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>

          <div class="col-6">
            <input
              type="date"
              class="form-control"
              placeholder="Choose a date"
              v-model="dateselected"
              @change="filterdate"
              required
            />
          </div>
        </div>

        <EasyDataTable
          :headers="headers"
          :items="cafeteriaStore.get_shed_menu"
          buttons-pagination
          alternating
          table-class-name="customize-table"
        >
          <template #empty-message>
            <a>nothing here</a>
          </template>
        </EasyDataTable>
      </div>
    </div>
  </div>
</template>
<style scoped>
.customize-table {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #313a46;

  --easy-table-body-row-font-size: 14px;
  --easy-table-footer-font-size: 14px;
}
</style>
