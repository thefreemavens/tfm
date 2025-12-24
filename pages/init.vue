<template>
  <main class="container mx-auto">
    <!-- Challenges -->
    <AppSection>
      <template #title>Application<br>Form</template>
      <template #desc>
        Please tell us a bit about yourself so that we may review your request for an application.¹
      </template>
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-start-2 lg:max-w-md">
            <AppForm class=""/>
            <hr class="my-12 border-4">
            <ol class="list-decimal ms-4">
              <li class="mt-4 text-xs ps-2">
                Men and women of integrity who wishes to get initiated and join The Freemavens must
                first understand the foundations to the great body of knowledge of (the real) Natural Law. 
              </li>
              <li class="mt-4 text-xs ps-2">
                Our members consist of free, open minded and truth seekers with a shared goal 
                that is aligned with our principles and what Freemavenry stands for. 
              </li>
              <li class="mt-4 text-xs ps-2">
                The Free Mavens promotes the One Great Work and provide a great body of knowledge for 
                researchers, free-thinkers and truth seekers, so that people all over the world can gain a 
                better understanding of the biggest issues faced by the world, and feed a desire to unite 
                and help create a better future for all of us. 
              </li>
              <li class="mt-4 text-xs ps-2">
                Submissions that are not in the English language will be rejected.
              </li>
            </ol>
          </div>
        </div>
      </template>
    </AppSection>

    <!-- <section class="py-12 mx-4 border-t">
      <div class="mx-auto max-w-md">
        <AppLogotype class="mb-6 w-32 h-32" />
        <h3 class="mb-8 text-3xl font-bold tracking-tight">Application Form</h3>
        <p class="mb-8 text-base">
          Please tell us a bit about yourself so that we may review your request for an application.¹
        </p>
        <AppForm class=""/>
        <hr class="my-12">
        <ol class="list-decimal ms-4">
          <li class="mt-4 text-xs ps-2">
            Men and women of integrity who wishes to get initiated and join The Freemavens must
            first understand the foundations to the great body of knowledge of (the real) Natural Law. 
          </li>
          <li class="mt-4 text-xs ps-2">
            Our members consist of free, open minded and truth seekers with a shared goal 
            that is aligned with our principles and what Freemavenry stands for. 
          </li>
          <li class="mt-4 text-xs ps-2">
            The Free Mavens promotes the One Great Work and provide a great body of knowledge for 
            researchers, free-thinkers and truth seekers, so that people all over the world can gain a 
            better understanding of the biggest issues faced by the world, and feed a desire to unite 
            and help create a better future for all of us. 
          </li>
          <li class="mt-4 text-xs ps-2">
            Submissions that are not in the English language will be rejected.
          </li>
        </ol>
      </div>
    </section> -->
  </main>
</template>