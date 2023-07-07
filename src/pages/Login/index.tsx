import { Input } from "../../components/Inputs/Input";

import { Button } from "../../components/button";
import { BsArrowRight } from "react-icons/bs";

import * as S from "./style";

function Login() {
  return (
    <>
      <S.LoginContainer>
        <S.FormContainer>
          <S.FormTitle>LOGIN</S.FormTitle>
          <S.Form>
            <Input label="Email" borderColor="black"></Input>
            <Input label="Senha" borderColor="black"></Input>
            <Button>Login</Button>
          </S.Form>
          <S.ForgotPassWordLink href="#">
            Esqueceu sua senha ?{" "}
          </S.ForgotPassWordLink>

          <S.BottonDetails>
            <S.BottonLink  to={'/cadastro'} >
              Crie uma nova conta <BsArrowRight />
            </S.BottonLink>
          </S.BottonDetails>
        </S.FormContainer>
      </S.LoginContainer>
    </>
  );
}

export default Login;
