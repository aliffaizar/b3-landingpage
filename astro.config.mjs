// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://aliffaizar.github.io",
  base: process.env.NODE_ENV === "production" ? "/b3-landingpage" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
