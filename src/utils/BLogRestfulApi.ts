import Dynamic from "../interface/Dynamic";
import axios from "axios";
import {blogIndexApi} from "@/common/apirouter";

class BLogRestfulApi{

    BlogDynamicList:Array<Dynamic> = new Array<Dynamic>();

    getBlogDynamicList():Array<Dynamic>{
        axios.get(blogIndexApi.dynamicApi).then(res => {
          console.log(res)
            for (let i = 0; i < res.data.data.length; i++) {
                this.BlogDynamicList.push(res.data.data[i])
            }
        })
        return this.BlogDynamicList
    }
}


export default BLogRestfulApi
