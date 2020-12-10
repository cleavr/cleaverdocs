<template>
  <div>
    <div v-html="this.page" class="prose" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const doc = params.doc
    const page = await import(`./${doc}.md`).then(result => result.default)
    return { doc, page }
  },
}
</script>
