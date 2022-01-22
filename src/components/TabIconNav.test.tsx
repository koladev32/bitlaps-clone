import { render } from '@testing-library/react';
import TabIconNav from './TabIconNav'
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

test('Render TabIcon', () => {
    render(<TabIconNav icon={faAddressBook}/>);
});
