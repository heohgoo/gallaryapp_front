<template>
  <!-- <header data-bs-theme="dark"> -->
    <header>
      <div class="collapse bg-dark" id="navbarHeader" style="font-family: 'Orbit', sans-serif;">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 offset-md-1 py-4">
              <h3 class="text-white" style="margin: 0 auto">사이트맵</h3>
              <ul class="list-styled">
                <li>
                  <router-link class="text-white" to="/home">
                    메인 화면</router-link>
                </li>
                <li v-if="$store.state.account.id">
                  <router-link class="text-white" to="/orders">주문 내역</router-link>
                </li>
                <li>
                  <router-link class="text-white" to="/register">사업자 등록</router-link>
                </li>
                <li>
                  <router-link class="text-white" to="/sell">물품 판매</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm" style="font-family: 'Orbit', sans-serif;">
        <div class="container">
          <router-link to="/home" class="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <strong>Gallery</strong>
          </router-link>
          <router-link to="/logout" class="account btn" v-if="$store.state.account.id">
            <button type="button" class="btn btn-success" @click="logout()">로그아웃</button>
          </router-link>
          <router-link to="/login" class="account btn" v-if="!$store.state.account.id">
            <button type="button" class="btn btn-success" aria-hidden="true">로그인</button>
          </router-link>
          <router-link to="/cart" class="cart btn" v-if="$store.state.account.id">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </router-link>
          <router-link to="/signup" class="signup btn" v-if="!$store.state.account.id">
            <button type="button" class="btn btn-primary" aria-hidden="true">회원가입</button>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
</template>

<script>
import store from '@/scripts/store'
import router from '@/scripts/router'
import axios from 'axios'

export default {
  name: 'Header',

  setup() {
    const logout = () => {
      axios.post("/api/account/logout").then(() => {
        store.commit('setAccount', 0);
        router.push({ path: "/home" });
      })
    }

    return { logout };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header ul li a {
  cursor: pointer;
}
header .navbar .cart{
  margin-right: 1%;
  color: white;
}

header .navbar .account {
  margin-right: auto;
  color: white;
}

header .navbar .signup{
  margin-right: 1%;
}
</style>
