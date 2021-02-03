<template>
  <div>
    <guide-hero />
    <PopularGuides class="mt-12" />
    <guide-help />
  </div>
</template>

<script>
import PopularDoc from "~/components/PopularDoc";
import GuideHero from "@/components/global/GuideHero";
import GuideHelp from "@/components/GuideHelp";
import PopularGuides from "@/components/PopularGuides";

export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {PopularGuides, GuideHelp, GuideHero, PopularDoc},
}
</script>
