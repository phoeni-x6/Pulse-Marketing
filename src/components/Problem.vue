<template>
  <section
    v-reveal
    class="bg-softGradient text-brand-dark"
  >
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Heading -->
      <div class="text-center mb-20 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          Most Local Businesses Struggle Because
        </h2>
        <p class="text-brand-dark/70 text-lg">
          Online presence alone doesn’t bring customers.
        </p>
      </div>

      <!-- Pain Timeline -->
      <div class="max-w-4xl mx-auto relative">

        <!-- Vertical Line -->
        <div class="absolute left-4 top-0 h-full w-1 bg-brand-blue/20 rounded-full"></div>

        <!-- Pain Item -->
        <div class="relative pl-16 mb-10 animate-fade-up animate-delay-1">
          <div class="dot">❌</div>
          <div class="pain-card">
            They have social media pages<br />
            <span class="text-brand-dark/60">but no real inquiries</span>
          </div>
        </div>

        <div class="relative pl-16 mb-10 animate-fade-up animate-delay-2">
          <div class="dot">❌</div>
          <div class="pain-card">
            Their ads reach<br />
            <span class="text-brand-dark/60">the wrong people</span>
          </div>
        </div>

        <div class="relative pl-16 mb-10 animate-fade-up animate-delay-3">
          <div class="dot">❌</div>
          <div class="pain-card">
            They don’t appear on Google Maps<br />
            <span class="text-brand-dark/60">when customers search</span>
          </div>
        </div>

        <div class="relative pl-16 animate-fade-up animate-delay-1">
          <div class="dot">❌</div>
          <div class="pain-card">
            They don’t have time<br />
            <span class="text-brand-dark/60">to manage online marketing</span>
          </div>
        </div>

      </div>

      <!-- Punchline -->
      <div class="text-center mt-24 animate-fade-up animate-delay-2">
        <p class="text-2xl md:text-3xl font-extrabold">
          Likes don’t pay the bills.
          <span class="text-brand-lavender block mt-2">
            Customers do.
          </span>
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pain-card {
  @apply bg-white border border-brand-blue/10 rounded-xl px-6 py-5 text-lg font-semibold shadow-sm transition duration-300;
}

.pain-card:hover {
  @apply shadow-lg border-brand-lavender;
}

.dot {
  @apply absolute left-0 top-5 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold bg-brand-lavender;
}
</style>