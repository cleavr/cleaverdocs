<template>
  <div>
    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-1">Getting Started</h3>
      <nuxt-link to="/flash-deployments" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('flash-deployments')">
        Flash Deployments
      </nuxt-link>
      <nuxt-link to="/providers" class="text-gray-500 hover:text-gray-700 group flex items-center py-1 pr-5" :class="highlight('providers')">
        Providers
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-1">Servers</h3>
      <nuxt-link to="/provision" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('provision')">
        Provision Servers
      </nuxt-link>
      <nuxt-link to="/custom-servers" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('custom-servers')">
        Custom Servers
      </nuxt-link>
      <nuxt-link to="/services" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('services')">
        Services
      </nuxt-link>
      <nuxt-link to="/server-users" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('server-users')">
        Server Users
      </nuxt-link>
      <nuxt-link to="/ssh-keys" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('ssh-keys')">
        SSH Keys
      </nuxt-link>
      <nuxt-link to="/cron-jobs" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('cron-jobs')">
        Cron Jobs
      </nuxt-link>
      <nuxt-link to="/process-monitors" class="text-gray-500 hover:text-gray-700 group flex items-center pb-1 pr-5" :class="highlight('process-monitors')">
        Process Monitors
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    highlight (section) {
      const current = this.$nuxt._route.params.doc
      if (section === current) {
        return 'text-pink-400 hover:text-pink-500'
      }
    }
  }
}
</script>
