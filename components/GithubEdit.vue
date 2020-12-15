<template>
  <a :href="`https://github.com/cleavr/cleaverdocs/blob/master/content/${section}/${page}.md`"
     class="text-yellow-600 text-sm hover:text-yellow-700"
     target="_blank"
  >
    Want to make this page even better? Edit it on GitHub ->
  </a>
</template>

<script>
export default {
  props: {
    page: {required : false}
  },
  data () {
    return {
      section: ''
    }
  },
  mounted () {
    if (this.$nuxt._route.name === 'doc') {
      this.section = 'documentation'
    } else {
      this.section = 'guides'
    }
  }
}
</script>
