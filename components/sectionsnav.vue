<template>
    <nav class="flex md:items-center">
      <a href="/" class="text-gray-700 hover:text-gray-500 text-sm group flex items-center py-1 pr-5 rounded-md" :class="highlightColor('documentation')">
        <svg class="mr-1 h-4 w-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        Documentation
      </a>

      <a href="#" class="text-gray-700 hover:text-gray-500 text-sm group flex items-center py-1 pr-5 rounded-md">
        <svg class="mr-1 h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Guides
      </a>

      <a href="https://www.youtube.com/channel/UCrLgKI8j01ReLBQudXA_elw" target="_blank" class="text-gray-700 hover:text-gray-500 text-sm group flex items-center py-1 pr-5 rounded-md">
        <svg class="mr-1 h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Videos
      </a>

      <a href="https://headwayapp.co/cleavr-io-updates" target="_blank" class="text-gray-700 hover:text-gray-500 text-sm group flex items-center py-1 pr-5 rounded-md">
        <svg class="mr-1 h-4 w-4 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Release notes
      </a>
    </nav>
</template>

<script>
  export default {
    methods: {
      highlightColor (section) {
        const currentDirectory = this.$route.name
        console.log(section)
        if (section === 'documentation') {
          return 'font-semibold'
        }
      }
    }
  }
</script>
