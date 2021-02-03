<template>
  <div>
    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Deploy
      </h3>
      <nuxt-link
        to="guides/nuxt"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('nuxt')"
      >
        Nuxt
      </nuxt-link>
      <nuxt-link
        to="guides/strapi-cms"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('strapi-cms')"
      >
        Strapi CMS
      </nuxt-link>
      <nuxt-link
        to="guides/drupal-cms"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('drupal-cms')"
      >
        Drupal CMS
      </nuxt-link>
      <nuxt-link
        to="guides/grav-cms"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('grav-cms')"
      >
        Grav CMS
      </nuxt-link>
      <nuxt-link
        to="guides/quasar-ssr"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('quasar-ssr')"
      >
        Quasar SSR
      </nuxt-link>
      <nuxt-link
        to="guides/statamic-cms"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('statamic-cms')"
      >
        Statamic CMS
      </nuxt-link>
    </div>

    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Server
      </h3>
      <nuxt-link
        to="guides/load-balancer"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('load-balancer')"
      >
        Load Balancers
      </nuxt-link>
      <nuxt-link
        to="guides/ssh-server"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ssh-server')"
      >
        Access via SSH
      </nuxt-link>
      <nuxt-link
        to="guides/putty-server"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('putty-server')"
      >
        Access via PuTTY
      </nuxt-link>
      <nuxt-link
        to="guides/ftp-server"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ftp-server')"
      >
        Access via FTP
      </nuxt-link>
      <nuxt-link
        to="guides/point-domain"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('point-domain')"
      >
        Point domain
      </nuxt-link>
      <nuxt-link
        to="guides/volume-storage"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('volume-storage')"
      >
        Volume Storage
      </nuxt-link>
    </div>

    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Site
      </h3>
      <nuxt-link
        to="guides/domain-aliases"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('domain-aliases')"
      >
        Domain Aliases
      </nuxt-link>
    </div>

    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Database
      </h3>
      <nuxt-link
        to="guides/ssh-database"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ssh-database')"
      >
        Access via SSH
      </nuxt-link>
      <nuxt-link
        to="guides/client-database"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('client-database')"
      >
        Access via client
      </nuxt-link>
    </div>

    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        WordPress
      </h3>
      <nuxt-link
        to="guides/wordpress-create"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('wordpress-create')"
      >
        Create
      </nuxt-link>
      <nuxt-link
        to="guides/wordpress-advanced-configs"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('wordpress-advanced-configs')"
      >
        Advanced Configs
      </nuxt-link>
      <nuxt-link
        to="guides/wordpress-upload-limits"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('wordpress-upload-limits')"
      >
        Upload Limits
      </nuxt-link>
      <nuxt-link
        to="guides/wordpress-multisite"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('wordpress-multisite')"
      >
        Multisite
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    highlight (section) {
      const current = this.$nuxt._route.params.guide
      if (section === current) {
        return 'text-pink-400 hover:text-pink-500'
      }
    }
  }
}
</script>
