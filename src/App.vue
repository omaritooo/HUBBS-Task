<template>
  <div id="app">
    <BaseSidebar />
    <div class="content">
      <Header />
      <BlockUsers />
      <BlockRefer />
    </div>
  </div>
</template>

<script>
import BaseSidebar from './components/Base/BaseSidebar.vue';
import BlockUsers from './components/Block/BlockUsers.vue';
import BlockRefer from './components/Block/BlockRefer.vue';
import Header from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    BaseSidebar,
    Header,
    BlockUsers,
    BlockRefer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

@import './styles/classes.scss';
@import './styles/variables.scss';

* {
  font-family: 'Roboto', sans-serif;
}
html,
body {
  font-family: 'Roboto', sans-serif;

  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;

  display: flex;
  text-align: center;
  background-color: #f7fbfe;
}
.content {
  padding: 2.5rem 2rem;
  flex-grow: 1;
}
</style>
