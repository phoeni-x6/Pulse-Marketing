<template>
  <footer
    v-reveal
    class="relative overflow-hidden bg-brand-blueDark text-white border-t-4 border-brand-lavender"
  >
    <!-- Subtle Background Glow -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-lavender opacity-10 blur-3xl rounded-full"></div>

    <div class="relative max-w-6xl mx-auto px-6 py-20">

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<!-- LEFT: Logo + Tagline -->
<div class="flex flex-col items-center md:items-start text-center md:text-left">

  <div class="bg-white/95 backdrop-blur-xl 
              border border-white/30 
              rounded-3xl px-12 py-10
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

    <img
      src="/LOGO.png"
      alt="Pulse Marketing Logo"
      class="h-32 md:h-36 lg:h-40 w-auto"
    />

  </div>

  <p class="mt-6 text-lg font-semibold text-white/90">
    Serving Sri Lankan Businesses 🇱🇰
  </p>

</div>
        <!-- RIGHT: Contact + Info -->
        <div class="text-center md:text-left space-y-6">

          <div class="space-y-3 text-lg">
            <p>
              📞 WhatsApp:
              <span class="text-brand-lavender font-semibold">
                94XXXXXXXXX
              </span>
            </p>

            <p>
              📧 Email:
              <span class="text-brand-lavender font-semibold">
                your@email.com
              </span>
            </p>
          </div>

          <div class="border-t border-white/20 pt-6 text-sm text-white/70">
            <p class="mb-3">
              Limited slots available per area to avoid competition between clients.
            </p>
            <p>
              © {{ new Date().getFullYear() }} Pulse Marketing. All rights reserved.
            </p>
          </div>

        </div>

      </div>

    </div>
  </footer>
</template>