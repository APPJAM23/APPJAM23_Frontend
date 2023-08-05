import instance from "../../axios";

// DEMENTIA, CHILD, DISABLED, TEENAGE_RUNAWAY, ETC
export const getMissingList = async (type) => {
  const res = await instance.get("/missing", {
    params: {
      type: type,
    },
  });
  return res.data;
};

export const getMissing = async (id) => {
  return (await instance.get(`/missing/${id}`)).data;
};

export const findMissing = async () => {
  return (await instance.get("/missing/find")).data;
};

export const uploadImage = async (formData) => {
  const response = await instance.post("/missing/image", formData, {
    headers: { "Content-Type": `multipart/form-data` },
  });
  return response.data;
};

export const writeMissing = async (request) => {
  await instance.post("/missing", request);
};
