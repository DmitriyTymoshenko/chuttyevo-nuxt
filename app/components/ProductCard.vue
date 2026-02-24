<template>
  <div class="flex flex-col gap-2 w-full">
    <!-- Product Image: 343x360 with carousel dots and action buttons -->
    <div class="relative w-full overflow-hidden" style="aspect-ratio: 343/360;">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="name"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full bg-[#e8e8e8] flex items-center justify-center">
        <span class="text-[#999] text-sm">No Image</span>
      </div>

      <!-- Carousel dots: 3 dots at top -->
      <div class="absolute top-[4px] left-[4px] right-[4px] flex gap-[2px]">
        <div class="flex-1 h-[4px] bg-white rounded-sm"></div>
        <div class="flex-1 h-[4px] bg-white/50 rounded-sm"></div>
        <div class="flex-1 h-[4px] bg-white/50 rounded-sm"></div>
      </div>

      <!-- Action buttons: right side, vertical stack -->
      <div class="absolute top-0 right-0 flex flex-col gap-1 p-0" style="top: 0; right: 0;">
        <button class="w-8 h-8 bg-white flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78 5.5 5.5 0 0 0-7.78 0L12 5.67z" />
          </svg>
        </button>
        <button class="w-8 h-8 bg-white flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
        <button class="w-8 h-8 bg-white flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Thumbnail row: 4 small thumbnails, 60x60, gap 16 -->
    <div class="flex gap-4 bg-white py-0">
      <div v-for="i in 4" :key="i" class="w-[60px] h-[60px] bg-white overflow-hidden flex-shrink-0">
        <div class="w-full h-full bg-gray-100 flex items-center justify-center relative">
          <div class="absolute bottom-0 right-0 w-3 h-3 bg-black flex items-center justify-center">
            <div class="w-[9.6px] h-[9.6px] bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Info: sku, name, price -->
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <span class="text-[12px] leading-[14.63px] text-[#7d7d7d] font-sans font-normal">{{ sku }}</span>
        <span class="text-[16px] leading-[24px] text-black font-sans font-medium">{{ name }}</span>
      </div>
      <span class="text-[18px] leading-[21.94px] text-black font-sans font-semibold">{{ price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sku: string
  name: string
  price: string
  imageSrc?: string
}>()
</script>
