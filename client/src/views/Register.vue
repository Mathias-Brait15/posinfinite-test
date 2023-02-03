<script>
import { useCounterStore } from "../stores/counter";
import { mapActions } from "pinia";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
  },
};
</script>

<template>
  <div class="flex min-h-[87vh] bg-[#E7F5FD] ml-[200px]">
    <div class="bg-[#CAECFF] w-9/12">
      <h1 class="text-3xl text-[#303030] font-bold m-8">Add New Admin</h1>
      <form
        class="ml-8"
        @submit.prevent="handleRegister(name, email, password, address)"
      >
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-[#3B97CB] dark:text-white"
            >Address</label
          >
          <input
            type="text"
            v-model="address"
            id="address"
            class="bg-gray-50 border border-[#3B97CB] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
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
