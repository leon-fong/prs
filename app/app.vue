<script setup lang="ts">
useDark()
</script>

<template>
  <div fixed left-0 top-0 h-full w-full class="-z-10">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] bg-white dark:bg-dark" />
  </div>

  <div class="min-h-[100svh] flex flex-col justify-stretch">
    <NuxtPage />
    <footer class="mt-auto p-2 text-center text-sm opacity-75 hover:opacity-100">
      <a
        class="hover:underline"
        href="https://github.com/leon-fong/prs"
      >
        source
      </a>
      &middot;
      inspiration <a
        class="font-semibold hover:underline"
        href="https://x.com/antfu7"
      >
        @antfu7
      </a>
    </footer>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
  background: #121212;
  color: white;
}
</style>
