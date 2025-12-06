import React from 'react';
import { Pagination } from '@heroui/react';

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mq = null;
    this.state = { isMobile: false };
  }

  componentDidMount() {
    if (typeof window === 'undefined') return;

    this.mq = window.matchMedia('(max-width: 640px)');
    this.setState({ isMobile: this.mq.matches });

    this.onMqChange = (e) => this.setState({ isMobile: e.matches });

    // Safari fallback
    if (this.mq.addEventListener)
      this.mq.addEventListener('change', this.onMqChange);
    else this.mq.addEventListener(this.onMqChange);
  }

  componentWillUnmount() {
    if (!this.mq || !this.onMqChange) return;

    if (this.mq.removeEventListener)
      this.mq.removeEventListener('change', this.onMqChange);
    else this.mq.removeEventListener(this.onMqChange);
  }

  render() {
    const { totalFilms, handleChangePage, currentPage } = this.props;
    const { isMobile } = this.state;
    const total = Number.isInteger(totalFilms / 10)
      ? totalFilms / 10
      : Math.ceil(totalFilms / 10);
    return total > 10 ? (
      <Pagination
        size={isMobile ? 'sm' : 'lg'}
        siblings={isMobile ? 0 : 1}
        boundaries={1}
        className="flex justify-center my-[35px]"
        variant="flat"
        page={currentPage}
        showControls
        initialPage={1}
        total={total}
        onChange={handleChangePage}
        classNames={{
          item: 'cursor-pointer',
          prev: 'cursor-pointer',
          next: 'cursor-pointer',
          ellipsis: 'cursor-pointer',
          cursor: 'cursor-pointer',
        }}
      />
    ) : null;
  }
}

export { PaginationComponent };
