<template>
  <div class="sidebar">
    <div class="sidebar__tab-header">
      <a aria-label="Dashboard" aria-describedby="Dashboard Link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4
                   2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1
                    1 0 00-.894 0L4.789
                    4.488a1
                   1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447
                    8.342A1 1 0 003 9.236V15a1 1
                   0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
          />
        </svg>
      </a>
      <span v-if="toggle"> Zhards.com </span>
    </div>

    <div class="d-flex flex-column items-center mt-3 border-t border-gray-300">
      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        tabindex="0"
        href="#"
      >
        <svg
          class="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1
                1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span v-if="toggle"> Home </span>
      </a>

      <a
        class="sidebar__tab"
        aria-label="link to this heading"
        aria-describedby="introduction"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span v-if="toggle">Search</span>
      </a>

      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2
            2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span v-if="toggle"> Stats </span>
      </a>
      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        href="#"
      >
        <svg
          class="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1
             1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
        <span v-if="toggle">Tabs</span>
      </a>
    </div>
    <div class="divider mt-3"></div>
    <div class="d-flex flex-column items-center border-t border-gray-300">
      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        href="#"
      >
        <svg
          class="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707
            1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </a>
      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        href="#"
      >
        <svg
          class="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0
            4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </a>
      <a
        aria-label="link to this heading"
        aria-describedby="introduction"
        class="sidebar__tab"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2
             0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <span v-if="toggle">Messages</span>
      </a>
    </div>
    <a
      aria-label="link to this heading"
      aria-describedby="introduction"
      class="sidebar__tab"
      href="#"
    >
      <svg
        class="w-6 h-6 stroke-current"
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
    </a>
    <button @click="toggleSidebar" class="sidebar__button">
      <svg
        v-if="toggle"
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
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <svg
        v-else
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style lang="scss" scoped>
.divider {
  height: 1px;

  background-color: #b0b7ce6d;
  width: 100%;
}
.sidebar {
  display: flex;
  position: sticky;
  flex-direction: column;
  height: 93vh;
  overflow: hidden;
  background-color: #ffffff;
  width: fit-content;
  padding: 2rem 1rem;
  border-radius: 0 15px 15px 0;
  &__tab {
    display: flex;
    gap: 0 0.5rem;
    margin-top: 1rem;
    align-items: center;
    background-color: transparent;
    justify-content: start;
    text-decoration: none;
    color: #b0b7ce;
    width: 100%;
    padding: 0.25rem 2px;
    height: fit-content;
    svg {
      width: 35px;
      height: 35px;
    }
    span {
      font-size: 15px;
      font-weight: 300;
      margin-left: 4px;
    }

    &-header {
      display: flex;
      gap: 0 0.5rem;
      align-items: center;
      color: #38bdf9;

      svg {
        width: 45px;
        height: 45px;
      }
      span {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  &__tab:is(:hover, :focus, :active) {
    background-color: #38bdf9;
    border-radius: 5px;
    color: white;
  }
}
.sidebar__button {
  background: none;
  margin-top: auto;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #38bdf9;
  svg {
    max-width: 35px;
    max-height: 35px;
  }
}
</style>
