import { connect } from 'react-redux'
import Searchbar from '../components/Searchbar'
import { fetchSearch, addCard, fetchCardPlays } from '../actions'

const mapStateToProps = state => (
    {results:state.search}
)


export default connect(mapStateToProps, { fetchSearch, addCard, fetchCardPlays })(Searchbar)
