import {$api} from "./index"

export const addAuthor = async(
  name,
  surname,
  patronymic,
  city,
  adress,
  posteCode,
  education,
  specialityCode,
  work,
  position,
  academicDegree
  ) => {
    try {
        const response = await $api.post('/author',{
          name,
          surname,
          patronymic,
          city,
          adress,
          posteCode,
          education,
          specialityCode,
          work,
          position,
          academicDegree
        })
        return response
    }catch (e){
        console.log(e)
    }

}