<template>
  <div>
    <div class="sticky top-0 z-50 bg-white flex w-full">
        <div class="flex w-full bg-white shadow-lg p-2 z-50">
            <div class="xl:w-1/6 w-0 flex-shrink-0 flex items-center">
            </div>
            <div class="xl:w-1/6 md:w-1/4 w-1/2 flex-shrink-0 flex items-center justify-center">
                <img class="block lg:h-14 h-8 w-auto" src="@/assets/LOGO1.png" alt="">
            </div>
            <div class="xl:w-0 lg:w-0 md:w-0 w-1/2 flex-shrink-0 flex md:hidden lg:hidden xl:hidden items-center justify-center">
                <button class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden lg:hidden xl:hidden" @click="closeThis">
                  <span class="sr-only">Open sidebar</span>
                  <!-- Heroicon name: menu-alt-2 -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </button>
            </div>

            <div class="md:hidden lg:hidden xl:hidden">
              <div v-if="closed" class="fixed inset-0 flex z-40">
                <div class="fixed inset-0" aria-hidden="true">
                  <div class="absolute inset-0 bg-gray-600 opacity-75" />
                </div>
                <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-amber-500">
                  <div class="absolute top-0 right-0 -mr-12 pt-2">
                    <button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="closeThis">
                      <span class="sr-only">Close sidebar</span>
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex-shrink-0 flex items-center px-4">
                    <img class="block lg:h-14 h-16 w-auto" src="@/assets/LOGO1.png" alt="">
                  </div>
                  <div class="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav class="px-2 space-y-1">
                      <button @click="goto('div1')" class=" text-gray-900 inline-flex items-center px-1 my-3 text-base">
                          Home
                      </button><br>
                      <button @click="goto('div2')" href="#" class="pt-8 text-white hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                          Services
                      </button><br>
                      <button @click="goto('div3')" href="#" class="pt-8 text-white hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                          About
                      </button><br>
                      <button @click="goto('div4')" href="#" class="pt-8 text-white hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                          Resume
                      </button><br>
                      <button @click="goto('div5')" href="#" class="pt-8 text-white hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                          Works
                      </button><br>
                      <button @click="goto('div6')" href="#" class="pt-8 text-white hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                          Contact
                      </button>
                    </nav>
                  </div>
                </div>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
              </div>
            </div>
            <div class="xl:w-1/6 md:w-1/4 w-0 flex-shrink-0 flex items-center">
            </div>
            <div class="hidden lg:flex ml-6 space-x-8">
                <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <a v-for="item in navigation" :key="item.name" @click="goto(item.refs)" :class="[item.current ? 'border-b-4 text-gray-900' : 'cursor-pointer text-gray-500 hover:border-b-4 hover:border-gray-900 hover:text-gray-900 hover:font-bold text-base my-3']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                <!-- <li @click="goto('div1')" class="cursor-pointer text-gray-900 inline-flex items-center px-1 my-3 text-base">
                    Home
                </li>
                <li @click="goto('div2')" href="#" class=" text-gray-500 hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                    Services
                </li>
                <li @click="goto('div3')" href="#" class=" text-gray-500 hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                    About
                </li>
                <li @click="goto('div4')" href="#" class=" text-gray-500 hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                    Resume
                </li>
                <li @click="goto('div5')" href="#" class=" text-gray-500 hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                    Works
                </li>
                <li @click="goto('div6')" href="#" class=" text-gray-500 hover:text-gray-700 inline-flex items-center px-1 my-3 text-base font-medium hover:font-bold">
                    Contact
                </li> -->
            </div>
        </div>
    </div>
    <main class="relative" ref="div1">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h3 class="pb-2 text-xl tracking-tight font-extrabold text-gray-900">
          <span class="block text-indigo-500">HEY! I AM</span>
        </h3>
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block">JERIC EDUARTE</span>
        </h1>
        <h3 class="pt-2 text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block text-amber-500">Im a Web UI/ UX Designer</span>
        </h3>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 md:mt-5 md:max-w-3xl">
          Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="https://drive.google.com/file/d/14IwEsJJS0Bv0OG__9yqdbzCmlhXelM6C/view?usp=sharing" download="JERIC EDUARTE CV" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src="@/assets/tata.png" alt="">
    </div>
  </main>
  <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-20 bg-gray-50 overflow-hidden" ref="div2">
      <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-1">
            <h3 class="pb-8 text-sm tracking-tight font-extrabold text-gray-900">
              <span class="block text-gray-500">MY SERVICES</span>
            </h3>
            <h1 class="text-5xl tracking-tight font-extrabold text-gray-900">
              <span class="block">I can make this awesome things</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 md:mt-5 md:max-w-3xl">
              Most of my projects are more focused on creating web prototypes using Figma and Adobe Photoshop and web designing using HTML, Vanilla CSS, other CSS Frameworks, and Vue.js.
            </p>
          </div>
          <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div>
              <dt>
                <div class="flex items-center justify-center h-24 w-24 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg class="h-12 w-12 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 18h-4v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2zm-18 0v-12h12v12h-12zm2-8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.292.5l-1.812 3.833-1.48-1.272-2 3.439h8.292l-3-6z"/></svg>
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">Wireframing</p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                A quicker and cheaper way to review and amend the structure of the key pages in a wireframe format.
              </dd>
            </div>

            <div>
              <dt>
                <div class="flex items-center justify-center h-24 w-24 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/scale -->
                  <svg class="h-12 w-12 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4v16h-20v-16h20zm2-2h-24v20h24v-20zm-5 13.092v-6.184c.581-.207 1-.756 1-1.408 0-.828-.672-1.5-1.5-1.5-.652 0-1.201.419-1.408 1h-10.184c-.207-.581-.756-1-1.408-1-.828 0-1.5.672-1.5 1.5 0 .652.419 1.201 1 1.408v6.184c-.581.207-1 .756-1 1.408 0 .828.672 1.5 1.5 1.5.652 0 1.201-.419 1.408-1h10.184c.207.581.756 1 1.408 1 .828 0 1.5-.672 1.5-1.5 0-.652-.419-1.201-1-1.408zm-1.908.908h-10.184c-.15-.424-.484-.757-.908-.908v-6.184c.424-.151.757-.484.908-.908h10.184c.151.424.484.757.908.908v6.184c-.424.151-.758.484-.908.908zm-9.092-6c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm8 5l-2.75-5-1.891 2.984-1.359-1.312-2 3.328h8z"/></svg>
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">Prototyping</p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                An experimental process where we implement wireframe ideas into tangible forms from paper to digital.
              </dd>
            </div>

            <div>
              <dt>
                <div class="flex items-center justify-center h-24 w-24 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg class="h-12 w-12 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-14 13.952c-1.551-.265-3-1.615-3-3.242v-2.574l3 2.721v3.095zm2-2.103v-2.814c2.744-.515 2.897-3.494 2.062-5.035l-1.372 1.509-1.183-1.509-1.107 1.509-1.412-1.509c-.812 1.499-.752 4.516 2.012 5.035v4.965h1.489c1.817 0 3.511-1.473 3.511-3.291v-2.574l-4 3.714z"/></svg>
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">Graphic Designing</p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                A craft where we create visual content to communicate messages by applying visual hierarchy and page layout techniques where we use typography and pictures to meet your specific needs.
              </dd>
            </div>

            <div>
              <dt>
                <div class="flex items-center justify-center h-24 w-24 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/mail -->
                  <svg class="h-12 w-12 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-2-16h-16v11s-.595-1-1.922-1c-1.104 0-2.078.896-2.078 2s.896 2 2 2h18v-14zm-2 12h-12v-10h12v10zm-8-9h-3v8h10v-4h-2v3h-1v-3h-3v3h-1v-7zm-8-6.339c-.233-.921-1.807-.917-2 0v11.997c.408-.421 1.383-.724 2-.658v-11.339zm9 6.339v3h6v-3h-6z"/></svg>
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">Web Designing</p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                A process where we give life to our prototypes into actual web layout. To showcase a website that goes beyond aesthetics to include the website's overall functionality.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="relative py-20 bg-white" ref="div3">
      <div class="hidden absolute top-0 inset-x-0 h-full bg-gray-50 lg:block" aria-hidden="true"></div>
      <div class="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
            <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img class="lg:w-full w-0 object-cover object-center rounded-3xl shadow-2xl" src="@/assets/pic2.jpg" alt="">
              </div>
            </div>
          </div>

          <div class="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center py-10">
            <div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2 class="text-3xl font-extrabold text-white" id="join-heading"> ABOUT ME</h2>
              <p class="text-base text-white">
                I'm a Web UI/ UX Designer and a Freelance Graphics Designer.
              </p>
              <p class="text-base text-white">
                I have a Passion for Prototyping Clean,Beautiful, Interactive, Minimalistic, Responsive and User Friendly UI. I also do Graphics Designing such as Banners, Logo's, and many more.
              </p>
              <p class="pb-10">
                <table>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Name:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">Jeric M. Eduarte</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Date of Birth:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">July 18, 1994</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Address:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">Brgy. New Visayas, Panabo City, Davao del Norte, Philippines</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Zip Code:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">8105</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Email:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">jeric.eduarte@gmail.com</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="font-bold">Phone:</span>
                      </p>
                    </td>
                    <td class="py-1">
                      <p class="text-base text-white">
                        <span class="ml-10">+639499108872</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </p>
              <a href="https://drive.google.com/file/d/14IwEsJJS0Bv0OG__9yqdbzCmlhXelM6C/view?usp=sharing" download="JERIC EDUARTE CV" target="_blank" class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-full shadow-md text-base font-medium text-indigo-700 hover:bg-amber-500 hover:text-white sm:inline-block sm:w-auto">DOWNLOAD CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----resume----->
    <div class="pt-20 pb-10 bg-white" ref="div4">
      <div class="relative max-w-7xl mx-auto px-4">
        <div class="flex w-full justify-center pb-20">
          <h2 class="text-3xl font-extrabold text-gray-900" id="join-heading"> RESUME</h2>
        </div>
        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <ul class="lg:col-span-1 list-disc">
            <li class="pb-4 text-lg tracking-tight font-extrabold text-indigo-600">
              <a class="block" href="#">Education</a>
            </li>
            <li class="pb-4 text-sm tracking-tight font-extrabold text-gray-900">
              <a class="block text-gray-500" href="#">Experience</a>
            </li>
            <li class="pb-4 text-sm tracking-tight font-extrabold text-gray-900">
              <a class="block text-gray-500" href="#">Skills</a>
            </li>
          </ul>
          <div class="lg:col-span-2 overflow-auto h-screen that">
            <div>
              <h3 class="pb-8 text-2xl tracking-tight font-bold text-gray-900">
                <span class="block text-gray-900">Education</span>
              </h3>
              <div class="bg-blue-50 rounded-lg shadow-lg p-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div>
                      <h3 class="text-md tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">2016 - 2020</span>
                      </h3>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Bachelor of Science in Information Technology</span>
                      </h3>
                      <h3 class="text-sm tracking-tight text-gray-900">
                        <span class="block text-gray-700">Davao del Norte State College</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-----Experience----->
            <div class="pt-32">
              <h3 class="pb-8 text-2xl tracking-tight font-bold text-gray-900">
                <span class="block text-gray-900">Experience</span>
              </h3>
              <div class="bg-blue-50 rounded-lg shadow-lg p-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div>
                      <h3 class="text-md tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">June 2017 - Present</span>
                      </h3>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Freelance Web and Mobile UI/ Graphics Designer</span>
                      </h3>
                      <h3 class="text-sm tracking-tight text-gray-900">
                        <span class="block text-gray-700">Panabo City, Davao del Norte, Philippines</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <!----exp2----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div>
                      <h3 class="text-md tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">January 2020 - January 2021</span>
                      </h3>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">PWA UI/UX Designer</span>
                      </h3>
                      <h3 class="text-sm tracking-tight text-gray-900">
                        <span class="block text-gray-700">DEVCODIC (A Digital Software Agency) - Panabo City, Davao del Norte, Philippines</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <!----exp3----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div>
                      <h3 class="text-md tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">May 2021 - December 2021</span>
                      </h3>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Web UI/UX Designer - Project Based</span>
                      </h3>
                      <h3 class="text-sm tracking-tight text-gray-900">
                        <span class="block text-gray-700">Davao del Norte State College (ITSO Department) - Panabo City, Davao del Norte, Philippines</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <!----exp4----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div>
                      <h3 class="text-md tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">January 5 2022 - Present</span>
                      </h3>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Web UI/UX Designer - Project Based</span>
                      </h3>
                      <h3 class="text-sm tracking-tight text-gray-900">
                        <span class="block text-gray-700">Davao del Norte State College (ITSO Department) - Panabo City, Davao del Norte, Philippines</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-----Skills----->
            <div class="pt-32">
              <h3 class="pb-8 text-2xl tracking-tight font-bold text-gray-900">
                <span class="block text-gray-900">Skills</span>
              </h3>
              <div class="bg-blue-50 rounded-lg shadow-lg p-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div class="block w-full">
                      <div class="w-full">
                        <div class="shadow w-full bg-gray-300 rounded-full">
                          <div class="bg-amber-500 text-xs text-gray-900 leading-none py-2 text-center text-white w-5/6 rounded-full">90%</div>
                        </div>
                      </div>
                    <div>
                      <div class="text-sm tracking-tight text-gray-900 mt-1">
                        <span class="block text-gray-700">Mastery Level: Proficient</span>
                      </div>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">HTML/ HTML5 & Vanilla CSS/ CSS3</span>
                      </h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <!----skills2----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div class="block w-full">
                      <div class="w-full">
                        <div class="shadow w-full bg-gray-300 rounded-full">
                          <div class="bg-amber-500 text-xs text-gray-900 leading-none py-2 text-center text-white w-3/4 rounded-full">80%</div>
                        </div>
                      </div>
                    <div>
                      <div class="text-sm tracking-tight text-gray-900 mt-1">
                        <span class="block text-gray-700">Mastery Level: Proficient</span>
                      </div>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Adobe Photoshop, InDesign</span>
                      </h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <!----skills3----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div class="block w-full">
                      <div class="w-full">
                        <div class="shadow w-full bg-gray-300 rounded-full">
                          <div class="bg-amber-500 text-xs text-gray-900 leading-none py-2 text-center text-white w-4/6 rounded-full">70%</div>
                        </div>
                      </div>
                    <div>
                      <div class="text-sm tracking-tight text-gray-900 mt-1">
                        <span class="block text-gray-700">Mastery Level: Advanced</span>
                      </div>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Figma </span>
                      </h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <!----skills4----->
              <div class="bg-blue-50 rounded-lg shadow-lg p-10 mt-10">
                <div class="flex w-full relative">
                  <div class="flex w-1/6 justify-start">
                    <div class="bg-indigo-600 rounded-full py-5 px-5 absolute"></div>
                  </div>
                  <div class="flex w-5/6 lg:-ml-12">
                    <div class="block w-full">
                      <div class="w-full">
                        <div class="shadow w-full bg-gray-300 rounded-full">
                          <div class="bg-amber-500 text-xs text-gray-900 leading-none py-2 text-center text-white w-4/6 rounded-full">70%</div>
                        </div>
                      </div>
                    <div>
                      <div class="text-sm tracking-tight text-gray-900 mt-1">
                        <span class="block text-gray-700">Mastery Level: Advanced</span>
                      </div>
                      <h3 class="text-2xl tracking-tight font-bold text-gray-900">
                        <span class="block text-gray-900">Vue.js, Vanilla Javascript </span>
                      </h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white" ref="div5">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">My Works</h2>
            <p class="text-xl text-gray-500">In the span of 2 years of experience, I have finished 9 projects which consists of 8 progressive web apps and 1 web application. </p>
          </div>
          <div class="lg:col-span-2">
            <ul role="list" class="space-y-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="@/assets/PAMALENGKE.jpg" alt="">
                  </div>
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>Pamalengke.ph</h3>
                    <p class="text-indigo-600">An Online Shopping Store</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">Pamalengke is an online shopping store intended for local entrepeneur client which is based on a specific grocery store located in the City of Panabo.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="@/assets/WORK3.jpg" alt="">
                  </div>
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>MySMS.ph</h3>
                    <p class="text-indigo-600">An SMS Gateway Provider PWA</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">MySMS PH is an SMS Gateway Provider that offers national sms services informative contents such as marketing campaigns, OTP's, appointment reminders, etc.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="@/assets/WORK4.jpg" alt="">
                  </div>
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>TechGov</h3>
                    <p class="text-indigo-600">A System Automation and e-Services PWA</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">TechGov is a software solution designed to empower Local Government Units to digitally transform and advance cities, municipalities, and baranggays to a self-reliant community, known as Smart City.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="@/assets/WORK5.jpg" alt="">
                  </div>
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>DevCodic</h3>
                    <p class="text-indigo-600">A Digital Software Agency PWA</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">DevCodic is a software agency specializing in high and innovative performance in digital solutions and highly focuses on SPA's and SaaS Platforms to enhance robust and fast performance of the applicaitons.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50" ref="div6">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">Contact us</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white">Contact information</h3>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">You can contact me through my mobile number, my email address or any of my social media accounts.</p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Phone number</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                <span class="ml-3">+63 949 91088 72</span>
              </dd>
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                <span class="ml-3">jeric.eduarte@gmail.com</span>
              </dd>
            </dl>
            <ul role="list" class="mt-8 flex space-x-12">
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6 text-indigo-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                </a>
              </li>
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">LinkedIn</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <svg class="h-6 w-6 text-indigo-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">Github</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <svg class="h-6 w-6 text-indigo-200 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
            <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
                <div class="mt-1">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
                <div class="mt-1">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                  <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
                </div>
                <div class="mt-1">
                  <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" aria-describedby="phone-optional" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
                <div class="mt-1">
                  <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                  <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" aria-describedby="message-max" />
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://www.facebook.com/JERIC.EDUARTE/" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/jeric-eduarte-9a878814a/" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://github.com/jayrhic3" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Github</span>
          <svg class="h-6 w-6 text-gray-500 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-500">
          &copy; 2021 Jeric Eduarte Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      closed: false,
      navigation: [
        { name: "Home", refs: "div1" },
        { name: "Services", refs: "div2" },
        { name: "About", refs: "div3" },
        { name: "Resume", refs: "div4" },
        { name: "Works", refs: "div5" },
        { name: "Contract", refs: "div6" },
      ],
    };
  },
  methods: {
    closeThis() {
      this.closed = !this.closed;
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar,
.that {
  width: 1;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}
.router-link-exact-active {
  border: 5px dashed red;
}
</style>