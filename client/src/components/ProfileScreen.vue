<template>
<div>
  <div class="profile">
    <div class="profile__menu">
      <div class="profile__menu_item">Мой профиль</div>
      <div class="profile__menu_item">Мои статьи</div>
      <div class="profile__menu_item">Редактировать профиль</div>
    </div>
    <div class="profile__container">
      <div class="profile__avatar-and-data">
        <div class="profile__avatar">
        <img src="../assets/img/author.png">
      </div>
      <div class="profile__main-data">
        <input class="profile__input" placeholder="Имя"/>
        <input class="profile__input" placeholder="Фамилия"/>
        <input class="profile__input" placeholder="Отчество"/>
      </div>
      </div>
      <div class="profile__data">
        <input class="profile__input" placeholder="Электронная почта"/>
        <input class="profile__input" placeholder="Пароль"/>
      </div>
      <div class="profile__subtitle">Образование</div>
      <div class="profile__education">
        <input class="profile__input profile__input_long" placeholder="Наименование учреждения"/>
         <input class="profile__input profile__input_long" placeholder="Код специальности"/>
      </div>
      <div class="profile__subtitle">Работа</div>
      <div class="profile__education">
        <input class="profile__input profile__input_long" placeholder="Место работы"/>
         <input class="profile__input profile__input_long" placeholder="Должность"/>
        <input class="profile__input profile__input_long" placeholder="Ученая степень"/>
        <button class="profile__button">Подтвердить</button>
      </div>
    </div>
  </div>
  <Footer />
</div>
  
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'ProfileScreen',
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

.profile {
  margin: 0 auto;
  display: flex;
  width: 100%;
  background-color: @utility-border;
  &__education {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  &__subtitle {
    .title-big-bold();
    text-align: center;
    margin-top: 40px;
  }
  &__avatar-and-data {
    display: flex;
  } 
  &__data {
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
  }
  &__avatar {
    width: 200px;
    height: 200px;
    .nice-shadow();
  }
  &__container {
    padding: 30px 30px 30px 60px;
    display: flex;
    flex-direction: column;
    margin-left: 15%;
  }
  &__input {
      text-align: center;
      margin: 16px 0 0;
      border: none;
      outline: none;
      background-color: @utility-border-input;
      height: 25px;
      padding: 8px;
      border-radius: 8px;
      .nice-shadow();
      &_long {
        width: 300px;
      }
  }
  &__button {
    text-align: center;
      margin: 32px 0 0;
      border: none;
      outline: none;
      .nice-shadow();
      padding: 8px;
      border-radius: 8px;
      background-color: rgba(1, 68, 97,0.8);
      color: @utility-white;
  }
  &__menu {
    width: 200px;
    height: 100%;
    display: flex;
    margin-top: 30px;
    background-color: @dark-text-secondary;
    flex-direction: column;
    &_item {
      border: 1px solid @utility-border;
      padding: 8px 8px 14px;
      background-color: rgba(1, 68, 97,0.8);
      color: @utility-white;
      cursor:pointer;
    }
  }
  &__main-data {
    display: flex;
    flex-direction: column;
    margin-left: 120px;
  }
}
</style>

