<template>
  <div class="min-h-screen bg-[#f9f9f9] font-sans max-w-[375px] mx-auto">
    <!-- Top Promo Banner -->
    <div class="bg-black text-white text-center px-[16px] py-[10px]">
      <p class="text-[12px] font-medium tracking-[0.02em] leading-[14.63px] font-sans">
        БЕЗКОШТОВНА&nbsp;ДОСТАВКА&nbsp;ВІД&nbsp;2500&nbsp;ГРН
      </p>
    </div>

    <!-- Header / Navigation -->
    <header class="flex items-center justify-between bg-white px-[16px] h-[56px]">
      <!-- Left: Burger + Search -->
      <div class="flex items-center gap-[12px] w-[60px]">
        <button aria-label="Menu" class="w-[24px] h-[24px] flex flex-col justify-center gap-[3.5px]">
          <span class="block w-[16px] h-[1.6px] bg-[#080808]"></span>
          <span class="block w-[16px] h-[1.6px] bg-[#080808]"></span>
          <span class="block w-[16px] h-[1.6px] bg-[#080808]"></span>
        </button>
        <button aria-label="Search" class="w-[24px] h-[24px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#080808" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px]">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      <!-- Center: Logo -->
      <div class="flex-1 flex justify-center">
        <img src="/images/logo.svg" alt="chuttyevo" class="h-[47px] w-[99px] object-contain" />
      </div>

      <!-- Right: Heart + Bag -->
      <div class="flex items-center gap-[12px] w-[60px] justify-end">
        <button aria-label="Favorites" class="w-[24px] h-[24px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#080808" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px]">
            <path d="M12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78 5.5 5.5 0 0 0-7.78 0L12 5.67z" />
          </svg>
        </button>
        <button aria-label="Cart" class="w-[24px] h-[24px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#080808" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px]">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative">
      <div class="w-full h-[400px] overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Срібні прикраси Chuttyevo"
          class="w-full h-full object-cover"
        />
        <!-- Placeholder overlay in case image fails -->
        <div class="absolute inset-0 bg-[#F5F0EB] -z-10"></div>
      </div>
      <!-- Text frame overlapping from bottom of image -->
      <div class="absolute left-0 right-0 flex flex-col items-center top-[175px]">
        <div class="flex flex-col items-center gap-[16px] px-[16px] w-[343px] max-w-full">
          <h2
            class="font-serif italic text-[24px] leading-[24px] uppercase text-black text-center w-[271px]"
          >
            Ми вже подумали за вас та підібрали готові набори
          </h2>
          <p class="text-[14px] leading-[20px] text-black text-center font-sans w-[343px] max-w-full">
            Ми зібрали готові набори срібних прикрас, щоб вам не довелося витрачати час на вибір. Просто оберіть той, що відгукується вам.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer for the overlapping text -->
    <div class="h-[100px]"></div>

    <!-- Breadcrumb -->
    <nav class="flex items-center px-[16px] h-[21px] mt-[8px]">
      <span class="text-[12px] font-medium font-sans text-[#898989] leading-[14.63px]">Головна</span>
      <span class="mx-[2px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-[#898989]">
          <path d="M6 3.33L10.67 8 6 12.67" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="text-[12px] font-medium font-sans text-black leading-[14.63px]">Набори</span>
    </nav>

    <!-- Products Section -->
    <section class="px-[16px] pt-[16px]">
      <!-- Filter Bar -->
      <div class="flex items-center justify-between pb-[16px]">
        <span class="text-[16px] leading-[19.5px] text-[#7d7d7d] font-sans font-normal">товарів 17</span>
        <div class="flex items-center gap-[10px]">
          <div class="w-[25px] h-[25px] flex items-center justify-center">
            <svg viewBox="0 0 20 12" fill="none" class="w-[18.75px] h-[10.94px]">
              <path d="M0 1h20M0 6h20M0 11h20" stroke="black" stroke-width="1.5"/>
              <circle cx="5" cy="1" r="2.5" fill="black"/>
              <circle cx="15" cy="6" r="2.5" fill="black"/>
              <circle cx="8" cy="11" r="2.5" fill="black"/>
            </svg>
          </div>
          <span class="text-[16px] leading-[19.5px] text-black font-sans font-normal">Фільтри</span>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#d9d9d9] mb-[40px]"></div>

      <!-- Product List - Single column, 343px wide, gap 24px -->
      <div class="flex flex-col gap-[24px]">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :sku="product.sku"
          :name="product.name"
          :price="product.price"
          :image-src="product.img"
        />
      </div>
    </section>

    <!-- View More Button -->
    <div class="flex justify-center py-[40px]">
      <button
        class="border border-[#3f2023] rounded-[2px] text-[#3f2023] text-[14px] font-medium font-sans tracking-[0.02em] px-[16px] py-[12px] leading-[17.07px]"
      >
        Переглянути більше
      </button>
    </div>

    <!-- Brand Story Section -->
    <section class="px-[16px] py-0">
      <div class="flex flex-col gap-[16px]">
        <h3 class="font-serif italic text-[20px] font-medium leading-[24px] text-black">
          Срібні прикраси, що мають значення
        </h3>
        <div class="flex flex-col gap-[8px]">
          <p class="text-[14px] leading-[17.07px] text-black font-sans font-normal">
            Chuttyevo — це не просто інтернет-магазин срібних прикрас. Це місце, де кожен виріб може стати вашим щоденним оберегом, спогадом або особливим акцентом в образі. Ми віримо, що прикраса має не лише пасувати, а й резонувати - з історією, настроєм, моментом.
          </p>
          <div class="flex items-center gap-[10px] bg-[#f9f9f9]">
            <span class="text-[15px] leading-[18.29px] font-normal text-black underline underline-offset-[4px] font-sans">Читати далі</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1l5 5 5-5" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="mx-[16px] mt-[32px] mb-[32px] relative min-h-[821px]">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-[281.68px] h-[267.23px] opacity-10" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <!-- Decorative subscription background shape -->
        </div>
      </div>
      <div class="relative flex flex-col gap-[32px] pt-[64px] mx-auto max-w-[323px]">
        <div class="flex flex-col gap-[12px]">
          <h3 class="text-[31px] font-bold leading-[39px] text-black font-serif italic">
            -5% на чуттєві<br>прикраси за підписку<br>на розсилку
          </h3>
          <p class="text-[14px] leading-[24px] text-[#7d7d7d] font-sans font-normal max-w-[303.87px]">
            У кожному листі вас чекатимуть новинки, унікальні пропозиції та трішки натхнення.
          </p>
        </div>
        <div class="flex flex-col gap-[28px] max-w-[273px]">
          <div class="flex flex-col gap-[18px]">
            <div class="flex flex-col gap-[12px]">
              <div class="bg-white h-[52px] flex items-center px-[16px] rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full text-[14px] leading-[17.07px] bg-transparent focus:outline-none font-sans text-black placeholder:text-[#7d7d7d]"
                />
              </div>
              <div class="bg-white h-[52px] flex items-center px-[16px] rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <input
                  type="tel"
                  placeholder="+380"
                  class="w-full text-[14px] leading-[17.07px] bg-transparent focus:outline-none font-sans text-black placeholder:text-[#7d7d7d]"
                />
              </div>
            </div>
            <button class="w-full h-[46px] bg-[#303030] rounded-[4px] text-white text-[16px] font-normal font-sans tracking-[0.02em] leading-[19.5px]">
              Підписатися на розсилку
            </button>
          </div>
          <label class="flex items-start gap-[11px]">
            <div class="w-[20px] h-[20px] border border-black rounded-[2px] flex-shrink-0 mt-0"></div>
            <span class="text-[14px] leading-[14px] text-black font-sans font-normal">
              Підписуючись на розсилку, я даю згоду на обробку своїх даних відповідно до Політики конфіденційності
            </span>
          </label>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white px-[16px] pt-[40px] pb-[16px]">
      <div class="flex flex-col gap-[40px]">
        <!-- Top: divider + logo + contact -->
        <div class="flex flex-col gap-[8px]">
          <div class="w-full h-[1px] bg-[#eaeaea] mb-[8px]"></div>
          <div class="flex justify-center">
            <span class="font-serif italic text-[24px] leading-[29.26px] text-black">chuttyevo</span>
          </div>
          <p class="text-[15px] leading-[18.29px] text-black font-sans text-center">+38 (063) 186 43 91</p>
          <p class="text-[15px] leading-[18.29px] text-black font-sans text-center">User@gmail.com</p>
          <!-- Instagram icon -->
          <div class="flex justify-center mt-[4px]">
            <svg width="33" height="30" viewBox="0 0 33 30" fill="none">
              <rect x="2" y="2" width="29" height="26" rx="6" stroke="black" stroke-width="2"/>
              <circle cx="16.5" cy="15" r="6" stroke="black" stroke-width="2"/>
              <circle cx="25" cy="7" r="2" fill="black"/>
            </svg>
          </div>
        </div>

        <!-- Catalog Grid -->
        <div class="flex flex-col gap-[16px]">
          <h4 class="text-[22px] font-normal text-[#7d7d7d] font-sans leading-[28.4px]">Каталог</h4>
          <div class="flex gap-[116px]">
            <div class="flex flex-col gap-[10px] text-[15px] text-black font-sans leading-[19.36px]">
              <a href="#">Кільця</a>
              <a href="#">Сережки</a>
              <a href="#">Каблучки</a>
              <a href="#">Підвіски</a>
            </div>
            <div class="flex flex-col gap-[10px] text-[15px] text-black font-sans leading-[19.36px]">
              <a href="#">Кулони</a>
              <a href="#">Браслети</a>
              <a href="#">Ланцюжки</a>
              <a href="#">Набори</a>
            </div>
          </div>
        </div>

        <!-- Info Links -->
        <div class="flex flex-col gap-[16px]">
          <h4 class="text-[22px] font-normal text-[#7d7d7d] font-sans leading-[28.4px]">Інформація</h4>
          <div class="flex flex-col gap-[10px] text-[15px] text-black font-sans leading-[19.36px]">
            <a href="#">Про бренд</a>
            <a href="#">Доставка і оплата</a>
            <a href="#">Повернення та обмін</a>
            <a href="#">Публічна оферта</a>
          </div>
        </div>

        <!-- Payment Icons -->
        <div class="flex items-center justify-center gap-[25px] py-[8px]">
          <div class="h-[40px] w-[44.64px] bg-[#e8e8e8] rounded-[4px]"></div>
          <div class="h-[20px] w-[70.31px] bg-[#e8e8e8] rounded-[2px]"></div>
          <div class="h-[30px] w-[55.8px] bg-[#e8e8e8] rounded-[4px]"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const products = [
  { sku: '40358с', name: 'Набір "Чорна конюшина"', price: '6 680₴', img: '/images/hero.png' },
  { sku: '40358с', name: 'Набір "Чорна конюшина"', price: '6 680₴', img: '/images/hero.png' },
  { sku: '40358с', name: 'Набір "Чорна конюшина"', price: '6 680₴', img: '/images/hero.png' },
  { sku: '40358с', name: 'Набір "Чорна конюшина"', price: '6 680₴', img: '/images/hero.png' },
]
</script>
