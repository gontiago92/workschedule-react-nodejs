import React, {useState} from 'react'
import './SearchBarWithMonth.sass'

const SearchBarWithMonth = (props) => {

    const [month, setMonth] = useState(1)

  return (
    <div className="searchBarWithMonth">
        
        <div className="searchField">
            <i className="fa fa-search"></i>
            <input type="search" name="event_search" id="eventSearch" placeholder="Rechercher des événements" />
        </div>
        <div className="searchAction">
            <div className="searchButton">
                <button>Rechercher</button>
            </div>
            <div className="select">
                <select name="month" id="monthSelect" defaultValue="1">
                    <option disabled>Month</option>
                    <option value="1">Janvier</option>
                    <option value="2">Février</option>
                    <option value="3">Mars</option>
                    <option value="4">Avril</option>
                    <option value="5">Mai</option>
                    <option value="6">Juin</option>
                    <option value="7">Juillet</option>
                    <option value="8">Août</option>
                    <option value="9">Septembre</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Decembre</option>
                </select>
                <i className="fa fa-chevron-down"></i>
            </div>
        </div>
    </div>
  )
}

export default SearchBarWithMonth