import { UseFormReturnType } from '@mantine/form';
import { MapContainer, TileLayer } from 'react-leaflet';
import EventEditableMapMarker from './EventEditableMapMarker';

function EventEditableMap(props: {
  form: UseFormReturnType<
    UserEventFormFields,
    (values: UserEventFormFields) => UserEventFormFields
  >;
}) {
  const { form } = props;

  return (
    <MapContainer
      center={form.values.coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <EventEditableMapMarker form={form} />
    </MapContainer>
  );
}

export default EventEditableMap;
