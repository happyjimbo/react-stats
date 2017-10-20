import { browserHistory } from 'react-router'
import {INDEX} from '../consts/AppConsts'

export const updateUrl = (key) => {
    const path = stripPath(key)
    browserHistory.push("/#/" + path)
}


export const pathName = (routing) => stripPath(routing.locationBeforeTransitions.pathname)

const stripPath = (path) => {
    return !path || path === "/"
        ? INDEX
        : path && path.charAt(0) === "/"
            ? path.substr(1)
            : path
}