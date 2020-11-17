import {ArticleDesc} from "@/model/ArticleDesc";

const dataExtractor = (data:any,res:any,len:number)=>{
  for (let i = 0; i < len; i++) {
    data.data.push(res.data.data[i])
  }
}

export {
  dataExtractor
}
