import useAuth from "@store/auth/useAuth";
import { useCallback, useState } from "react"
import LoginForm from "./progress/LoginForm";
import OTPForm from "./progress/OTPForm";

const LoginProgress = () => {
  type StepName = "LOGIN" | "OTP";

  const auth = useAuth();

  const stepOrder: StepName[] = ["LOGIN", "OTP"];
  const [stepIndex, setStepIndext] = useState<number>(0); // (stepIndex: number) => void;
  // setStepIndex를 Props로 전달할 때:
  //  React.Dispatch<React.SetStateAction<number>> (X 비권장)
  //  (stepIndex: number) => void; (O 권장)

  const next = useCallback(() => {
    const nextStepIndex = stepIndex + 1;
    const isLast = nextStepIndex === stepOrder.length;

    if (isLast) {
      // 마지막 스텝 때 할 동작
      auth.isAuthInfoConfirmed && auth.isOTPConfirmed && auth.login();
    }

    setStepIndext(nextStepIndex);
  }, [stepIndex]);
  
  return (
    <div className="flex flex-col">
      <section>
        <h1 className="uppercase text-4xl font-bold">Login</h1>
        <article>
          {stepOrder[stepIndex] === "LOGIN" && <LoginForm next={next} confirmAuthInfo={auth.confirmAuthInfo} />}
          {stepOrder[stepIndex] === "OTP" && <OTPForm next={next} confirmOTP={auth.confirmOTP} />}
        </article>
      </section>
    </div>
  )
}

export default LoginProgress