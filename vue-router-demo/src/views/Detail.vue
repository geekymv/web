<template>
    <div>
        请求参数 {{ $route.query.name }}
    </div>
</template>

<script>
    export default {
        name: "DetailPage",
        created() {
            // 获取请求参数
            console.log(this.$route.query.name)
        }
    }
</script>

<style scoped>

</style>