<template>
  <div class="max-w-6xl mx-auto">
    <mainHeader @openMobileMenu="showMobileMenu = true" />
    <div class="h-screen flex">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <mobilesidebar v-if="showMobileMenu" @closeMobileMenu="closeMobileMenu" :openMobileMenu="showMobileMenu" />
      <!-- Static sidebar for desktop -->
      <desktopsidebar />
      <div class="flex flex-col w-0 flex-1">
        <main class="flex-1 mt-24 relative focus:outline-none" tabindex="0">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Nuxt />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sectionsnav from "~/components/sectionsnav";
import Logo from "~/components/Logo";
import Search from "~/components/search";
import mainHeader from "~/components/mainHeader";
import Mobilesidebar from "~/components/mobilesidebar";
import Desktopsidebar from "~/components/desktopsidebar";

export default {
  components: {Desktopsidebar, Mobilesidebar, mainHeader, Search, Logo, Sectionsnav},
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    closeMobileMenu () {
      console.log("hey")
      this.showMobileMenu = false
    }
  }
}
</script>

<style>
  .prose a {
    color: #2563EB;
    text-decoration: none;
  }

  .prose a:hover {
    color: #3B82F6;
    text-decoration: none;
  }
</style>

