import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = "http://localhost:4002";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    items: [],
    categories: [],
  }),

  actions: {
    async handleLogin(email, password) {
      try {
        let { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/login`,
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },

    async getAllCategory() {
      try {
        let { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/category`,
        });
        this.categories = data;
      } catch (error) {
        console.log(error);
      }
    },

    async handleAddItem(form) {
      console.log(form);
      try {
        const multerData = new FormData();
        multerData.append("name", form.name);
        multerData.append("description", form.description);
        multerData.append("sku", form.sku);
        multerData.append("stock", form.stock);
        multerData.append("price", form.price);
        multerData.append("CategoryId", form.CategoryId);
        multerData.append("imgUrl", form.imgUrl);

        const { data } = await axios({
          url: `${BASE_URL}`,
          method: "post",
          data: multerData,
        });
        console.log(data);
      } catch (error) {
        console.log(error, "<----- error register");
        // toast.error(error.response.data.message);
      }
    },
  },
});
