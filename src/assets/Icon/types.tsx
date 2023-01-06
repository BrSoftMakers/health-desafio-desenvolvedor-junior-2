import { ReactComponent as X } from './svg/close-icon.svg';
import { ReactComponent as Close } from './svg/icon-close.svg';
import { ReactComponent as Back } from './svg/voltar.svg';
import { ReactComponent as Google } from './svg/google.svg';
import { ReactComponent as LogIn } from './svg/log-in.svg';
import { ReactComponent as User } from './svg/user.svg';
import { ReactComponent as Check } from './svg/check.svg';
import { ReactComponent as Remove } from './svg/remove.svg';
import { ReactComponent as Edit } from './svg/edit.svg';

const IconsTypes = {
  x : X,
  close: Close,
  back : Back,
  google: Google,
  login: LogIn,
  user: User,
  check: Check,
  remove: Remove,
  edit: Edit
};

export default IconsTypes;

export type IconName =
  | 'x'
  | 'close'
  | 'back'
  | 'google'
  | 'login'
  | 'user'
  | 'check'
  | 'remove'
  | 'edit'



