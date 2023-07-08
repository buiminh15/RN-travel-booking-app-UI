import useSWRInfinite from 'swr/infinite';
import {fetcher} from '../configuaration/swr';
import {PokeResponse} from '../types/Poke';
import {useSWRConfig} from 'swr';

const PAGE_LIMIT = 10;
export const usePaginateHotels = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }
  const {cache} = useSWRConfig();
  const {data, error, size, setSize, mutate} = useSWRInfinite<PokeResponse>(
    (index: number) =>
      `${path}?offset=${index * PAGE_LIMIT}&limit=${PAGE_LIMIT}`,
    fetcher,
    {
      initialSize: 0,
    },
  );
  const hotelsData: PokeResponse[] = data
    ? ([] as PokeResponse[]).concat(...data)
    : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < PAGE_LIMIT);
  const hotels = hotelsData.flatMap(hotel => hotel.results);
  return {
    hotels,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    mutate,
    cache,
  };
};
