<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { ReleaseInfo } from '../../types'

const { data = [] } = await useFetch<ReleaseInfo[]>('/api/releases')
</script>

<template>
  <div flex="~ col gap-8" mxa max-w-180 p10 font-sans lt-sm="px6">
    <div flex="~ col">
      <h1 text-3xl flex="~ gap-2 wrap justify-center items-center font-cal tabular-nums ">
        <a href="https://github.com/leon-fong" target="_blank" flex="~ items-center gap-2">
          <img src="https://github.com/leon-fong.png" mr1 w-12 rounded-full>
          Leon Fong
        </a>
        is <span animate-pulse>Contributing...</span>
      </h1>
      <p mt1 text-center op75>
        <a href="https://github.com/leon-fong" target="_blank">
          Leon Fong's recent pull requests on GitHub
        </a>
      </p>
      <div mx-auto pt-6>
        <NuxtLink
          href="https://github.com/leon-fong/prs.leonfong.me"
          external
          icon-btn
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
            />
          </svg>
          Create your contributions page
        </NuxtLink>
      </div>

      <div p5>
        <hr ma w-20 op25>
      </div>
    </div>

    <div
      v-for="item of data" :key="item.id"
      flex="~ gap-2 items-center"
      lt-sm="gap-4"
    >
      <a
        :href="`https://github.com/${item.repo}`" target="_blank"
        flex-none
      >
        <img
          :src="`https://github.com/${item.repo.split('/')[0]}.png`"
          h-10 w-10 :alt="item.repo"
          border="~ gray/5" bg-gray:5
          :class="item.repo.startsWith('leon-fong/') ? 'rounded-full' : 'rounded'"
          lt-sm="h-12 w-12"
        >
      </a>

      <div flex="~ row gap-3 auto" lt-sm="flex-col">
        <div flex-auto flex="~ col gap-1">
          <div flex="~ gap-2 items-center">
            <a
              flex="~ gap-1 wrap items-center" text-xl
              :href="`https://github.com/${item.repo}`" target="_blank"
            >
              <div op75>{{ item.repo.split('/')[0] }}</div>
              <div op50>/</div>
              <div>{{ item.repo.split('/')[1] }}</div>
            </a>
          </div>
          <a :href="item.pr_url" target="_blank" flex="~ gap-1 items-center" ml--1 op50>
            <div i-ph-git-commit-duotone rotate-90 />
            <span line-clamp-1>{{ item.title }}</span>
          </a>
        </div>
        <div flex="~ col items-end gap-1" flex-shrink-0 lt-sm="flex-row gap-2" text-end>
          <div
            rounded-3xl px-2 py-1 text-sm text-white :bg="item.state === 'Closed' ? '#cf222e' : '#8250df'"
          >
            {{ item.state }}
          </div>
          <time :datatime="item.created_at" op50>{{ formatTimeAgo(new Date(item.created_at)) }}</time>
        </div>
      </div>
    </div>
  </div>
</template>
