import { Anchor, Spoiler } from '@mantine/core';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function TextContent(props: { full?: boolean; body: string; id: string }) {
  return (
    <div className='widget-box-status-text'>
      {props.full ? (
        parse(props.body)
      ) : (
        <Spoiler
          maxHeight={250}
          showLabel='Show more'
          hideLabel={
            <>
              <Anchor to={`/post/${props.id}`} component={Link}>
                To continue reading, Show Original post
              </Anchor>
            </>
          }
        >
          {parse(props.body)}
        </Spoiler>
      )}
    </div>
  );
}

export default TextContent;
