import { Dispatch, SetStateAction } from 'react';

export type TypeIdea = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  key: string;
};

export type IdeaProps = {
  setIdea: Dispatch<SetStateAction<TypeIdea>>;
  setSwitchToSettings: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export type Option = {
  key: string;
  value: string;
}
