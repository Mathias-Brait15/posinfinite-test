<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  name: "AddProduct",
  data() {
    return {
      inputProduct: {
        name: "",
        description: "",
        sku: "",
        stock: "",
        price: "",
        CategoryId: "",
        imgUrl: " ",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getAllCategory", "handleAddItem"]),
    handleAdd() {
      this.handleAddItem(this.inputProduct);
    },

    changeFile() {
      this.inputProduct.imgUrl = this.$refs.file.files[0];
    },
  },
  computed: {
    ...mapState(useCounterStore, ["categories"]),
  },
  created() {
    this.getAllCategory();
  },
};
</script>

<template>
  <div class="flex min-h-[87vh] bg-[#E7F5FD] ml-[200px]">
    <div class="bg-[#CAECFF] w-9/12">
      <h1 class="text-3xl text-[#303030] font-bold m-8">Add New Product</h1>
      <form class="ml-8" @submit.prevent="handleAdd(inputProduct)">
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Product Name</label
          >
          <input
            type="text"
            v-model="inputProduct.name"
            id="productname"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Description</label
          >
          <textarea
            v-model="inputProduct.description"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex">
          <div class="mb-6 mr-8">
            <label
              class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
              >SKU</label
            >
            <input
              type="text"
              v-model="inputProduct.sku"
              id="sku"
              class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6 mr-8">
            <label
              class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
              >Stock</label
            >
            <input
              type="number"
              v-model="inputProduct.stock"
              id="stock"
              class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
              >Price</label
            >
            <input
              type="number"
              id="price"
              v-model="inputProduct.price"
              class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Category</label
          >
          <select
            name=""
            id=""
            v-model="inputProduct.CategoryId"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option v-for="el in categories" :key="el.id" :value="el.id">
              {{ el.name }}
            </option>
          </select>
        </div>

        <div class="flex mt-8">
          <div
            class="max-w-2xl border-[#3B97CB] rounded-lg shadow-xl bg-gray-50"
          >
            <div class="m-4">
              <label class="inline-block mb-2 text-gray-500">File Upload</label>
              <div class="flex items-center justify-center w-full">
                <label
                  class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300"
                >
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p
                      class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"
                    >
                      Attach a file
                    </p>
                  </div>
                  <input
                    type="file"
                    class="opacity-0"
                    aria-describedby="file_input_help"
                    id="file_input"
                    ref="file"
                    @change="changeFile"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        
        <button
          type="submit"
          class="mt-8 mb-8 text-white bg-[#56E4A0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publish
        </button>
      </form>
    </div>
  </div>
</template>
