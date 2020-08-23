import { connect } from 'react-redux'
import Graph from '../components/Graph'

const mapStateToProps = state => (
    {
        byId: state.plays.byId,
        allIds: state.plays.allIds,
        cards: state.cards
    }
)


export default connect(mapStateToProps, null)(Graph)
