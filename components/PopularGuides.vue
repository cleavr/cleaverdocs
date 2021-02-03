<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800 mt-8">
      Popular
    </h2>
    <div class="rounded-lg bg-orange-300 overflow-hidden shadow divide-y divide-orange-300 sm:divide-y-0 grid sm:grid-cols-2 sm:gap-px mt-8">
      <PopularCard
        title="Deploy Strapi CMS"
        description="Deploy your Strapi headless CMS sites and be sure to enable the GitHub Actions integration to use GitHub build time to
      provide relief to your servers."
        page="strapi-cms"
      />

      <PopularCard
        title="Deploy Quasar SSR Apps"
        description="Quasar is about beauty and performance. Check out the detailed guide to see how you can quickly deploy your Quasar SSR apps."
        page="quasar-ssr"
      />

      <PopularCard
        title="Set up a Load Balancer"
        description="Learn how you can set up a load balancer to direct traffic across your app servers using a Cloudflare load balancer."
        page="load-balancer"
      />

      <PopularCard
        title="Access servers via SSH"
        description="Cleavr helps you add and manage SSH keys on your servers. See how you can access your servers over SSH."
        page="ssh-server"
      />

      <PopularCard
        title="How to access database with client tools"
        description="Cleavr enforces access using SSH for added security. View typical settings for accessing your database with a client tool, such as TablePlus."
        page="client-database"
      />
      <PopularCard
        title="Enable WordPress Multisite"
        description="Discover how Cleavr helps simplify enabling Multisite mode for your WordPress website installations."
        page="wordpress-multisite"
      />
    </div>
  </div>
</template>
<script>
import PopularCard from "@/components/global/PopularCard";
export default {
  components: {PopularCard}
}
</script>
