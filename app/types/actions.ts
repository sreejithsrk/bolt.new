export type ActionType = 'file' | 'shell' | 'image' | 'chart' | 'doc' | 'git';

export interface BaseAction {
  content: string;
}

export interface FileAction extends BaseAction {
  type: 'file';
  filePath: string;
}

export interface ShellAction extends BaseAction {
  type: 'shell';
}

export interface ImageAction extends BaseAction {
  type: 'image';
  src: string;
}

export interface ChartAction extends BaseAction {
  type: 'chart';
  data: string;
}

export interface DocAction extends BaseAction {
  type: 'doc';
}

export interface GitAction extends BaseAction {
  type: 'git';
}

export type BoltAction =
  | FileAction
  | ShellAction
  | ImageAction
  | ChartAction
  | DocAction
  | GitAction;

export type BoltActionData = BoltAction | BaseAction;
