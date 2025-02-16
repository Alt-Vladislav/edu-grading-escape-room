type BookingInfoProps = {
  text: string;
}


export default function BookingInfo({ text }: BookingInfoProps): JSX.Element {
  const bookingInfo = text.split('м.');

  return (
    <span className="quest-card__info">
      {bookingInfo[0]}
      <br />
      м. {bookingInfo[1]}
    </span>
  );
}
