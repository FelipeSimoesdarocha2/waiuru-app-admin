// Models
import { Chat, ChatUpdate } from 'models';

// Api
import fetcher from '../fetch';

// GET
export const getChatByUserIdRequest = async (id: string = '') =>
  fetcher(`/v1/chat/user/${id}`).then(response => response.json());

// CREATE
export const createChatRequest = (data: Chat) => {
  return fetcher('/v1/chat', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// UPDATE
export const updateChatRequest = (data: ChatUpdate) => {
  return fetcher(`/v1/chat/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
