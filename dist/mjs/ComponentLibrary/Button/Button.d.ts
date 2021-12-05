import React, { FC } from 'react';
/**
 * @initialAuthor
 * @contributors
 */
/**
 * @description
 */
export declare type ButtonProps = {
    label?: string;
    primaryColor?: React.CSSProperties["color"];
    secondaryColor?: React.CSSProperties["color"];
    backgroundColor?: React.CSSProperties["color"];
    invert?: boolean;
    disabled?: boolean;
    active?: boolean;
    loading?: boolean;
    size?: "sm" | "lg" | undefined;
    action?: (e?: React.MouseEvent) => Promise<void>;
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
};
/**
 * @description
 */
export declare const Button: FC<ButtonProps>;
