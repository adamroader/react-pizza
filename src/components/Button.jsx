import React from 'react'
import PropTypes from 'prop-types'

import classNames  from 'classnames'

function Button ({onclick, className, outline, children}) {
    return(
        <button className={classNames('button', className, {'button--outline': outline})}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}
export default Button