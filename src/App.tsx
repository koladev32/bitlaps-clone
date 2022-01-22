import {
    faShoppingBasket,
    faThLarge,
    faWallet,
    faExchangeAlt,
    faChartLine,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import TabIconNav from "./components/TabIconNav";

const tabIcons:Array<IconDefinition> = [faShoppingBasket, faThLarge, faWallet, faExchangeAlt, faChartLine]

export default function App() {
    return (
        <div>
            <nav className="columns-3 item mx-8 h-10 my-2">
                <div className="flex justify-start space-x-16">
                    {
                        tabIcons.map((icon, index) => (
                            <TabIconNav icon={icon} key={index}/>
                        ))
                    }
                </div>
                <div className="text-center">
                    Bitlaps
                </div>
                <div className="flex justify-end">
                    Nav links
                </div>
            </nav>
        </div>
    )
}
