import useSWRInfinite from 'swr/infinite';
import {useSWRConfig} from 'swr';
import {fetcher} from '../configuaration/swr';
import {PokeResponse} from '../types/Poke';
const PAGE_LIMIT = 10;
export const usePaginateHotels = (path: string, type: 1 | 2 | 3) => {
  if (!path || !type) {
    throw new Error('Path or Type is required');
  }
  const {mutate} = useSWRConfig();
  const typeIndex = type === 1 ? 0 : type === 2 ? 50 : 100;
  const {data, error, size, setSize} = useSWRInfinite(
    (index: number) =>
      `${path}?offset=${index * PAGE_LIMIT + typeIndex}&limit=${PAGE_LIMIT}`,
    fetcher,
  );
  const hotelsData: PokeResponse[] = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < PAGE_LIMIT);
  const hotels = hotelsData.flatMap(hotel => hotel.results);
  return {hotels, error, isLoadingMore, size, setSize, isReachingEnd, mutate};
};
