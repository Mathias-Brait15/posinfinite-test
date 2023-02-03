<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import TableRowItem from "../components/TableRowItem.vue";
export default {
  name: "Home",
  components: {
    TableRowItem,
  },
  methods: {
    ...mapActions(useCounterStore, ["getAllItems"]),
  },
  computed: {
    ...mapState(useCounterStore, ["items"]),
  },
  created() {
    this.getAllItems();
  },
};
</script>

<template>
  <div class="ml-[200px]">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRowItem v-for="el in items" :item="el" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
