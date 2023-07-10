import { Option } from "./Option";

export interface Question {
  id: number;
  text: string;
  options?: Option[];
  prevId: number | null;
  nextId?: number;
  defaultAnswer: string;
  withPathing?: boolean;
  path1NextId?: number | null;
  path2NextId?: number | null;
  inputType?: string;
  isLast?: boolean;
}
