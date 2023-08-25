<template>
    <transition name="fade">
    <div id="modalWrap" v-if="state.isModal">
      <div id="modalContent">
        <div id="modalBody">
          <span id="closeBtn" @click="modalclose()">&times;</span>
          <img :src="item.imgPath" style="width: 500px; height: 500px; border: 2px dotted black; border-radius: 5px;"/>
          <p style="font-size: 20px; font-weight: bold; margin-top: 20px;">{{ item.name }}</p>
          <p style="font-size: 15px; padding-bottom: 30px;">${{ lib.getNumberFormatted(item.price) }} </p>
        </div>
      </div>
    </div>
    </transition>
    <div class="card shadow-sm">
        <span class="painting" :style="{backgroundImage: `url(${item.imgPath})`}" @click="modalopen()"/>
        <div class="card-body">
        <p class="card-text">
            <span style="font-family: 'Black Han Sans', sans-serif;">{{ item.name }} &nbsp;</span>
            <span class="discount badge bg-danger">
                    {{ item.discountPer }}% 할인
            </span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-primary" @click="addToCart(item.id)">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            <small class="price text-muted">
                ${{ lib.getNumberFormatted(item.price) }} 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </small>
            <small class="real text-danger">
                ${{ lib.getNumberFormatted(item.price * (1 - 0.01*item.discountPer)) }}
            </small>
        </div>
        </div>
    </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: "Card",

    props:{
        item: Object,
    },

    setup() {
        const state = reactive({
            isModal: false,
        })

        const addToCart = (itemId) => {
            axios.post(`/api/cart/items/${itemId}`).then(() => {
                console.log('success');
            })
        }

        const modalopen = () => {
            state.isModal = true;
        }

        const modalclose = () => {
            state.isModal = false;
        }

        return { state, lib, addToCart, modalclose, modalopen }
        // lib 라이브러리 사용
    }
}
</script>

<style>
.card .painting {
    display:inline-block;
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
}

.card .card-body .price {
    text-decoration: line-through;
    margin-left: 0 auto;
}

.fade-enter-from, .fade-leave-to {
  transform: scale(0.2);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-to, .fade-leave-from {
  transform: scale(1);
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
  transition: all 0.3s;
}

#modalBody {
  width: 800px;
  height: 800px;
  padding: 30px 30px;
  margin: 0 auto;
  border: 1px solid #777;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
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