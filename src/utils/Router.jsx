import React, { lazy, Suspense ,useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HumanVerification from "../components/humanVerification/HumanVerification";
// import Combination from "../components/Combination";
const CombinationLoading = lazy(() => import("../components/Combination"))

const Router = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      setIsToggled(true); 
      navigate("/page");
    }, 3000);
  };

  return (
    <>
     
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black">
          <img src="/images/loader.gif" className="h-40 w-40" alt="" />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={<HumanVerification isToggled={isToggled} setIsToggled={handleToggle} />}
        />
        <Route path="/page" element={ <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-black">
          <img src="/images/loader.gif" className="h-40 w-40" alt="" />
        </div>}>
              <CombinationLoading />
            </Suspense>} />
      </Routes>
    </>
  );
};

export default Router;
