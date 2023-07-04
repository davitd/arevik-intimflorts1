import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SIGNUP_ICONS } from '../data/signup-icons';
import { SIGNUP_STEPS } from '../data/signup-steps';

interface UserData {
  'date-type'?: string;
  gender?: string;
  'looking-for'?: string;
  DOB?: string;
  username?: string;
  password?: string;
  location?: string;
  email?: string;
}

export const RegistrationContext = createContext<{
  icons: {
    step: string;
    component: ({
      onClick,
      step,
      status,
    }: {
      onClick: (value: string) => void;
      step: string;
      status: string;
    }) => JSX.Element;
  }[];
  screens: {
    step: string;
    component: () => JSX.Element;
  }[];
  currentScreen: string;
  changeScreen: (value: string) => void;
  backStep?: (value: string) => void;
  nextStep?: () => void;
  handleUserData?: (name: string, value: string) => void;
  userData: UserData;
  progress: number;
}>({
  icons: SIGNUP_ICONS,
  screens: SIGNUP_STEPS,
  currentScreen: 'date-type',
  userData: {} as UserData,
  changeScreen: () => {},
  progress: 5,
});

export const RegistrationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState('date-type');
  const [userData, setUserData] = useState({});
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const index = SIGNUP_STEPS.findIndex((item) => item.step === currentStep);
    if (index === SIGNUP_STEPS.length - 1) {
      setProgress(100);
    } else {
      setProgress(index * 13 + 5);
    }
  }, [currentStep]);
  const changeScreen = useCallback((value: string) => {
    setCurrentStep(value);
  }, []);

  const backStep = useCallback((value: string) => {
    const currentIndex = SIGNUP_STEPS.findIndex((item) => item.step === value);
    const backValue = SIGNUP_STEPS[currentIndex - 1].step;
    setCurrentStep(backValue);
  }, []);

  const nextStep = useCallback(() => {
    const currentIndex = SIGNUP_STEPS.findIndex(
      (item) => item.step === currentStep
    );
    if (currentIndex === SIGNUP_STEPS.length - 1) {
      return;
    }
    const nextScreen = SIGNUP_STEPS[currentIndex + 1].step;
    setCurrentStep(nextScreen);
  }, [currentStep]);
  const handleUserData = useCallback(
    (name: string, value: string) => {
      setUserData((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
      nextStep();
    },
    [nextStep]
  );

  return (
    <RegistrationContext.Provider
      value={{
        icons: SIGNUP_ICONS,
        screens: SIGNUP_STEPS,
        currentScreen: currentStep,
        changeScreen,
        backStep,
        nextStep,
        handleUserData,
        userData,
        progress,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegistrationContext);
