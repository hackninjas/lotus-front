import React, { useState } from 'react';
import { Address } from './components/Address';
import { Bvn } from './components/Bvn';
import { Otp } from './components/Otp';
import { Layout } from './components/Layout';
import { Personal } from './components/Personal';
import { PhotoUpload } from './components/PhotoUpload';

const numberOfForms = 4;

export const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState([...new Array(numberOfForms).fill(true)]);

  const handleErrors = () => {
    // TODO: use formik error object to update errors state
    // e.g if user inputted the complete BVN digits, update errors[0] = false
    // this will update the continue button in the layout object automaticatically for each step
  };

  const handleNext = () => {
    setStep(prev => Math.min(numberOfForms - 1, prev + 1));
  };

  // change step via breadCrumbs
  const changeStep = step => {
    setStep(step);
  };

  const renderForm = step => {
    switch (step) {
      case 0:
        return <Bvn />;
      case 1:
        return <Personal />;
      case 2:
        return <Address />;
      case 3:
        return <PhotoUpload />;

      default:
        break;
    }
  };
  return (
    <Layout
      step={step}
      goNext={handleNext}
      canNext={errors[step]}
      changeStep={changeStep}
    >
      {renderForm(step)}
    </Layout>
  );
};
