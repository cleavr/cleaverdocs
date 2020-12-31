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
            id="searchInput"
            class="w-full py-2 px-3"
            :value="currentRefinement"
            :placeholder="searchPlaceholder"
            autocomplete="off"
            @input="refine($event.currentTarget.value)"
            @focus="showResults = true"
          >
          <div v-if="currentRefinement.length && showResults" class="absolute z-10 transform mt-3 px-2 w-screen max-w-md sm:px-0">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-gray-900 text-gray-100 px-5 py-6 sm:gap-8 sm:p-8">
                <div v-if="!indices[0].hits.length && !indices[1].hits.length" class="text-sm">
                  <p>
                    Nothing to show... 😞
                  </p>
                  <p class="mt-3">
                    Should there be? Let us know on the <a href="https://forum.cleavr.io" target="_blank" class="text-blue-500 hover:text-blue-400">forum</a>.
                  </p>
                </div>
                <div v-if="currentRefinement" v-for="index in indices" :key="index.objectID" class="divide-y divide-blue-900">
                  <div v-if="index.hits.length">
                    <h2 class="uppercase text-orange-500 py-1 px-2">{{index.indexName}}</h2>
                  </div>
                  <nuxt-link :to="index.indexName === 'guides' ? `/guides/${hit.objectID}` : hit.objectID" v-for="hit in index.hits" :key="hit.objectID"
                             class="block text-sm col-span-2 py-2 hover:bg-blue-800 transition ease-in-out duration-150"
                  >
                    <div class="px-2">
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
      showResults: true
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('keydown', event => {
        if(event.metaKey && event.key === 'k'){
          document.getElementById('searchInput').focus()
          event.preventDefault()
        }
      })
    });
  },
  watch: {
    '$route' () {
      this.showResults = false
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
    onClickOutside () {
      this.showResults = false
    },
  }
};
</script>

