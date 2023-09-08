<script setup>
import { ref, onMounted, reactive } from "vue";
import { cafeteriaSave } from "@/api/cafeteriaApi.js";
import { useCafeteriaStore } from "@/stores/cafeteriaStore.js";
const cafeteriaStore = useCafeteriaStore();

onMounted(async () => {
  await cafeteriaStore.fetchAll();
});

const form = reactive({
  image: "",
  name: "",
});

const convertToBase64 = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    form.image = reader.result;
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};

const submit = async () => {
  await cafeteriaSave(form).then(({ data }) => {
    cafeteriaStore.fetchAll();
    form.image = "";
    form.name = "";
    document.getElementById("myform").reset(); // console.log(data);
  });
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">CAFETERIA MENU</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row mb-2">
          <div class="col-sm-8">
            <form @submit.prevent="submit" id="myform">
              <div class="mb-3 input-group">
                <input
                  type="file"
                  class="form-control"
                  @change="convertToBase64"
                  id="inputFile"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  placeholder="Enter Menu Name"
                  required
                />
                <button type="submit" class="btn btn-primary">Upload</button>
              </div>
            </form>
          </div>
          <!-- end col-->
        </div>

        <div class="row">
          <div
            class="col-md-6 col-xxl-3"
            v-for="item in cafeteriaStore.get_menu"
            :key="item.id"
          >
            <div class="card d-block">
              <img
                class="card-img-top"
                :src="'http://192.168.3.84:8000/' + item.picture"
                :alt="item.name"
                style="height: 200px; object-fit: cover"
              />

              <div class="card-body position-relative">
                <h4 class="mt-0">
                  <a href="#" class="text-title">{{ item.name }}</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
