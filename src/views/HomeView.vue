<script setup lang="ts">
import CardProduct from "@/components/CardProduct.vue";
</script>

<template>
  <h1 class="my-8 text-2xl text-slate-700 text-center">Produtos</h1>
  <section class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
    <CardProduct v-for="product in $data.products" :key="product.id" v-bind="product" />
  </section>
</template>

<script lang="ts">
import { type IProduct } from "../@types/product";

type DataProduct = {
  loading: boolean;
  products: IProduct[] | null;
  error: string | null;
}

export default {
  data(): DataProduct {
    return {
      loading: false,
      products: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      this.error = this.products = null;
      this.loading = true
      // https://dummyjson.com/docs/products

      const res = await fetch('https://dummyjson.com/products?limit=10')
      const json = await res.json();
      this.products = json.products;
    },
  },
}
</script>
