import instance from '../../axios';

// DEMENTIA, CHILD, DISABLED, TEENAGE_RUNAWAY, ETC
const getMissingList = async (type) => {
  return (await instance.get("/missing", {
    params: {
      type: type
    }
  })).data;
}

const getMissing = async (id) => {
  return (await instance.get(`/missing/${id}`)).data;
}

const findMissing = async () => {
   return (await instance.get("/missing/find")).data;
}

const uploadImage = async (formData) => {
  return (await instance.post("/missing/image", formData))
}

const writeMissing = async (data) => {
  await instance.post("/missing", data);
}
