import React, { Component } from 'react';
import Button from './Button';
import { connect } from "react-redux";

class Market extends Component {
    render() {
        return (
            <div>
                <header>Mangoes: {this.props.mangoes}</header>
                <Button title="Add 10" click={this.props.onAddMangoes}></Button>
                <Button title="Subtract 5" click={this.props.onSubtractMangoes}></Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangoes: state.mangoes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddMangoes: () => dispatch({type: 'ADDMANGOES',value:10}),
        onSubtractMangoes: () => dispatch({type: 'SUBTRACTMANGOES',value:5})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Market);
