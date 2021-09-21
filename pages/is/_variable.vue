<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="project-info-box mt-0 mb-0">
          <h5>PROJE AÇIKLAMASI</h5>
          <p class="mb-0">
            {{ jobData.carExplanation }}
          </p>
        </div>

        <div class="project-info-box mt-0">
          <p><b>Araç Markası:</b> {{ jobData.cardBrand }}</p>
          <p><b>Araç Modeli:</b> {{ jobData.carModel }}</p>
          <p><b>Araç Yılı:</b> {{ jobData.carYear }}</p>
          <p><b>Araç Kapasitesi:</b> {{ jobData.carCapacity }}</p>
          <p><b>Servis Başlama Semti:</b> {{ jobData.startingPlace }}</p>
          <p><b>Servis Başlama Saati:</b> {{ jobData.startTime }}</p>
          <p><b>Firmaya Giriş Saati:</b> {{ jobData.checkInTime }}</p>
          <p><b>Firmadan Çıkış Saati:</b> {{ jobData.checkOutTime }}</p>
          <p><b>Servis Bitiş Saati:</b> {{ jobData.endTime }}</p>
          <p><b>Servis Bitiş Semti:</b> {{ jobData.finishPlace }}</p>
          <p><b>Toplam KM Uzunluğu:</b> {{ jobData.kmLong }}</p>
          <p><b>Ödeme Periyodu:</b> {{ jobData.paymentPeriod }}</p>
          <p><b>Çalışacak Gün Sayısı:</b> {{ jobData.workDay }}</p>
          <p><b>Ücret:</b> {{ jobData.price }}</p>
        </div>
      </div>
      <!-- / column -->

      <div class="col-md-7">
        <img :src="jobData.imgCompanyUrl" alt="project-image" class="rounded" />
        <div class="project-info-box ml-0 pl-0">
          <p><b>Şirket İsmi:</b> {{ jobData.companyName }}</p>
        </div>
      </div>
      <blogComment />
    </div>
  </div>
</template>


<script>
import db from '@/services/firebase'
import blogComment from '@/components/blogComment'
export default {
  data() {
    return {
      jobData: '',
    }
  },
  components: {
    blogComment,
  },
  methods: {
    async getColJobDataDetail() {
      await db
        .database()
        .app.firestore()
        .collection('jobData')
        .doc(`${this.$route.params.variable}`)
        .get()
        .then((doc) => {
          console.log(doc.data())
          this.jobData = doc.data()
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })

      console.log(this.jobData)
    },
  },

  created() {
    console.log(this.$route.params.variable)
    this.getColJobDataDetail()

    console.log(this.jobData)
    setTimeout(() => {
      console.log(this.jobData)
    }, 5000)
  },
}
</script>


<style scoped>
body {
  background: #f5f5f5;
  margin-top: 20px;
}
/*------- portfolio -------*/
.project {
  margin: 15px 0;
}

.no-gutter .project {
  margin: 0 !important;
  padding: 0 !important;
}

p {
  font-family: 'Barlow', sans-serif !important;
  font-weight: 300;
  font-size: 1rem;
  color: #686c6d;
  letter-spacing: 0.03rem;
  margin-bottom: 10px;
}
.project-info-box {
  margin: 15px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
}

.project-info-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}

.project-info-box p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.rounded {
  border-radius: 5px !important;
  margin-top: 40px;
  width: 600px;
  height: 600px;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
div > p > b {
  font-weight: 800;
}
</style>