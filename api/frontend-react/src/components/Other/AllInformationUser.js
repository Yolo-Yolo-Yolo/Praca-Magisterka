import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {
  getInformations,
  deleteInformation
} from "../../actions/InformationActions";
import PropTypes from "prop-types";
import Moment from 'react-moment';

class InformationList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

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
            {items.map(({ _id, title, info, date }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem style={{marginBottom:"1rem"}}>
                  <h1 className="small" align="right">
                  <Moment format="DD-MM-YYYY HH:mm">{date}</Moment>
                  </h1>
                  <h1 className="display-5" align="center">
                    {title}
                  </h1>
                  <p className="lead">{info}</p>     
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStatetoProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps, { getInformations, deleteInformation })(
  InformationList
);
