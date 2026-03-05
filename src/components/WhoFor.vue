<template>
  <section v-reveal class="bg-brand-lavenderSoft text-brand-dark">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Section Heading -->
      <div class="text-center mb-14 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          This Is for You If You Are a:
        </h2>
        <p class="text-brand-dark/70 text-lg">
          We work best with local businesses that want real customers — not vanity metrics.
        </p>
      </div>

      <!-- Business Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="business-card animate-fade-up animate-delay-1">
          <div class="icon">🍽️</div>
          <p>Restaurant, Café, or Takeaway</p>
        </div>

        <div class="business-card animate-fade-up animate-delay-2">
          <div class="icon">💇‍♀️</div>
          <p>Salon or Spa</p>
        </div>

        <div class="business-card animate-fade-up animate-delay-3">
          <div class="icon">🏋️‍♂️</div>
          <p>Gym or Fitness Studio</p>
        </div>

        <div class="business-card animate-fade-up animate-delay-1">
          <div class="icon">🏥</div>
          <p>Clinic or Service Business</p>
        </div>

        <div class="business-card animate-fade-up animate-delay-2">
          <div class="icon">🏪</div>
          <p>Retail or Local Shop Owner</p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.business-card {
  @apply bg-white border border-brand-blue/10 rounded-2xl py-10 px-6 text-center text-lg font-semibold transition duration-300 shadow-sm;
}

.business-card:hover {
  @apply shadow-xl border-brand-lavender scale-105;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
</style>