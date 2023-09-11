<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/authStore.js";
const userStore = useAuthStore();

let user = ref([]);

onMounted(() => {
  user.value = userStore.get_user;
  document.body.setAttribute("data-layout-color", "light");
  document.body.setAttribute("data-leftbar-theme", "dark");
  document.body.setAttribute("data-layout-mode", "fluid");
  document.body.setAttribute("ddata-rightbar-onstart", "true");
});
</script>

<template>
  <div class="wrapper">
    <div class="leftside-menu">
      <router-link
        :to="{ name: 'dashboard' }"
        class="logo text-center logo-light"
      >
        <span class="logo-lg">
          <img src="asset/images/logo.png" alt="" height="16" />
        </span>
        <span class="logo-sm">
          <img src="asset/images/logo_sm.png" alt="" height="16" />
        </span>
      </router-link>
      <router-link
        :to="{ name: 'dashboard' }"
        class="logo text-center logo-dark"
      >
        <span class="logo-lg">
          <img src="asset/images/logo-dark.png" alt="" height="16" />
        </span>
        <span class="logo-sm">
          <img src="asset/images/logo_sm_dark.png" alt="" height="16" />
        </span>
      </router-link>

      <div class="h-100" id="leftside-menu-container" data-simplebar>
        <ul class="side-nav">
          <li class="side-nav-title side-nav-item">DASHBOARD</li>
          <li class="side-nav-item">
            <router-link :to="{ name: 'dashboard' }" class="side-nav-link">
              <i class="uil-home-alt"></i>
              <span> HOME </span>
            </router-link>
          </li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-envelopes"></i>
              <span> PROFILE </span>
            </a>
          </li>
          <hr />
          <li class="side-nav-title side-nav-item">BOOKINGS</li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-envelopes"></i>
              <span> SERVICE </span>
            </a>
          </li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-envelopes"></i>
              <span> SPORTS </span>
            </a>
          </li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-question-circle"></i>
              <span> MEETING ROOM </span>
            </a>
          </li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-question-circle"></i>
              <span> TRAINING ROOM</span>
            </a>
          </li>
          <hr />
          <li class="side-nav-title side-nav-item">SUPPORT</li>
          <li class="side-nav-item">
            <a class="side-nav-link">
              <i class="uil-envelopes"></i>
              <span> TICKETING </span>
            </a>
          </li>

          <hr />
          <li class="side-nav-title side-nav-item">ADMINISTRATOR</li>
          <li class="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#ratingDashboards"
              aria-expanded="false"
              aria-controls="ratingDashboards"
              class="side-nav-link"
            >
              <i class="uil-users-alt"></i>
              <span> RATING SYSTEM </span>
            </a>
            <div class="collapse" id="ratingDashboards">
              <ul class="side-nav-second-level">
                <li>
                  <router-link :to="{ name: 'cafeteria-rating' }"
                    >CAFETERIA MENU</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cafeteria-schedule' }"
                    >MENU SCHED</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#bookDashboards"
              aria-expanded="false"
              aria-controls="bookDashboards"
              class="side-nav-link"
            >
              <i class="uil-users-alt"></i>
              <span> BOOKING </span>
            </a>
            <div class="collapse" id="bookDashboards">
              <ul class="side-nav-second-level">
                <li>
                  <a>VEHICLE SERVICE</a>
                </li>
                <li>
                  <a>LAUNDRY SERVICE</a>
                </li>
              </ul>
            </div>
          </li>
          <hr />
          <li class="side-nav-item">
            <a href="#" @click="userStore.logoutUser()" class="side-nav-link">
              <i class="mdi mdi-logout"></i>
              <span> LOG OUT </span>
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="content-page">
      <div class="content">
        <div class="navbar-custom">
          <button class="button-menu-mobile open-left">
            <i class="mdi mdi-menu"></i>
          </button>
        </div>
        <router-view></router-view>
      </div>
      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">© Sample</div>
            <div class="col-md-6">
              <div class="text-md-end footer-links d-none d-md-block">
                <a href="javascript: void(0);">About</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
