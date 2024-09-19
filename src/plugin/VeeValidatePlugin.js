import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
export default (app) => {
  defineRule("required", (value) => {
    if (value && value.trim()) return true;
    return "This is required";
  });

  app
    .component("VeeForm", Form)
    .component("VeeField", Field)
    .component("VeeErrorMessage", ErrorMessage);
};
