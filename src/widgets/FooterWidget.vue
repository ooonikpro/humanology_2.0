<script setup lang="ts">
import scrollToTop from "@shared/lib/scrollToTop";
</script>

<template>
  <footer>
    <RouterLink to="/" class="logo-link">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo"
      >
        <path
          d="M47.2689 0C19.5771 0 5 22.5838 5 48.1888C5 75.4839 20.8474 96 47.2689 96C74.5951 96 91 76.2392 91 48.1888C90.9909 24.2833 76.7794 0 47.2689 0Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M82.4859 48.7321L57.349 47.1972L57.4832 54.2702C65.5302 59.483 73.9162 65.6365 79.1442 73.0984L72.701 77.7666L57.6387 61.7392L57.9425 77.9293L50.2629 78L49.7613 47.0204H45.9039L45.9463 77.71L38.2597 77.7807L38.3727 61.0885L23.0419 77.7312L16.6835 73.2894C21.629 66.0325 30.2057 59.3839 38.3939 53.9519L38.4716 47.2467L13.25 48.8947L13.6598 41.0154L37.0728 40.8811C29.3014 35.6258 21.3958 29.3097 16.7118 22.4489L23.0702 18.0071L44.0812 40.8315L51.2732 40.7891L72.701 18L79.1442 22.6682C74.1564 29.7411 66.2932 35.7178 58.6066 40.7467L82.5 40.6052L82.4859 48.7321ZM47.6631 34.5861C39.051 34.6073 38.9944 21.0767 47.8256 21.0767C56.6567 21.0767 57.1229 34.6073 47.6772 34.6073L47.6631 34.5861Z"
          fill="white"
        />
      </svg>
    </RouterLink>
    <hr />
    <div class="bottom">
      <a href="/" class="link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12"
            stroke="currentColor"
            stroke-linecap="round"
          />
          <path
            d="M18.1475 4.07063C18.1475 4.07063 19.0725 3.72434 18.9954 4.56532C18.9697 4.91161 18.7385 6.12361 18.5586 7.43456L17.9419 11.3179C17.9419 11.3179 17.8905 11.8868 17.428 11.9858C16.9654 12.0847 16.2716 11.6395 16.1431 11.5405C16.0403 11.4663 14.2159 10.3533 13.5735 9.80909C13.3936 9.66068 13.188 9.36386 13.5992 9.01757L16.2973 6.54411C16.6057 6.24729 16.914 5.55472 15.6292 6.3957L12.0317 8.74551C12.0317 8.74551 11.6205 8.99284 10.8497 8.77024L9.17939 8.27554C9.17939 8.27554 8.56267 7.90452 9.61623 7.53348C12.1859 6.37095 15.3466 5.18368 18.1475 4.07063Z"
            fill="currentColor"
          />
        </svg>

        Телеграм
      </a>
      <a href="/" class="link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 20.5 21 14.5"
            stroke="currentColor"
            stroke-linecap="round"
          />
          <path
            d="M18.8657 5.375L20.6462 6.65096H20.6479C20.0744 7.56249 19.3595 8.37561 18.5304 9.05941L21 12.197L18.4214 12.3371L16.8538 10.2662C16.5789 10.4316 16.3509 10.5565 16.1832 10.6375L16.1312 12.3455C13.9634 12.6628 10.5667 10.4164 10 5.79019L12.3254 5.75813C12.2567 7.0729 13.3397 9.31595 14.2283 9.47123L14.1713 6.60201L13.8863 5.65855L16.3274 5.69905L16.2469 8.28135L18.8657 5.375Z"
            fill="currentColor"
          />
        </svg>

        ВК
      </a>
      <a href="#" class="link up" @click.prevent="scrollToTop">
        Наверх

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 160px;
  background-color: $color-basic-beige;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
}

.logo-link {
  opacity: 0.25;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);

  svg {
    width: 24px;
    height: 24px;
  }
}

hr {
  height: 0.5px;
  background-color: var(--text-color);
  opacity: 0.1;
}

.bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}

.link {
  font-size: 13px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 4px;
}

.up {
  margin-left: auto;
}
</style>
