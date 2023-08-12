<template>
    <main class="form-signin w-100 m-auto">
        <h1 class="h3 mb-3 fw-normal">회원가입</h1>
  
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            @keyup.enter="submit()"
            v-model="state.form.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            @keyup.enter="submit()"
            v-model="state.form.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password Confirmation"
            @keyup.enter="submit()"
            v-model="state.form.passwordconfirm"
          />
          <label for="floatingPassword">Password Confirmation</label>
        </div>
        <button class="btn btn-primary w-100 py-2" @click="submit()">Sign up</button>
        <p class="mt-5 mb-3 text-body-secondary">&copy; Gallery Application</p>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  import { reactive } from 'vue';
  import router from '@/scripts/router';
  
  export default {
    setup() {
      const state = reactive({
        form: {
          email: "",
          password: "",
          passwordconfirm: "",
        }
      })

      const submit = () => {
        if (state.form.password == state.form.passwordconfirm) {
        axios.post("/api/account/signup", state.form).then(() => {
          router.push({ path: "/home" });
          window.alert("회원가입 완료");
        }).catch(() => {
          window.alert("이미 가입한 아이디입니다.");
        })
        }

        else {
          window.alert('비밀번호를 다시 한 번 확인해주세요.');
        }
      }
      return { state, submit };
  },
}
  </script>
  
  <style>
  .form-signin {
    max-width: 330px;
    padding: 1rem;
  }
  
  .form-signin .form-floating:focus-within {
    z-index: 2;
  }
  
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .form-signin input[type="passwordc"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  </style>