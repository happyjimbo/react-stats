import {connect} from 'react-redux';
import ClickListItem from '../presentation/ClickListItem';

const mapStateToProps = (state) => {
    return {
        linkText: "FTSE data"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: () => { console.log("click click") }
    }
}

const StatListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ClickListItem);
export default StatListItemContainer;