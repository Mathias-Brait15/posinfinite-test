<script>
export default {
  name: "Sidebar",
};
</script>

<template>
  <section
    class="bg-[#2D9CDB] w-[200px] min-h-screen fixed flex flex-col items-center text-white top-0"
  >
    <div class="flex items-center gap-2 my-12">
      <div class="flex">
        <div
          class="w-12 h-12 bg-[#0099EE] rounded-full border-4 border-white"
        ></div>
        <div
          class="w-4 h-4 bg-[#F36868] rounded-full border-4 border-white"
        ></div>
      </div>
      <p class="font-bold text-xl">BeLaundry</p>
    </div>
    <div>
      Menu
      <ul class="font-bold">
        <li
          class="flex items-center gap-3 mt-4 mb-4 hover:bg-white hover:text-[#2D9CDB] p-2 rounded-md w-[160px] h-[50 px]"
        >
          <i class="material-icons">&#xe88a;</i>
          <a href="" @click.prevent="$router.push('/home')"> Home </a>
        </li>

        <li
          class="flex items-center gap-3 mt-4 mb-4 hover:bg-white hover:text-[#2D9CDB] p-2 rounded-md w-[160px] h-[50 px]"
        >
          <i class="material-icons">&#xe890;</i>
          <a href="" @click.prevent="$router.push('/add')">Add Product</a>
        </li>

        <li
          class="flex items-center gap-3 mt-4 mb-4 hover:bg-white hover:text-[#2D9CDB] p-2 rounded-md w-[160px] h-[50 px]"
        >
          <i class="material-icons">&#xe8cc;</i>
          <a href="" @click.prevent="$router.push('/sales')">Sales</a>
        </li>

        <li
          class="flex items-center gap-3 mt-4 mb-4 hover:bg-white hover:text-[#2D9CDB] p-2 rounded-md w-[160px] h-[50 px]"
        >
          <i class="material-icons">&#xe8b8;</i>
          <a href="" @click.prevent="$router.push('/register')"
            >Register New Admin</a
          >
        </li>

        <li
          class="flex items-center gap-3 mt-4 mb-4 hover:bg-white hover:text-[#2D9CDB] p-2 rounded-md w-[160px] h-[50 px]"
        >
          <i class="material-icons">&#xe8b8;</i>
          <a href="" @click.prevent="$router.push('/register')">Logout</a>
        </li>
      </ul>
    </div>
  </section>
</template>
