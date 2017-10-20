import {connect} from 'react-redux'
import About from '../components/About'

const mapStateToProps = () => {

    const github = 'https://github.com/happyjimbo/react-stats'
    const linkedIn = 'https://linkedin.com/in/james-woodward-8838416'
    const email = 'james.ejw@gmail.com'

    return {
        github,
        linkedIn,
        email
    }
}

const AboutContainer = connect(mapStateToProps, null)(About)
export default AboutContainer