<script setup>
import { ref, onMounted } from "vue";

onMounted(async () => {});
const headers = [
  { text: "Invoice no", value: "invoice_no", sortable: true },
  { text: "Name", value: "user.name", sortable: true },
  { text: "Hash", value: "hash" },
  { text: "Date Request", value: "created_at", sortable: true },
  { text: "Status", value: "status", sortable: true },
];
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Home</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <EasyDataTable
          :headers="headers"
          :items="paymentStore.get_payments"
          buttons-pagination
          alternating
          table-class-name="customize-table"
        >
          <template #item-status="item">
            {{ item.status == 0 ? "Pending" : "Approve" }}
          </template>

          <template #empty-message>
            <a>nothing here</a>
          </template>
        </EasyDataTable>
      </div>
    </div>
  </div>
</template>
<style scoped>
.customize-table {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #313a46;

  --easy-table-body-row-font-size: 14px;
  --easy-table-footer-font-size: 14px;
}
</style>
