<template>
    <!-- ctrl+shift+[ => 접어두기 -->
    <div class="home">
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="left-arrow">
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </div>
          <div class="right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(item, idx) in state.items" :key="idx">
              <Card :item="item"/>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import Card from '@/components/Card.vue';
import axios from "axios";
import { reactive } from 'vue';

export default {
    name: "Home",
    
    components: {
      Card
    },
    
    setup() {
      const state = reactive({
        items: []
      })

      axios.get("/api/items").then((res)=>{
        state.items = res.data;
      })

      return {state};
    }
    
}
</script>

<style>

.left-arrow {
  height: 70px;
  width: 70px;
  float: left;
  margin-top: 28%;
  margin-right: 3%;
}

.right-arrow {
  height: 70px;
  width: 70px;
  float: right;
  margin-top: 28%;
  margin-left: 3%;
}
    
</style>