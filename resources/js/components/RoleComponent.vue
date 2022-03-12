<template>
    <div class="container">

        <table class="vue_tbl" width="100%" border="1" margin="100%">
            <thead>
            <tr bgcolor="lightgray">
                <td>ID</td>
                <td>役職コード</td>
                <td>役職</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="role in roles" :key="role.id">
                    <td>{{ role.id }}</td>
                    <td>{{ role.name }}</td>
                    <td>{{ role.memo }}</td>
                </tr>
            </tbody>
    
        </table>
    </div>
</template>


<script>
const axios = require('axios');                 


export default {
    data:function(){
        return {
            roles:[{id:1, name:'3210', memo:'thank you!'}],
        };
    },
    methods: {
        roleRead() {
            axios.get("/api/role/read").then((res) => {
                this.roles = res.data;
            });
        },
    },
    mounted() {  
        this.roleRead();
    },
}
</script>