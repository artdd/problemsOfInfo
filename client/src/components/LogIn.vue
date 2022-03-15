<template>
  <div class="page">
    <div class="log-in__container">
      <div class="log-in__item">
        <div class="log-in__title">
          Войти в аккаунт
        </div>
      </div>
      <form @submit.prevent="formSubmit">
      <input class="log-in__input" type="email" placeholder="Электронная почта"  v-model="form.email">
      <input class="log-in__input" type="password" placeholder="Пароль"  v-model="form.password">
        <div>
          <button type="submit"  @click="SignIn"  class="log-in__button">Войти</button>
        </div>
          </form>
      </div>
    </div>

</template>

<script>
export default {
  name: 'LogIn',
   data(){
    return {
      form:{
        email: '',
        password: ''
      },
      errors:[]
    }
  },
  methods: {
    async SignIn() {
     const res = await fetch('http://localhost:4000/auth',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password
        })
      })
      console.log(res)
    },
  }
}
  
</script>

<style lang="less" scoped>
@import "../utils/mixins.less";
@import "../utils/const.less";

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
}
.log-in {
  &__container{
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  .shadow();
  width: 30%;
  height: 250px;
  }
  &__item {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  &__title{
  font-size: 1.5em; 
  margin-bottom: 8px; 
  }
  &__input {
  margin-bottom: 8px;
  width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: @utility-border-input;
  height: 25px;
  padding: 8px;
  }
  &__button{
  margin: 15px 0 8px;
  background-color: @header-background;
  color: white;
  padding: 5px;
  border-radius: 8px; 
  box-shadow: none;
  border: none;
  }
}
.password {
  margin-bottom: 8px;
}
.email {
  margin-bottom: 8px;
}
</style>