<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { CRUD as CL } from '@/enum/common';
const props = defineProps({
    total: {
        type: Number,
        default: 0,
    },
    queryParams: {
        type: Object,
        required: true
    },
    tableData: {
        type: Array,
    },
    dataList: {
        type: Array,
        required: true
    },
    handleBtn: {
        type: Array,
    }
});
const columns = computed(() => {
    return props.dataList.filter(el => el.type.includes('table'))
})
console.log(columns)
const emit = defineEmits(['getList']);
function handleSizeChange(val: number) {
    props.queryParams.limit = val;
    emit('getList');
}
function handleCurrentChange(val: number) {
    props.queryParams.page = val;
    emit('getList');
}
</script>
<template>
    <div class="box">
        <div :class="CL.SC">
            <el-button v-for="item in handleBtn" v-bind="item" @click="emit(item.emit)"> {{item.name}} </el-button>
        </div>
        <div :class="CL.TB">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column v-for="item in columns" v-bind="item"></el-table-column>
            </el-table>
        </div>
        <div :class="CL.PG">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryParams.page" :page-sizes="[10, 15, 20, 30, 40]" :page-size="queryParams.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
    </div>
</template>
<style scoped lang="scss">
.box {
    padding: 3px 0;
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    .table_list {
        flex: 1;
    }
    .search {
        height: 40px;
        line-height: 40px;
    }
    .page-limit {
        height: 30px;
    }
}
</style>
