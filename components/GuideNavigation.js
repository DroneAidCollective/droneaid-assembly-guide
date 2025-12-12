"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "react-feather";
import useMainStore from "@/store/useMainStore";
import guideData from "@/guide-data.json";

const GuideNavigation = () => {
  const { nextStep, previousStep, currentStep } = useMainStore();
  const { steps } = guideData;
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 bg-white">
      <div className="flex justify-between app-width mx-auto gap-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isFirstStep ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          onClick={previousStep}
          className={`btn-transparent w-full flex items-center justify-center gap-2 ${
            isFirstStep ? "opacity-0" : ""
          }`}
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isLastStep ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          onClick={nextStep}
          className={`btn-primary w-full flex items-center justify-center gap-2 ${
            isLastStep ? "opacity-0" : ""
          }`}
        >
          Next step
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </nav>
  );
};
export default GuideNavigation;
