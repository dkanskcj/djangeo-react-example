import {FunctionComponent as FC} from 'react'

export interface OTPFormProps {
  next: () => void;
  confirmOTP: (otp: string) => void;
}

const OTPForm: FC<OTPFormProps> = (props) => {
  const {} = props;

  return (
    <div>OTPForm</div>
  )
}

export default OTPForm