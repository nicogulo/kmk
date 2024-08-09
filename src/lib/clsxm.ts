import clsx, { ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

const clsxm = (...inputs: ClassArray) => {
  return twMerge(clsx(...inputs));
};

export default clsxm;
