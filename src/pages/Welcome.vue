<template>
<div class="welcome" style="height: 100vh; width: 100vw">
  <div class="d-flex h-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <nav class="nav nav-masthead justify-content-center float-md-end">
          </nav>
        </div>
      </header>

      <main class="px-5">
        <h1 style="margin-top: 0%">Welcome to Gallery</h1>
        <p style="margin-top: 10%">
          저희 갤러리에서 마음에 드는 작품들을 관람하고 구매하실 수 있습니다.
          <br>
          현재 특정 작품들을 할인 중에 있습니다!
        </p>
        <img :src="require(`@/assets/real_logo.png`)" style="margin-top: 10%; width:300px;"/>
        <p>
          <button
            class="btn btn-primary"
            @click="move()"
            style="margin-top: 5%; padding: 10px 30px"
            >메인 화면으로 이동
          </button>
        </p>
      </main>
    </div>
  </div>
</div>

</template>

<script>
import router from '@/scripts/router';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const move = () => {
            store.commit("setPage")
            router.replace({ path: '/home' })
            console.log(store.state.page)
        }

        return { move };
    }

};
</script>

<style scoped>
</style>
