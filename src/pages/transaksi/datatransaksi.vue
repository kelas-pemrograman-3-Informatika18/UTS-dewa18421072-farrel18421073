<template>
<q-layout class="bg-blue-grey-1" view="hHr LpR lFf">
 <q-page-container>
    <q-page padding class="row items-justify ">
    <div class="row full">
    <div class="col-md-12 offsett-md-4 col-xs-10 q-pl-md q-pr-md q-pt-sm">
    <q-card  class="bg-white text-black">
     <div class="row">
     <q-card-sectin class="q-pl-md col-md-12 col-xs-12 ">
         <div class="q-pa-md"> </div>
     <div class="text-brown-10 text-h5"> Transaksi Perumahan Anda </div>
        </q-card-sectin>
         <div class="col-md-12 col-xs-12 q-pt-md ">
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
             v-model="namalengkap"
            label="Nama Lengkap"
            hint="Masukan Nama Lengkap"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

        <q-input
            filled
             v-model="pekerjaan"
            label="Alamat Tempat Kerja"
            hint="Masukan Alamat Tempat Kerja "
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

    <q-input
            filled
             v-model="npwp"
            label="NPWP"
            hint="Masukan Nomor NPWP"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

        <div>
        <q-btn label="Transaksi" type="submit" color="green"/>
        <q-btn label="Batal" to="/customer" color="green" flat class="q-ml-sm" />
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
                namalengkap: null,
                pekerjaan: null,
                npwp: null,
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