<template>
  <div v-editable="blok" class="container">
    <div
      class="relative bg-grey rounded-45xl py-[62.5px] px-6 sm:px-[50px] md:px-[100px] flex overflow-hidden"
    >
      <form class="w-full md:w-1/2 max-w-[559px] space-y-10">
        <div class="flex justify-evenly md:justify-stretch items-center gap-8">
          <div class="flex flex-row-reverse gap-3.5 items-center">
            <label for="messageCheck" class="text-lg">Say hi</label>
            <input
              type="radio"
              id="messageCheck"
              name="messageCheck"
              checked
              class="h-6 w-6"
            />
          </div>
          <div class="flex flex-row-reverse gap-3.5 items-center">
            <label for="quoteCheck" class="text-lg">Get a quote</label>
            <input
              type="radio"
              id="quoteCheck"
              name="messageCheck"
              class="h-6 w-6"
            />
          </div>
        </div>
        <!-- Name input -->
        <div class="space-y-6">
          <div class="relative mb-4">
            <label for="name" class="text-sm leading-7 text-gray-400"
              >Name</label
            >
            <div class="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                class="w-full rounded-xl.5 border py-1 px-3 text-base leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-transparent"
              />
            </div>
          </div>
          <!-- Email input -->
          <div class="relative mb-4">
            <label for="email" class="text-sm leading-7 text-gray-400"
              >Email</label
            >
            <div class="relative">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                class="w-full rounded-xl.5 border py-1 px-3 text-base leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-transparent"
              />
            </div>
          </div>
          <!-- Message input -->
          <div class="relative mb-4">
            <label for="message" class="text-sm leading-7 text-gray-400"
              >Message</label
            >
            <div class="relative">
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                class="w-full rounded-xl.5 border py-1 px-3 text-base leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-transparent"
              />
            </div>
          </div>

          <AppButton
            type="submit"
            className="bg-dark text-white w-full hidden md:inline-block hover:bg-transparent hover:text-dark"
            >Send Message</AppButton
          >
        </div>
      </form>

      <div
        class="absolute -right-[16.5%] top-0 translate-x-[16.5%] hidden md:block"
      >
        <svg
          width="692"
          height="649"
          viewBox="0 0 692 649"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="scale-90"
        >
          <mask
            id="mask0_341_618"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="41"
            y="0"
            width="651"
            height="649"
          >
            <mask
              id="path-1-outside-1_341_618"
              maskUnits="userSpaceOnUse"
              x="40.7109"
              y="-0.5"
              width="651"
              height="650"
              fill="black"
            >
              <rect
                fill="white"
                x="40.7109"
                y="-0.5"
                width="651"
                height="650"
              />
              <path
                d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z"
              />
            </mask>
            <path
              d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              mask="url(#path-1-outside-1_341_618)"
            />
          </mask>
          <g mask="url(#mask0_341_618)">
            <rect
              x="-785.721"
              y="-37.6172"
              width="1152.83"
              height="702.852"
              rx="45"
              fill="black"
            />
          </g>
          <path
            d="M95.7147 470.596L141.422 495.5L95.7147 520.604L70.7109 566.21L45.7072 520.604L0.000260592 495.5L45.7072 470.596L70.7109 424.789L95.7147 470.596Z"
            fill="#B9FF66"
          />
          <path
            d="M217.102 244.065L298.777 288.566L217.102 333.425L172.422 414.922L127.742 333.425L46.0666 288.566L127.742 244.065L172.422 162.211L217.102 244.065Z"
            fill="#191A23"
          />
        </svg>
      </div>
    </div>

    <AppButton
      type="submit"
      className="bg-dark text-white w-full md:hidden mt-[30px] hover:bg-transparent hover:text-dark"
      >Send Message</AppButton
    >
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
#messageCheck,
#quoteCheck {
  @apply relative border border-dark cursor-pointer;

  &::before {
    content: "";
    position: absolute;
    top: 21%;
    left: 21%;
    transform: translate(-21%, -21%);
    width: 60%;
    height: 60%;
    border-radius: 50%;
    transform: scale(0);

    @apply bg-green border border-darkAlt transition-all duration-300 ease-in-out;
  }

  &:checked {
    @apply bg-white;
  }

  &:checked::before {
    @apply scale-100;
  }
}
</style>
