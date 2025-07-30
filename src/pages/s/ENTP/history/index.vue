<template>
  <div class="text g-page">
    <section>
      <UiText preset="large" color="accent">
        Пока еще собираем истории…
      </UiText>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.text {
  display: flex;
  flex-direction: column;
  gap: 24px;

  section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: solid 1px colors.$grey;
  }
}
</style>
