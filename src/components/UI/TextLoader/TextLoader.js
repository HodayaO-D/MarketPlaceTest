import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
const TextLoader = (props) => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>{props.title}</Loader>
      </Dimmer>

      <Image
        src={
          props.imagePath
            ? props.imagePath
            : "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
        }
      />
    </Segment>
  );
};

export default TextLoader;
