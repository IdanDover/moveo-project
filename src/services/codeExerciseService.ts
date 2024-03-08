import handler from '../libs/axios';

export const getAllCodeExercises = async () => {
  return handler.get('/api/code-exercise');
};

export const getCodeExercise = async (id: string) => {
  return handler.get(`/api/code-exercise/${id}`);
};
