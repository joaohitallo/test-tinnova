
import { ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  disable: boolean;
}

 export function Button({ children, disable,...rest}: ButtonProps) {
  //const [ isDisable, setIsFocused] = useState(false)
  return (
    <Container isDisable={disable}>
      <button
        disabled={disable}
        {...rest}
      >
        {children}
      </button>
    </Container>
  );
};


