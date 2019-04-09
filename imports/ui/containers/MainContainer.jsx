// a container to
import { withTracker } from 'meteor/react-meteor-data';
import MainPage from '../pages/main/MainPage'

export default withTracker(() => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
}, MainPage);