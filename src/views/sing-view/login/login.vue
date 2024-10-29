<template>
  <form-wrapper>
    <h2>Добро пожаловать</h2>
    <Form :validation-schema="schema" as="form" @submit="login">
      <div class="manual-enter">
        <d-text-field
            label="E-mail"
            name="email"
            type="email"
            class="mb-3"
            v-model="username"
        />
        <d-text-field
            :type="passwordType"
            label="Пароль"
            name="password"
            @click:appendInner="togglePasswordVisible"
            class="mb-3"
            v-model="password"
        />
        <v-btn class="login-btn" type="submit">
          Войти
        </v-btn>
      </div>
    </Form>

  </form-wrapper>
</template>

<script>

import {computed, ref} from "vue";
import LoginAPI from './service/login-service';
import {Form} from 'vee-validate';
import FormWrapper from "@/views/sing-view/components/form-wrapper.vue";
import {showENotify} from "@/global/functions/notifications-funcs.js";

export default {
  name: "login-form",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: {FormWrapper, Form},
  setup() {
    let username = ref(null);
    let password = ref(null);
    let passwordType = ref("password");
    const schema = {
      email: 'required|email',
      password: "required"
    };

    let login = () => {
      LoginAPI.login(username.value, password.value).catch((response) => {
        if (response.status === 401) {
          showENotify("Не верный логин или пароль");
        }
        showENotify("Произошла ошибка");
      });
    }

    let loginWith = (providerName) => {
      LoginAPI.loginWith(providerName);
    }

    let togglePasswordVisible = () => {
      if (passwordType.value === "password") {
        passwordType.value = "text";
      } else {
        passwordType.value = "password";
      }
    };

    return {
      // data
      username,
      password,
      passwordType,
      schema,
      // methods
      login,
      loginWith,
      togglePasswordVisible,
      // computed
      cPasswordIcon: computed(() => passwordType.value === 'password' ? "visibility" : "visibility_off")
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

.divider {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 20px 0;

  span {
    font-style: italic;
    color: #525252;
  }

  .text {
    margin: 0 10px;
  }

  .divider-line {
    height: 1px;
    width: 30%;
    background-color: #525252;
  }
}

.manual-enter {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .v-text-field {
    width: 100%;
  }

  .login-btn {
    width: 260px;
    color: white;
    font-weight: bold;

    background: linear-gradient(-45deg, #f91b4c, #fa8844);
    background-size: 400% 400%;

    .v-btn__content {
      margin-left: 18px;
    }
  }
}

.btn-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .enter-btn {
    margin: 5px;
    text-transform: none !important;
    border-radius: 10px;

    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
