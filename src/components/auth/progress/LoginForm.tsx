import AuthInfo from '@models/auth/AuthInfo';
import { FunctionComponent as FC } from 'react'

export interface LoginFormProps {
  next: () => void;
  confirmAuthInfo: (authInfo: AuthInfo) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { next, confirmAuthInfo } = props;

  return (
    <div onClick={() => next()}>LoginForm</div>
  )
}

export default LoginForm