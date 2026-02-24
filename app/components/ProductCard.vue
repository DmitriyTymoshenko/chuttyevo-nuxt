<template>
  <div class="group cursor-pointer">
    <div
      class="w-full aspect-square mb-3 overflow-hidden"
      :class="bgClass"
    >
      <div class="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 80 80" class="w-16 h-16 opacity-20" fill="currentColor">
          <rect x="20" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="40" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M30 55 L40 45 L50 55" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <p class="text-sm text-brand-black mb-1">{{ name }}</p>
    <p class="text-sm font-semibold text-brand-black">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  price: string
  imageBg: string
}>()

const bgClass = computed(() => {
  return props.imageBg === 'dark'
    ? 'bg-gray-800 text-gray-400'
    : 'bg-brand-blush text-brand-dark'
})
</script>
