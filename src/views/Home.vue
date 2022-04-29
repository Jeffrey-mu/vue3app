<template>
    <el-container>
        <el-header>奖励系统</el-header>
        <el-container>
            <el-aside width="200px">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script setup>
import Menu from '@/components/common/menu.vue'
</script>
<style>
.el-container {
    height: 100%;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    /* text-align: center; */
    line-height: 160px;
}
</style>
