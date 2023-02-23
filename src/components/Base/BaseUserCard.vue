<template>
  <div class="user">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
               1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <div class="d-flex flex-column ml-4 justify-content-space-between">
      <span class="user__name">
        {{ name }}
      </span>
      <span class="user__date"> Jan 31, 2022</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'user',
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0.5rem;
  &__name {
    font-size: 1rem;
    color: black;
    font-weight: 500;
  }
  &__date {
    font-size: 0.75rem;
    color: rgb(107, 105, 105);
    font-weight: 300;
  }
  svg {
    width: 35px;
    height: 35px;
  }
}
</style>
