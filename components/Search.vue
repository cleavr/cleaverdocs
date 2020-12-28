<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="docs"
    class="absolute"
  >
    <ais-configure
      :hitsPerPage="5"
      :restrictSearchableAttributes="['title']"
    />
    <ais-index index-name="docs" />
    <ais-autocomplete>
      <template slot-scope="{ currentRefinement, indices, refine }">
        <vue-autosuggest
          :suggestions="indicesToSuggestions(indices)"
          @selected="onSelect"
          :input-props="{
                style: 'width: 100%',
                onInputChange: refine,
                placeholder: 'Search here…',
              }"
        >
          <template slot-scope="{ suggestion }">
            <nuxt-link :to="suggestion.item.objectID">{{ suggestion.item.title }}</nuxt-link>
          </template>
        </vue-autosuggest>
      </template>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { VueAutosuggest } from 'vue-autosuggest';
import 'instantsearch.css/themes/algolia.css';

export default {
  components: { VueAutosuggest },
  data() {
    return {
      searchClient: algoliasearch(
        'EVJH6MC2UJ',
        '2410e19a2c436d23c08935d012eeca29'
      ),
    };
  },
  methods: {
    onSelect(selected) {
      console.log(selected)
      if (selected) {
        this.$nuxt.$route(selected.item.title);
      }
    },
    indicesToSuggestions(indices) {
      return indices.map(({hits}) => ({
        data: hits,
      }));
    },
  }
};
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.ais-Highlight-highlighted {
  background: cyan;
  font-style: normal;
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #4dba87, #2f9088);
  color: #fff;
  margin-bottom: 1rem;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-title::after {
  content: ' ▸ ';
  padding: 0 0.5rem;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

#autosuggest input {
  font: inherit;
}

.autosuggest__results-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.autosuggest__results-container ul {
  margin: 0;
  padding: 0;
}

.autosuggest__results_item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  list-style-type: none;
  padding: 0.5em;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
}

.autosuggest__results_item img {
  height: 3em;
}

.autosuggest__results_item-highlighted {
  background-color: rgba(0, 0, 0, 0.24);
}
</style>
