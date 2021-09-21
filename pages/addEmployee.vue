<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Personel Bilgisi Giriniz"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="İsim Soyisim:"
          label-for="nameSurname"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="nameSurname"
            v-model="dataEmployee.nameSurname"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Telefon Numarası:"
          label-for="phoneNumber"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="phoneNumber"
            v-model="dataEmployee.phoneNumber"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Açık Adres:"
          label-for="address"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            id="address"
            v-model="dataEmployee.address"
          ></b-form-input>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataEmployee: {
        nameSurname: '',
        phoneNumber: '',
        address: '',
      },
    }
  },
}
</script>

<style>
</style>