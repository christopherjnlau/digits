import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ContactAdmin extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.contacts.image} />
            <Card.Header>{this.props.contacts.firstName} {this.props.contacts.lastName}</Card.Header>
            <Card.Meta>{this.props.contacts.address}</Card.Meta>
            <Card.Description>
              {this.props.contacts.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.contacts.owner}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ContactAdmin.propTypes = {
  contacts: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ContactAdmin);
