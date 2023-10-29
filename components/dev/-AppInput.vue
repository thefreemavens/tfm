<template>
  <div class="group relative mb-3 text-left">
    <input
      class="
      peer
      rounded w-full outline-none
      my-0 pb-2 pt-7 px-3
      text-base leading-tight
      text-grey-900 dark:text-white
      bg-transparent dark:bg-transparent border
      border-grey-200 dark:border-grey-800
      group-hover:border-grey-975 dark:group-hover:border-white
      focus:ring-1 focus:ring-black dark:focus:ring-white
      focus:border-black dark:focus:border-white
      focus-visible:border-black focus-visible:ring-black
      transform transition-all duration-200 ease-in-out
      "
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :name="name"
      :disabled="disabled"
      :required="required"

    />
    <label
      :for="labelFor"
      class="
      absolute flex items-center -z-[1]
      px-3
      text-grey-500 dark:text-grey-500
      text-base group-focus-within:text-xs peer-valid:text-xs
      top-4 group-focus-within:top-5 peer-valid:top-5
      group-focus-within:-translate-y-full peer-valid:-translate-y-full
      transform transition-all duration-100 ease-linear
      ">
        {{ label }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  model: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  placeholder: {
    type: [String, Number, Boolean],
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  labelFor: {
    type: String,
    default: ''
  },  
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: true
  },
})
</script>