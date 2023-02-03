import axios from "axios";
import { defineStore } from "pinia";
import swal from "sweetalert";

const BASE_URL = "https://production-test.foxhub.space";
// const BASE_URL = "http://localhost:4002";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    items: [],
    categories: [],
    username: "",
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
        localStorage.setItem("name", data.name);
        swal("Good job!", "Welcome", "success");
        this.router.push("/home");
      } catch (error) {
        swal("Upss..", error.response.data.message, "error");
      }
    },

    async handleRegister(name, email, password, address) {
      try {
        let { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/register`,
          data: {
            name,
            email,
            password,
            address,
          },
        });
        swal("Good job!", data.msg, "success");
        this.router.push("/home");
      } catch (error) {
        swal("Upss..", error.response.data.message, "error");
      }
    },

    async getAllItems() {
      try {
        let { data } = await axios({
          method: "GET",
          url: `${BASE_URL}`,
        });
        this.items = data;
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
      try {
        const multerData = new FormData();
        multerData.append("name", form.name);
        multerData.append("description", form.description);
        multerData.append("sku", form.sku);
        multerData.append("stock", form.stock);
        multerData.append("price", form.price);
        multerData.append("CategoryId", form.CategoryId);
        multerData.append("imgUrl", form.imgUrl);

        await axios({
          url: `${BASE_URL}`,
          method: "post",
          data: multerData,
        });
        swal("Good job!", "Welcome", "success");
        this.router.push("/home");
      } catch (error) {
        swal("Upss..", error.response.data.message, "error");
      }
    },
  },
});
