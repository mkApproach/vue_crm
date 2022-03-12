<template>
    <div class="container">
        <p>{{msg}}</p>
        <hr>

       <div class="card-header">                   
            <table width="100%">
            <td style="text-align: left;">役職一覧</td>
            <td style="text-align: right;"><input type="button" onclick="location.href='/home'" value="ホーム"></td>
            </table>     
        </div>

        <table class="vue_tbl" width="100%" border="1">
            <thead>
            <tr style="background-color: lightgray">
            <tr>
                <th>ID</th>
                <th>役職コード</th>
                <th>役職</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(role, key) in roles">
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
            msg:'wait...',
            name:'',
            roles:[{id:1, name:'3210', memo:'thank you!'}],
        };
    },
    methods: {
        roleRead() {
            axios.get("/api/role/read").then((res) => {
                this.roles = res.data;
                this.msg = '';
            });
        },
    },
    mounted() {
  
        this.roleRead();
    },
}
</script>