import Tags from '../../components/tags/tags';


//TODO В компонент Tags добавьте пропсы:
export default function QuestPage(): JSX.Element {
  return (
    <div className="container container--size-l">
      <div className="quest-page__content">
        <h1 className="title title--size-l title--uppercase quest-page__title">
          Маньяк
        </h1>
        <p className="subtitle quest-page__subtitle">
          <span className="visually-hidden">Жанр:</span>Ужасы
        </p>

        <Tags type='page' peopleMinMax={[3,6]} level={'medium'}/>

        <p className="quest-page__description">
          В&nbsp;комнате с&nbsp;приглушённым светом несколько человек,
          незнакомых друг с&nbsp;другом, приходят в&nbsp;себя. Никто
          не&nbsp;помнит, что произошло прошлым вечером. Руки и&nbsp;ноги
          связаны, но&nbsp;одному из&nbsp;вас получилось освободиться.
          На&nbsp;стене висит пугающий таймер и&nbsp;запущен отсчёт
          60&nbsp;минут. Сможете&nbsp;ли вы&nbsp;разобраться в&nbsp;стрессовой
          ситуации, помочь другим, разобраться что произошло и&nbsp;выбраться
          из&nbsp;комнаты?
        </p>
        <a
          className="btn btn--accent btn--cta quest-page__btn"
          href="booking.html"
        >
          Забронировать
        </a>
      </div>
    </div>
  );
}
