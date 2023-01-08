import AuthInfo from "@models/auth/AuthInfo";
import ContextCallbackOption from "@store/domain/ContextCallbackOption";
import { PrimaryButton } from "@styles/tw/button";
import { FunctionComponent as FC, useRef, useState } from "react";

export interface LoginFormProps {
  next: () => void;
  confirmAuthInfo: (authInfo: AuthInfo, options?: ContextCallbackOption | undefined) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { next, confirmAuthInfo } = props;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  return (
    <form className="flex flex-col gap-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <fieldset className="grid grid-cols-3 gap-x-8 gap-y-2 items-center">
        <span className="uppercase font-bold">Account</span>
        <input
          name="username"
          className="col-span-2 border px-2 py-1 rounded-md w-full peer"
          placeholder="계정"
          ref={usernameRef}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required        // (이 요소).validity.valid       event.target.validity.valid
          // 정규식에서 / /g 이런 가장자리 부분 제외하고 안쪽 내용만 넣어야 함.
          // pattern=""   // (이 요소).validity.valid       event.target.validity.valid
          minLength={3}   // (이 요소).validity.valid       event.target.validity.valid
        />
        <span className="col-start-2 col-span-2 hidden peer-invalid:block text-danger">아이디는 3 글자 이상 입력하세요.</span>
      </fieldset>
      <fieldset className="grid grid-cols-3 gap-x-8 gap-y-2 items-center">
        <span className="uppercase font-bold">Password</span>
        <input
          type="password"
          name="password"
          className="col-span-2 border px-2 py-1 rounded-md w-full peer"
          placeholder="비밀번호"
          ref={passwordRef}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
        />
        <span className="col-start-2 col-span-2 hidden peer-invalid:block text-danger">비밀번호는 8 글자 이상 입력하세요.</span>
      </fieldset>
      <div className="flex justify-end">
        <PrimaryButton 
          className="font-bold text-xl px-4 py-2"
          onClick={() => {
            if (!usernameRef.current?.validity.valid) return;
            if (!passwordRef.current?.validity.valid) return;

            confirmAuthInfo({ username, password }, { success: (data) => next() });
          }}
        >Login</PrimaryButton>
      </div>
    </form>
  )
}

export default LoginForm