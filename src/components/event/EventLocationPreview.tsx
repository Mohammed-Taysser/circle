import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function EventLocationPreview(props: { event: UserEvent }) {
  const { event } = props;

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size='xl' opened={opened} onClose={close} title='Preview'>
        <MapContainer
          center={event.location.coordinates}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={event.location.coordinates} />
        </MapContainer>
      </Modal>

      <Button onClick={open} variant='subtle' disabled={!event.location}>
        Preview
      </Button>
    </>
  );
}

export default EventLocationPreview;
