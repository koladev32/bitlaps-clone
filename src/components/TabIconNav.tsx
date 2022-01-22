import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";


interface ITabIconNav {
    icon: IconDefinition
}

const TabIconNav: React.FC<ITabIconNav> = ({icon}) => {
    return (
        <div>
            <div className="h-full">
                <FontAwesomeIcon icon={icon} className="text-gray-400 hover:text-blue-600 hover:border-b-4 hover:border-blue-600"/>
            </div>
        </div>
    )
}

export default TabIconNav;