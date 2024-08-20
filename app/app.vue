<script setup lang="ts">
useDark()
</script>

<template>
  <div class="min-h-[100svh] flex flex-col justify-stretch">
    <NuxtPage />
    <footer class="mt-auto p-2 text-center text-sm opacity-75 hover:opacity-100">
      <a
        class="hover:underline"
        href="https://github.com/leon-fong/pr.leonfong.me"
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

a:hover {
  text-decoration: underline;
}
</style>
