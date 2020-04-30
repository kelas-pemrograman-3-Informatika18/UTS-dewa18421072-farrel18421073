<template>
<q-layout class="bg-blue-grey-1" view="hHr LpR lFf">
 <q-page-container>
    <q-page padding class="row items-justify ">
    <div class="row full">
    <div class="col-md-10 offsett-md-2 col-xs-8 q-pl-md q-pr-md q-pt-sm">
    <q-card  class="bg-white text-black">
     <div class="row">
     <q-card-sectin class="q-pl-md col-md-12 col-xs-12 ">
         <div class="q-pa-md"> </div>
     <div class="text-brown-10 text-h5"> Registrasi Data Anda </div>
        </q-card-sectin>
         <div class="col-md-10 col-xs-12 q-pt-md ">
        <div class="q-pa-md">
        <q-form
         @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">
        
        <q-input
            filled
             v-model="NIKKTP"
            label="NIK KTP"
            hint="Masukan NIK KTP  "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

        <q-input
            filled
             v-model="Email"
            label="Email "
            hint="Masukan Email "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

        <q-input
            filled
             v-model="Password"
            label="Pasword"
            hint="Masukan Password "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

    <q-input
            filled
             v-model="jeniskelamin"
            label="Jenis Kelamin"
            hint="Laki-laki / Perempuan"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

    <q-input
            filled
             v-model="tanggallahir"
            label="Tanggal Lahir"
            hint="Tanggal/Bulan/Tahun"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

        <div>
        <q-btn label="Registrasi" type="submit" color="green"/>
        <q-btn label="Login" to="/auth/login" color="brown" flat class="q-ml-sm" />
      </div>
        </q-form>
         </div>
        </div>
        </div>
        </q-card>
     </div>

                </div>

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: "Registrasi",
        data () {
            return {
                nikktp: null,
                email: null,
                password: null,
                jeniskelamin: null,
                tanggallahir: null,
                accept: false
            }
        },
        methods: {
            onSubmit () {
                if (this.accept !== true) {
                    this.$q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    this.$q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },
            onReset () {
                this.name = null
                this.age = null
                this.accept = false
            }
        }
    }
</script>

<style scoped>
</style>