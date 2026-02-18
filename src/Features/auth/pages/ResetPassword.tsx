import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../authSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import type { AppDispatch } from "../../../store/store";
import type { RootState } from "../../../store/rootReducer";

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const result = await dispatch(resetPassword({ token, newPassword: password }));
    if (resetPassword.fulfilled.match(result)) {
      setSuccess("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
