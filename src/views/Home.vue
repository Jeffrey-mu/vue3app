<template>
    <el-container>
        <el-header>
            <h1>VUE3.0</h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-main>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">{{route.meta.name}}</a></el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view />
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script setup>
import Menu from '@/components/common/menu.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route)
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
    padding: 4px;
    color: #333;
    /* text-align: center; */
}
</style>
