import handler from '../libs/axios';

export const getAllCodeExercises = async () => {
  return handler.get('/api/code-exercise');
};

export const getCodeExercise = async (
  id: string,
  options?: { findBy: string }
) => {
  if (!options) {
    return handler.get(`/api/code-exercise/${id}`);
  }

  return handler.get(`/api/code-exercise/${id}?findBy=${options.findBy}`);
};
