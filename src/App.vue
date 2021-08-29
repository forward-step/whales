<template>
    <QueryClientProvider :client="queryClient">
        <router-view />
    </QueryClientProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { QueryClientProvider, QueryClient } from 'vue-use-query';
const queryClient = new QueryClient();
queryClient.setDefaultOptions({
    queries: {
        refetchOnWindowFocus: false // 重新聚焦不重新请求数据
    }
});

export default defineComponent({
    name: 'APP',
    components: {
        QueryClientProvider
    },
    setup() {
        return {
            queryClient
        };
    }
});
</script>

<style lang="less">
html {
    font-size: 62.5%;
}
body {
    background-color: #f3f2f2 !important;
}
</style>
