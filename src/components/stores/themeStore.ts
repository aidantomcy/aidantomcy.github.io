import { writable } from "svelte/store";

export const themeStore = writable<Themes>("dark");
