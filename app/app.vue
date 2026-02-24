<template>
  <div class="min-h-screen bg-white font-sans max-w-[375px] mx-auto">
    <!-- Top Promo Banner -->
    <div class="bg-brand-black text-white text-center py-3 px-4">
      <p class="text-xs font-medium tracking-wide">
        БЕЗКОШТОВНА ДОСТАВКА ВІД 2500 ГРН
      </p>
    </div>

    <!-- Header / Navigation -->
    <header class="flex items-center justify-between px-4 py-3">
      <!-- Left: Hamburger + Search -->
      <div class="flex items-center gap-3">
        <!-- Hamburger -->
        <button aria-label="Menu" class="w-6 h-6 flex flex-col justify-center gap-[5px]">
          <span class="block w-4 h-[1.6px] bg-brand-black rounded-full"></span>
          <span class="block w-4 h-[1.6px] bg-brand-black rounded-full"></span>
          <span class="block w-4 h-[1.6px] bg-brand-black rounded-full"></span>
        </button>
        <!-- Search -->
        <button aria-label="Search" class="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-brand-black">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      <!-- Center: Logo -->
      <div class="flex-1 text-center">
        <h1 class="text-lg font-serif italic tracking-wide text-brand-black">chuttyevo</h1>
      </div>

      <!-- Right: Heart + Bag -->
      <div class="flex items-center gap-3">
        <button aria-label="Favorites" class="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-brand-black">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button aria-label="Cart" class="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-brand-black">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="px-4 py-2 text-xs text-brand-gray">
      <span>Головна</span>
      <span class="mx-1">›</span>
      <span class="text-brand-black">Набори</span>
    </nav>

    <!-- Hero Section -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="w-full h-[400px] bg-gray-200 overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Срібні прикраси Chuttyevo"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Hero Text -->
      <div class="text-center px-4 py-8">
        <h2 class="font-serif italic text-2xl leading-6 uppercase text-brand-black mb-4">
          Ми вже подумали за вас та підібрали готові набори
        </h2>
        <p class="text-sm leading-5 text-brand-black">
          Ми зібрали готові набори срібних прикрас, щоб вам не довелося витрачати час на вибір. Просто оберіть той, що відгукується вам.
        </p>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="flex items-center justify-between px-4 py-3 border-t border-b border-gray-200">
      <span class="text-sm text-brand-gray">товарів 17</span>
      <button class="flex items-center gap-2 text-sm text-brand-black">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-4">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
          <circle cx="8" cy="6" r="2" fill="currentColor" />
          <circle cx="16" cy="12" r="2" fill="currentColor" />
          <circle cx="10" cy="18" r="2" fill="currentColor" />
        </svg>
        Фільтри
      </button>
    </div>

    <!-- Product Listing -->
    <section class="px-4 py-6 space-y-8">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :price="product.price"
        :image-bg="product.bg"
      />
    </section>

    <!-- View More Button -->
    <div class="px-4 pb-8 text-center">
      <button class="w-full border border-brand-black text-brand-black py-3 text-sm font-medium tracking-wide hover:bg-brand-black hover:text-white transition-colors">
        Переглянути більше
      </button>
    </div>

    <!-- Brand Story Section -->
    <section class="px-4 py-10">
      <h3 class="font-serif italic text-xl leading-6 text-brand-black mb-6 text-center">
        Срібні прикраси, що мають значення
      </h3>
      <div class="w-full h-[250px] bg-gray-100 mb-6 overflow-hidden">
        <div class="w-full h-full bg-brand-light flex items-center justify-center">
          <span class="text-brand-gray text-sm">Editorial Image</span>
        </div>
      </div>
      <p class="text-sm leading-5 text-brand-dark mb-4">
        Chuttyevo — це не просто інтернет-магазин. Це місце, де кожна прикраса розповідає свою історію. Ми створюємо срібні вироби, які стають частиною вашого щоденного стилю.
      </p>
      <a href="#" class="text-sm text-brand-black underline underline-offset-4">
        читати далі ›
      </a>
    </section>

    <!-- Newsletter Section -->
    <section class="mx-4 mb-10 bg-brand-mint rounded-lg p-6">
      <h3 class="font-serif italic text-xl leading-6 text-brand-black mb-3 text-center">
        -5% на чуттєві прикраси за підписку на розсилку
      </h3>
      <p class="text-xs text-brand-dark text-center mb-5">
        Отримуйте першими інформацію про акції, нові колекції та ексклюзивні пропозиції.
      </p>
      <div class="space-y-3">
        <input
          type="tel"
          placeholder="+380"
          class="w-full border border-gray-300 rounded px-4 py-3 text-sm bg-white focus:outline-none focus:border-brand-black"
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 rounded px-4 py-3 text-sm bg-white focus:outline-none focus:border-brand-black"
        />
        <button class="w-full bg-brand-black text-white py-3 text-sm font-medium tracking-wide">
          Підписатися на розсилку
        </button>
      </div>
      <label class="flex items-start gap-2 mt-3">
        <input type="checkbox" class="mt-1 accent-brand-black" />
        <span class="text-[10px] text-brand-dark leading-tight">
          Я погоджуюсь отримувати розсилку та ознайомлений з політикою конфіденційності.
        </span>
      </label>
    </section>

    <!-- Footer -->
    <footer class="px-4 py-8 border-t border-gray-200">
      <!-- Logo & Contact -->
      <div class="text-center mb-8">
        <p class="font-serif italic text-lg text-brand-black mb-3">chuttyevo</p>
        <p class="text-sm text-brand-dark">+38 (063) 168 43 01</p>
        <p class="text-sm text-brand-dark">User@gmail.com</p>
      </div>

      <!-- Catalog Grid -->
      <div class="mb-8">
        <h4 class="font-semibold text-sm text-brand-black mb-3">Каталог</h4>
        <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-brand-dark">
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
        <h4 class="font-semibold text-sm text-brand-black mb-3">Інформація</h4>
        <div class="space-y-2 text-sm text-brand-dark">
          <a href="#" class="block">Про бренд</a>
          <a href="#" class="block">Доставка і оплата</a>
          <a href="#" class="block">Повернення</a>
          <a href="#" class="block">Публічна оферта</a>
        </div>
      </div>

      <!-- Payment Icons -->
      <div class="flex items-center justify-center gap-4 opacity-60">
        <span class="text-xs font-bold tracking-wider text-brand-dark">VISA</span>
        <span class="text-xs font-bold tracking-wider text-brand-dark">MASTERCARD</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const products = [
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'dark' },
  { name: "Набір 'Чорна конюшина'", price: '6 680₴', bg: 'blush' },
]
</script>
