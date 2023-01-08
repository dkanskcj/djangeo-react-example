import { CommonButtonProps } from "@utils/common/props"
import { FunctionComponent as FC } from "react";

const ButtonInterface: FC<CommonButtonProps> = (props) => {
  const { className, children, onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`border rounded-md px-2 py-1 duration-150 active:scale-95 disabled:bg-slate-400 disabled:text-slate-700 ${className}`}
      onClick={(event) => {
        event.preventDefault();
        // short circuit: 앞에가 false면 뒤에 것이 실행이 안 됨.
        // != null: null과 undefined 모두 비교
        // !== null: null만 보고, undefined는 안 봄.
        onClick != null && onClick(event);
        // => 나중엔
        // onClick && onClick(event);
      }}
    >
      {children}
    </button>
  )
}

export const PrimaryButton: FC<CommonButtonProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={`bg-primary active:bg-primary-active text-primary-contra ${className}`}
    >
      {children}
    </ButtonInterface>
  )
}

export const LinkButton: FC<CommonButtonProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={`bg-transparent text-link active:text-link-active ${className}`}
    >
      {children}
    </ButtonInterface>
  )
}