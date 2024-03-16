import axiosInstanceObj from '.';

const getNews = async (): Promise<any[]> => {
  const response = await axiosInstanceObj.serviceAxiosInstance.get('/news', {
    withCredentials: true,
  });
  return response.data;
};

const homeApi = {
  getNews,
};

export default homeApi;
