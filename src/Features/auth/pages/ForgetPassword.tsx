import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../authSlice";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import type { AppDispatch } from "../../../store/store";
import type { RootState } from "../../../store/rootReducer";

const ForgetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(forgetPassword(email));
    if (forgetPassword.fulfilled.match(result)) {
      setSuccess("Check your email for reset link");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
