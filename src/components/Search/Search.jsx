import React from 'react';
import { createRef } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { RadioSelect } from '../RadioSelect/RadioSelect';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { inputValue, onChangeInput, onSearch, type, onSelectType } = this.props;

    console.log(type);
    return (
      <div className="flex flex-col gap-3 sm:bg-[#1c1c1c] bg-transparent mt-[55px] self-center justify-center w-[100%] max-w-[700px] p-[5px] rounded-[18px]">
        <div className="flex flex-col sm:flex-row gap-[12px]">
          <Input
            classNames={{
              inputWrapper: 'h-15',
            }}
            ref={this.inputRef}
            value={inputValue}
            onChange={onChangeInput}
            label=""
            placeholder="Type your movie here"
            type="search"
            size="lg"
            radius="lg"
            variant="faded"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch();
            }}
          />
          <Button
            className="shrink-0 min-w-35 min-h-15 px-8"
            color="primary"
            variant="shadow"
            size="lg"
            radius="lg"
            type="button"
            isDisabled={!inputValue.length || !type}
            onPress={onSearch}
          >
            Search
          </Button>
        </div>
        <RadioSelect
          onSelect={onSelectType}
          inputData={inputValue.length}
          type={type}
        />
      </div>
    );
  }
}

export { Search };
