import { ref, watch } from 'vue';

export function useStorage<T>(
	key: string,
	defaultValue: T,
	config: {
		slot?: (data: string) => string;
		serialize?: (data: T) => string;
		deserialize?: (data: string) => T;
		type?: 'localStorage' | 'sessionStorage';
	} = {}
) {
	const {
		slot = (data) => data,
		type = 'sessionStorage',
		deserialize = JSON.parse,
		serialize = JSON.stringify,
	} = config;
	const slotKey = slot(key);
	const storage =
		type === 'localStorage' ? window.localStorage : window.sessionStorage;
	const value = ref<T>(defaultValue);

	// 获取初始值
    const current = storage.getItem(slotKey);
    try {
        current && (value.value = deserialize(current));
    } catch (e) {
        // value.value = defaultValue as any;
    }

	// 当value改变的时候，同步到storage
	watch(
		[value],
		() => {
			storage.setItem(slotKey, serialize(value.value));
		},
		{
			immediate: false,
			deep: true,
		}
	);

	return value;
}