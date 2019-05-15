import { ReactNode } from 'react';
import { bgColorMoreType, bgColorType, lightBgColorType } from '../utils/types';

export type TTitle = string;
export type TClose = boolean;
export type TChildren = ReactNode;
export type TRenderTitle = ReactNode;
export type TRenderAction = ReactNode;
export type TRenderContent = ReactNode;
export type TShow = boolean;
export type TTitleBgColor = bgColorMoreType | bgColorType | lightBgColorType;
export type TActionColor = bgColorMoreType | bgColorType | lightBgColorType;
export type TActions = {
  text?: string
}[]

export type TModalType = 'normal' | 'image' | 'radio' | 'checkbox';

export type normal = {
  title?: string;
  close?: boolean;
  shadowClose?: boolean;
  titleBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttonBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttons: {
    text?: string;
  }[];
};

export type image = {
  close?: boolean;
  shadowClose?: boolean;
  url?: string;
  buttonBgColor?: bgColorMoreType | bgColorType | lightBgColorType;
  buttons: {
    text?: string;
  }[];
};

export type radio = {};

export type checkbox = {};
