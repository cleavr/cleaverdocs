<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16">
      <div class="bg-orange-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-12">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Check out the guides!</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-orange-200">From how to connect to servers and databases using popular tools to how to deploy popular frameworks and apps.</p>
            <nuxt-link to="/guides" class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-orange-600 hover:bg-orange-100">View the guides</nuxt-link>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="/images/newsite.png" alt="Add and deploy a new web app">
        </div>
      </div>
    </div>
  </div>
</template>
