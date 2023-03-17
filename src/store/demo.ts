// pian
import { defineStore } from "pinia";
export const useStoreDemo = defineStore("demo", () => {
	
	const a=$ref(0)

	return { a };
});
