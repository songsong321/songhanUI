<template>
  <div class="songhanui-input-out">
    <textarea
      ref="textarea"
      name=""
      @input="handleInput"
      id="textarea"
      :value="value"
      :disabled="disabled"
      :class="[{ isDisabled: disabled }]"
      class="textarea"
      v-if="types == 'textarea'"
    ></textarea>
    <input
      v-if="types != 'textarea'"
      :type="types"
      :value="value"
      ref="shInput"
      :class="[{ 'songhanui-input': true }, { isDisabled: disabled }]"
      :disabled="disabled"
      @input="hanldeInput"
      @blur="handleBlur"
      @focus="handleFocus"
      placeholder="请输入内容"
    />

    <i
      @mousedown="handleDown"
      @click="clearClose()"
      class="iconfont iconclear clearble"
      v-show="clearble && clearbled && type == 'text'"
    >
    </i>

    <i
      v-if="
        !showPass && oldType == 'password' && showPassword && value.length != 0
      "
      @click="setPass('text')"
      @mousedown="handleDown"
      class="iconfont iconclose close"
    ></i>
    <i
      v-if="
        showPass && oldType == 'password' && showPassword && value.length != 0
      "
      @mousedown="handleDown"
      @click="setPass('password')"
      class="iconfont iconshow show"
    ></i>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "sh-input",
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    clearbled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    autosize: {},
  },
  data() {
    return {
      clearble: false,
      showPass: false,
      types: "text",
      oldType: "text",
    };
  },
  watch: {
    value: function (val) {
      if (val.length == 0) {
        this.$emit("input", "");
        this.clearble = false;
      }
      this.showPass = this.types == "text" ? true : false;
    },
    type: function (val) {
      this.types = val;
      this.oldType = val;
    },
    types: function (val) {
      if (val == "textarea") {
        if (typeof this.autosize == "object") {
          this.$refs.textarea.style.height = "auto";
          this.$refs.textarea.style.overflowY = "hidden";
          this.$refs.textarea.style.height =
            this.$refs.textarea.scrollHeight + "px";
          document.getElementById("textarea").style.minHeight =
            this.autosize.minHeight * 20 + "px";
          if (
            parseInt(document.getElementById("textarea").style.height) >=
            this.autosize.maxHeight * 20
          ) {
            document.getElementById("textarea").style.height =
              this.autosize.maxHeight * 20 + "px";
            this.$refs.textarea.style.overflowY = "scroll";
          }
        } else if (typeof this.autosize == "string") {
          this.$refs.textarea.style.height = "auto";
          this.$refs.textarea.style.overflowY = "hidden";
          this.$refs.textarea.style.height =
            this.$refs.textarea.scrollHeight + "px";
        }
      }
    },
    deep: true,
  },
  created() {
    this.types = this.type;
    this.oldType = this.type;
  },
  methods: {
    hanldeInput(e) {
      if (e.target.value.length > 0) {
        if (this.oldType == "text") {
          this.clearble = true;
        } else if (this.oldType == "password") {
          this.showPass = false;
        }
      }
      this.$emit("input", e.target.value);
    },
    handleInput(e) {
      if (typeof this.autosize == "object") {
        this.$refs.textarea.style.height = "auto";
        this.$refs.textarea.style.overflowY = "hidden";
        this.$refs.textarea.style.height =
          this.$refs.textarea.scrollHeight + "px";
        document.getElementById("textarea").style.minHeight =
          this.autosize.minHeight * 20 + "px";
        if (
          parseInt(document.getElementById("textarea").style.height) >=
          this.autosize.maxHeight * 20
        ) {
          document.getElementById("textarea").style.height =
            this.autosize.maxHeight * 20 + "px";
          this.$refs.textarea.style.overflowY = "scroll";
        }
      } else if (typeof this.autosize == "string") {
        this.$refs.textarea.style.height = "auto";
        this.$refs.textarea.style.overflowY = "hidden";
        this.$refs.textarea.style.height =
          this.$refs.textarea.scrollHeight + "px";
      }

      this.$emit("input", e.target.value);
    },
    clearClose() {
      this.clearble = false;
      this.$emit("input", "");
    },
    handleBlur() {
      this.clearble = false;
    },
    handleFocus() {
      if (this.value.length > 0) {
        this.clearble = true;
      }
    },
    handleDown(event) {
      event.preventDefault();
    },
    setPass(type) {
      this.types = type;
      this.showPass = type == "text" ? true : false;
    },
  },
};
</script>

<style scoped>
.songhanui-input-out input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  padding-right: 30px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  cursor: pointer;
}
.songhanui-input-out .textarea {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  outline: none;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.songhanui-input-out .isDisabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.songhanui-input:hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.songhanui-input:focus {
  outline: none;
  border-color: #409eff;
}

.songhanui-input-out {
  position: relative;
  width: 100%;
  min-width: 200px;
}
.clearble {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;

  cursor: pointer;
}
.close {
  position: absolute;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  right: 10px;
  margin: auto;
  cursor: pointer;
}
.show {
  position: absolute;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  right: 10px;
  margin: auto;
  cursor: pointer;
}
.textarea:focus {
  outline: none;
  border-color: #409eff;
}
</style>
