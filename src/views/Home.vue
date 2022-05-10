<template>
    <el-container>
        <el-header>
            <h1>有趣的实验室</h1>
        </el-header>
        <el-container>
            <el-aside width="230px">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-main>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{route.meta.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
        <el-footer>Footer</el-footer>
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
.el-header {
    background: #fff;
}
.el-header,
.el-footer {
    color: #333;
    /* text-align: center; */
    line-height: 60px;
}

.el-aside {
    padding: 20px;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
}

.el-main {
    width: 100%;
    padding-top: 10px;
    margin: 10px auto;
    color: #333;
    /* text-align: center; */
}
</style>
