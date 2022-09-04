import { useEffect, useState, useRef } from 'react';
import apiClient from '../../apiClient';
import { Service } from '../../types/deck.service';

interface ServerResponse {
  data: string;
}

const useDeckService = () => {
  const [deckId, setDeckId] = useState('');
  const [data, setData] = useState<Service>({
    status: 'loading',
    payload: [],
  });

  // based on: https://github.com/reactwg/react-18/discussions/18
  const didInitialFetch = useRef(false);

  const shuffleDeck = () => {
    apiClient
      .get<string>('/new/shuffle', {
        transformResponse: (r: ServerResponse) => r,
      })
      .then((res) => {
        const { deck_id } = JSON.parse(res.data);
        setDeckId(deck_id);
      })
      .catch((error) => setData({ status: 'error', error, payload: [] }));
  };

  useEffect(() => {
    if (!didInitialFetch.current) {
      didInitialFetch.current = true;
      shuffleDeck();
    }
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
        .catch((error) => setData({ status: 'error', error, payload: [] }));
    }
  }, [deckId]);

  return { data, shuffleDeck };
};

export default useDeckService;
