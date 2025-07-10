type MailAddressType = {
  email: string;
  name?: string;
};

export type SendMailType = {
  from: MailAddressType;
  personalizations: {
    to: MailAddressType[];
    bcc?: MailAddressType[];
  }[];
  reply_to?: MailAddressType;
  subject: string;
  content: {
    type: string;
    value: string;
  }[];
};
