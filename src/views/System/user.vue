<script setup lang="ts">
import CRUD from '@/layout/CRUD.vue';
import { CRUD as EM } from '@/enum/common';
import { reactive, ref, onMounted } from 'vue';
import { user } from '@/api/user';
const queryParams = reactive({
    page: 1,
    limit: 20,
});
const dataList = [
    {
        label: '姓名',
        prop: 'name',
        type: ['table'],
    },
    {
        label: '角色',
        prop: 'role',
        type: ['table'],
    },
    {
        label: '创建时间',
        prop: 'createTime',
        type: ['table'],
    },
];
const tableData = ref([]);
let total = ref(0);
const getList = function () {
    user().then(res => {
        if (res.code == 200) {
            tableData.value = res.data.data;
            total.value = res.data.total;
        }
    });
};
onMounted(() => {
    getList();
});
const handleBtn = [
    {
        name: '查询',
        prop: 'search',
        emit: 'getList',
    },
    {
        name: '添加',
        prop: 'search',
    },
];
</script>

<template>
    <CRUD @getList="getList" :total="total" :handleBtn="handleBtn" :dataList="dataList" :queryParams="queryParams" :tableData="tableData" />
</template>
