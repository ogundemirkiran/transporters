<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Aracımı Boş Olarak Kaydet"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Araç Markası:"
          label-for="cardBrand"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="cardBrand"
            v-model="dataSaveCar.cardBrand"
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
            v-model="dataSaveCar.carModel"
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
            v-model="dataSaveCar.carYear"
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
            v-model="dataSaveCar.carCapacity"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Araç Plakası:"
          label-for="carPlate"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="carPlate"
            v-model="dataSaveCar.carPlate"
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
            v-model="dataSaveCar.startingPlace"
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
            v-model="dataSaveCar.startTime"
          ></b-form-input>
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
            v-model="dataSaveCar.carExplanation"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          label="Araç Resimlerini Ekleyiniz:"
          label-for="imgCar"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-file multiple v-model="imgCar"></b-form-file>
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
            @click="NewAddCar()"
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
      dataSaveCar: {
        cardBrand: '',
        carModel: '',
        carYear: '',
        carCapacity: '',
        startingPlace: '',
        startTime: '',
        carExplanation: '',
        carPlate: '',
        imgCarUrl: '',
      },
      imgCar: [],
    }
  },
  methods: {
    NewAddCar() {
      var uploadTask = db
        .database()
        .app.storage()
        .ref()
        .child(this.imgCar[0].name)
        .put(this.imgCar[0])

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
            this.dataSaveCar.imgCarUrl = downloadURL

            db.database()
              .app.firestore()
              .collection('carData')
              .doc(this.dataSaveCar.carPlate)
              .set(this.dataSaveCar)
              .then((res) => {
                alert('kayıt Başarılı')
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
  created() {},
}
</script>

<style>
</style>