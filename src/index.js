import ShInput from "./components/sh-input/index";
import ShButton from "./components/sh-button/index";
const components = [ShInput, ShButton];
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default { install, ShInput, ShButton };
