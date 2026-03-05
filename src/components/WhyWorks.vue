<template>
  <section v-reveal class="bg-white text-brand-dark">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Heading -->
      <div class="text-center mb-16 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          Why Our System Works
        </h2>
        <p class="text-brand-dark/70 text-lg">
          We focus on customers — not confusing marketing tactics.
        </p>
      </div>

      <!-- Reasons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        <div class="reason-card animate-fade-up animate-delay-1">
          <span class="icon">📍</span>
          <p>Local area targeting — not random audiences</p>
        </div>

        <div class="reason-card animate-fade-up animate-delay-2">
          <span class="icon">🎯</span>
          <p>Lead-focused ads — not boosted posts</p>
        </div>

        <div class="reason-card animate-fade-up animate-delay-3">
          <span class="icon">🤝</span>
          <p>Simple follow-up process anyone can manage</p>
        </div>

        <div class="reason-card animate-fade-up animate-delay-1">
          <span class="icon">📊</span>
          <p>Clear reporting you actually understand</p>
        </div>

      </div>

      <!-- Closing Statement -->
      <div class="text-center mt-20 animate-fade-up animate-delay-2">
        <p class="text-lg font-semibold text-brand-blue">
          This is the same system used by successful local businesses worldwide.
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