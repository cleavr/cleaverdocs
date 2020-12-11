<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900 capitalize">{{ this.doc.replace('-', ' ') }}</h1>
    <div v-html="this.page" class="prose" />
    <div class="mt-24">
      <a :href="`https://github.com/LittleBets/cleaverdocs/blob/master/pages/${doc}.md`"
         class="text-indigo-600 text-sm hover:text-indigo-700"
         target="_blank"
      >
        Want to make this page better? Edit it on GitHub ->
      </a>
    </div>
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
