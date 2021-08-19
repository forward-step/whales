import { ref } from 'vue';

export function useToggle(defaultValue = true) {
    const visible = ref(defaultValue);
    const toggle = () => {
        visible.value = !visible.value;
    }
    return [visible, toggle] as const;
}