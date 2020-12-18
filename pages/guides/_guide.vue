<template>
  <div>
    <h1 class="text-3xl font-semibold text-gray-900 pb-8 capitalize">{{ doc.title }}</h1>
    <NuxtContent :document="doc" class="prose" />
    <div class="mt-24">
      <github-edit :page="this.currentPage"/>
      <cleavr-deploy />
    </div>
  </div>
</template>

<script>
import PageContents from "~/components/PageContents";
import GithubEdit from "~/components/GithubEdit";
import CleavrDeploy from "~/components/CleavrDeploy";
export default {
  components: {
    CleavrDeploy,
    GithubEdit,
    PageContents
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  async asyncData({ $content, params }) {
    const currentPage = params.guide
    const doc = await $content(`guides`, currentPage).fetch()
    return { doc, currentPage }
  },
  head() {
    return {
      title: this.doc.title + ' - Cleavr docs',
      meta: [
        {hid: 'description', name: 'description', content: this.doc.description},
        // Open Graph
        {hid: 'og:title', property: 'og:title', content: this.doc.title},
        {hid: 'og:description', property: 'og:description', content: this.doc.description},
        // Twitter Card
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
        {hid: 'twitter:site', name: 'twitter:site', content: '@thecleavr'},
        {hid: 'twitter:title', name: 'twitter:title', content: this.doc.title},
        {hid: 'twitter:description', name: 'twitter:description', content: this.doc.description},
        {hid: 'twitter:image', name: 'twitter:image', content: this.doc.image},
        {hid: 'twitter:player', name: 'twitter:player', content: this.doc.video}
      ]
    }
  }
}
</script>
