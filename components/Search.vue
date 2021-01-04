<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="docs"
    class="w-full"
  >
    <ais-index index-name="guides" />
    <ais-configure
      :hits-per-page.camel="4"
      :attributesToSnippet="['bodyPlainText']"
    >
      <ais-autocomplete v-click-outside="onClickOutside">
        <div slot-scope="{ currentRefinement, indices, refine }">
          <input
            type="search"
            ref="searchInput"
            class="w-full py-2 px-3"
            :value="currentRefinement"
            :placeholder="searchPlaceholder"
            autocomplete="off"
            @input="refine($event.currentTarget.value)"
            @focus="showResults = true"
            @keydown.up.prevent="highlightPrevious"
            @keydown.down.prevent="highlightNext"
            @keydown.enter="goToDoc(indices)"
          >
          <div v-if="currentRefinement.length && showResults" class="absolute z-10 transform mt-3 px-2 w-screen max-w-md sm:px-0">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-gray-900 text-gray-100 px-5 py-6 sm:gap-8 sm:p-8">
                <div v-if="totalResults(indices) === 0" class="text-sm">
                  <p>
                    Nothing to show... 😞
                  </p>
                  <p class="mt-3">
                    Should there be? Let us know on the <a href="https://forum.cleavr.io" target="_blank" class="text-blue-500 hover:text-blue-400">forum</a>.
                  </p>
                </div>
                <div v-if="currentRefinement" v-for="section in indices" :key="section.objectID" class="divide-y divide-blue-900">
                  <div v-if="section.hits.length">
                    <h2 class="uppercase text-orange-500 py-1 px-2">{{section.indexName}}</h2>
                  </div>
                  <nuxt-link :to="section.indexName === 'guides' ? `/guides/${hit.objectID}` : hit.objectID" v-for="(hit, index) in section.hits" :key="hit.objectID"
                             class="block text-sm col-span-2 py-2 transition ease-in-out duration-150"
                             :position="section.indexName === 'docs' ? index : indices[0].hits.length + index"
                             :class="{ 'bg-blue-900': isCurrentIndex(section.indexName === 'docs' ? index : indices[0].hits.length + index)}"
                  >
                    <div class="px-2" @mouseover="highlightedIndex = (section.indexName === 'docs' ? index : indices[0].hits.length + index)">

                      <ais-highlight attribute="title" :hit="hit" class="block text-blue-300 font-medium" />
                      <ais-snippet attribute="bodyPlainText" :hit="hit" class="block text-gray-100 font-base" />
                    </div>
                  </nuxt-link>
                </div>
                <ais-powered-by theme="dark" class="px-2" />
              </div>
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-configure>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      searchClient: algoliasearch(
        'EVJH6MC2UJ',
        '2410e19a2c436d23c08935d012eeca29'
      ),
      showResults: true,
      highlightedIndex: -1,
      resultsCount: 0,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('keydown', event => {
        if(event.metaKey && event.key === 'k'){
          this.$refs.searchInput.focus()
          event.preventDefault()
        }
      })
    });
  },
  watch: {
    '$route' () {
      this.showResults = false
      this.$refs.searchInput.blur()
    },
  },
  computed: {
    searchPlaceholder () {
      if (navigator.appVersion.indexOf('Mac')!==-1) {
        return 'Search (⌘K)'
      } else if (navigator.appVersion.indexOf('Win')!==-1) {
        return 'Search (Win + K)'
      } else {
        return 'Search'
      }
    }
  },
  methods: {
    totalResults (results) {
      this.resultsCount = results[0].hits.length + results[1].hits.length
      return this.resultsCount
    },
    onClickOutside () {
      this.showResults = false
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.resultsCount - 1) {
        this.highlightedIndex += 1
      }
    },
    isCurrentIndex (index) {
      return index === this.highlightedIndex
    },
    goToDoc (indices) {
      if (this.highlightedIndex < indices[0].hits.length) {
        this.$nuxt.$router.push(`/${indices[0].hits[this.highlightedIndex].objectID}`)
      } else {
        this.$nuxt.$router.push(`/guides/${indices[1].hits[this.highlightedIndex - indices[0].hits.length].objectID}`)
      }
    }
  }
};
</script>

