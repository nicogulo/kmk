/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import React, { ClipboardEventHandler, InputHTMLAttributes, MutableRefObject, useState } from 'react';
import { IMaskMixin } from 'react-imask';
import { ReactElement } from 'react-imask/dist/mixin';

import Icons from '@/components/Icon';

type Value = string;
type TypeInput = 'text' | 'tel' | 'number' | 'password' | 'checkbox' | 'radio';

interface MaskedPattern {
    /**
     * The input masking
     */
    mask?: StringConstructor | NumberConstructor | string | RegExp;
    /**
     * The thousands separator
     */
    thousandsSeparator?: string;
    /**
     * The decimal separator
     */
    radix?: string;
    /**
     * Digits after point (for Number Input)
     */
    scale?: number;
}
export interface InputProps extends MaskedPattern, React.PropsWithChildren {
    /**
     * The name for input
     */
    name?: string;
    /**
     * The label text displayed before (on the top side of) the input field
     */
    label?: string | React.ReactNode;
    /**
     * The label text className
     */
    labelClassName?: string;
    /**
     * The suffix icon for the label
     */
    labelSuffix?: React.ReactNode;
    /**
     * The prefix icon for the Input
     */
    prefix?: React.ReactNode;
    /**
     * The short hint is displayed in the input field before the user enters a value.
     */
    placeholder?: string;
    /**
     * The input content value
     */
    value?: string;
    /**
     * Callback when user input
     */
    onChange?: (value: Value) => void;
    /**
     * Callback when user blur input
     */
    onBlur?: (value: Value) => void;
    /**
     * Callback when user paste on input
     */
    onPaste?: ClipboardEventHandler<ReactElement> | undefined;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * The suffix icon for the Input
     */
    suffix?: React.ReactNode;
    /**
     * Error message input
     */
    error?: string | boolean;
    /**
     * Success input
     */
    success?: string;
    /**
     * Reusable blocks for masked patterns
     */
    blocks?: {
        [key: string]: MaskedPattern;
    };
    /**
     * The max number (for Number Input)
     */
    max?: number;
    /**
     * The min number (for Number Input)
     */
    min?: number;
    /**
     * Set the className of wrapper input
     */
    className?: string;
    /**
     * Set the panel className of group input
     */
    groupClassName?: string;
    /**
     * Set the className of input field
     */
    inputClassName?: string;
    /**
     * Set the className of error message
     */
    errorClassName?: string;
    /**
     * Set the className of success message
     */
    successClassName?: string;
    /**
     * Set the className of prefix
     */
    prefixClassName?: string;
    /**
     /**
      * Set the className of suffix
      */
    suffixClassName?: string;
    /**
     * Set the className of hint
     */
    hintClassName?: string;
    /**
     * Set the required input
     */
    required?: boolean;
    /**
     * Set the type input
     */
    type?: TypeInput;
    /**
     * Set lazy attribute
     */
    lazy?: boolean;
    /**
     * Set input wrapper ref attribute
     */
    inputWrapperRef?: MutableRefObject<HTMLInputElement>;
    /**
     * Set inputref attribute
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
    /**
     * Set autocomplete attribute
     */
    autoComplete?: string;
    /**
     * Set autofocus attribute
     */
    autoFocus?: boolean;
    /**
     * Add component at Input right side.
     */
    inputRightSide?: React.ReactNode;
    /**
     * only change on focus
     */
    onlyChangeOnFocus?: boolean;
    /**
     * size input
     */
    size?: 'sm' | 'md';
    /**
     * Show hint text
     */
    hint?: string;
    /**
     * readOnly for select component
     */
    isReadOnly?: boolean;
    /**
     * Aria-label for
     */
    ariaLabel?: string;
    /**
     * Callback when user input
     */
    onFocus?: () => void;
    style?: React.CSSProperties;
}

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading

    <input {...(props as InputHTMLAttributes<HTMLInputElement>)} ref={inputRef as React.Ref<HTMLInputElement>} />
));

