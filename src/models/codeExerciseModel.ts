export type Level = 'easy' | 'intermediate' | 'hard' | 'expert';

export type CodeExerciseType = {
  title: string;
  slug: string;
  explanation: string;
  code: string;
  solution?: string;
  level: Level;
};
