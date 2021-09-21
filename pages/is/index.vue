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
      <div
        v-for="(job, index) in jobData"
        :key="index"
        class="cardContainer mt-4 mr-4"
      >
        <div class="allList">
          <b-card-img
            src="https://placekitten.com/300/300"
            alt="Card image"
            left
            class="imgJob"
          >
          </b-card-img>
        </div>
        <div class="allList">
          <b-card-text class="cardText">
            Firma İsmi : {{ jobData[index].companyName }}
          </b-card-text>

          <b-card-text class="cardText">
            Açıklama : {{ jobData[index].carExplanation }}
          </b-card-text>
        </div>

        <div class="btnArea">
          <NuxtLink :to="`/is/${jobData[index].companyName}`">
            <button type="button" class="btn btn-light">Light</button>
          </NuxtLink>
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
      jobData: [],
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
    getColJobData() {
      db.database()
        .app.firestore()
        .collection('jobData')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`)
            //console.log(doc.data())

            this.jobData.push(doc.data())
          })
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    },
  },
  created() {
    this.getColJobData()
  },
}
</script>

<style scoped>
.cardText {
  text-align: left;
  font-weight: bold;
}

.cardContainer:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.9;
  cursor: pointer;
  border-radius: 5%;
}
.cardContainer:hover .imgJob {
  border-radius: 10%;
  width: 135px;
  height: 115px;
  margin: 0;
  padding: 0;
}
.cardContainer:hover .allList {
  margin-top: 0;
  margin-left: 0;
}

.btn {
  width: 100%;
  margin: auto;
}
.allList {
  display: inline-block;
  margin: 5px;
}
.imgJob {
  border-radius: 10%;
  width: 120px;
  height: 100px;
}
</style>