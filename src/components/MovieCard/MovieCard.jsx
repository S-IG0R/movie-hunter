import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { placeholderSvg } from '../../helpers/PlaceholderSvg';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    const fallback = placeholderSvg();
    this.fallback = fallback;
    this.state = {
      imgSrc: this.setSrc(props.Poster, fallback),
    };
  }

  setSrc(src, fallback) {
    return typeof src === 'string' && src.startsWith('http') ? src : fallback;
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.Poster !== this.props.Poster ||
      prevProps.Title !== this.props.Title
    ) {
      const fallback = placeholderSvg();
      this.fallback = fallback;

      this.setState({
        imgSrc: this.setSrc(this.props.Poster, fallback),
      });
    }
  }

  handleError = () => {
    if (this.state.imgSrc === this.fallback) return;
    this.setState({ imgSrc: this.fallback });
  };

  render() {
    const { Title, Year, imdbID } = this.props;
    return (
      <li className="w-full min-w-0">
        {/* <Card
          shadow="sm"
          isPressable
          disableRipple
          className="h-full bg-[#222] overflow-hidden bg-clip-padding cursor-pointer group relative border-none rounded-2xl"
        >
          <CardBody className="overflow-visible p-3 ">
            <Image
                removeWrapper
                alt={Title?.trim()}
                className="block object-cover rounded-[10px]"
                shadow="sm"
                src={this.state.imgSrc}
                onError={this.handleError}
                decoding="async"
                classNames={{
                  wrapper: '!w-full !max-w-full !min-w-full block',
                  img: 'w-full h-full object-cover block rounded-[10px]',
                }}
              />
          </CardBody>

          <CardFooter className="w-full min-w-0 text-large text-white">
            <p className="min-w-0 w-full truncate">{Title}</p>
          </CardFooter>
        </Card> */}

        <Card
          isPressable
          className="flex flex-col gap-2 h-full w-full rounded-[15px] group relative"
        >
          {/* <img
            className="object-cover block rounded-[10px] aspect-[2.2/3] m-3"
            src={this.state.imgSrc}
            alt={Title?.trim()}
            onError={this.handleError}
          /> */}
          <div className="p-3 aspect-[2.2/3]">
            <Image
              removeWrapper
              alt={Title?.trim()}
              className="block object-cover z-0"
              shadow="sm"
              src={this.state.imgSrc}
              onError={this.handleError}
              decoding="async"
              classNames={{
                wrapper: '!w-full !max-w-full !min-w-full block',
                img: 'w-full h-full object-cover block rounded-[10px]',
              }}
            />
          </div>

          <CardFooter className="text-large text-white">
            <p className="text-left truncate m-3">{Title}</p>
          </CardFooter>
          <div className="flex flex-col justify-center items-center pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 z-[10] bg-black/45 backdrop-blur-lg">
            <span className=" text-large text-white px-4">{`«${Title}»`}</span>
            <span className=" text-large text-white">{`Release: ${Year}`}</span>
          </div>
        </Card>
      </li>
    );
  }
}

export { MovieCard };
