import {ref} from "vue";

export const BlogInit = () => {

  window.scrollTo(0,0);
  const readmeStatus = ref(true)
  const dynamicStatus = ref(true)
  const serviceStatus = ref(true)

  setTimeout(() => {
    readmeStatus.value = !readmeStatus.value
  }, 200)

  setTimeout(() => {
    dynamicStatus.value = !dynamicStatus.value
    serviceStatus.value = !serviceStatus.value
  }, 700)

  return {
    readmeStatus,
    dynamicStatus,
    serviceStatus
  }
}



