<template>
  <main class="container relative mx-auto">
  <ClientOnly>

    <!-- Login / Logout -->
    <!-- <button v-if="maven" class="absolute top-8 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button> -->

    <!-- IF User-->
    <AppSection v-if="maven" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello,<br>
        {{ maven.name.split(' ')[0] }}
      </template>
      <template #desc>
        Update your Maven page
      </template>

      <section class="">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="lg:col-start-2 lg:max-w-xl">

            <!-- FormKit -->
            <FormKit type="form" @submit="update" submit-label="Update" >
              <FormKit
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                validation="required|alpha:latin"
                v-model="computedFirstName"
              />

              <FormKit
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                validation="required|alpha:latin"
                v-model="computedLastName"
                />
                
              <!-- <FormKit
                type="text"
                name="email"
                id="email"
                label="Email"
                validation="required|*email"
                v-model="email"
              /> -->
                
              <FormKit
                type="text"
                name="username"
                id="username"
                label="Username"
                validation="required|alphanumeric"
                v-model="userName"
              />

              <FormKit
                type="text"
                name="telegram"
                id="telegram"
                label="Telegram @name"
                validation="required|alphanumeric"
                v-model="telegram"
              />

              <!-- <FormKit
                type="text"
                name="telegram"
                id="telegram"
                label="Telegram @name"
                validation="required"
                v-model="telegram"
              />

              <FormKit
                type="text"
                name="x"
                id="x"
                label="X @name"
                validation="required"
                v-model="x"
              /> -->

              <!-- <FormKit
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
              /> -->
            </FormKit>

              <!-- Form Disclaimers -->
            <div class="relative">
              <span class="flex mt-2 text-xs">
                <span class="block w-3.5 h-3.5 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </span>
                All submissions are kept secure and private.
              </span>
    
              <NuxtLink
                to="/maven/login"
                class="absolute right-0 -bottom-0.5 pb-0.5 text-xs font-bold text-center uppercase border-b border-transparent hover:border-black dark:hover:border-white"
              >
                Cancel
              </NuxtLink>

              <!-- {{ maven.email }} -->

              <!-- <h2>Using <code>FormKitIcon</code> you can output any loaded icon anywhere.</h2>
              <FormKitIcon icon="bitcoin" /> -->
            </div>
            <!-- <ul class="lg:col-start-2">
              <li>First Name: {{ maven.name.split(' ')[0] }}</li>
              <li>Last Name: {{ maven.name.split(' ')[1] }}</li>
              <hr class="border-none my-4">
              <li>Email: {{ maven.email }}</li>
              <hr class="border-none my-4">
              <li>Telegram @username: NA</li>
              <li>X @username: NA</li>
              <hr class="border-none my-4">
              <li>Country: NA</li>
              <li>State: NA</li>
              <li>City: NA</li>
            </ul> -->
          </div>
        </div>
      </section>
      <!-- {{ currentUser }} -->
      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->
      
      <!-- {{  $pb.authStore.isValid }} -->

    </AppSection>
  </ClientOnly>
  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

const maven = useState('maven', () => '')

const firstName = ref('')
const lastName = ref('')
const userName = ref('')

const computedFirstName = computed({
  get() {
    return maven.value.name.split(' ')[0]
  },
  set(val) {
    firstName.value = val
  }
})

const computedLastName = computed({
  get() {
    return maven.value.name.split(' ')[1]
  },
  set(val) {
    lastName.value = val
  }
})

const computedUserName = computed({
  get() {
    return maven.value.username
  },
  set(val) {
    userName.value = val
  }
})

const email = ref(maven.value.email)
const telegram = ref(maven.value.telegram)
// const password = ref('')

definePageMeta({
  middleware: 'auth'
})

const update = async () => {
  try {
    const data = {
      "name": firstName.value + ' ' + lastName.value,
      // "email": email.value,
      "username": userName.value,
      "telegram": telegram.value,
    }

    const record = await $pb.collection('users').update(maven.value.id, data)
    navigateTo('/maven/account')
    

    // await login();
  } catch (error) {
    alert(error.message)
  }
}

onMounted(() => {
  $pb.authStore.onChange(() => {
    maven.value = $pb.authStore.model  
  }, true)
  firstName.value = computedFirstName.value
  lastName.value = computedLastName.value
  userName.value = computedUserName.value
  telegram.value = maven.value.telegram
  email.value = maven.value.email
})

</script>
