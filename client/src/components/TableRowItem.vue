<script>
export default {
  name: "TableRowItem",
  props: ["item"],
};
</script>

<template>
  <tr
    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
  >
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      1
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{ item.name }}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{ item.price }}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <img :src="item.imgUrl" style="width: 100px; height: 100px" alt="" />
    </td>
  </tr>
</template>
