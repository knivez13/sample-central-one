<script setup>
import { ref, onMounted } from "vue";
import { useCafeteriaStore } from "@/stores/cafeteriaStore.js";
import { voteSurvey } from "@/api/cafeteriaApi.js";

const cafeteriaStore = useCafeteriaStore();

onMounted(async () => {
  await cafeteriaStore.fetchShedShowidAll();
});
const hided = (e) => {
  var x = document.getElementById(e);
  x.style.display = "none";
};

const like = async (e, a, d) => {
  await voteSurvey({
    id: a,
    type: d,
  }).then((data) => {
    console.log(data);
  });
  var x = document.getElementById(e);
  x.style.display = "none";
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card-header pt-4 pb-4 text-center">
          <span
            ><img
              src="https://centralone.ph/wp-content/themes/sandbox/images/logo.png"
              alt="Central One Bataan PH INC."
              height="18"
          /></span>
        </div>
        <div class="page-title-box">
          <h1 class="page-title">Survey Menu For Today</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xxl-3 col-md-6"
        v-for="item in cafeteriaStore.get_shed_menu"
        :key="item.id"
        :id="'divtabs' + item.id"
      >
        <!-- {{ item }} -->
        <div class="card widget-flat">
          <div class="card-body">
            <h6 class="text-muted text-uppercase mt-0" title="Revenue">
              Menu Today
            </h6>
            <h3 class="mb-4 mt-2">{{ item.food_menu.name }}</h3>
            <div
              id="spark2"
              class="apex-charts mb-3"
              data-colors="#34bfa3"
              style="min-height: 100px"
            >
              <img
                class="card-img-top"
                :src="'http://192.168.3.84:8000/' + item.food_menu.picture"
                :alt="item.name"
                style="height: 200px; object-fit: cover"
              />
            </div>

            <div class="row text-center">
              <div class="col-6">
                <!-- <h6 class="text-truncate d-block">Like</h6> -->
                <p class="font-18 mb-0">
                  <button
                    type="button"
                    class="btn btn-outline-primary form-control"
                    @click="like('divtabs' + item.id, item.id, 'like')"
                  >
                    Like
                  </button>
                </p>
              </div>
              <div class="col-6 mb-3">
                <!-- <h6 class="text-truncate d-block">Dislike</h6> -->
                <p class="font-18 mb-0">
                  <button
                    type="button"
                    class="btn btn-outline-warning form-control"
                    @click="like('divtabs' + item.id, item.id, 'dislike')"
                  >
                    Dislike
                  </button>
                </p>
              </div>
              <div class="col-12">
                <!-- <h6 class="text-truncate d-block">Like</h6> -->
                <p class="font-18 mb-0">
                  <button
                    type="button"
                    class="btn btn-outline-success form-control"
                    @click="hided('divtabs' + item.id)"
                  >
                    Skip
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
