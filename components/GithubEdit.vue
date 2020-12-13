<template>
  <a :href="`https://github.com/LittleBets/cleaverdocs/blob/master/content/documentation/${page}.md`"
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
  }
}
</script>
