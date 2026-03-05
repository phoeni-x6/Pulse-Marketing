<template>
  <section v-reveal class="bg-white text-brand-dark">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Heading -->
      <div class="text-center mb-16 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          Local Businesses Are Moving Online
        </h2>
        <p class="text-brand-dark/70 text-lg">
          You don’t need to be a big brand to get real customers.
        </p>
      </div>

      <!-- Trust Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div class="proof-card animate-fade-up animate-delay-1">
          <div class="icon">🤝</div>
          <p>Trusted by local businesses</p>
        </div>

        <div class="proof-card animate-fade-up animate-delay-2">
          <div class="icon">🇱🇰</div>
          <p>Designed for Sri Lankan SMEs</p>
        </div>

        <div class="proof-card animate-fade-up animate-delay-3">
          <div class="icon">📈</div>
          <p>Local support & transparent reporting</p>
        </div>

      </div>

      <!-- Placeholder Note -->
      <div class="text-center mt-16 animate-fade-up animate-delay-2">
        <p class="text-sm text-brand-dark/50">
          *Client results and testimonials will be added soon.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.proof-card {
  @apply bg-brand-lavenderSoft border border-brand-blue/10 
         rounded-2xl px-8 py-10 text-center text-lg 
         font-semibold shadow-sm transition duration-300;
}

.proof-card:hover {
  @apply shadow-lg border-brand-lavender scale-105;
}

.icon {
  @apply text-brand-lavender;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
</style>