import { defineRule } from "vee-validate";
import { all } from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
  Object.entries(all).forEach(([ruleName, ruleFn]) => {
    defineRule(ruleName, ruleFn);
  });

  // Custom rule to accept only English digits
  defineRule("englishNumbersOnly", (value: any) => {
    const englishNumbersRegex = /^[0-9]*$/;

    if (!englishNumbersRegex.test(value)) {
      return "Only English numbers are allowed";
    }
    return true;
  });
});
