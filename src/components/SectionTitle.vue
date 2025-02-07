<template>
    <h3 class="title"><slot></slot></h3>
</template>

<script>
export default {
    name: "SectionTitle",
};
</script>

<style>
.title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 10px;
}
</style>
