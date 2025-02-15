import { PropsWithChildren } from 'react';

type ContactProps = PropsWithChildren<{
  contact: string;
}>

export default function Contact({ contact, children }: ContactProps): JSX.Element {
  return (
    <div className="contacts__item">
      <dt className="contacts__dt">{contact}</dt>
      <dd className="contacts__dd">
        {children}
      </dd>
    </div>
  );
}
