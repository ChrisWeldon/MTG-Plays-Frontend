import { connect } from 'react-redux'
import Body from '../components/Body'
import { fetchCard, removeCard } from '../actions'

const mapStateToProps = state => (
    {Cards:state.cards}
)




export default connect(mapStateToProps, { fetchCard, removeCard })(Body)
