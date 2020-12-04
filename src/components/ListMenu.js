import React, { Component } from 'react'

class ListMenu extends Component {
    render() {
        const { category, key, kat } = this.props;
        console.log(category);
        if (category === 'jewelery') {
            return (
                <>
                    <li key={key}>
                        <a href="#">
                            <i className="fa fa-diamond"></i>
                            <p>
                                {category}
                            </p>
                        </a>
                    </li>
                </>
            )
        }
        else if (category === 'women clothing') {
            return (
                <>
                    <li key={key}>
                        <a href="#">
                            <i className='fas fa-female'></i>
                            <p>
                                fg
                                {category}
                            </p>
                        </a>
                    </li>
                </>
            )
        }
        else if (category === 'electronics') {
            return (
                <>
                    <li key={key}>
                        <a href="#">
                            <i className='fas fa-television'></i>
                            <p>
                                {category}
                            </p>
                        </a>
                    </li>
                </>
            )
        }
        else {
            return (
                <>
                    <li key={key}>
                        <a href="#">
                            <i className='fas fa-tshirt'></i>
                            <p>
                                {category}
                            </p>
                        </a>
                    </li>
                </>
            )
        }
    }
}
export default ListMenu;