<script lang="ts">
import { type IProduct } from "../@types/product";
type DataProduct = {
  loading: boolean;
  product: IProduct | null;
  error: string | null;
}

export default {
  data(): DataProduct {
    return {
      loading: false,
      product: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again

    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData(this.$route.params.id as string)
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    async fetchData(productId: string) {
      this.error = this.product = null;
      this.loading = true
      const res = await fetch(`https://dummyjson.com/products/${productId}`)
      const json = await res.json();
      this.product = json;
    },
  },
}
</script>

<template>
  <section class="my-6 grid grid-cols-[auto] md:grid-cols-[60%,auto] gap-4 px-4">
    <figure class="mx-auto flex h-[60vh] md:h-[80vh] max-h-[700px] w-full items-center justify-center">
      <img :src="$data.product?.thumbnail" width="400" height="400" alt="Image - product">
    </figure>
    <div class="space-y-6">
      <div class="space-y-4 border-b pb-6">
        <h1 class="text-5xl font-medium">
          {{ $data.product?.title }}
        </h1>
        <div class="w-max flex-none rounded-full bg-blue-700 px-4 py-1 text-center">
          <span class="text-lg text-blue-50">{{ $data.product?.price.toLocaleString('pt-BR', {
            currency: 'BRL', style:
              'currency'
          }) }}</span>
        </div>
      </div>
      <button type="button"
        class="rounded-full bg-blue-700 px-12 py-4 text-blue-50 transition-transform hover:bg-blue-600 active:scale-95">
        Adicionar ao carrinho
      </button>
      <dl class="text-slate-500">
        <dt class="text-slate-700">
          Detalhes
        </dt>
        <dl>{{ $data.product?.description }}</dl>
      </dl>
    </div>
  </section>
</template>
