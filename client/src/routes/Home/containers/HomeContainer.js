import { connect } from 'react-redux';

import { 
    
} from '../modules/home';
import Home from '../components/Home';

const mapStateToPros = (state) => ({
    
});

const mapActionCreators = {
    
};

export default connect(mapStateToPros, mapActionCreators)(Home);