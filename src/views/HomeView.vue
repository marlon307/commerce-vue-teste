<script setup lang="ts">
import CardProduct from "@/components/CardProduct.vue";
</script>

<template>
  <h1 class="my-8 text-2xl text-slate-700 text-center">Produtos</h1>
  <section class="flex flex-wrap justify-center gap-4">
    <CardProduct v-for="product in $data.products" :key="product.id" v-bind="product" />
  </section>
</template>

<script lang="ts">
// https://dummyjson.com/docs/products
interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string
  images: string[]
}

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
      const res = await fetch('https://dummyjson.com/products?limit=10')
      const json = await res.json();
      this.products = json.products;
    },
  },
}
</script>
