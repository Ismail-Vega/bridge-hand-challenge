import { useEffect, useState } from 'react';
import apiClient from '../../apiClient';
import { Cards } from '../../types/card';
import { Service } from '../../types/deck.service';

interface ServerResponse {
  data: string;
}

const useDeckService = () => {
  const [deckId, setDeckId] = useState('');
  const [data, setData] = useState<Service<Cards | []>>({
    status: 'loading',
  });

  useEffect(() => {
    apiClient
      .get<string>('/new/shuffle', {
        transformResponse: (r: ServerResponse) => r,
      })
      .then((res) => {
        const { deck_id } = JSON.parse(res.data);
        setDeckId(deck_id);
      })
      .catch((error) => setData({ status: 'error', error }));
  }, []);

  useEffect(() => {
    if (deckId) {
      apiClient
        .get<string>(`${deckId}/draw/?count=52`, {
          transformResponse: (r: ServerResponse) => r,
        })
        .then(({ data }) => {
          const { cards } = JSON.parse(data);
          setData({ status: 'loaded', payload: cards || [] });
        })
        .catch((error) => setData({ status: 'error', error }));
    }
  }, [deckId]);

  return data;
};

export default useDeckService;
