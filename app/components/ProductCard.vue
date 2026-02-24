<template>
  <div class="group cursor-pointer">
    <div
      class="w-full aspect-[4/5] mb-2 overflow-hidden relative"
      :class="bgClass"
    >
      <!-- Product image -->
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="name"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 80 80" class="w-16 h-16 opacity-20" fill="currentColor">
          <rect x="20" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="40" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M30 55 L40 45 L50 55" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
      <!-- Wishlist heart icon -->
      <button
        aria-label="Add to wishlist"
        class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-black">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    </div>
    <p class="font-serif text-[13px] leading-tight text-black mb-1">{{ name }}</p>
    <p class="text-[14px] font-semibold text-black">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  price: string
  imageBg: string
  imageSrc?: string
}>()

const bgClass = computed(() => {
  return props.imageBg === 'dark'
    ? 'bg-gray-800 text-gray-400'
    : 'bg-[#E8D5C8] text-gray-600'
})
</script>
