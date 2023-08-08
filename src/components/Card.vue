<template>
    <div class="card shadow-sm">
        <span class="painting" :style="{backgroundImage: `url(${item.imgPath})`}"/>
        <div class="card-body">
        <p class="card-text">
            <span>{{ item.name }} &nbsp;</span>
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
    margin-left: 35%
}
</style>