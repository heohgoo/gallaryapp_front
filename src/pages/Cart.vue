<template>
  <div class="cart">
    <!-- Modal -->
    <div id="modalWrap" v-if="state.isModal">
      <div id="modalContent">
        <div id="modalBody">
          <span id="closeBtn" @click="modalclose()">&times;</span>
          <p>modal-popup 입니다.</p>
        </div>
      </div>
    </div>
    <div class="container" style="font-family: 'Diphylleia', serif">
      <ul>
        <li v-for="(i, idx) in state.items" :key="idx">
          <img :src="i.imgPath" @click="modalopen()" />
          <span class="name">작품명 : {{ i.name }}</span>
          <span class="price"
            >할인 적용가 : ${{
              lib.getNumberFormatted(i.price - (i.price * i.discountPer) / 100)
            }}</span
          >
          <i class="fa fa-trash" @click="remove(i.id)"></i>
        </li>
      </ul>
      <router-link
        to="/order"
        class="btn btn-primary"
        v-if="state.items.length > 0"
        >구입하기</router-link
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import lib from "@/scripts/lib";
import router from "@/scripts/router";

export default {
  setup() {
    const state = reactive({
      items: [],
      isModal: false,
    });

    const load = () => {
      axios.get("/api/cart/items").then(({ data }) => {
        console.log(data);
        state.items = data;
        if (state.items.length == 0) {
          window.alert("장바구니에 담은 품목이 없습니다.");
          router.push("/home");
        }
      });
    };

    const remove = (itemId) => {
      axios.delete(`/api/cart/items/${itemId}`).then(() => {
        load();
      });
    };

    const modalopen = () => {
      state.isModal = true;
    };

    const modalclose = () => {
      state.isModal = false;
    };

    load();

    return { state, lib, remove, modalopen, modalclose };
  },
};
</script>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name {
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 40px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-top: 65px;
  margin-right: 50px;
}

.cart .btn {
  width: 250px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px 50px;
  font-size: 20px;
}


#modalWrap {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  font-family: 'Diphylleia', serif;
}

#modalBody {
  width: 800px;
  height: 800px;
  padding: 30px 30px;
  margin: 0 auto;
  border: 1px solid #777;
  border-radius: 10px;
  background-color: #fff;
}

#closeBtn {
  margin-top: -10px;
  float:right;
  font-weight: bold;
  color: #777;
  font-size:25px;
  cursor: pointer;
}
</style>
