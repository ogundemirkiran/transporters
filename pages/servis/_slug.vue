<template>
  <div class="mainContainer">
    <hr />
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="mt-3">
          <b-card-img
            :src="carData.imgCarUrl"
            alt="Card image"
            left
            class="cardimg"
          >
          </b-card-img>
        </b-col>

        <b-col class="mt-3">
          <b-card-group deck>
            <b-card border-variant="success" class="cardContainer">
              <b-card-text class="cardText">
                Araç Markası : {{ carData.cardBrand }}
              </b-card-text>
              <b-card-text class="cardText">
                Araç Modeli : {{ carData.carModel }}
              </b-card-text>
              <b-card-text class="cardText">
                Araç Yılı : {{ carData.carYear }}
              </b-card-text>
              <b-card-text class="cardText">
                Araç Kapasitesi : {{ carData.carCapacity }}
              </b-card-text>
              <b-card-text class="cardText">
                Araç Plakası : {{ carData.carPlate }}
              </b-card-text>
              <b-card-text class="cardText">
                Servis Başlama Semti : {{ carData.startingPlace }}
              </b-card-text>
              <b-card-text class="cardText">
                Servis Başlama Saati : {{ carData.startTime }}
              </b-card-text>
              <b-card-text class="cardText">
                Açıklama : {{ carData.carExplanation }}
              </b-card-text>
              <br />
              <button type="button" class="btn btn-light" style="width: 95%">
                Teklif Gönder
              </button>
              <br /><br />
              <button type="button" class="btn btn-light" style="width: 95%">
                Diğer Araçlara Bak
              </button>
            </b-card>
          </b-card-group></b-col
        >
      </b-row>
      <hr class="mt-5" />
      <hr />
      <blogComment />
    </b-container>
  </div>
</template>

<script>
import db from '@/services/firebase'
import blogComment from '@/components/blogComment'
export default {
  data() {
    return {
      carData: '',
    }
  },
  components: {
    blogComment,
  },
  methods: {
    getColCarDataDetail() {
      db.database()
        .app.firestore()
        .collection('carData')
        .doc(`${this.$route.params.slug}`)
        .get()
        .then((doc) => {
          console.log(doc.data())
          this.carData = doc.data()
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    },
  },
  created() {
    console.log(this.$route.params.slug)
    this.getColCarDataDetail()
    console.log(this.carData)
  },
}
</script>

<style>
.mainContainer {
  align-items: center;
  justify-content: center;
}
.bv-example-row {
  height: 600px;
  padding-left: 60px;
  padding-right: 60px;
}
.imgColumn {
  flex-direction: column;
  display: flex;
  align-items: center;
}
.cardContainer {
  width: 500px;
  height: 500px;
  background-color: rgb(243, 243, 243);
}
.cardimg {
  border-radius: 15px;
  width: 490px;
  height: 500px;
}
</style>