<script></script>
<template>
  <!-- component -->
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form action="" method="">
        <h1
          class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-10"
        >
          Precisa de Ajuda?
        </h1>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Nome:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Insira o seu primeiro nome"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Sobrenome:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Insira o seu Sobrenome"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Telefone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(99)9 9999-9999"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Fale o que você precisa?
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Nos dê as informações necessárias..."
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
