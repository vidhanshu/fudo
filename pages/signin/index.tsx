import { useRouter } from "next/router";
import { z } from "zod";
import SigninComponent, {
  SignInFormSchema,
} from "@/src/common/components/SigninComponent";
import CustomerService from "@/src/common/services/CustomerAuthService";

const auth = new CustomerService();

const Signin = () => {
  const router = useRouter();
  async function handleSignin(values: z.infer<typeof SignInFormSchema>) {
    const { email, password } = values;
    const res = await auth.signin(email, password);
    if(res){
      router.push("/");
    }
  }
  return <SigninComponent onSubmit={handleSignin} />;
};

export default Signin;
