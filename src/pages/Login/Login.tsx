import { Button } from "components/Button";
import { useAuth } from "modules/auth";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { colors, flex, fontSize, spacing } from "styles";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { isLoggedIn } = useAuth();
  const { submit, errorMessage } = useLogin();

  //TODO - add loading state and style more

  if (isLoggedIn) return <Navigate to="/" />;
  else
    return (
      <StyledLogin>
        <StyledLoginForm onSubmit={submit}>
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <Button isSubmit type="success" text="Login" />
          <p>{errorMessage}</p>
        </StyledLoginForm>
      </StyledLogin>
    );
};

export const StyledLogin = styled.section`
  ${flex("column", "center", "center")};
  height: 100vh;
  width: 100vw;
  background-color: ${colors.secondary};
`;

export const StyledLoginForm = styled.form`
  ${flex("column", "center", "center")};
  padding: ${spacing.xl};
  background: white;
  border-radius: 0.4rem;
  gap: ${spacing.l};

  > input,
  > p,
  > button {
    font-size: ${fontSize.l};
  }
`;
