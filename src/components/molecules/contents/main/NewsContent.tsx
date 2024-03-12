import { Fragment, useEffect } from 'react';
import { useQuery } from 'react-query';
import homeApi from 'src/apis/home';

const NewsContent = () => {
  const { data } = useQuery('homeNews', () => homeApi.getNews(), {});
  console.log(data);
  return (
    <>
      {data?.map((value) => {
        return <Fragment key={value.title}>{value.title}</Fragment>;
      })}
    </>
  );
};

export default NewsContent;
