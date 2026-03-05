<template>
  <a
    href="https://wa.me/94XXXXXXXXX"
    target="_blank"
    class="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 animate-bounce-soft"
    aria-label="Chat on WhatsApp"
  >
    <span class="text-3xl">💬</span>
  </a>
</template>

<style scoped>
@keyframes bounceSoft {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-bounce-soft {
  animation: bounceSoft 2.5s ease-in-out infinite;
}
</style>
