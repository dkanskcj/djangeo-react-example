import ContextCallbackOption from "@store/domain/ContextCallbackOption";
import { PrimaryButton } from "@styles/tw/button";
import {FunctionComponent as FC, useEffect, useRef, useState} from "react";

export interface OTPFormProps {
  next: () => void;
  confirmOTP: (otp: string, options?: ContextCallbackOption | undefined) => void;
}

const OTPForm: FC<OTPFormProps> = (props) => {
  const {next, confirmOTP} = props;

  const [otp, setOTP] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false); 

  const otpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if(!otpRef.current) return;

    let valid = true;
    valid &&= otpRef.current?.validity.valid;
    // ...

    setValid(valid);
  }, [otp,])
  

  return (
    <form className="flex flex-col gap-8">
      <span className="uppercase font-bold">OTP</span>
      <input
        className="col-span-2 border px-2 py-1 rounded-md w-full"
        ref={otpRef}
        value={otp}
        onChange={(event) => setOTP(event.target.value)}
        placeholder="OTP"
        required
        minLength={6}
        maxLength={6}
      />

      <div className="flex justify-end">
        <PrimaryButton 
          disabled={!valid}
          className="font-bold text-xl px-4 py-2"
          onClick={() => {
            confirmOTP(otp, {success: (data) => next()});
          }}
        >
            Confirm
        </PrimaryButton>
      </div>
    </form>
  )
}

export default OTPForm