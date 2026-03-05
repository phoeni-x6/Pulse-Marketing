<template>
  <footer
    id="footer"
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
              src="/pulse-marketing-logo.png"
              alt="Pulse Marketing digital marketing agency logo"
              class="h-32 md:h-36 lg:h-40 w-auto"
              loading="lazy"
              decoding="async"
            />

          </div>

          <p class="mt-6 text-lg font-semibold text-white/90">
            Helping Sri Lankan Businesses Grow Online 🇱🇰
          </p>

        </div>

        <!-- RIGHT: Contact + Info -->
        <div class="text-center md:text-left space-y-6">

          <address class="not-italic space-y-3 text-lg">

            <p>
              📞 WhatsApp:
              <a
                href="https://wa.me/94XXXXXXXXX"
                aria-label="Contact Pulse Marketing on WhatsApp"
                class="text-brand-lavender font-semibold hover:underline"
              >
                +94 XXXXXXXXX
              </a>
            </p>

            <p>
              📧 Email:
              <a
                href="mailto:your@email.com"
                aria-label="Send email to Pulse Marketing"
                class="text-brand-lavender font-semibold hover:underline"
              >
                your@email.com
              </a>
            </p>

          </address>

          <div class="border-t border-white/20 pt-6 text-sm text-white/70">
            <p class="mb-3">
              Limited client slots available per area to avoid competition between businesses.
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