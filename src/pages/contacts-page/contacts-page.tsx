import Contact from '../../components/contact/contact';
import Map from '../../components/map/map';

export default function ContactsPage(): JSX.Element {
  return (
    <div className="container">
      <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
        <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге</p>
        <h1 className="title title--size-m page-content__title">Контакты</h1>
      </div>

      <div className="contacts">
        <dl className="contacts__list">
          <Contact contact='Адрес'>
            <address className="contacts__address">Санкт-Петербург,<br /> Набережная реки Карповка, д 5П</address>
          </Contact>
          <Contact contact='Режим работы'>
            Ежедневно, с&nbsp;10:00 до&nbsp;22:00
          </Contact>
          <Contact contact='Телефон'>
            <a className="link" href="tel:80001111111">8 (000) 111-11-11</a>
          </Contact>
          <Contact contact='E–mail'>
            <a className="link" href="mailto:info@escape-room.ru">info@escape-room.ru</a>
          </Contact>
        </dl>

        <Map />
      </div>
    </div>
  );
}
