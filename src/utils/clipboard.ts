/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import copyToClipboard from 'copy-to-clipboard';

import { toast } from '@/components/Toast';

export const copy = (text: string) => {
    copyToClipboard(text);
    toast.success('Copied to clipboard');
};

export const getCurrentClipboard = async () => {
    const text = await navigator.clipboard.readText();
    return text;
};
