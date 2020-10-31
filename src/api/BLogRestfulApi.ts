import Dynamic from "../model/Dynamic";
import axios from "axios";
import {blogIndexApi} from "@/common/apirouter";
import {reactive ,ref, Ref} from "vue";
import Readme from '@/model/Readme';



/**
 * 请求后端主页Api
 */
class BLogRestfulApi {

  indexData = reactive({
    data:Array<Dynamic>(),
  })
  data = ref();
  readme:Ref<Readme | undefined> = ref<Readme|undefined>()
  getBlogDynamicList(): Array<Dynamic> {

    axios.get(blogIndexApi.dynamicApi).then(res => {
      for (let i = 0; i < res.data.data.length; i++) {
        this.indexData.data.push(res.data.data[i])
      }

    })
    return this.indexData.data
  }

  getBlogReadme(){
    axios.get(blogIndexApi.readmeApi).then(res => {
        this.readme.value = res.data.data.content
    })
    return this.readme
  }


}


export default BLogRestfulApi
