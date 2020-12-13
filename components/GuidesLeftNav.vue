<template>
  <div>
    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">Getting Started</h3>
      <nuxt-link to="guides/hello" class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5" :class="highlight('hello')">
        Hello
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    highlight (section) {
      const current = this.$nuxt._route.params.doc
      if (section === current) {
        return 'text-pink-400 hover:text-pink-500'
      }
    }
  }
}
</script>
