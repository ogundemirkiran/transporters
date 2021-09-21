<template>
  <div class="container">
    <div class="be-comment-block">
      <h1 class="comments-title">Comments (3)</h1>

      <div class="be-comment">
        <div class="be-comment-content">
          <span class="be-comment-name">
            <a href="blog-detail-2.html">Ravi Sah</a>
          </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            May 27, 2015 at 3:14am
          </span>

          <p class="be-comment-text">
            Pellentesque gravida tristique ultrices. Sed blandit varius mauris,
            vel volutpat urna hendrerit id. Curabitur rutrum dolor gravida
            turpis tristique efficitur.
          </p>
        </div>
      </div>

      <div class="be-comment">
        <div class="be-img-comment">
          <a href="blog-detail-2.html">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              alt=""
              class="be-ava-comment"
            />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name">
            <a href="blog-detail-2.html">Cüneyt ŞEN</a>
          </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            May 27, 2015 at 3:14am
          </span>
          <p class="be-comment-text">
            Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque.
            Duis eleifend lorem non ant
          </p>
        </div>
      </div>
      <div class="be-comment">
        <div class="be-comment-content">
          <span class="be-comment-name">
            <h5>{{ this.copy.copyName }} {{ this.copy.surname }}</h5>
          </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i> {{ date.day }}.{{ date.month }}.{{
              date.year
            }}
            at {{ date.hours }}:{{ date.minutes }}</span
          >
          <p class="be-comment-text">{{ this.copy.copyIdea }}</p>
        </div>
      </div>

      <form class="form-block mt-5">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group fl_icon">
              <input
                class="form-input"
                type="text"
                placeholder="Your name"
                v-model="commenter.name"
              />
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 fl_icon">
            <div class="form-group fl_icon">
              <input
                class="form-input"
                type="text"
                placeholder="Your surname"
                v-model="commenter.surname"
              />
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group ml-3">
              <textarea
                class="form-input"
                required=""
                placeholder="Your text"
                v-model="commenter.idea"
              ></textarea>
            </div>
          </div>
          <button
            class="btn btn-primary pull-right"
            @click="addIdea()"
            :disabled="!isActive"
          >
            Yorum Ekle
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commenter: {
        name: '',
        surname: '',
        idea: '',
      },
      copy: {
        copyName: '',
        copySurname: '',
        copyIdea: '',
      },
      date: {
        day: '',
        month: '',
        year: '',
        hours: '',
        minutes: '',
      },
    }
  },
  methods: {
    addIdea() {
      var date = new Date()
      this.date.day = date.getDate()
      this.date.month = date.getMonth()
      this.date.year = date.getFullYear()
      this.date.hours = date.getHours()
      this.date.minutes = date.getMinutes()

      this.copy.copyName = this.commenter.name
      this.copy.surname = this.commenter.surname
      this.copy.copyIdea = this.commenter.idea
    },
  },

  computed: {
    isActive() {
      return (
        this.commenter.name != '' &&
        this.commenter.surname != '' &&
        this.commenter.idea != ''
      )
    },
  },
}
</script>

<style scoped>
body {
  margin-top: 20px;
  background-color: #e9ebee;
}

.be-comment-block {
  margin-bottom: 50px !important;
  border: 1px solid #edeff2;
  border-radius: 2px;
  padding: 50px 70px;
  border: 1px solid #ffffff;
}

.comments-title {
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
  font-family: 'Conv_helveticaneuecyr-bold';
}

.be-img-comment {
  width: 60px;
  height: 60px;
  float: left;
  margin-bottom: 15px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 80px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 13px;
  font-family: 'Conv_helveticaneuecyr-bold';
  margin-bottom: 0;
}

.be-comment-content a {
  color: #383b43;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-time {
  text-align: right;
}

.be-comment-time {
  font-size: 12px;
  color: #b4b7c1;
  margin-bottom: 0;
}

.be-comment-text {
  font-size: 13px;
  line-height: 18px;
  color: #7a8192;
  display: block;
  background: #f6f6f7;
  border: 1px solid #edeff2;
  padding: 15px 20px 20px 20px;
  margin-top: 0;
}

.form-group.fl_icon .icon {
  position: absolute;
  top: 1px;
  left: 16px;
  width: 48px;
  height: 48px;
  background: #f6f6f7;
  color: #b5b8c2;
  text-align: center;
  line-height: 50px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-bottomleft: 2px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.form-group .form-input {
  font-size: 13px;
  line-height: 50px;
  font-weight: 400;
  color: #b4b7c1;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 150px;
}
.row {
  display: grid;
}
span {
  margin-top: 15px;
}
h5 {
  margin-bottom: 0;
}
</style>