import React from 'react';
import { RadioGroup, Radio } from '@heroui/radio';

class RadioSelect extends React.Component {
  render() {
    const { isDisabled, type, onSelect } = this.props;
    return (
      <RadioGroup
        value={type}
        isDisabled={isDisabled}
        className="px-2 py-1 sm:bg-[#1c1c1c] bg-transparent rounded-[12px] sm:self-start self-center"
        orientation="horizontal"
        classNames={{ wrapper: 'gap-4' }}
      >
        <Radio name="all" onChange={onSelect} value="all">
          All
        </Radio>
        <Radio name="movie" onChange={onSelect} value="movie">
          Movies
        </Radio>
        <Radio name="series" onChange={onSelect} value="series">
          Series
        </Radio>
        <Radio name="episode" onChange={onSelect} value="episode">
          Episode
        </Radio>
      </RadioGroup>
    );
  }
}

export { RadioSelect };
