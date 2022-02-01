export type DateTime = string & {dateTime: void};
export const makeDateTime = (value: string)=>value as DateTime;

export type UserId = string & {userId:void};
export const makeUserId = (value: string)=>value as UserId;

export interface Message{
  id: string;
  from: UserId;
  to: UserId;
  created: DateTime;
  posted: DateTime;
  read?: DateTime | undefined;
  body: string;
}

