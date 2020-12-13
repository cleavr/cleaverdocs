<template>
  <div class="hidden bg-white md:flex md:flex-shrink-0 ">
    <div class="flex flex-col w-64">
      <div class="fixed pl-6 pt-16 pb-6 pr-12 h-full overflow-y-auto">
        <leftnav class="mt-6" />
      </div>
    </div>
  </div>
</template>
<script>
import Leftnav from "~/components/LeftNav";
import Logo from "~/components/Logo";
export default {
  components: {Logo, Leftnav},
}
</script>
