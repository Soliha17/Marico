import LoginBtn from "../atoms/LoginBtn";
import SignUpBtn from "../atoms/SignUpBtn";

const SignGroup = () => {
  return (
    <div className="flex gap-4 sm:gap-6 items-center">
      <LoginBtn />
      <SignUpBtn />
    </div>
  );
};

export default SignGroup;
