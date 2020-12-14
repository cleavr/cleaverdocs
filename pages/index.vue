<template>
  <div>
    <h1 class="text-3xl font-extrabold text-white sm:text-4xl">
      <span class="text-gray-700">Ready. Set. Launch!</span>
    </h1>
    <h2 class="text-2xl font-semibold text-gray-800 mt-8">
      Popular
    </h2>

    <div class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <popular-doc icon="lightning" doc-title="Flash Deployments" from-color="from-orange-400" to-color="to-red-700" from-hover-color="hover:from-red-700" to-hover-color="hover:to-orange-400" link-to="flash-deployments" />
      <popular-doc icon="providers" doc-title="Providers" from-color="from-teal-400" to-color="to-blue-700" from-hover-color="hover:from-blue-700" to-hover-color="hover:to-teal-400" link-to="providers" />
      <popular-doc icon="github" doc-title="GitHub Actions" from-color="from-gray-500" to-color="to-gray-700" from-hover-color="hover:from-gray-700" to-hover-color="hover:to-gray-500" link-to="github-actions" />
      <popular-doc icon="canary" doc-title="Canary" from-color="from-yellow-400" to-color="to-yellow-600" from-hover-color="hover:from-yellow-600" to-hover-color="hover:to-yellow-400" link-to="canary" />
      <popular-doc icon="hook" doc-title="Deployment Hooks" from-color="from-pink-400" to-color="to-purple-600" from-hover-color="hover:from-purple-600" to-hover-color="hover:to-pink-400" link-to="deployment-hooks" />
      <popular-doc icon="cogs" doc-title="Services" from-color="from-blue-400" to-color="to-blue-600" from-hover-color="hover:from-blue-600" to-hover-color="hover:to-blue-400" link-to="services" />
    </div>

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
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16">
        <div class="bg-orange-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-12">
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Check out the guides!</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-orange-200">From how to connect to servers and databases using popular tools to how to deploy popular frameworks and apps.</p>
              <nuxt-link to="/guides/hello" class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-orange-600 hover:bg-orange-100">View the guides</nuxt-link>
            </div>
          </div>
          <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="/images/newsite.png" alt="Add and deploy a new web app">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

import WelcomeBanner from "~/components/WelcomeBanner";
import PopularDoc from "~/components/PopularDoc";
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {PopularDoc, WelcomeBanner},
  async asyncData({ $content, params }) {
    const currentPage = params.doc
    const doc = await $content(`documentation`, currentPage).fetch()
    return { doc, currentPage }
  },
}
</script>
