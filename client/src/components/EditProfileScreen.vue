<template>
<div>
  <div class="profile">
    <div class="menu">
      <router-link class="menu__item" to="/MyProfileScreen">Мой профиль</router-link>
      <div class="menu__item">Мои статьи</div>
      <div class="menu__item menu__item_checked">Редактировать профиль</div>
    </div>
    <div class="profile__container">
      <div class="profile__avatar-and-data">
        <div>
          <img class="profile__avatar" src="../assets/img/default-user.jpg">
          <div class="edit-photo">Изменить аватар</div>
        </div>
        <div class="profile__main-data">
          <input class="profile__input" v-model="user.name" placeholder="Имя"/>
          <input class="profile__input" v-model="user.surname" placeholder="Фамилия"/>
          <input class="profile__input" v-model="user.patronymic" placeholder="Отчество"/>
        </div>
      </div>
      <div class="profile__data">
        <input class="profile__input" v-model="user.email" placeholder="Электронная почта"/>
        <input class="profile__input" v-model="user.password" placeholder="Пароль"/>
      </div>
      <div class="profile__subtitle">Образование</div>
      <div class="profile__education">
        <input class="profile__input profile__input_long" v-model="user.educationPlace" placeholder="Наименование учреждения"/>
         <input class="profile__input profile__input_long" v-model="user.educationKey" placeholder="Код специальности"/>
      </div>
      <div class="profile__subtitle">Работа</div>
      <div class="profile__education">
        <input class="profile__input profile__input_long" v-model="user.placeOfWork" placeholder="Место работы"/>
         <input class="profile__input profile__input_long" v-model="user.workPosition" placeholder="Должность"/>
        <input class="profile__input profile__input_long" v-model="user.academicDegree" placeholder="Ученая степень"/>
        <button class="profile__button" @click="editUser" >Подтвердить</button>
      </div>
    </div>
  </div>
  <Footer />
</div>
  
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'EditProfileScreen',
  components: {
    Footer
  },
  data: function() {
    return {
      user: {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        educationPlace: '',
        educationKey: '',
        placeOfWork: '',
        workPosition: '',
        academicDegree: ''
      }
    }
  },
  methods: {
     editUser() {
      this.$store.commit('set', {
        user: this.user
      }),
      console.log(this.user)
    }
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
    margin-top: 16px;
    justify-content: space-between;
  }
  &__avatar {
    width: 200px;
    height: 200px;
    .nice-shadow();
    border-radius: 32px;
  }
  &__container {
    padding: 30px 30px 30px 0;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
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
  &__main-data {
    display: flex;
    flex-direction: column;
    margin-left: 45px;
  }
}

.edit-photo {
  .subtitle-big-bold();
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
  color: @text-grey;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 48px;
}

.menu {
    width: 200px;
    margin-left: 100px;
    height: 100%;
    display: flex;
    margin-top: 30px;
    background-color: @dark-text-secondary;
    flex-direction: column;
    &__item {
      border: 1px solid @utility-border;
      padding: 8px 8px 14px;
      background-color: rgba(1, 68, 97,0.7);
      color: @utility-white;
      text-decoration: none;
      cursor:pointer;
      &:hover {
        background-color: rgba(1, 68, 97);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
      } 
      &_checked {
      background-color: rgba(1, 68, 97);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
    }
  }
</style>

