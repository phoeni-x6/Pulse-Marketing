<template>
  <main>

    <Hero />
    <WhoFor />
    <Problem />
    <Solution />
    <WhyWorks />
    <Offer />
    <SocialProof />
    <FinalCTA />
    <Footer />
    <WhatsAppFloat />

  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

import Hero from "./components/Hero.vue"
import WhoFor from "./components/WhoFor.vue"
import Problem from "./components/Problem.vue"
import Solution from "./components/Solution.vue"
import WhyWorks from "./components/WhyWorks.vue"
import Offer from "./components/Offer.vue"
import SocialProof from "./components/SocialProof.vue"
import FinalCTA from "./components/FinalCTA.vue"
import Footer from "./components/Footer.vue"
import WhatsAppFloat from "./components/WhatsAppFloat.vue"

/* SEO META */
useHead({
  title: "Pulse Marketing | Get More Customers for Your Local Business",

  meta: [
    {
      name: "description",
      content:
        "Pulse Marketing helps local businesses generate real WhatsApp inquiries using Facebook Ads, Instagram marketing, and Google Maps optimization. Start your free 7-day trial."
    },

    {
      name: "keywords",
      content:
        "local business marketing, whatsapp marketing, facebook ads for local business, instagram ads marketing, google maps marketing, digital marketing sri lanka"
    },

    { name: "robots", content: "index, follow" },

    /* Open Graph */
    {
      property: "og:title",
      content: "Pulse Marketing | Get More Customers — Not Likes"
    },

    {
      property: "og:description",
      content:
        "Get real WhatsApp inquiries from nearby customers using Facebook, Instagram, and Google Maps marketing."
    },

    {
      property: "og:type",
      content: "website"
    },

    {
      property: "og:url",
      content: "https://yourdomain.com"
    },

    {
      property: "og:image",
      content: "https://yourdomain.com/preview.jpg"
    }
  ],

  link: [
    {
      rel: "canonical",
      href: "https://yourdomain.com"
    }
  ],

  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MarketingAgency",
        name: "Pulse Marketing",
        url: "https://yourdomain.com",
        logo: "https://yourdomain.com/pulse-marketing-logo.png",
        description:
          "Pulse Marketing helps local businesses generate real WhatsApp inquiries using Facebook Ads, Instagram marketing and Google Maps optimization."
      })
    }
  ]
})
</script>