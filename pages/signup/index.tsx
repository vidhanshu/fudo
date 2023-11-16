import SignupComponent, {
  SignUpFormSchema,
} from "@/src/common/components/SignupComponent";
import CustomerService from "@/src/common/services/CustomerAuthService";
import { z } from "zod";

const auth = new CustomerService();

const Signup = () => {
  function handleSignup(values: z.infer<typeof SignUpFormSchema>) {
    const { email, password, name } = values;
    const res = auth.signup(email, password, name);
    console.log(res);
  }

  return <SignupComponent onSubmit={handleSignup} />;
};

export default Signup;
