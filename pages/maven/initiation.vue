<template>
  <main class="container relative mx-auto">

    <section class="mx-4 --border-t pt-8 pb-8 lg:pt-12 lg:pb-20">
    <div
      class="
        grid
        grid-cols-1 lg:grid-cols-2
        gap-8
    ">
      <div class="--hidden lg:block mt-0 mb-4 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">---></div>

      <h2
        class="
          py-0 mb-4 md:mb-10
          flex flex-col
          text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold
          tracking-tighter
          lg:col-start-2
          lg:max-w-xl
      ">
          Initiation<br>Form
      </h2>
      <h3
        class="
        lg:col-span-1
        lg:col-start-2
        lg:max-w-xl
        text-xl md:text-2xl lg:text-3xl
        pt-12
        border-t
        pb-4
        tracking-tight
        leading-normal md:leading-normal lg:leading-normal
      ">
        Please tell us a bit about yourself so that we may review your request for an application.¹      </h3>
      <section class="lg:col-start-2">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div class="lg:col-start-1 lg:max-w-xl">

            <!-- FormKit -->
            <FormKit type="form" @submit="signup" submit-label="Be a Maven" >
              <FormKit
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                validation="required|alpha:latin"
                v-model="firstName"
              />

              <FormKit
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                validation="required|alpha:latin"
                v-model="lastName"
              />

              <FormKit
                type="text"
                name="email"
                id="email"
                label="Email"
                validation="required|*email"
                v-model="email"
              />

              <FormKit
                type="password"
                name="password"
                id="password"
                label="Password"
                validation="required|?length:8"
                :validation-messages="{ length: 'Try to make your password longer!',}"
                v-model="password"
              />

              <FormKit
                type="password"
                name="password_confirm"
                id="passwordConfirm"
                label="Confirm Password"
                validation="required|confirm"
              />
            </FormKit>

              <!-- Form Disclaimers -->
              <div class="relative">
              <span class="flex mt-2 text-xs">
                <span class="block w-3.5 h-3.5 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </span>
                All applications are kept secure and private.
              </span>
    
              <NuxtLink
                to="/maven/login"
                class="absolute right-0 -bottom-0.5 pb-0.5 text-xs font-bold text-center uppercase border-b border-transparent hover:border-black dark:hover:border-white"
              >
                Login
              </NuxtLink>

              <!-- <h2>Using <code>FormKitIcon</code> you can output any loaded icon anywhere.</h2>
              <FormKitIcon icon="bitcoin" /> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

    <!-- If not logged in show login form or signup form -->

  </main>
</template>

<script setup>
import { FormKitIcon } from '@formkit/vue'

const { $pb } = useNuxtApp()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

// const currentUser = ref('')
const maven = useState('maven', () => '')

definePageMeta({
  middleware: 'auth'
})

// const logout = () => {
//   $pb.authStore.clear()
//   currentUser.value = null
// }

const login = async () => {
  try {
    const authData = await $pb.collection('users')
      .authWithPassword(email.value, password.value)
      navigateTo('/maven/account')
    // after the above you can also access the auth data from the authStore
    // console.log($pb.authStore.isValid)
    // console.log($pb.authStore.token)
    // console.log($pb.authStore.model)
  } catch (error) {
    alert(error.message)
  }
}

const signup = async () => {
  try {
    const data = {
      "username": `TFM${self.crypto.randomUUID().split("-")[0]}`,
      "email": email.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": firstName.value + ' ' + lastName.value
    }

    const record = await $pb.collection('users').create(data);

    await login();
  } catch (error) {
    alert(error.message)
  }
}

onMounted(() => {
  $pb.authStore.onChange(() => {
    maven.value = $pb.authStore.model
  }, true)
})

</script>