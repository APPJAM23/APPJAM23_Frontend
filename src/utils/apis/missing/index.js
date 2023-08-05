import instance from '../../axios';

// DEMENTIA, CHILD, DISABLED, TEENAGE_RUNAWAY, ETC
export const getMissingList = async (type) => {
  return (await instance.get("/missing", {
    params: {
      type: type
    }
  })).data;
}

export const getMissing = async (id) => {
  return (await instance.get(`/missing/${id}`)).data;
}

export const findMissing = async () => {
   return (await instance.get("/missing/find")).data;
}

export const uploadImage = async (formData) => {
  return (await instance.post("/missing/image", formData))
}

export const writeMissing = async (data) => {
  await instance.post("/missing", data);
}
