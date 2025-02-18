<template>
  <div class="sections-title">
    <div
      class="sub-title mb-3 w-fit flex gap-x-2 items-center py-1 px-3 rounded-lg border"
    >
      <img
        src="@/assets/images/whyus-icon.svg"
        width="10"
        height="10"
        alt="whyusicon"
      />
      <span class="text-sm"> <slot name="sub-title"></slot> </span>
    </div>

    <div
      class="title font-bold xl:text-[48px] lg:text-[48px] md:text-[30px] text-[30px] xl:leading-[60px] lg:leading-[60px] md:leading-[36px] leading-[36px]"
    >
      <h1><slot name="title"></slot></h1>
    </div>

    <p
      class="desc xl:w-[1232px] lg:w-[1232px] md:w-[342px] w-[342px] xl:text-[18px] lg:text-[18px] md:text-[14px] text-[14px] text-[#666D80] leading-[28px]"
    >
      <slot name="desc"></slot>
    </p>
  </div>
</template>
