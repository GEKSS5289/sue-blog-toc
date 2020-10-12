import Dynamic from "../interface/Dynamic";
import axios from "axios";
import {blogDynamicApi} from "@/common/apirouter";

class BLogRestfulApi{

    BlogDynamicList:Array<Dynamic> = new Array<Dynamic>();

    getBlogDynamicList():Array<Dynamic>{
        axios.get(blogDynamicApi).then(res => {
            for (let i = 0; i < res.data.data.length; i++) {
                this.BlogDynamicList.push(res.data.data[i])
            }
        })
        return this.BlogDynamicList
    }
}


export default BLogRestfulApi
