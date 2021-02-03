<template>
  <nuxt-link :to="`guides/${page}`" class=" sm:rounded-tr-none relative group bg-orange-100 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
    <div >
      <h3 class="text-lg font-medium text-orange-600">

          <span class="absolute inset-0" aria-hidden="true"></span>
          {{ title }}

      </h3>
      <p class="mt-2 text-sm text-gray-700">
        {{ description }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String },
    description: { type: String },
    page: { type: String }
  }
}
</script>
