import { http } from '@/js';
import axios, { CancelTokenSource } from 'axios';
import { onUnmounted } from 'vue';

/**
 * 调用请求，返回请求结果
 * @param cancelRepeat 是否取消重复请求
 * @returns 请求结果
 */
export function useHttp(cancelRepeat = false): typeof http {
    let source: CancelTokenSource | null = null;

    // 离开页面取消请求
    onUnmounted(() => {
        source && source.cancel();
    });

    return (url, config) => {
        // 中止上次的请求
        if (cancelRepeat && source) {
            source.cancel();
        }
        // 发起本次请求
        source = axios.CancelToken.source();
        const token = source.token;
        return http(url, { ...config, cancelToken: token });
    };
}
