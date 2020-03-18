import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getInformations, deleteInformation } from "../actions/InformationActions";
import PropTypes from "prop-types";

class InformationList extends Component {
  componentDidMount() {
    this.props.getInformations();
  }

  onDeleteClick = id => {
    this.props.deleteInformation(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="information-list">
            {items.map(({ _id, title, info }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  <h1 className="display-5" align="center">{title}</h1>
                  <p className="lead">
                    {info}
                  </p>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

InformationList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  item: state.item
});

export default connect(mapStatetoProps, { getInformations, deleteInformation })(
  InformationList
);
