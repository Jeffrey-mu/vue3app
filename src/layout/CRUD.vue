<script lang="ts" setup>
import { onMounted, computed, ref, reactive } from 'vue';
import { CRUD as CL } from '@/enum/common';
import Compressor from 'compressorjs';
import axios from 'axios';
import { compressor } from '@/plugins/compressor';
import { upload as uploadApi } from '@/api/upload';
const props = defineProps({
    total: {
        type: Number,
        default: 0,
    },
    queryParams: {
        type: Object,
        required: true,
    },
    tableData: {
        type: Array,
    },
    dataList: {
        type: Array,
        required: true,
    },
    handleBtn: {
        type: Array,
    },
});
const columns = computed(() => {
    return props.dataList.filter(el => el.type.includes('table'));
});
let dialogVisible = ref(false);
console.log(columns);
const emit = defineEmits(['getList']);
function handleSizeChange(val: number) {
    props.queryParams.limit = val;
    emit('getList');
}
function handleCurrentChange(val: number) {
    props.queryParams.page = val;
    emit('getList');
}
function add() {
    dialogVisible.value = true;
}
function handleClose() {
    dialogVisible.value = true;
}
const fn = {
    add,
};
function upload({ file }: any) {
    compressor(file, uploadApi).then(res => {
        console.log(res);
    });
}
const formLabelAlign = reactive({
    name: '',
    region: '',
    type: '',
});
</script>
<template>
    <div class="box">
        <div :class="CL.SC">
            <el-button v-for="item in handleBtn" v-bind="item" @click="fn[item.prop]()">{{ item.name }}</el-button>
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
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="Name">
                <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="formLabelAlign.region" />
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item label="Activity form">
                <el-upload class="upload-demo" :http-request="upload" action="http://localhost:3030/upload" multiple :limit="3">
                    <el-button type="primary">Click to upload</el-button>
                    <template #tip>
                        <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
                        <img width="200" src="http://localhost:3030/uploadsImg/1655372057877.png" alt="" />
                    </template>
                </el-upload>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
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
