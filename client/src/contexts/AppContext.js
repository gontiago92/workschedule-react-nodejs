import React from 'react'

export default React.createContext({
    monthIndex: 0,
    updateMonthIndex: monthIndex => Number
});