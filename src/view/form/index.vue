<template>
  <div class="container">
    <h4 class="text-center">Order info</h4>
    <div class="container-form">
      <van-form @submit="onSubmit">
        <div class="mt-1">
          <van-field v-model="postForm.consignee" name="Room" label="Room" placeholder="Please fill in the room number" :rules="[{ required: true }]" />
          <van-field v-model="postForm.phone" name="Phone" label="Phone" placeholder="Please fill in the phone number" :rules="[{ required: true }]" />
          <van-field v-model="postForm.address" name="Price" label="Price" placeholder="Please fill in the price" :rules="[{ required: true }]" />
        </div>
        <div class="mt-1 submit">
          <van-button round block type="info" native-type="submit">
            Submit
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { createOrder } from '@/api/order'
import { Button, Cell, Col, Field, Form, Popup, Toast } from 'vant'

export default {
  name: 'From',
  components: {
    [Cell.name]: Cell,
    [Form.name]: Form,
    [Col.name]: Col,
    [Field.name]: Field,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast
  },
  data() {
    return {
      postForm: {
        code: null,
        consignee: null,
        phone: null
      },
      show: false,
      tempRegion: [],
      area: '',
      areaList: {}
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      createOrder(this.postForm).then(response => {
        Toast.success(response.message)
        this.$router.go(-1)
      })
    },
    showPopup() {
      this.show = true
    },
    onChange(picker, value) {
      this.tempRegion = value
    },
    onConfirm() {
      this.show = false
    },
    onCancel() {
      this.show = false
    },
    formatRegion() {
      if (this.tempRegion.length <= 0) {
        return
      }
      const region = this.tempRegion.map((item) => {
        return item.name
      })
      return region.join(' / ')
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 1rem;
  }
  .container-form {
    margin-top: 10vh;
    border-radius: 10px;
    background-color: white;
  }
  .submit {
    position: fixed;
    bottom: 12vh;
    width: 10rem;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  .van-cell {
    background-color: unset;
  }
</style>
