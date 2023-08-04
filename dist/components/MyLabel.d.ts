import './mylabel.css';
export interface MyLabelProps {
    /**
        * Is this all capitalize label
    */
    allCaps?: boolean;
    /**
        * Is this is message in label
    */
    label: string;
    /**
        * Is this size of label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3' | 'light';
    /**
        * Is this color label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
        * Is this font color label
    */
    fontColor?: string;
    /**
        * Is this background color label
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
