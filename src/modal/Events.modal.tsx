import React from 'react';

function EventModal({ innerProps }: EventModalProps) {
  return <div>{JSON.stringify(innerProps.event)}</div>;
}

export default EventModal;
