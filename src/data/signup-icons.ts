import { LookingForIcon } from '../components/icons/LookingForIcon';
import { GenderIcon } from '../components/icons/GenderIcon';
import { SeekingForIcon } from '../components/icons/SeekingForIcon';
import { BirthdateIcon } from '../components/icons/BirthdateIcon';
import { UsernameIcon } from '../components/icons/UsernameIcon';
import { PasswordIcon } from '../components/icons/PasswordIcon';
import { EmailIcon } from '../components/icons/EmailIcon';
import { LocationIcon } from '../components/icons/LocationIcon';

export const SIGNUP_ICONS = [
  {
    step: 'looking-for',
    component: LookingForIcon,
  },
  {
    step: 'gender',
    component: GenderIcon,
  },
  {
    step: 'seeking-for',
    component: SeekingForIcon,
  },
  {
    step: 'birthdate',
    component: BirthdateIcon,
  },
  {
    step: 'location',
    component: LocationIcon,
  },
  {
    step: 'username',
    component: UsernameIcon,
  },
  {
    step: 'password',
    component: PasswordIcon,
  },
  {
    step: 'email',
    component: EmailIcon,
  },
];
