<template>
  <div class="q-pa-md rounded" style="max-width: 400px">
    <q-form @submit="postApi(body)" class="q-gutter-md">

      <q-input
        filled
        v-model="body.inputCurrency"
        label="Input Currency"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type the input currency']"
      />

      <q-input
        filled
        v-model="body.outputCurrency"
        label="Output Currency"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type output currency']"
      />

      <q-input
        filled
        v-model="body.amount"
        label="amount"
        mask="#.##"
        fill-mask="0"
        reverse-fill-mask
        input-class="text-right"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>

      <div class="bg-blue-2 rounded row">
        <pre>
         Resultado do calculo: {{ useConvertAmount.convertAmount.amount }}
        </pre>
      </div>

    </q-form>
  </div>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import {postApi, useConvertAmount} from '../composables/useApi'

export default defineComponent({
  name: 'IndexPage',
  setup() {

    const body = reactive({
      inputCurrency: null,
      outputCurrency: null,
      amount: null
    })

    const onReset = () => {
      body.inputCurrency = null;
      body.outputCurrency = null;
      body.amount = null;
    };

    return {
      body,
      postApi,
      onReset,
      useConvertAmount
    }
  }
})
</script>

<style>
.rounded {
  border-radius: 10px;
}
</style>
