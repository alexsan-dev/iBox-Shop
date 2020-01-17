type ShareData = {
  title?: string;
  text?: string;
  url?: string;
};

interface Navigator {
  share: (data?: ShareData) => Promise<void>;
}

interface productList {
  id?: number;
  products: product[] | any;
}

interface product {
  color: string;
  description: string;
  name: string;
  price: number;
  tag: string;
  key: string;
  img: string;
}

interface user {
  id?: number;
  user: userModel | any;
}

interface userModel {
  provider?: string | null;
  emailVerified: boolean | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid?: string;
}

interface AlertProps {
  type: string;
  hideAlert?: Function;
  onConfirm?: Function;
  text?: string;
  title: string;
  body: string;
  input?: InputProps;
}

interface InputProps {
  label: string;
  type: string;
  name: string;
  helper: string;
  icon: string;
  value: Function;
}

interface InputGetProps {
  name: string;
  text: string;
}

interface CardProps {
  title: string;
  img: string;
  text: string;
  price: number;
  code: string;
}
