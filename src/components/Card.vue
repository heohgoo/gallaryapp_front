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
            <button class="btn btn-primary">구입</button>
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

export default {
    name: "Card",

    props:{
        item: String
    },
    setup(){
        return {lib}
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