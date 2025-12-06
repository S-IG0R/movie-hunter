import React from 'react';
import { RadioGroup, Radio } from '@heroui/radio';

class RadioSelect extends React.Component {
  render() {
    const { inputData, type, onSelect } = this.props;
    return (
      <RadioGroup
        isDisabled={!inputData}
        className="pl-2 pb-1"
        orientation="horizontal"
        classNames={{wrapper: 'gap-4'}}
      >
        <Radio
          name="all"
          onChange={onSelect}
          value="all"
          checked={type === 'all'}
        >
          All
        </Radio>
        <Radio
          name="movie"
          onChange={onSelect}
          value="movie"
          checked={type === 'movie'}
        >
          Movies
        </Radio>
        <Radio
          name="series"
          onChange={onSelect}
          value="series"
          checked={type === 'series'}
        >
          Series
        </Radio>
        <Radio
          name="episode"
          onChange={onSelect}
          value="episode"
          checked={type === 'episode'}
        >
          Episode
        </Radio>
      </RadioGroup>
    );
  }
}

export { RadioSelect };
