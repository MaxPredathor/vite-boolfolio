import { reactive } from "vue";

export const store = reactive({
  apiURL: "http://127.0.0.1:8000/api/",
  imagePath: "http://127.0.0.1:8000/storage/",
  showHeader: true,
  categories: [],
});
