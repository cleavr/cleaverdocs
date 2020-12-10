<template>
  <div class="hidden bg-white md:flex md:flex-shrink-0 ">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-3 pb-4 fixed">
        <logo />
      </div>
      <div class="fixed pl-6 mt-16 py-3 pr-12 h-full overflow-y-auto">
        <span class="text-sm text-gray-400 italic">Keep moving forward. 👟</span>
        <leftnav class="mt-6" />
      </div>
    </div>
  </div>
</template>
<script>
import Leftnav from "~/components/leftnav";
import Logo from "~/components/Logo";
export default {
  components: {Logo, Leftnav},
}
</script>
