import { HTMLAttributes } from 'react';

export interface TerminalResultProps extends HTMLAttributes<any> {
  command: string;
  result: { value: string, link?: string }[];
  type: ResultType;
}

export type TerminalResult = TerminalResultProps;

export enum ResultType {
  ERROR,
  LINK,
  DEFAULT,
}
export interface TerminalData {
  command: string;
  result: any;
  type?: 'string-list' | 'object'
}

export interface TerminalProps extends HTMLAttributes<any> {
  data: TerminalData[];
  scrollableContainer?: HTMLDivElement;
}
