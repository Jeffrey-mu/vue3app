<script setup lang="ts">
import CL from '@/layout/CL.vue';
import { CL as EM } from '@/enum/common';
import { reactive } from 'vue';
const queryParams = reactive({
    page: 1,
    limit: 20,
});
const getList = function () {
    console.log(queryParams);
};
const tableData = [
    {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
    },
    {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
    },
    {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
    },
    {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
    },
];
</script>

<template>
    <CL @getList="getList" :total="200" :queryParams="queryParams" :tableData="tableData" />
</template>
