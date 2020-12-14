<template>
  <nuxt-link :to="linkTo" class="col-span-1 flex shadow-sm rounded-md text-white bg-gradient-to-tr
            transform py-3 focus:outline-none" :class="backgroundColors"
  >
    <div class="flex-shrink-0 flex items-center justify-center w-16 text-sm font-medium rounded-l-md">
      <icon :name="icon" class="h-5 w-5 text-white fill-white" stroke="2" />
    </div>
    <div class="flex-1 flex items-center justify-between rounded-r-md truncate">
      <div class="flex-1 pr-4 py-2 font-semibold">
        {{ docTitle }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  import Icon from "~/components/global/icon";
  export default {
    components: {Icon},
    props: {
      fromColor: {type: String, required: true},
      toColor: {type: String, required: true},
      icon: {type: String, required: true},
      docTitle: {type: String, required: true},
      linkTo: {type: String, required: true}
    },
    computed: {
      backgroundColors () {
        return `from-${this.fromColor} to-${this.toColor} hover:from-${this.toColor} hover:to-${this.fromColor}`
      }
    }
  }
</script>
