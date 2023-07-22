import { Anchor } from '@mantine/core';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function TextContent(props: { full?: boolean; body: string; id: string }) {
  return (
    <div className='widget-box-status-text'>
      {props.full ? (
        parse(props.body)
      ) : (
        <>
          {parse(props.body.substring(0, 1000))}
          {props.body.length >= 1000 && (
            <>
              <span className='mx-1'>.....</span>
              <Anchor
                component={Link}
                to={`/post/${props.id}`}
                className='mb-3 inline-block'
              >
                Continue Reading
              </Anchor>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default TextContent;
