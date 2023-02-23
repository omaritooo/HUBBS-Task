<template>
  <div class="card">
    <div class="card__content">
      <span>
        {{ stat }}
      </span>
      <span>
        {{ name }}
      </span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5
        20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125
        1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0
        .621-.504 1.125-1.125 1.125h-2.25a1.125
        1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3
         21 3.504 21
        4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    stat: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;

  justify-content: space-between;
  background: white;
  width: 25%;
  max-height: 80px;
  padding: 1rem;
  min-height: 60px;
  border-radius: 8px;
  svg {
    width: 30px;
    height: 30px;
    background: #38bcf997;
    border-radius: 50%;
    padding: 0.25rem;
    align-self: center;
  }
  &__content {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
