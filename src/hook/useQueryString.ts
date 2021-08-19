import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
/**
 * 使用queryString
 * @param name key值
 * @param defaultValue 当query参数不存在时，使用默认值
 * @returns Ref<string>
 */
export function useQueryString(name: string, defaultValue: string | (() => string) = '') {
    const route = useRoute();
    const router = useRouter();
    const value = ref<string>('');

    // 初始化值
    const temp = route.query[name];
    value.value = typeof temp === 'string' ? temp : (
        typeof defaultValue === 'string' ? defaultValue : defaultValue()
    );

    watch(value, () => {
        const query = {...route.query, [name]: value.value};
        if(value.value === '') delete query[name];
        router.replace({
            name: route.name as string,
            query,
        })
    });

    return value;
}