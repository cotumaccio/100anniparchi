import { writable } from "svelte/store";

export const store = writable({
  dev: 'http://localhost:1337',
  prod: 'https://dashboardparchi.herokuapp.com'
})