import withTheme from './hoc/withTheme'
import withFirebaseInit from './hoc/withFirebaseInit'
import IndexRoutes from './routes/IndexRoutes'

export default withTheme(withFirebaseInit(IndexRoutes))
