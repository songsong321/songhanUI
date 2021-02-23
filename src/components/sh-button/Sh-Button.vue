<template>
  <div :class="['songhan-button-out', { disabled: disabled }]">
    <button
      ref="ShButton"
      :class="['songhan-button']"
      :disabled="disabled"
      @click="onClick"
    >
      <i :class="['iconfont', { [icon]: true }, 'ShButton']"></i>
      <span><slot></slot></span>
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "sh-button",

  methods: {
    onClick() {
      this.$emit("click");
    },
    async setStyle() {
      if (this.freeWidth) {
        this.$refs.ShButton.classList.add("freeWidth");
      } else {
        this.$refs.ShButton.classList.remove("freeWidth");
      }
      if (this.backgroundColor != "") {
        this.$refs.ShButton.style.backgroundColor = this.backgroundColor;
      } else {
        let color = "";
        switch (this.type) {
          case "default":
            color = "white";
            break;
          case "primary":
            color = "#409eff";
            break;
          case "warning":
            color = "#f90";
            break;
          case "danger":
            color = "#ed4014";
            break;
          case "success":
            color = "#19be6b";
            break;
          case "info":
            color = "#2db7f5";
            break;
          default:
            color = "white";
            break;
        }
        this.$refs.ShButton.style.backgroundColor = color;
      }
      if (this.textColor != "") {
        this.$refs.ShButton.style.color = this.textColor;
      } else {
        if (
          this.type != "default" &&
          this.type != "primary" &&
          this.type != "warning" &&
          this.type != "danger" &&
          this.type != "info" &&
          this.type != "success"
        ) {
          this.type = "default";
        }
        let color = "";
        switch (this.type) {
          case "default":
            color = "#666666";
            break;
          case "primary":
            color = "white";
            break;
          case "warning":
            color = "white";
            break;
          case "danger":
            color = "white";
            break;
          case "success":
            color = "white";
            break;
          case "info":
            color = "white";
            break;
          default:
            color = "#666666";
            break;
        }
        this.$refs.ShButton.style.color = color;
      }

      if (this.borderRadius == "-1") {
        this.$refs.ShButton.style.borderRadius = "0";
      } else {
        if (this.borderRadius == "") {
          this.$refs.ShButton.style.borderRadius = "4px";
        } else if (this.borderRadius.indexOf("%") >= 0) {
          this.$refs.ShButton.style.borderRadius = this.borderRadius;
        } else {
          this.$refs.ShButton.style.borderRadius = this.borderRadius + "px";
        }
      }
      await this.$refs.ShButton.classList.remove("default");
      await this.$refs.ShButton.classList.remove("primary");
      await this.$refs.ShButton.classList.remove("warning");
      await this.$refs.ShButton.classList.remove("danger");
      this.$refs.ShButton.classList.add(this.type || "default");
      if (this.freeWidth == false) {
        await this.$refs.ShButton.classList.remove("medium");
        await this.$refs.ShButton.classList.remove("small");
        await this.$refs.ShButton.classList.remove("mini");
        this.$refs.ShButton.classList.add(this.size || "none");
      }
    },
  },
  watch: {
    borderRadius: function () {
      this.setStyle();
    },
    size: function () {
      this.setStyle();
    },
    type: function () {
      this.setStyle();
    },
    backgroundColor: function () {
      this.setStyle();
    },
    textColor: function () {
      this.setStyle();
    },
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    backgroundColor: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    borderRadius: {
      type: String,
      default: "-1",
    },
    freeWidth: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.setStyle();
  },
  created() {},
};
</script>

<style scoped >
.ShButton {
  width: 14px;
  height: 14px;
}
.songhan-button-out .songhan-button {
  line-height: 1;
  outline: none;
  cursor: pointer;
  padding: 12px 20px;
  transition: background-color 0.3s, border-color, 0.3s;
  text-align: center;
  font-size: 14px;
  font-weight: 510;
  position: relative;
  white-space: nowrap;
  letter-spacing: 1px;
}
.songhan-button-out .freeWidth {
  width: 100%;
}
.songhan-button-out .default {
  background-color: white;
  border: 1px solid #ccc;
  color: #666666;
}
.songhan-button-out .default:hover {
  box-shadow: 0px 0px 8px rgba(237, 237, 250, 0.6),
    0px 2px 4px 0 rgba(232, 237, 250, 0.5);
  border-color: #409eff;
  color: #409eff !important;
}

.songhan-button-out .medium {
  padding: 10px 20px;
  font-size: 14px;
}

.songhan-button-out .small {
  padding: 9px 15px;
  font-size: 12px;
}
.songhan-button-out .mini {
  padding: 7px 15px;
  font-size: 12px;
}
.songhan-button-out .primary {
  background-color: #409eff;
  border: none;
  color: white;
  position: relative;
}
.songhan-button-out .primary::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
}
.songhan-button-out .primary:hover::before {
  opacity: 1;
}
.songhan-button-out .primary:active::before {
  opacity: 0;
}
.songhan-button-out .warning {
  background-color: #f90;
  border: none;
  color: white;
  position: relative;
}
.songhan-button-out .warning::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
}
.songhan-button-out .warning:hover::before {
  opacity: 1;
}
.songhan-button-out .warning:active::before {
  opacity: 0;
}
.songhan-button-out .success {
  background-color: #19be6b;
  border: none;
  color: white;
  position: relative;
}
.songhan-button-out .success::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
}
.songhan-button-out .success:hover::before {
  opacity: 1;
}
.songhan-button-out .success:active::before {
  opacity: 0;
}
.songhan-button-out .danger {
  background-color: #ed4014;
  border: none;
  color: white;
  position: relative;
}
.songhan-button-out .danger::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
}
.songhan-button-out .danger:hover::before {
  opacity: 1;
}
.songhan-button-out .danger:active::before {
  opacity: 0;
}
.songhan-button-out .info {
  background-color: #2db7f5;
  border: none;
  color: white;
  position: relative;
}
.songhan-button-out .info::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
}
.songhan-button-out .info:hover::before {
  opacity: 1;
}
.songhan-button-out .info:active::before {
  opacity: 0;
}
.disabled button::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.2s, background-color 0.2s;
  background: rgba(255, 255, 255, 0.4) !important;
  cursor: not-allowed;
  opacity: 1 !important;
}
.disabled .default:hover {
  box-shadow: none;
  border-color: #ccc;
  color: #666666 !important;
}
</style>
