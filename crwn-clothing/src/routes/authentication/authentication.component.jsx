import SignUpForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
