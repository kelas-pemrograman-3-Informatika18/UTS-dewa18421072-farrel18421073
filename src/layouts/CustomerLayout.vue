<template>
  <q-layout view="lHh Lpr lFf">
 
    <q-header class="bg-white text-blue-grey-6">
      <q-toolbar>

        <q-toolbar-title></q-toolbar-title>
 
      </q-toolbar>
    </q-header>
 
    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 100px;" class=" bg-white text-bold">
            <q-item-section>
              Smart Property Group
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-justify q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/logo.png" alt="">
              </q-avatar>
              
            </div>
          </q-item>
          <q-item-label header class="text-black" >
              Selamat Datang Di Smart Property Group 
              kami menyediakan berbagai macam type perumahan 
          </q-item-label>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
 
<script>
 
export default {
  name: 'MainLayout',
 
  data () {
    return {
      left: false
    }
  }
}
</script>