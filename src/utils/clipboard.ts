/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import copyToClipboard from 'copy-to-clipboard';

export const copy = (text: string) => {
    copyToClipboard(text);
};

export const getCurrentClipboard = async () => {
    const text = await navigator.clipboard.readText();
    return text;
};
