<template>
    <el-menu active-text-color="#ffd04b" mode="vertical" router background-color="#545c64" class="el-menu-vertical-demo" default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
        <el-sub-menu :index="item.path" v-for="item in menuList">
            <template #title>
                <span>{{ item.name }}</span>
            </template>
                <el-menu-item v-for="ch in item.children" :index="ch.path">{{ ch.name }}</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
const menuList = [
    {
        path: '/System',
        name: '系统设置',
        children: [
            {
                path: '/System/user',
                name: '用户设置',
            },
            {
                path: '/System/role',
                name: '角色设置',
            },
        ],
    },
    {
        path: '/login',
        name: '登录',
        children: [
            {
                path: '/login',
                name: '登录',
            },
        ],
    },
];
import { useMouse } from '@vueuse/core';

const { x, y, sourceType } = useMouse();
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>
