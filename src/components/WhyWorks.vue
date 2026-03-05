<template>
  <section
    id="why-it-works"
    v-reveal
    class="bg-white text-brand-dark"
  >
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Heading -->
      <div class="text-center mb-16 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          Why Our Local Business Marketing System Works
        </h2>

        <p class="text-brand-dark/70 text-lg">
          We focus on generating real customers and WhatsApp inquiries,
          not confusing digital marketing tactics.
        </p>
      </div>

      <!-- Reasons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        <article class="reason-card animate-fade-up animate-delay-1">
          <span class="icon" aria-hidden="true">📍</span>
          <p>Precise local area targeting instead of random audiences</p>
        </article>

        <article class="reason-card animate-fade-up animate-delay-2">
          <span class="icon" aria-hidden="true">🎯</span>
          <p>Lead-focused Facebook and Instagram ads, not boosted posts</p>
        </article>

        <article class="reason-card animate-fade-up animate-delay-3">
          <span class="icon" aria-hidden="true">🤝</span>
          <p>A simple follow-up system that any business owner can manage</p>
        </article>

        <article class="reason-card animate-fade-up animate-delay-1">
          <span class="icon" aria-hidden="true">📊</span>
          <p>Clear reporting so you understand your marketing results</p>
        </article>

      </div>

      <!-- Closing Statement -->
      <div class="text-center mt-20 animate-fade-up animate-delay-2">
        <p class="text-lg font-semibold text-brand-blue">
          This proven system helps local businesses generate consistent
          inquiries and customers.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.reason-card {
  @apply bg-brand-lavenderSoft border border-brand-blue/10 
         rounded-xl px-6 py-6 flex items-center gap-4 
         text-lg font-semibold shadow-sm transition duration-300;
}

.reason-card:hover {
  @apply shadow-lg border-brand-lavender scale-105;
}

.icon {
  @apply text-brand-lavender;
  font-size: 1.75rem;
}
</style>