<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Güzergah Oluştur"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Şirket İsmi:"
          label-for="companyName"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="companyName"
            v-model="dataSaveJob.companyName"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Araç Markası:"
          label-for="cardBrand"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="cardBrand"
            v-model="dataSaveJob.cardBrand"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Araç Modeli:"
          label-for="carModel"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="carModel"
            v-model="dataSaveJob.carModel"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Araç Yılı:"
          label-for="carYear"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="carYear"
            v-model="dataSaveJob.carYear"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Araç Kapasitesi:"
          label-for="carCapacity"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="carCapacity"
            v-model="dataSaveJob.carCapacity"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Servis Başlama Semti:"
          label-for="startingPlace"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="startingPlace"
            v-model="dataSaveJob.startingPlace"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Servis Başlama Saati:"
          label-for="startTime"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="startTime"
            v-model="dataSaveJob.startTime"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Firmaya Giriş Saati:"
          label-for="checkInTime"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="checkInTime"
            v-model="dataSaveJob.checkInTime"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Firmadan Çıkış Saati:"
          label-for="checkOutTime"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="checkOutTime"
            v-model="dataSaveJob.checkOutTime"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Servis Bitiş Saati:"
          label-for="endTime"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="endTime"
            v-model="dataSaveJob.endTime"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Servis Bitiş Semti:"
          label-for="finishPlace"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="finishPlace"
            v-model="dataSaveJob.finishPlace"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Toplam KM Uzunluğu:"
          label-for="kmLong"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="kmLong" v-model="dataSaveJob.kmLong"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Ödeme Periyodu:"
          label-for="paymentPeriod"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="paymentPeriod"
            v-model="dataSaveJob.paymentPeriod"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Çalışacak Gün Sayısı:"
          label-for="workDay"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="workDay"
            v-model="dataSaveJob.workDay"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Ücret:"
          label-for="price"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="price" v-model="dataSaveJob.price"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Açıklama:"
          label-for="carExplanation"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-textarea
            id="carExplanation"
            rows="3"
            max-rows="6"
            v-model="dataSaveJob.carExplanation"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          label="Firma Logosu Ekleyiniz:"
          label-for="imgCompany"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-file multiple v-model="imgCompany"></b-form-file>
        </b-form-group>
        <b-form-group
          label=""
          label-for="new-job-add"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-button
            type="submit"
            variant="success"
            id="new-job-add"
            class="btn-block"
            @click="NewaddJob()"
          >
            Kayıt Et</b-button
          >
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
import db from '@/services/firebase'
export default {
  middleware: ['auth'],
  data() {
    return {
      dataSaveJob: {
        companyName: '',
        cardBrand: '',
        carModel: '',
        carYear: '',
        carCapacity: '',
        startingPlace: '',
        startTime: '',
        checkInTime: '',
        checkOutTime: '',
        endTime: '',
        finishPlace: '',
        kmLong: '',
        paymentPeriod: '',
        workDay: '',
        price: '',
        carExplanation: '',
        imgCompanyUrl: '',
      },
      imgCompany: [],
    }
  },
  methods: {
    NewaddJob() {
      var uploadTask = db
        .database()
        .app.storage()
        .ref()
        .child(this.imgCompany[0].name)
        .put(this.imgCompany[0])

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
            this.dataSaveJob.imgCompanyUrl = downloadURL

            db.database()
              .app.firestore()
              .collection('jobData')
              .doc(this.dataSaveJob.companyName)
              .set(this.dataSaveJob)
              .then((res) => {
                console.log(res)
              })
              .catch((error) => {
                console.log('Error getting document:', error)
                console.log('hataaa')
              })
          })
        }
      )
    },
  },
}
</script>

<style>
</style>