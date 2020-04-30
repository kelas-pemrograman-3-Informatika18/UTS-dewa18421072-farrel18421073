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
              Silahkan Isi Data Anda Untuk Memudahkan Proses Transaksi 
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="device_unknown" />
            </q-item-section>
            <q-item-section>
              Bantuan
            </q-item-section>
          </q-item>
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