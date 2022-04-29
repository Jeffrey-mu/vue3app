<template>
    <div class="login-box">
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
// do not use same name with ref
const form = reactive({
    name: 'admin',
    psd: '123456',
});
const router = useRouter()
const onSubmit = () => {
    login(form).then(res => {
        if (res.code == 200) {
            localStorage.setItem('use_name', form.name);
            router.push({ name: 'Home' });
        } else {
            console.log();
        }
    });
};
</script>
<style scoped>
.login-box {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
