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
    const {
      inputValue,
      onChangeInput,
      onSearch,
      type,
      onSelectType,
      isLoading,
    } = this.props;
    return (
      <div className="flex flex-col gap-2 self-center justify-center w-[100%] max-w-[700px] sm:mt-[55px] mt-[25px]">
        <div className="flex flex-col sm:flex-row sm:p-[5px] sm:gap-[5px] gap-[8px] sm:bg-[#1c1c1c] bg-transparent p-auto rounded-[18px]">
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
            isDisabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if(!inputValue) return
                onSearch();
              }
            }}
          />
          <Button
            className="shrink-0 min-w-35 min-h-15 px-8"
            color="primary"
            variant="shadow"
            size="lg"
            radius="lg"
            type="button"
            isDisabled={!inputValue.length || !type || isLoading}
            onPress={onSearch}
          >
            Search
          </Button>
        </div>
        <RadioSelect
          onSelect={onSelectType}
          isDisabled={!inputValue.length || isLoading}
          type={type}
        />
      </div>
    );
  }
}

export { Search };
