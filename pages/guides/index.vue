<template>
  <div>
    <guide-hero />
    <guide-help />
   <!-- <div class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <popular-doc icon="lightning" doc-title="Flash Deployments" from-color="from-orange-400" to-color="to-red-700" from-hover-color="hover:from-red-700" to-hover-color="hover:to-orange-400" link-to="flash-deployments" />
      <popular-doc icon="providers" doc-title="Providers" from-color="from-teal-400" to-color="to-blue-700" from-hover-color="hover:from-blue-700" to-hover-color="hover:to-teal-400" link-to="providers" />
      <popular-doc icon="github" doc-title="GitHub Actions" from-color="from-gray-500" to-color="to-gray-700" from-hover-color="hover:from-gray-700" to-hover-color="hover:to-gray-500" link-to="github-actions" />
      <popular-doc icon="canary" doc-title="Canary" from-color="from-yellow-400" to-color="to-yellow-600" from-hover-color="hover:from-yellow-600" to-hover-color="hover:to-yellow-400" link-to="canary" />
      <popular-doc icon="hook" doc-title="Deployment Hooks" from-color="from-pink-400" to-color="to-purple-600" from-hover-color="hover:from-purple-600" to-hover-color="hover:to-pink-400" link-to="deployment-hooks" />
      <popular-doc icon="cogs" doc-title="Services" from-color="from-blue-400" to-color="to-blue-600" from-hover-color="hover:from-blue-600" to-hover-color="hover:to-blue-400" link-to="services" />
    </div>-->
  </div>
</template>

<script>
import PopularDoc from "~/components/PopularDoc";
import GuideHero from "@/components/global/GuideHero";
import GuideHelp from "@/components/GuideHelp";

export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {GuideHelp, GuideHero, PopularDoc},
}
</script>
