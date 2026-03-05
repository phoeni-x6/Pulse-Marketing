<template>
  <section v-reveal class="bg-white text-brand-dark">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Heading -->
      <div class="text-center mb-20 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-brand-blue">
          How We Get You Customers in 3 Simple Steps
        </h2>
        <p class="text-brand-dark/70 text-lg">
          No complicated systems. Just results.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Step 1 -->
        <div class="step-card animate-fade-up animate-delay-1">
          <div class="step-number">1</div>
          <h3 class="step-title">Target the Right People</h3>
          <p class="step-text">
            We show your business to people nearby who are already interested in what you offer.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="step-card animate-fade-up animate-delay-2">
          <div class="step-number">2</div>
          <h3 class="step-title">Send Them to WhatsApp or Your Shop</h3>
          <p class="step-text">
            No complicated websites. Direct contact means faster sales and real conversations.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="step-card animate-fade-up animate-delay-3">
          <div class="step-number">3</div>
          <h3 class="step-title">Track Real Inquiries</h3>
          <p class="step-text">
            You see messages, calls, and visits — not confusing marketing numbers.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.step-card {
  @apply bg-brand-lavenderSoft border border-brand-blue/10 rounded-2xl p-8 text-center transition duration-300 shadow-sm;
}

.step-card:hover {
  @apply shadow-xl border-brand-lavender scale-105;
}

.step-number {
  @apply w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center 
         text-white text-xl font-extrabold 
         bg-brand-blue transition;
}

.step-card:hover .step-number {
  @apply bg-brand-lavender;
}

.step-title {
  @apply text-xl font-bold mb-3 text-brand-blue;
}

.step-text {
  @apply text-brand-dark/70;
}
</style>