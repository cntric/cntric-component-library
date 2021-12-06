import React, { FC } from 'react';
/**
 * @initialAuthor
 * @contributors
 */
/**
 * @description
 */
export declare type SearchbarProps = {
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    onChange?: (searchString: string) => void;
    search?: () => Promise<void>;
    size?: "sm" | "lg" | undefined;
    initString?: string;
    style?: React.CSSProperties;
};
/**
 * @description
 */
export declare const Searchbar: FC<SearchbarProps>;
