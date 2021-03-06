
import React, { Component } from 'react'
import Barang from './components/Barang'
// import Barang from './components/Barang'
import Footer from './components/Footer'
import Header from './components/Header'
import MenuItem from './components/MenuItem'
import MenuSlider from './components/MenuSlider'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      getData: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    let api_endpoint_search = "https://fakestoreapi.com/products";
    fetch(api_endpoint_search)
      .then(response => {


        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }

      }).then(response => {
        this.setState({
          datas: response,
        });
        console.log(response);

      }).catch((reject) => {
        alert(reject);
      });
  }

  render() {
    const {
      title,
      category,
      price,
      totalPrice,
      description,
      getData,
      datas,
      key,
      image
    } = this.state;
    return (
      <div>
        <Header />
        <MenuSlider datas={datas} />
        <MenuItem />
        <div className="container">
          <div className="row" style={{ "marginTop": "30px", "marginLeft": "20px" }}>

            {
              datas.map(element => (
                <div className="col-md-3">
                  <Barang
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    image={element.image}
                    price={element.price}
                    category={element.category}
                    description={element.description}
                  />
                </div>
              ))
            }

          </div>
        </div>

        <Footer />
      </div >
    )
  }
}


export default App
