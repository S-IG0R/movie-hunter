import React from 'react';
import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { fetchMovie } from './utils/api';
import { Search } from './components/Search/Search';
import { Page } from './components/Page/Page';

class App extends React.Component {
  state = {
    movies: [],
    totalFilms: 0,
    isLoading: false,
    currentPage: 1,
    request: '',
    type: '',
  };

  getData = async ({ page, request, type }) => {
    this.setState({ isLoading: true });
    const res = await fetchMovie({ page, request, type });
    try {
      if (res.ok) {
        const data = await res.json();
        this.setState({
          movies: data.Search || [],
          totalFilms: data.totalResults || 0,
          isLoading: false,
        });
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleChangePage = async (page) => {
    const { request, type } = this.state;
    await this.getData({ page, request, type });
    this.setState({ currentPage: page });
  };

  onSearch = () => {
    const { request, type } = this.state;
    this.setState(
      () => ({ currentPage: 1 }),
      () => {
        this.getData({ request, type });
      }
    );
  };

  onSelectType = (e) => {
    const type = e.target.value;
    const { request } = this.state;
    this.setState(
      () => ({ type, currentPage: 1 }),
      () => {
        this.getData({ request, type });
      }
    );
  };

  onChangeInput = (e) => {
    const request = e.target.value;
    console.log(request);
    this.setState({ request });   
  };

  componentDidMount() {
    this.getData({});
  }

  render() {
    return (
      <>
        <Header />
        <Page>
          <Search
            inputValue={this.state.request}
            type={this.state.type}
            onSearch={this.onSearch}
            onSelectType={this.onSelectType}
            onChangeInput={this.onChangeInput}
          />
          <Main {...this.state} onChangePage={this.handleChangePage} />
        </Page>
        <Footer />
      </>
    );
  }
}

export default App;