const Input: React.FC<InputProps> = ({
    name,
    label,
    labelClassName,
    labelSuffix,
    prefix,
    placeholder,
    value,
    onChange,
    onBlur,
    onPaste,
    disabled,
    suffix,
    error,
    success,
    mask = String,
    blocks,
    thousandsSeparator,
    radix,
    scale,
    max,
    min,
    className,
    groupClassName,
    inputClassName,
    errorClassName,
    successClassName,
    prefixClassName,
    suffixClassName,
    required,
    type,
    lazy,
    inputWrapperRef,
    inputRef,
    autoComplete,
    autoFocus,
    inputRightSide,
    onlyChangeOnFocus,
    size,
    hint,
    hintClassName,
    isReadOnly,
    ariaLabel,
    onFocus,
    style
}: InputProps) => {
    const [focus, setFocus] = useState(false);

    const handleChange = (newValue: string) => {
        if (!onlyChangeOnFocus) {
            onChange?.(newValue);
            return;
        }

        if (focus) {
            onChange?.(newValue);
        }
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        onBlur?.(value as Value);
        setFocus(false);
    };

    const wrapperClasses = clsx(
        'flex items-center w-full border rounded overflow-hidden',
        'bg-white',
        size === 'sm' ? 'h-[40px] p-3 text-xs' : 'h-[48px] py-3.5 px-4 text-sm',
        focus ? '!border-primary-300' : 'border-[#08192B4D]',
        disabled ? 'bg-[#F4F6F8] !border-[#08192B4D] ' : 'xl:hover:border-primary-300 ',
        error ? '!border-[#C9353F]' : '',
        success ? '!border-primary-300' : '',
        className
    );
    const inputClasses = clsx(
        'text-sm text-[#121416] font-bold placeholder:text-[#07142280] placeholder:font-normal placeholder:text-sm bg-white !outline-none w-full border-none flex-1 !p-0',
        disabled && 'cursor-not-allowed',
        'hover:border-primary-300',
        focus && 'focus:!caret-primary-300 focus:ring-0',
        size === 'sm' && 'text-[10px]',
        error && 'border-[#C9353F] ',
        success && 'border-primary-300 hover:border-primary-300',
        inputClassName
    );

    return (
        <div className={clsx(groupClassName)}>
            {label && (
                <div>
                    <span className={clsx(labelClassName, size === 'sm' ? 'text-[10px]' : 'text-xs', 'text-[#525D66]')}>
                        {label}
                        {required && <span className={clsx('text-xs text-[#C9353F]')}>*</span>}
                    </span>
                    {labelSuffix && <div>{labelSuffix}</div>}
                </div>
            )}
            <div ref={inputWrapperRef} className={clsx('flex justify-between gap-2', wrapperClasses)}>
                {prefix && <div className={clsx('flex', prefixClassName)}>{prefix}</div>}
                <MaskedStyledInput
                    data-testid='binaloka-input'
                    readOnly={isReadOnly}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onAccept={handleChange}
                    onFocus={onFocus || handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    mask={mask as NumberConstructor}
                    blocks={blocks as any}
                    unmask={true as false}
                    thousandsSeparator={thousandsSeparator}
                    radix={radix}
                    scale={scale}
                    max={max}
                    min={min}
                    type={type}
                    lazy={lazy}
                    onPaste={onPaste}
                    inputRef={(referrence: HTMLInputElement) => {
                        if (inputRef) {
                            // eslint-disable-next-line no-param-reassign
                            inputRef.current = referrence;
                        }
                    }}
                    className={inputClasses}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    aria-label={ariaLabel}
                    style={{ ...style }}
                />
                {suffix && <div className={clsx('ml-1 flex', suffixClassName)}>{suffix}</div>}
            </div>
            {inputRightSide}
            {hint && (
                <span className={clsx(hintClassName, 'mr-[10px]', size === 'sm' ? 'text-[10px]' : '')}>{hint}</span>
            )}
            {error && (
                <span className={clsx(errorClassName, 'mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]')}>
                    <Icons icon='Interuption' /> {error}
                </span>
            )}
            {success && <span className={clsx(successClassName, 'text-primary-300 mr-[10px] text-xs')}>{success}</span>}
        </div>
    );
};

export default Input;
