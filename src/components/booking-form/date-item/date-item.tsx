import { BookingOption, Slot } from '../../../types';

type DateItemProps = {
  type: keyof BookingOption['slots'];
  slot: Slot;
  selectedDate: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function DateItem({ type, slot, selectedDate, onChange }: DateItemProps): JSX.Element {
  const value = `${type}${slot.time.replace(':', 'h').concat('m')}`;

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={value}
        name="date"
        required
        checked={value === selectedDate}
        defaultValue={value}
        disabled={!slot.isAvailable}
        onChange={onChange}
        data-day={type}
        data-time={slot.time}
      />
      <span className="custom-radio__label">{slot.time}</span>
    </label>
  );
}

