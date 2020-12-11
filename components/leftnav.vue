<template>
  <div class="leading-6 text-base ">
    <h3 class="uppercase text-gray-700 font-bold py-1">Getting Started</h3>
    <a href="/flash-deployments" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('flash-deployments')">
      Flash Deployments
    </a>
    <a href="/providers" class="text-gray-500 hover:text-gray-700 group flex items-center py-1 pr-5" :class="highlight('providers')">
      Providers
    </a>
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
