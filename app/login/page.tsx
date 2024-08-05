import { LoginForm } from "@/components/forms/LoginForm";
import { redirect } from "next/navigation";

//TODO: How would you improve this component and fix any errors in the code?
export default function LoginPage() {
  const handleSubmit = () => {
    redirect("/dashboard");
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
