<template>
  <div>
    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Connections
      </h3>
      <nuxt-link
        to="/vps-profiles"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('vps-profiles')"
      >
        VPS
      </nuxt-link>
      <nuxt-link
        to="/vc-profiles"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('vc-profiles')"
      >
        Version Control (VC)
      </nuxt-link>
      <nuxt-link
        to="/backup-profiles"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('backup-profiles')"
      >
        Backup
      </nuxt-link>
      <nuxt-link
        to="/dns-profiles"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('dns-profiles')"
      >
        DNS Management
      </nuxt-link>
      <nuxt-link
        to="/notification-profiles"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('notification-profiles')"
      >
        Notification
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Servers
      </h3>
      <nuxt-link
        to="/provision"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('provision')"
      >
        Provision Servers
      </nuxt-link>
      <nuxt-link
        to="/custom-servers"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('custom-servers')"
      >
        Custom Servers
      </nuxt-link>
      <nuxt-link
        to="/load-balancer"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('load-balancer')"
      >
        Load Balancer
      </nuxt-link>
      <nuxt-link
        to="/services"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('services')"
      >
        Services
      </nuxt-link>
      <nuxt-link
        to="/server-users"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('server-users')"
      >
        Server Users
      </nuxt-link>
      <nuxt-link
        to="/databases"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('databases')"
      >
        Databases
      </nuxt-link>
      <nuxt-link
        to="/backups"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('backups')"
      >
        Backups
      </nuxt-link>
      <nuxt-link
        to="/ssh-keys"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ssh-keys')"
      >
        SSH Keys
      </nuxt-link>
      <nuxt-link
        to="/cron-jobs"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('cron-jobs')"
      >
        Cron Jobs
      </nuxt-link>
      <nuxt-link
        to="/process-monitors"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('process-monitors')"
      >
        Process Monitors
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Sites
      </h3>
      <nuxt-link
        to="/new-sites"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('new-sites')"
      >
        Adding New Sites
      </nuxt-link>
      <nuxt-link
        to="/change-domain"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('change-domain')"
      >
        Change Domain
      </nuxt-link>
      <nuxt-link
        to="/authentication"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('authentication')"
      >
        Authentication
      </nuxt-link>
      <nuxt-link
        to="/ssl"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ssl')"
      >
        SSL
      </nuxt-link>
      <nuxt-link
        to="/nginx-cache"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('nginx-cache')"
      >
        NGINX Cache
      </nuxt-link>
      <nuxt-link
        to="/redirects"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('redirects')"
      >
        Redirects
      </nuxt-link>
      <nuxt-link
        to="/staging"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('staging')"
      >
        Staging
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Web Apps
      </h3>
      <nuxt-link
        to="/web-apps"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('web-apps')"
      >
        Adding New Web App
      </nuxt-link>
      <nuxt-link
        to="/deployments"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('deployments')"
      >
        Deployments
      </nuxt-link>
      <nuxt-link
        to="/log-reports"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('log-reports')"
      >
        Log Reports
      </nuxt-link>
      <nuxt-link
        to="/canary"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('canary')"
      >
        Canary
      </nuxt-link>
      <nuxt-link
        to="/github-actions"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('github-actions')"
      >
        GitHub Actions
      </nuxt-link>
      <nuxt-link
        to="/environment-variables"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('environment-variables')"
      >
        Environment Variables
      </nuxt-link>
      <nuxt-link
        to="/deployment-hooks"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('deployment-hooks')"
      >
        Deployment Hooks
      </nuxt-link>
      <nuxt-link
        to="/rollbacks"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('rollbacks')"
      >
        Rollbacks
      </nuxt-link>
      <nuxt-link
        to="/web-app-servers"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('web-app-servers')"
      >
        Servers
      </nuxt-link>
      <nuxt-link
        to="/web-app-settings"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('web-app-settings')"
      >
        Settings
      </nuxt-link>
      <nuxt-link
        to="/queue-workers"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('queue-workers')"
      >
        Queue Workers
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        DNS Records
      </h3>
      <nuxt-link
        to="/new-domain"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('new-domain')"
      >
        Adding New Domain
      </nuxt-link>
      <nuxt-link
        to="/managing-records"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('managing-records')"
      >
        Managing Records
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Troubleshooting
      </h3>
      <nuxt-link
        to="/adonis-deployments"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('adonis-deployments')"
      >
        Adonis Deployments
      </nuxt-link>
      <nuxt-link
        to="/nodejs-deployments"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('nodejs-deployments')"
      >
        NodeJS Deployments
      </nuxt-link>
      <nuxt-link
        to="/laravel-deployments"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('laravel-deployments')"
      >
        Laravel Deployments
      </nuxt-link>
      <nuxt-link
        to="/lets-encrypt"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('lets-encrypt')"
      >
        Let's Encrypt Error
      </nuxt-link>
      <nuxt-link
        to="/nginx-errors"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('nginx-errors')"
      >
        NGINX Errors
      </nuxt-link>
      <nuxt-link
        to="/ssh-access-denied"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('ssh-access-denied')"
      >
        SSH Access Denied
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Quick Scripts
      </h3>
      <nuxt-link
        to="/quick-scripts"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('quick-scripts')"
      >
        Setup
      </nuxt-link>
    </div>

    <div class="text-base mt-3">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        FAQ
      </h3>
      <nuxt-link
        to="/security-measures"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('security-measures')"
      >
        Security Measures
      </nuxt-link>
      <nuxt-link
        to="/deploy-with-cleavr"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('deploy-with-cleavr')"
      >
        Add Deploy button
      </nuxt-link>
      <nuxt-link
        to="/update-avatar"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('update-avatar')"
      >
        Update Avatar
      </nuxt-link>
      <nuxt-link
        to="/dark-mode"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('dark-mode')"
      >
        Enable Dark Mode
      </nuxt-link>
      <nuxt-link
        to="/delete-account"
        class="text-gray-600 hover:text-gray-700 group flex items-center pb-3 pr-5"
        :class="highlight('delete-account')"
      >
        Delete Account
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
