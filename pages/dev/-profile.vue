<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="currentUser" class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded-sm dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button>

    <!-- IF User-->
    <AppSection v-if="currentUser" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello,<br>
        {{ currentUser.name.split(' ')[0] }}
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>
      </div>

      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->


    </AppSection>

    <section v-else class="mx-4 --border-t pt-8 pb-8 lg:pt-12 lg:pb-20">
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
      <span>
        <span v-if="loginMode">
          Login
        </span>
        <span v-else>
          Initiation<br>Form
        </span>
        <!-- {{ loginMode ? "Login" : "Application Form" }} -->
      </span>
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
        <!-- <span class="mb-4 md:mb-8 block">-></span> -->
        {{ loginMode ? "Glad to see you again" : 'Please tell us a bit about yourself so that we may review your request for an application.¹' }}
      </h3>
      <section class="lg:col-start-2">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div class="lg:col-start-1 lg:max-w-xl">
            <form
              id="join"
              ref="formElement"
              class="relative text-left"
            >
              <!-- First Name -->
              <div v-if="!loginMode" class="form-group group">
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
              <div v-if="!loginMode" class="form-group group">
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
  
              <!-- Password -->
              <div class="form-group group">
                <input
                  class="peer"
                  v-model="password"
                  type="password"
                  required="required"
                  name="entry.1097449195"
                />
                <label for="user-password"> Password </label>
              </div>
  
              <!-- Submit Button -->
              <!-- :disabled="invalid" -->
              <button
                v-if="loginMode"
                @click="login"
                type="button"
                class="py-2.5 mt-2 w-full text-base font-bold text-center text-white uppercase bg-grey-975 dark:bg-white dark:text-grey-975 --rounded">
                Login
              </button>

              <button
                v-if="!loginMode"
                @click="signup"
                type="button"
                class="py-2.5 mt-2 w-full text-base font-bold text-center text-white uppercase rounded bg-grey-975 dark:bg-white dark:text-grey-975 --rounded">
                Signup
              </button>
  
              <!-- Form Disclaimers -->
              <span class="flex mt-2 text-xs">
                <span class="block w-3.5 h-3.5 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </span>
                All applications are kept secure and private.
              </span>
    
              <button
                type="button"
                @click="loginMode = !loginMode"
                class="absolute right-0 -bottom-0.5 pb-0.5 text-xs font-bold text-center uppercase border-b border-transparent hover:border-black dark:hover:border-white">
                {{ loginMode? 'Signup' : 'Login' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </section>

    <!-- If not logged in show login form or signup form -->

  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const currentUser = ref('')
const loginMode = ref(true)


const logout = () => {
  $pb.authStore.clear()
  currentUser.value = null
}

const login = async () => {
  try {
    const authData = await $pb.collection('users')
      .authWithPassword(email.value, password.value)

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
    currentUser.value = $pb.authStore.model  
  }, true)
})

</script>