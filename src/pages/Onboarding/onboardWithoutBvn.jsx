import React, { useContext, useState } from 'react';
import { Address } from './components/Address';
// import { Otp } from './components/Otp';
import { Layout } from './components/Layout';
import { Personal } from './components/Personal';
import { PhotoUpload } from './components/PhotoUpload';
import * as Yup from 'yup';
import {  Formik } from 'formik';
// import { Alert } from '@chakra-ui/alert';
import { openAccount } from 'api/api';
import { useToast } from 'hooks/useToast';
import { Persist } from 'formik-persist'
import { UserContext } from 'context';


const numberOfForms = 3;

const validationSchema = Yup.object().shape({
//   bvn: Yup.string().required('Required').length(10),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  // middleName: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  dateOfBirth: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  // bvn: Yup.string().required('Required').length(12),
  // isBvnProvided: Yup.boolean().required('Required'),
  // referalCode: Yup.string().required('Required'),
  passport: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

export const OnboardWithoutBvn = () => {
  const { toastErrorSuccess } = useToast()
  const [step, setStep] = useState(0);
  const [errors] = useState([...new Array(numberOfForms).fill(false)]);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const { userData } = useContext(UserContext);

//   const handleErrors = () => {
    // TODO: use formik error object to update errors state
    // e.g if user inputted the complete BVN digits, update
    // this will update the continue button in the layout object automaticatically for each step
//   };

  const handleNext = () => {
    setStep(prev => Math.min(numberOfForms - 1, prev + 1));
  };

  // change step via breadCrumbs
  const changeStep = step => {
    setStep(step);
  };

  const renderForm = (step, props) => {
    switch (step) {
      case 0:
        return <Personal formik={props} />;
      case 1:
        return <Address formik={props} />;
      case 2:
        return <PhotoUpload formik={props} />;
   

      default:
        break;
    }
  };
  return (
    <Formik
      initialValues={{
        bvn: null,
        firstName: '',
        lastName: '',
        // middleName: "",
        email: userData.email,
        phoneNumber: '',
        // dateOfBirth: "",
        gender: '',
        // bvn: '',
        isBvnProvided: false,
        // referalCode: "",
        passport: '',
        country: '',
        state: '',
        city: '',
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={ async (values) => {
        let data = values;

        if (data.passport) {
          data = { ...values, email: userData.email, passport:data.passport.split(',')[1] };
        }

        delete data.bvn
        console.log('====================================');
        console.log("data", data);
        console.log('====================================');
        try {
          setIsFormSubmitting(true)
          await openAccount(data);
          window.location = '/dashboard'
          toastErrorSuccess('success', 'login successful');
          setIsFormSubmitting(true)
        } catch (error) {
          toastErrorSuccess('error', error.message);
          console.error(error)
          setIsFormSubmitting(false)
        }
        
        
      }}
    >
      {props => {
        return (
          <Layout
            step={step}
            goNext={handleNext}
            canNext={errors[step]}
            changeStep={changeStep}
            onSubmit={props.handleSubmit}
            isLoading={isFormSubmitting}
            steps={[ 'Personal', 'Address', 'Photo Upload']}
            stepNumber={3}

          >
            {renderForm(step, props)}
            <Persist name="signup-form" />
          </Layout>
        );
      }}
    </Formik>
  );
};
