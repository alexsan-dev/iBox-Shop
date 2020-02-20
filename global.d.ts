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
  scrollPosition?: any;
}

interface lang {
  es: langPackage;
  en: langPackage;
}

interface langType {
  general: langPackage.general;
  placeholders: langPackage.placeholders;
  alert: langPackage.alert;
  verified: langPackage.verified;
  errorPage: langPackage.errorPage;
  indexPage: langPackage.indexPage;
  accountPage: langPackage.accountPage;
  profilePage: langPackage.profilePage;
  footer: langPackage.footer;
  loading: langPackage.loading;
  splash: langPackage.splash;
  toast: langPackage.toast;
  errors: langPackage.errors;
}

namespace langPackage {
  interface general {
    app: {
      name: string;
      description: string;
      nameCom: string;
      nameShort: string;
      slogan: string;
      title: string;
      navDivider: string;
      shareText: string;
    };
    buttons: {
      logout: string;
      addToCart: string;
      share: string;
      download: string;
    };
    routes: {
      home: string;
      shop: string;
      account: string;
    },
    logout: {
      title: string;
      text: string;
    }
  };
  interface placeholders {
    productShadowText_1: string;
    productShadowText_2: string;
    searchPlaceholder: string;
    searchInput: string;
  };
  interface alert {
    confirm: string;
    cancel: string;
  };
  interface verified {
    alertTitle: string;
    alertText: string;
    title: string;
    text: string;
    button: string;
  };
  interface errorPage {
    title: string;
    description_1: string;
    description_2: string;
    button: string;
  };
  interface indexPage {
    header: {
      button: string;
      text: string;
      title: string;
    };
    slider: {
      title: string;
      text: string;
      button: string;
      electroCatTitle: string;
      electroCatText: string;
      devicesCatTitle: string;
      devicesCatText: string;
      accesCatTitle: string;
      accesCatText: string;
    };
    middle: {
      blob_1: string;
      blob_2: string;
      button_1: string;
      button_2: string;
      title: string;
      text: string;
    };
    recents: {
      title: string;
      text: string;
      button: string;
    }
  };
  interface accountPage {
    title: string;
    text: string;
    alreadyAccount: string;
    confirm_1: string;
    privacy_1: string;
    privacy_2: string;
    header: {
      button: string;
      title: string;
      text: string;
    };
    forms: {
      forgot: {
        title: string;
        helper: string;
        text: string;
        buttonText: string;
      };
      inputs: {
        emailField: string;
        emailHelper: string;
        userField: string;
        userHelper: string;
        passField: string;
        passHelper: string;
      }
    };
    alerts: {
      title: string;
      text_1: string;
      text_2: string;
    };
    buttons: {
      createAccount: string;
      login: string;
      fbLoginText: string;
      gLoginText: string;
    }
  };
  interface profilePage {
    title: string;
  };
  interface footer {
    title: string;
    text: string;
    blobs: {
      contact: string;
      email: string;
    };
    buttons: {
      request: string;
      comment: string;
      sendMsg: string;
    };
    faq: {
      quest_1: string;
      quest_2: string;
      quest_3: string;
    };
    rights: {
      main: string;
      reserved: string;
    }
  };
  interface loading {
    title: string;
    text: string;
  };
  interface splash {
    title: string;
    text: string;
  };
  interface toast {
    online: string;
    offline: string;
  };
  interface errors {
    app_deleted: string;
    app_not_authorized: string;
    argument_error: string;
    invalid_api_key: string;
    invalid_user_token: string;
    network_request_failed: string;
    operation_not_allowed: string;
    requires_recent_login: string;
    too_many_requests: string;
    unauthorized_domain: string;
    user_disabled: string;
    user_token_expired: string;
    web_storage_unsupported: string;
    account_exists_with_different_credential: string;
    credential_already_in_used: string;
    email_already_in_use: string;
    user_not_found: string;
    weak_password: string;
    invalid_email: string;
    wrong_password: string;
    invalid_verification_code: string;
    invalid_verification_id: string;
    captcha_check_failed: string;
    invalid_phone_number: string;
    missing_phone_number: string;
    quota_exceeded: string;
    defaultVal: string;
  }
}