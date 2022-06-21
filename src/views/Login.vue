<template>
    <div ma w-screen h-screen flex justify-center items-center>
        <el-form :model="form" label-width="120px">
            <el-form-item label="账号">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.psd" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { login } from '@/api/login';
import { useRouter } from 'vue-router';
const form = reactive({
    name: 'admin',
    psd: '123456',
});
const router = useRouter()
const onSubmit = () => {
    login(form).then((res: {code: number})  => {
        if (res.code == 200) {
            localStorage.setItem('use_name', form.name);
            router.push({ name: 'Home' });
        } else {
            console.log();
        }
    });
};
</script>
