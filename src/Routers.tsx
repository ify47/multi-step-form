import { Routes, Route } from "react-router-dom";
import { StepOne } from "./pages/StepOne";
import { StepTwo } from "./pages/StepTwo";
import { StepThree } from "./pages/StepThree";
import { StepFour } from "./pages/StepFour";
import { ErrorPage } from "./components/ErrorPage";
import { StepFive } from "./pages/stepFive";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<StepOne />} />
      <Route path="step-two" element={<StepTwo />} />
      <Route path="step-three" element={<StepThree />} />
      <Route path="step-four" element={<StepFour />} />
      <Route path="step-five" element={<StepFive />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
