<template>
  <div class="mt-16">
    <div class="py-5">
      <h3 class="text-2xl leading-6 font-semibold text-gray-800">
        Need help troubleshooting deployments?
      </h3>
      <div class="mt-5 max-w-2xl text-gray-600">
        <p>
          There's a myriad of things that can cause a deployment to not turn out as expected. If you're stuck, check out these docs for help.
        </p>
      </div>
      <div class="mt-5 text-sm">
        <nuxt-link to="/adonis-deployments" class="inline-flex items-center px-5 py-3 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Adonis deployments
        </nuxt-link>
        <nuxt-link to="/nodejs-deployments" class="md:ml-5 inline-flex items-center px-5 py-3 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          NodeJS deployments
        </nuxt-link>
        <nuxt-link to="/laravel-deployments" class="md:ml-5 inline-flex items-center px-5 py-3 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Laravel deployments
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
