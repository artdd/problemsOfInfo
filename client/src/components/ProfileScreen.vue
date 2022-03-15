<template>
  <div class="profile">
    <div class="profile__menu">
      <div class="profile__menu_item">Мой профиль</div>
      <div class="profile__menu_item">Мои статьи</div>
      <div class="profile__menu_item">Редактировать профиль</div>
    </div>
    <div class="profile__container">
      <div class="profile__avatar">
        <img src="../assets/img/author.png">
      </div>
      <div class="profile__main-data">
        <input class="profile__input" placeholder="Имя"/>
        <input class="profile__input" placeholder="Фамилия"/>
        <input class="profile__input" placeholder="Отчество"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileScreen'
}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

.profile {
  margin: 0 auto;
  width: 100%;
  height: 700px;
  background-color: @utility-border;
  &__avatar {
    width: 200px;
    height: 200px;
    .nice-shadow();
  }
  &__container {
    position: absolute;
    left: 300px;
    bottom: 300px;
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
    }
  &__menu {
    position: absolute;
    width: 200px;
    height: 100%;
    background-color: rgba(1, 68, 97,0.8);
    display: flex;
    flex-direction: column;
    &_item {
      border: 1px solid @utility-border;
      padding: 8px 8px 14px;
      color: @utility-white;
    }
  }
  &__main-data {
    position: absolute;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 300px;
    bottom: 20px; 
  }
}
</style>

