<template>
  <div class="form-item">
    <div class="label-main">
      <div v-if="label" class="label" :class="[required?'label-required':'']">{{label}}</div>
      <slot></slot>
    </div>
    <div class="err-msg" v-if="errMsg">{{errMsg}}</div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "XFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      errMsg: ""
    };
  },
  methods: {
    validate() {
      let value = this.form.formData[this.prop];
      let rules = this.form.rules[this.prop];
      let desc = new Schema({ [this.prop]: rules });
      return desc.validate(
        {
          [this.prop]: value
        },
        err => {
          if (err) {
            this.errMsg = err[0].message;
          } else {
            this.errMsg = "";
          }
        }
      );
    }
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  }
};
</script>

<style lang="scss" scoped>
.form-item {
  height: 40px;
  .label-main {
    display: flex;
    .label {
      text-align: right;
      width: 60px;
    }
    .label-required {
      &::before {
        content: "*";
        color: red;
      }
    }
  }
  .err-msg {
    &::before {
      content: "*";
    }
    font-size: 14px;
    color: red;
  }
}
</style>