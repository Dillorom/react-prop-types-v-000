// Code Goes Here
// Code Goes Here

import React from "react";
import PropTypes from "prop-types";

class Order extends React.Component {
    render(){
        return (
            <div className="order">
            <ul>
                <li>{this.props.cone ? "Cone" : "Cup"}</li>
                <li>{this.props.size}</li>
                <li>{this.props.scoops.length} scoops: {this.props.scoops.join(",")}</li>
                <li>Ordered by {this.props.orderedInfo.customerName} at {this.props.orderInfo.orderAt}.</li>
            </ul>
            </div>

        )
    }
}
    
    Order.defaultProps = {
        cone: true,
        size: 'regular'
    };
    
    Order.propTypes = {
        cone: PropTypes.bool,
        size: PropTypes.string,
        scoops: PropTypes.arrayOf(PropTypes.string).isRquired,
        orderInfo: PropTypes.shapte({
            customerName: PropTypes.string.isRequired,
            orderedAt: PropTypes.number.isRequired
        }).isRequired
    }
