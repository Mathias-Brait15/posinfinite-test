<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },
};
</script>

<template>
  <div class="bg-white-600 h-[97px] flex justify-end items-center">
    <p class="mr-16 text-[#0099EE] font-semibold">Welcome, {{ name }}</p>
  </div>
</template>
