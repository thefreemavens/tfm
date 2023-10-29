<template>
  <!-- <div class="flex flex-col justify-center items-center"> -->
    <div>

      <!-- <hr class="my-8 border-grey-100 dark:border-gray-900" /> -->
      <!-- <hr class="my-6 border-gray-100 dark:border-gray-700" /> -->

    <form
      id="join"
      ref="formElement"
      class="text-left"
      @submit.prevent="formSubmit()"
    >
      <!-- First Name -->
      <div class="form-group group">
        <input
        class="peer"
        v-model="firstName"
        type="text"
        required="required"
        name="entry.1090129806"
        />
        <label
          for="firstName"
          class=""
        >
          First Name
        </label>
      </div>

      <!-- Last Name -->
      <div class="form-group group">
        <input
        class="peer"
        v-model="lastName"
        type="text"
        required="required"
        name="entry.57994274"
        />
        <label for="lastName"
          class="">
          Last Name
        </label>
      </div>

      <!-- Email -->
      <div class="form-group group">
        <input
          class="peer"
          v-model="email"
          type="text"
          required="required"
          name="entry.1097449195"
        />
        <label for="user-email"> Email </label>
      </div>

      <!-- <div class="question">
        <h4 class="">Question 1</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 1 </NuxtLink>
          , what does the old saying "There is nothing new under the sun"
          means?
        </p>
      </div> -->

      <!-- Form: Question 1 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerA"
            type="text"
            required="required"
            name="entry.568051769"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- <div class="question">
        <h4 class="">Question 2</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 2 </NuxtLink>
          , Truth, by its very nature, is Beligerent. Why so?
        </p>
      </div> -->

      <!-- Form: Question 2 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerB"
            type="text"
            required="required"
            name="entry.660058584"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- <div class="question">
        <h4 class="">Question 3</h4>
        <p clas>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 3 </NuxtLink>
          , what is considered to be a Logical Fallacy?
        </p>
      </div> -->

      <!-- Form: Question 3 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerC"
            type="text"
            required="required"
            name="entry.1154524792"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- Submit Button -->
        <button
          :disabled="invalid"
          class="
            w-full
            text-center
            mt-2
            bg-grey-975
            dark:bg-white
            text-white
            dark:text-grey-975
            py-2.5
            --rounded
            font-bold
            uppercase
            text-base
        ">
        Request Invite
      </button>

            <!-- Form Disclaimers -->
      <span class="text-xs flex mt-1.5">
        <span class="block w-3.5 h-3.5 me-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
          </svg>
        </span>

        All applications are kept secure and private.
      </span>

    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      answerA: null,
      answerB: null,
      answerC: null,
    }
  },
  methods: {
    formSubmit() {
      const vm = this
      const formElement = vm.$refs.formElement
      const formData = new FormData(formElement)
      const url =
        'https://docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse'
      this.errors = []
      axios
        .post(url, formData)
        .then(function (response) {
          navigateTo('/')
        })
        .catch(function (error) {
          navigateTo('/')
        })
    },
  },
}
</script>