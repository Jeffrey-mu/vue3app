<script lang="ts" setup>
import { onMounted } from 'vue';
import { CL } from '@/enum/common';

const props = defineProps({
    total: {
        type: Number,
        default: 0,
    },
    queryParams: {
        type: Object,
    },
    tableData: {
        type: Array,
    },
});
const emit = defineEmits(['getList']);
function handleSizeChange(val) {
    props.queryParams.limit = val;
    emit('getList');
}
function handleCurrentChange(val) {
    props.queryParams.page = val;
    emit('getList');
}
</script>
<template>
    <div class="box">
        <div :class="CL.SC">
            <slot name=""></slot>
            SC
        </div>
        <div :class="CL.TB">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="序号" width="180"></el-table-column>
                <el-table-column prop="name" label="用户名" width="180"></el-table-column>
                <el-table-column prop="address" label="角色"></el-table-column>
                <el-table-column prop="address" label="操作"></el-table-column>
            </el-table>
        </div>
        <div :class="CL.PG">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryParams.page" :page-sizes="[100, 200, 300, 400]" :page-size="queryParams.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
    </div>
</template>
<style scoped lang="scss">
.box {
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    .table_list {
        flex: 1;
    }
    .search {
        height: 50px;
    }
    .page-limit {
        height: 30px;
    }
}
</style>
