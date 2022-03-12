<template>
    <div class="appComponent">

        <MyHeader />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
export default {
    components: {
        MyHeader,
    },
};
</script>
<style>
button, input{
    border: 1px solid black;
    padding: 0 5px;
}
</style>