<template>
  <header class="header">
    <input
      class="icon"
      type="text"
      v-model="search"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search bar"
    />
    <div class="header__container">
      <svg
        class="bell"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118
           9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967
          0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0
           01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>

      <div class="header__info">
        <svg
          class="avatar"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
             1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Hello, user!</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  &__info {
    height: 100%;
    color: black;
    display: flex;
    align-items: center;

    gap: 0 5px;
  }
  &__container {
    display: flex;
    width: 21%;
    justify-content: space-between;
    align-items: center;
  }
}
.avatar {
  width: 40px;
  height: 100%;
}
.bell {
  height: 20px;
  width: 20px;
  align-self: center;
}
input[type='text'] {
  padding-left: 25px;
  background: url('https://static.thenounproject.com/png/101791-200.png') no-repeat left;
  background-position: 7px 50%;
  background-size: 20px;
  border: 0;
  background-color: white;
  padding: 1rem 2rem;
  width: 70%;
  border-radius: 8px;
}
</style>
