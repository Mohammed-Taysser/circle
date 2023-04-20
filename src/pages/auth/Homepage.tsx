import { Button } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import React from 'react';

function Homepage() {
  useDocumentTitle('Mantine | Homepage');

  return (
    <div>
      <Button>Primary button</Button>
      <Button color='teal.5'>Blue button</Button>
    </div>
  );
}

export default Homepage;
