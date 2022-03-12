<template>
    <div class="taskComponent">
        <form @submit.prevent="roleCreate">
            <label>役職cd：
                <input v-model="newrole.name" type="text">
                <div class="error_txt" v-html="errors.name"></div>
            </label>
            <br>
            <label>役職名：
                <input v-model="newrole.memo" type="text">&nbsp;<button>新規作成</button>
                <div class="error_txt" v-html="errors.memo"></div>
            </label>
            
        </form>
 
        <table class="vue_tbl" width="100%" border="1" margin="100%">
            <thead>
            <tr bgcolor="lightgray">
                <td>ID</td>
                <td>役職コード</td>
                <td>役職</td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(role, index) in roles"" :key="index">
                    <td>{{ role.id }}</td>
                    <td>
                        <span v-if="!role.edit">{{role.name}}</span>
                        <input v-if="role.edit" v-model="role.name" type="text">
                    </td>
                    <td>
                        <span v-if="!role.edit">{{role.memo}}</span>
                        <input v-if="role.edit" v-model="role.memo" type="text">
                   </td>
                    <td>
                        <button v-if="!role.edit" @click="role.edit = true">編集</button>
                        <button v-if="role.edit" @click="roleUpdate(index)">更新</button> 
                    </td> 
                    <td><button @click="roleDelete(role.id)">削除</button></td> 
                </tr>
            </tbody>
            
        </table>
     </div>
</template>

<script>


export default {
    data() {
        return {
            newrole: {
                name: "",
                memo: "",
            },
            roles:[],
            errors: {
            }
        };
    },
    methods: {
        roleCreate() {
            if (this.newrole.name != "") {
                var self = this;
                axios.post("/api/role/create", this.newrole).then((res) => {
                    this.newrole.name = "";
                    this.newrole.memo = "";
                    this.roleRead();
                })
                .catch(function(error){
                    var errors = {};
                    for(var key in error.response.data.errors) {
                        errors[key] = error.response.data.errors[key].join('<br>');
                    }
                    
                    self.errors = errors;
                     
                });
                
            }
        },
        roleUpdate(index) {
            this.roles[index].edit = false;
            axios.put("/api/role/update", this.roles[index]).then((res) => {
                this.roleRead();
            });
        },
        roleDelete(id) {
            axios.delete("/api/role/delete/" + id).then((res) => {
                this.roleRead();
            });
        },
        roleRead() {
            axios.get("/api/role/read").then((res) => {
                this.roles = res.data;
                this.roles.forEach((role) => {
                   this.$set(role, "edit", false);
                });
            });
            this.errors = {};
        },
    },
    mounted() {
        this.roleRead();
    },
};

</script>


<style lang="scss" scoped>
 .error_txt{margin-bottom: 10px; display: block; color: #f00; font-size: 13px;}

 li{
     list-style: none;
     margin-bottom: 15px;
 }
 .red{
     color: red;
 }
 .gray{
     color: #3333aa;
 }
 
.taskComponent {
  width: 40%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .taskComponent {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .taskComponent {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .taskComponent {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .taskComponent {
    max-width: 1140px;
  }
}

.taskComponent-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

</style>