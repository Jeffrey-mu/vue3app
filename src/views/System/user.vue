<script setup lang="ts">
import CRUD from '@/layout/CRUD.vue';
import { CRUD as EM } from '@/enum/common';
import { HandleBtn } from '@/interface/common';
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
const add = function (fn: Function) {
    fn()
};
onMounted(() => {
    getList();
});
const handleBtn: HandleBtn = [
    {
        name: '查询',
        prop: 'search',
    },
    {
        name: '添加',
        prop: 'add',
    },
];
</script>

<template>
    <CRUD @getList="getList" :total="total" :handleBtn="handleBtn" :dataList="dataList" :queryParams="queryParams" :tableData="tableData" />
</template>
