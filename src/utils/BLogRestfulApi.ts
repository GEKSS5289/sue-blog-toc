import Dynamic from "../model/Dynamic";
import axios from "axios";
import {blogIndexApi} from "@/common/apirouter";
import {reactive} from "vue";

/**
 * 请求后端主页Api
 */
class BLogRestfulApi{

    dynamiclists = reactive({
      data: Array<Dynamic>()
    })

    getBlogDynamicList():Array<Dynamic>{
        axios.get(blogIndexApi.dynamicApi).then(res => {
            for (let i = 0; i < res.data.data.length; i++) {
                this.dynamiclists.data.push(res.data.data[i])
            }
        })
        return this.dynamiclists.data
    }
}


export default BLogRestfulApi
