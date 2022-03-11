export interface UserInfo {
  name: string;
  age: number;
}

export interface Props {
  user: UserInfo;
  specialGreeting?: string;
}

export type handleClickType = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
