import instance from ".";

const getAllPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};
export default getAllPosts;
