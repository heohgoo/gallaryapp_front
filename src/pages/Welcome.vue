<template>
<div class="welcome" style="height: 100vh; width: 100vw;">
  <div class="d-flex h-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <nav class="nav nav-masthead justify-content-center float-md-end">
          </nav>
        </div>
      </header>

      <main class="px-5">
        <h1 style="margin: 0 auto; font-family: 'Diphylleia', serif;">Welcome to Gallery</h1>
        <p style="margin-top: 10%; font-family: 'Diphylleia', serif;">
          저희 갤러리에서 마음에 드는 작품들을 관람하고 구매하실 수 있습니다.
          <br>
          사업자 등록을 하시게 되면 정당한 절차를 거쳐 판매도 가능합니다.
          <br>
          현재 특정 작품들을 할인 중에 있습니다!
        </p>
        <br>
        <img :src="require(`@/assets/real_logo.png`)" style="width:300px;"/>
        <p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="move()"
            style="margin-top: 10%; padding: 10px 30px"
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
            router.push({ path: '/home' })
            console.log(store.state.page)
        }

        return { move };
    }

};
</script>

<style>

</style>
