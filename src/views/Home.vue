<template>
  <div class="home">
    <div
      style="
        margin-bottom: 30px;
        width: 500px;
        display: flex;
        just-content: space-around;
      "
    >
      <sh-button class="songhan" type="default" disabled border-radius>
        警告按钮
      </sh-button>
      <sh-button class="songhan" type="primary" disabled border-radius>
        警告按钮
      </sh-button>
      <sh-button class="songhan" type="success" size="medium" border-radius>
        警告按钮
      </sh-button>
      <sh-button class="songhan" type="warning" size="small" border-radius>
        警告按钮
      </sh-button>
      <sh-button class="songhan" type="info" size="mini" border-radius>
        警告按钮
      </sh-button>
    </div>
    <div style="width: 50px">
      <sh-input
        v-model="username"
        type="textarea"
        clearbled
        :autosize="{ minHeight: 5, maxHeight: 6 }"
        show-password
        :disabled="false"
      ></sh-input>
    </div>
  </div>
</template>

<script>
import ShButton from "../components/sh-button/index";
import ShInput from "../components/sh-input/index";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      disabled: false,
    };
  },
  components: {
    ShButton,
    ShInput,
  },
  methods: {
    handleInput() {},
  },
};
</script>
<style  scoped>
.home {
  width: 500px;
  margin: 0 auto;
}
.wd-300 {
  width: 300px;
}
</style>
