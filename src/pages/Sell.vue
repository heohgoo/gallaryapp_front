<template>
  <div class="order" style="font-family: 'Diphylleia', serif">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <h2>판매하기</h2>
        </div>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">판매 상품</span
              ><span class="badge bg-primary rounded-pill"> 이미지 </span>
            </h4>
            <div>
              <img
                :src="state.form.imgPath"
                style="
                  width: 300px;
                  height: 400px;
                  display: block;
                  margin: 0 auto;
                  margin-top: 30px;
                "
                v-if="state.form.imgPath != ''"
              />
            </div>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">판매자 정보</h4>
            <div class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-12">
                  <label for="username" class="form-label">이름</label>
                  <input type="text" class="form-control" id="username" />
                </div>
                <div class="col-12">
                  <label for="address" class="form-label">주소</label
                  ><input type="text" class="form-control" id="address" />
                </div>
              </div>
              <hr class="my-4" />
              <h4 class="mb-3">판매 물품</h4>
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">작품명</label
                  ><input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    v-model="state.form.name"
                  />
                </div>
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">판매 가격</label
                  ><input
                    type="text"
                    class="form-control"
                    id="cc-price"
                    v-model="state.form.price"
                  />
                </div>
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">할인율</label
                  ><input
                    type="text"
                    class="form-control"
                    id="cc-discountper"
                    v-model="state.form.discountPer"
                  />
                </div>
              </div>
              <hr class="my-4" />
              <span class="badge rounded-pill bg-dark" style="font-size: 20px"
                >작품 등록하기</span
              >
              <br />
              <input
                style="margin-top: 20px"
                @change="upload"
                accept="image/*"
                type="file"
                id="file"
              />
              <button
                class="w-100 btn btn-primary btn-lg"
                style="margin-top: 40px"
                @click="submit()"
              >
                판매하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/scripts/router";
export default {
  setup() {
    const state = reactive({
      form: {
        name: "",
        imgPath: "",
        price: 0,
        discountPer: 0,
      },
    });

    const upload = (e) => {
      let a = e.target.files;
      console.log(a[0]);
      let url = URL.createObjectURL(a[0]);
      console.log(url);
      state.form.imgPath = url;
    };

    const submit = () => {
      axios
        .post("/api/sell", state.form)
        .then((res) => {
          console.log(res);
          router.push({ path: "/home" });
          window.alert("판매 완료");
        })
        .catch(() => window.alert("판매 정보가 불확실합니다."));
    };

    return { state, upload, submit };
  },
};
</script>

<style></style>
