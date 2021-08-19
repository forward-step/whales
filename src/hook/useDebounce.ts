import { Ref, ref, watch } from 'vue';
export function useDebounce<V>(value: Ref<V>, delay = 200) {
    const debounceValue = ref<V>(value.value) as Ref<V>;

    let id: number;
    watch(value, () => {
        clearTimeout(id);
        id = setTimeout(() => {
            debounceValue.value = value.value;
        }, delay);
    });

    return debounceValue;
}