import { UseFormReturnType } from '@mantine/form';
import { DragEndEvent, LeafletEventHandlerFnMap } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

function EventEditableMapMarker(props: {
  form: UseFormReturnType<
    UserEventFormFields,
    (values: UserEventFormFields) => UserEventFormFields
  >;
}) {
  const { form } = props;

  const map = useMapEvents({
    click(clickEvent) {
      if (!form.values.coordinates) {
        form.setFieldValue('coordinates', clickEvent.latlng);
        map.flyTo(clickEvent.latlng, map.getZoom());
      }
    },
  });

  useEffect(() => {
    if (form.values.coordinates) {
      map.flyTo(form.values.coordinates, map.getZoom());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values.coordinates]);

  const eventHandlers: LeafletEventHandlerFnMap = useMemo(
    () => ({
      dragend(event: DragEndEvent) {
        form.setFieldValue('coordinates', event.target.getLatLng());
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return form.values.coordinates === null ? null : (
    <Marker
      position={form.values.coordinates}
      draggable
      eventHandlers={eventHandlers}
    />
  );
}

export default EventEditableMapMarker;
