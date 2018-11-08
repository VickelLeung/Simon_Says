import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../Modal/Modal.css'

class Modals extends Component {

    render() {
        if (!this.props.show) {
            return null
        }


        let displayModal = <div>
            <div className="modalStyle" >
                {this.props.children}

                <div className="footer">
                    {/* <button onClick={this.props.again}>
                        play again
                        </button>
                    <button onClick={this.props.onClose}>
                        Close
                            </button> */}
                </div>
            </div>
        </div>

        return (

            <div>
                <div className="backdropStyle" >
                    {displayModal}
                </div>
            </div>
        )
    }
}

Modals.propTypes = {
    // onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modals;