import {Loading, Notify} from 'quasar';
import {api} from '../services/apiServices/api';
import {reactive} from "vue";

export const useConvertAmount = reactive({
  convertAmount: {}
})
export const postApi = async (payload) => {
  Object.assign(useConvertAmount, {convertAmount: {}})

  try {
    Loading.show();
    const response = await api.post.convertAmount(payload)
    Object.assign(useConvertAmount, {convertAmount: response.data})
    return response;
  } catch (error) {
    Notify.create({
      type: 'error',
      message: error.message
    })
  } finally {
    Loading.hide();
  }
}
