import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReducerApp from '../store/store';
import Loader from '../components/loader';

export default function Redirect() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [, dispatch] = useReducerApp();

  useEffect(() => {
    const data = localStorage.getItem('urls');
    if (data) {
      const items = JSON.stringify(data);
      const id = params.id;

      const itemUrl = items.fin((i) => i.shortUrl === id);

      if (itemUrl) {
        setItem(itemUrl);
        dispatch({ type: 'ADD_VIEW', data: id });
        setTimeout(() => {
          window.location.href = itemUrl.url;
        }, 2000);
      } else {
        setItem(undefined);
      }
    } else {
      setItem(undefined);
    }
  }, []);
  return <Loader item={item} id={params.id} />;
}
