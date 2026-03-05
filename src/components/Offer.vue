<template>
  <section v-reveal class="bg-heroGradient text-white">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">

      <!-- Offer Box -->
      <div
        class="max-w-4xl mx-auto bg-white text-brand-dark rounded-3xl p-10 md:p-14 shadow-2xl text-center animate-fade-up"
      >

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-brand-blue">
          Try Our System for
          <span class="text-brand-lavender">7 Days — Risk Free</span>
        </h2>

        <!-- Description -->
        <p class="text-lg text-brand-dark/70 mb-10 max-w-2xl mx-auto">
          We run a 7-day trial campaign to prove results before you commit to anything.
        </p>

        <!-- Benefits -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">

          <div class="benefit-item animate-fade-up animate-delay-1">
            ✔ Get real WhatsApp inquiries
          </div>

          <div class="benefit-item animate-fade-up animate-delay-2">
            ✔ No long-term commitment
          </div>

          <div class="benefit-item animate-fade-up animate-delay-3">
            ✔ Continue only if you’re satisfied
          </div>

          <div class="benefit-item animate-fade-up animate-delay-1">
            ✔ Simple reporting, no confusion
          </div>

        </div>

        <!-- Risk Reversal -->
        <div class="mb-10 animate-fade-up animate-delay-2">
          <p class="text-xl font-bold">
            👉 No results?
            <span class="text-brand-lavender">
              You don’t continue.
            </span>
          </p>
        </div>

        <!-- CTA -->
        <a
          href="https://wa.me/94XXXXXXXXX?text=Hi%20I%20want%20the%207-day%20trial"
          class="inline-block w-full sm:w-auto 
                 bg-brand-blue hover:bg-brand-lavender 
                 text-white font-bold text-lg 
                 px-12 py-4 rounded-xl 
                 transition-transform duration-200 
                 hover:scale-105 shadow-lg"
        >
          👉 Start My Free 7-Day Trial
        </a>

      </div>

    </div>
  </section>
</template>

<style scoped>
.benefit-item {
  @apply bg-brand-lavenderSoft border border-brand-blue/10 
         rounded-xl px-6 py-4 text-lg font-semibold 
         transition duration-300;
}

.benefit-item:hover {
  @apply border-brand-lavender shadow-md;
}
</style>