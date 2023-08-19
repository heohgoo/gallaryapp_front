<template>
    <div class="card shadow-sm">
        <span class="painting" :style="{backgroundImage: `url(${item.imgPath})`}"/>
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

export default {
    name: "Card",

    props:{
        item: Object
    },

    setup() {
        const addToCart = (itemId) => {
            axios.post(`/api/cart/items/${itemId}`).then(() => {
                console.log('success')
            })
        }
        return { lib, addToCart }
        // lib 라이브러리 사용
    }
}
</script>

<style scoped>
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
</style>