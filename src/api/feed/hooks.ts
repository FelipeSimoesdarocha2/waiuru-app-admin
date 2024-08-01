// React-query
import { useQuery } from '@tanstack/react-query';

// Models
import { FeedDto } from 'models/feed';

export const useGetFeed = () => useQuery<FeedDto[], Error>(['getLostAndFoundRequest']);
