import handler from '../libs/axios';

export const getAllCodeBlocks = async () => {
  return handler.get('/api/codeblock');
};

export const getCodeBlock = async (id: string) => {
  return handler.get(`/api/codeblock/${id}`);
};
