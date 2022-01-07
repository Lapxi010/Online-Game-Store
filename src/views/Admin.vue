<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
      <div class="catalog__wrapper">
        <div class="loading-file-file">
          <div class="loading-file-file__load" @click="fileGet" @dragenter="isDragStarted=true" @dragend="isDragStarted=false">
            <input multiple ref="input_f" type="file" id="input-f" class="loading-file-file__load-input" @change="da($event)">
            <h2 class="loading-file-file__load-text">Загрузить фото</h2>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon15">Название</span>
              <input v-model="title" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button @click="otpr">btn</button>
          </div>
          <div class="container">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">регион</span>
              <input v-model="activationRegion" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">сервис</span>
              <input v-model="activationService" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon3">количество скринов</span>
              <input v-model="countImg" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon4">текущая цена</span>
              <input v-model="currentPrice" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon5">описание</span>
              <input v-model="description" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon6">разработчик</span>
              <input v-model="developer" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon7">жанры</span>
              <input v-model="genre" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon9">подержка языков</span>
              <input v-model="languageSupport" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon11">платформа</span>
              <input v-model="platform" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon12">издатель</span>
              <input v-model="publisher" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon13">дата выхода</span>
              <input v-model="releaseDate" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon14">скидка</span>
              <input v-model="sale" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon16">Название описание</span>
              <input v-model="titleDescription" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon17">старая цена</span>
              <input v-model="oldPrice" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button @click='req' type="button" class="btn btn-primary">Отправить</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import 'bootstrap/dist/css/bootstrap.min.css'
import {ref} from "vue"
import {useStore} from "vuex";


export default {
  name: "Admin",
  components:{TheBreadcrumbs},
  setup(){
    const activationRegion = ref('')
    const activationService = ref('')
    const countImg = ref('')
    const currentPrice = ref('')
    const description = ref('')
    const developer = ref('')
    const genre = ref('')
    const languageSupport = ref('')
    const oldPrice = ref('')
    const platform = ref('')
    const publisher = ref('')
    const releaseDate = ref('')
    const sale = ref('')
    const title = ref('')
    const titleDescription = ref('')

    const store = useStore()
    const fileGet = (event) => {
      document.querySelector('#input-f').click()
    }

    const res = []

    const isDragStarted = ref(false)

    const da = (event)=> {
      const files = event.target.files[0]
      res.push(files)
    }

    const otpr = async ()=> {
      console.log(res)
      await store.dispatch('admin/createFile', [res[0], title.value.trim()])
      res.pop()
    }

    const req = async () => {
      await store.dispatch('admin/createFileDb',{
        activationRegion: activationRegion.value.trim(),
        activationService: activationService.value.trim(),
        countImg: Number(countImg.value),
        currentPrice: Number(currentPrice.value),
        description: description.value.trim(),
        developer: developer.value.trim(),
        genre: genre.value.trim(),
        languageSupport: languageSupport.value.trim(),
        oldPrice: Number(oldPrice.value),
        platform: platform.value.trim(),
        publisher: publisher.value.trim(),
        releaseDate: releaseDate.value.trim(),
        sale: sale.value.trim(),
        title: title.value.trim(),
        titleDescription: titleDescription.value.trim()
      })
    }

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Админ панель',path:'#'}
    ]

    return {
      breads,
      fileGet,
      da,
      res,
      isDragStarted,
      otpr,
      activationRegion,
      activationService,
      countImg,
      currentPrice,
      description,
      developer,
      genre,
      languageSupport,
      oldPrice,
      platform,
      publisher,
      releaseDate,
      sale,
      title,
      titleDescription,
      req
    }
  }
}
</script>

<style scoped>

</style>
