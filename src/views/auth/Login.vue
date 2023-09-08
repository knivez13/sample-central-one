<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore.js";
const userStore = useAuthStore();

onMounted(async () => {
  document.body.setAttribute("class", "authentication-bg");
  document.body.setAttribute("data-layout-config", '{"darkMode":true}');
});

const form = ref({
  email: "bonjourdeguzman@gmail.com",
  password: "password",
});

const login = async () => {
  await userStore.loginUser(form.value);
};
</script>
<template>
  <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-lg-5">
          <div class="card">
            <div class="card-header pt-4 pb-4 text-center bg-primary">
              <router-link :to="{ name: 'home' }">
                <span
                  ><img src="./asset/images/logo.png" alt="" height="18"
                /></span>
              </router-link>
            </div>

            <div class="card-body p-4">
              <div class="text-center w-75 m-auto">
                <h4 class="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                <p class="text-muted mb-4">
                  Enter your email address and password to access admin panel.
                </p>
              </div>

              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="emailaddress" class="form-label"
                    >Email address</label
                  >
                  <input
                    class="form-control"
                    type="email"
                    id="emailaddress"
                    v-model="form.email"
                    required=""
                    placeholder="Enter your email"
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      v-model="form.password"
                      class="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div class="mb-3 mb-0 text-center">
                  <button class="btn btn-primary" type="submit">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
