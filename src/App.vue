<template>
  <div id="app" :style="gradientStyle">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradientStyle: {
        background: 'linear-gradient(0deg, #D63B19 0%, #F77D25 52%, #E61862 100%)',
        height: '100vh', // Optional: Make sure the gradient fills the entire viewport
      },
    };
  },
};
</script>

<style>
/* Optional: Add styles for other elements */
h1 {
  color: white;
  text-align: center;
  margin-top: 20px;
}
</style>
