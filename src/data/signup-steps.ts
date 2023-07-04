import Birthdate from '../components/signup-steps/birthdate/Birthdate';
import Email from '../components/signup-steps/email/Email';
import Gender from '../components/signup-steps/gender/Gender';
import DateType from '../components/signup-steps/date-type/DateType';
import Password from '../components/signup-steps/password/Password';
import LookingFor from '../components/signup-steps/looking-for/LookingFor';
import Username from '../components/signup-steps/username/Username.tsx';
import Location from '../components/signup-steps/location/Location';

export const SIGNUP_STEPS = [
  {
    step: 'date-type',
    component: DateType,
  },
  {
    step: 'gender',
    component: Gender,
  },
  {
    step: 'seeking-for',
    component: LookingFor,
  },
  {
    step: 'birthdate',
    component: Birthdate,
  },
  {
    step: 'location',
    component: Location,
  },
  {
    step: 'username',
    component: Username,
  },
  {
    step: 'password',
    component: Password,
  },
  {
    step: 'email',
    component: Email,
  },
];
