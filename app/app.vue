<template>
  <div class="min-h-screen bg-white font-sans max-w-[375px] mx-auto">
    <!-- Top Promo Banner -->
    <div class="bg-black text-white text-center py-[10px] px-4">
      <p class="text-[10px] font-medium tracking-[0.08em] uppercase">
        БЕЗКОШТОВНА ДОСТАВКА ВІД 2500 ГРН
      </p>
    </div>

    <!-- Header / Navigation -->
    <header class="flex items-center justify-between px-4 py-3">
      <!-- Left: Search -->
      <div class="flex items-center">
        <button aria-label="Search" class="w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-black">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      <!-- Center: Logo -->
      <div class="flex-1 text-center">
        <h1 class="text-[18px] font-serif italic tracking-wide text-black">chuttyevo</h1>
      </div>

      <!-- Right: Heart + Bag -->
      <div class="flex items-center gap-3">
        <button aria-label="Favorites" class="w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-black">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button aria-label="Cart" class="w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-black">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="px-4 py-2 text-[11px] text-[#999999]">
      <span>Головна</span>
      <span class="mx-1">›</span>
      <span class="text-black">Набори</span>
    </nav>

    <!-- Hero Section with Overlay Text -->
    <section class="relative">
      <div class="w-full h-[220px] bg-gray-900 overflow-hidden relative">
        <img
          src="/images/hero.png"
          alt="Срібні прикраси Chuttyevo"
          class="w-full h-full object-cover opacity-70"
        />
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/30"></div>
        <!-- Text overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 class="font-serif italic text-[22px] leading-[1.2] uppercase text-white mb-3">
            Ми вже подумали за вас та підібрали готові набори
          </h2>
          <p class="text-[12px] leading-[1.5] text-white/90">
            Ми зібрали готові набори срібних прикрас, щоб вам не довелося витрачати час на вибір. Просто оберіть той, що відгукується вам.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-[#EEEEEE]">
      <span class="text-[12px] text-[#333333]">товарів 17</span>
      <button class="flex items-center gap-2 text-[12px] text-[#333333]">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" class="w-4 h-4">
          <line x1="1" y1="4" x2="15" y2="4" />
          <line x1="1" y1="8" x2="15" y2="8" />
          <line x1="1" y1="12" x2="15" y2="12" />
          <circle cx="5" cy="4" r="1.5" fill="currentColor" />
          <circle cx="11" cy="8" r="1.5" fill="currentColor" />
          <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        </svg>
        Фільтри
      </button>
    </div>

    <!-- Product Grid - 2 columns -->
    <section class="px-4 py-4">
      <div class="grid grid-cols-2 gap-x-3 gap-y-5">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :name="product.name"
          :price="product.price"
          :image-bg="product.bg"
          :image-src="product.img"
        />
      </div>
    </section>

    <!-- View More Button -->
    <div class="px-4 pb-8 pt-2 text-center">
      <button class="w-[80%] border border-black text-black py-3 text-[13px] font-medium tracking-wide hover:bg-black hover:text-white transition-colors">
        Переглянути більше
      </button>
    </div>

    <!-- Brand Story Section -->
    <section class="px-4 py-8">
      <div class="w-full h-[200px] bg-[#f5f5f5] mb-4 overflow-hidden">
        <div class="w-full h-full flex items-center justify-center">
          <span class="text-[#999999] text-sm">Editorial Image</span>
        </div>
      </div>
      <h3 class="font-serif italic text-[22px] leading-[1.2] text-black mb-3">
        Срібні прикраси, що мають значення
      </h3>
      <p class="text-[12px] leading-[1.6] text-[#333333] mb-3">
        Chuttyevo — це не просто інтернет-магазин срібних прикрас. Це місце, де кожен виріб створений з любов'ю, де кожна деталь складає історію. Ми віримо, що прикраси мають не лише підкреслювати красу, а й розповідати свою історію, настрій, значення.
      </p>
      <a href="#" class="text-[12px] text-black underline underline-offset-4">
        Читати далі ›
      </a>
    </section>

    <!-- Newsletter Section -->
    <section class="mx-4 mb-8 bg-[#F5F0EB] p-6">
      <h3 class="font-serif italic text-[22px] leading-[1.2] text-black mb-3 text-center">
        -5% на чуттєві прикраси за підписку на розсилку
      </h3>
      <p class="text-[12px] text-[#444444] text-center mb-5 leading-[1.5]">
        В кожному листі вас чекатимуть: новинки, знижки, рекомендації та трішки натхнення.
      </p>
      <div class="space-y-3">
        <input
          type="email"
          placeholder="Email"
          class="w-full border border-[#CCCCCC] px-4 py-3 text-[13px] bg-white focus:outline-none focus:border-black"
        />
        <input
          type="tel"
          placeholder="+380"
          class="w-full border border-[#CCCCCC] px-4 py-3 text-[13px] bg-white focus:outline-none focus:border-black"
        />
        <button class="w-full bg-black text-white py-3 text-[13px] font-medium tracking-wide">
          Підписатись на розсилку
        </button>
      </div>
      <label class="flex items-start gap-2 mt-3">
        <input type="checkbox" class="mt-1 accent-black" />
        <span class="text-[10px] text-[#666666] leading-tight">
          Підписуюсь на розсилку та даю згоду надсилати мені інформацію відповідно до Політики конфіденційності.
        </span>
      </label>
    </section>

    <!-- Footer -->
    <footer class="px-4 py-8 border-t border-[#EEEEEE]">
      <!-- Logo & Contact -->
      <div class="text-center mb-8">
        <p class="font-serif italic text-[20px] text-black mb-3">chuttyevo</p>
        <p class="text-[12px] text-[#333333]">+38 (063) 198 43 81</p>
        <p class="text-[12px] text-[#333333]">User@gmail.com</p>
      </div>

      <!-- Catalog Grid -->
      <div class="mb-6">
        <h4 class="font-semibold text-[14px] text-black mb-3">Каталог</h4>
        <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-[12px] text-[#444444]">
          <a href="#">Кільця</a>
          <a href="#">Кулони</a>
          <a href="#">Сережки</a>
          <a href="#">Браслети</a>
          <a href="#">Каблучки</a>
          <a href="#">Ланцюжки</a>
          <a href="#">Підвіски</a>
          <a href="#">Набори</a>
        </div>
      </div>

      <!-- Info Links -->
      <div class="mb-8">
        <h4 class="font-semibold text-[14px] text-black mb-3">Інформація</h4>
        <div class="space-y-2 text-[12px] text-[#444444]">
          <a href="#" class="block">Про бренд</a>
          <a href="#" class="block">Доставка і оплата</a>
          <a href="#" class="block">Публічна оферта</a>
        </div>
      </div>

      <!-- Payment Icons -->
      <div class="flex items-center justify-center gap-4 py-4 border-t border-[#EEEEEE]">
        <span class="text-[11px] font-bold tracking-wider text-[#333333] opacity-60">VISA</span>
        <span class="text-[11px] font-bold tracking-wider text-[#333333] opacity-60">MASTERCARD</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const products = [
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush', img: '/images/hero.png' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'dark', img: '' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush', img: '' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush', img: '' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'dark', img: '' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush', img: '' },
]
</script>
