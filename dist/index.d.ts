import * as React from "react";
import "./styles.css";
export declare type Props = {
    url?: string;
    padding?: string;
    visible: boolean;
    setVisible: Function;
    children: React.ReactNode;
};
declare const _default: ({ url, padding, visible, setVisible, children }: Props) => JSX.Element;
export default _default;
