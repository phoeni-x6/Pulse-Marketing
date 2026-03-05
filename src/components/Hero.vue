<template>
  <header
    id="hero"
    v-reveal
    class="relative overflow-hidden bg-heroGradient text-white"
  >
    
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-brand-lavender opacity-20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

    <div class="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">

      <!-- Logo -->
      <div class="mb-14 animate-fade-up animate-delay-1 flex justify-center">
        <div
          class="bg-white/95 backdrop-blur-xl border border-white/30 rounded-3xl px-12 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <img
            src="/pulse-marketing-logo.png"
            alt="Pulse Marketing digital marketing agency logo"
            class="h-36 md:h-44 lg:h-52 w-auto"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <!-- Main Headline -->
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up animate-delay-2"
      >
        We Help Local Businesses Get More Customers —
        <span class="text-brand-lavender">
          Not Likes
        </span>
      </h1>

      <!-- Supporting Text -->
      <p
        class="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-12 animate-fade-up animate-delay-3"
      >
        Pulse Marketing helps local businesses generate real WhatsApp inquiries
        from nearby customers using Facebook Ads, Instagram marketing, and
        Google Maps optimization.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">

        <!-- Primary CTA -->
        <a
          href="https://wa.me/94XXXXXXXXX?text=Hi%20I%20want%20the%207-day%20trial"
          aria-label="Start your free 7 day marketing trial with Pulse Marketing on WhatsApp"
          class="w-full sm:w-auto bg-brand-lavender hover:bg-brand-blue text-white font-bold text-lg px-10 py-4 rounded-xl transition-transform duration-200 hover:scale-105 shadow-lg"
        >
          👉 Get a Free 7-Day Trial
        </a>

        <!-- Secondary CTA -->
        <a
          href="https://wa.me/94XXXXXXXXX"
          aria-label="Chat with Pulse Marketing on WhatsApp"
          class="w-full sm:w-auto border border-white/40 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-xl transition"
        >
          📞 Chat on WhatsApp Now
        </a>

      </div>

    </div>
  </header>
</template>