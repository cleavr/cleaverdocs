<template>
  <ul>
    <li
      v-for="link of doc.toc"
      :key="link.id"
      :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    doc: {type: Object}
  }
}
</script>
