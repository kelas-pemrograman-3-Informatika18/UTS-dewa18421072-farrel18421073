<template>
  
 <q-layout class="bg-blue-grey-1" view="hHr LpR lFf">
   <q-page-container>
     <q-page padding class="row items-center">
       <div class="row full-width">
          <div class="col-md-20 offsett-md-10 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
               <div class="row">
                 <div class="col-md-6 col-xs-14">
                    <div class="bg-white">
                      <div class="col-md-10 offset-2 col-xs-10">
                         <q-img spinner-color="white" placeholfer-src="statics/rumah.png" src="statics/rumah.png"></q-img>
              </div>
                 </div>
                     </div>
                      <div class="col-md-6 col-xs-12 q-pt-md">
                <div class="q-pa-md ">
                    <div class="text-brown-9 text-h5">LOGIN TO "SMART PROPERTY GRUOP"</div>
                          <q-card-section class="text-blue-grey-14">
                            </q-card-section>
                   <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md">
                        <q-input
                         filled
                          v-model="username"
                           label="E-mail"
                            hint="Your E-mail"
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']" />

                     <q-input
                   filled
                     type="password"
                       v-model="pw"
                         label="Password"
                          hint="Enter Your Password"
                           lazy-rules
                          :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>


                                            <div>
                                                <q-btn label="Login" to="/customer" color="brown"/>
                                                <q-btn label="Registrasi" to="/auth/registrasi" color="brown" flat class="q-ml-sm" />
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
        name: 'Login',
        data () {
            return {
                username: null,
                pw: null,
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