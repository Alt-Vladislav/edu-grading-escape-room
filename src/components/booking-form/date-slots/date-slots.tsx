import { BookingOption, Slot } from '../../../types';
import DateItem from '../date-item/date-item';

type DateSlotsProps = {
  type: keyof BookingOption['slots'];
  slots: Slot[];
  selectedDate: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const Type = {
  Today: 'Сегодня',
  Tomorrow: 'Завтра',
};


export default function DateSlots({ type, slots, selectedDate, onChange }: DateSlotsProps): JSX.Element {
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{type === 'today' ? Type.Today : Type.Tomorrow}</legend>
      <div className="booking-form__date-inner-wrapper">
        {slots.map((slot) => (
          <DateItem
            key={slot.time}
            type={type}
            slot={slot}
            selectedDate={selectedDate}
            onChange={onChange}
          />)
        )}
      </div>
    </fieldset>
  );
}
