<template>
  <b-row>
    <b-col cols="3">
      <div class="ml-3 mt-4">
        <div>
          <strong class="ml-1">Araç Markası Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>
        <div class="mt-3">
          <strong class="ml-1">Araç Modeli Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>
        <div class="mt-3">
          <strong class="ml-1">Araç Yılı Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>
        <div class="mt-3">
          <strong class="ml-1">Araç Kapasitesi Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>
        <div class="mt-3">
          <strong class="ml-1">Servis Başlama Semti Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>
        <div class="mt-3">
          <strong class="ml-1">Servi Başlama Saati Seçiniz</strong>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-1"
          >
          </b-form-select>
        </div>

        <div>
          <b-form-select
            v-model="selected"
            :options="options"
            :select-size="4"
            class="mt-3"
            size="sm"
          ></b-form-select>
        </div>
        <button type="button" class="btn btn-light ml-1 mt-3">Light</button>
      </div>
    </b-col>
    <b-col cols="9">
      <div class="row ml-2 mt-4 mr-5">
        <div
          class="column mt-3"
          v-for="(car, index) in carData"
          :key="index"
          border-variant="success"
          :header="carData[index].startingPlace"
        >
          <div class="card">
            <h4 style="text-align: center">
              {{ carData[index].startingPlace }}
            </h4>
            <p>Araç Markası : {{ carData[index].cardBrand }}</p>
            <p>Araç Modeli : {{ carData[index].carModel }}</p>
            <p>Araç Yılı : {{ carData[index].carYear }}</p>
            <p>Araç Kapasitesi : {{ carData[index].carCapacity }}</p>
            <p>Araç Plakası : {{ carData[index].carPlate }}</p>
            <p>Servis Başlama Semti : {{ carData[index].startingPlace }}</p>
            <p>Açıklama : {{ carData[index].carExplanation }}</p>
            <NuxtLink :to="`/servis/${carData[index].carPlate}`">
              <button type="button" class="btn btn-light">Light</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import db from '@/services/firebase'
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  data() {
    return {
      carData: [],
      options: [
        { value: null, text: 'Seçim Yapınız' },
        { value: 'a', text: 'This is option a' },
        { value: 'b', text: 'Default Selected Option b' },
        { value: 'c', text: 'This is option c' },
        { value: 'd', text: 'This one is disabled' },
        { value: 'e', text: 'This is option e' },
        { value: 'e', text: 'This is option f' },
      ],
      selected: null,
    }
  },
  computed: {
    ...mapGetters({ getUserWho: 'auth/getUserWho' }),
  },

  methods: {
    getColCarData() {
      db.database()
        .app.firestore()
        .collection('carData')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`)
            // console.log(doc.data().carCapacity)
            this.carData.push(doc.data())
          })
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    },
  },
  created() {
    this.getColCarData()
    console.log(this.carData)
  },
}
</script>

<style scoped>
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn {
  width: 95%;
  margin: auto;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive columns */

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  text-align: left;
}
</style>