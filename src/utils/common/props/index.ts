import { HTMLProps as Props } from "react";

// Omit<인터페이스이름, "제외할속성명1" | "제외할속성명2" | "제외할속성명3">
export type CommonInputProps = Omit<Props<HTMLInputElement>, "classID">;

export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;

export type CommonLabelProps = Omit<Props<HTMLLabelElement>, "classID">;

export type CommonFormProps = Omit<Props<HTMLFormElement>, "classID">;

// Button만 좀 다름.
export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CommonSVGProps = React.SVGProps<SVGSVGElement>;

type InitProps = Props<HTMLElement>;

export default InitProps;
