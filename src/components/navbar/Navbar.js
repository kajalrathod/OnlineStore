import React, { useState } from 'react';
import { Responsive } from 'semantic-ui-react';
import NavbarDesktop from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

const Navbar = () => {
    const [value, setValue] = useState(true);
    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <NavbarMobile selected={value} onToggle={() => setValue(!value)} />
            </Responsive>
            {/* <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                <NavbarMobile selected={value} onToggle={() => setValue(!value)} />
            </Responsive> */}
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                <NavbarDesktop />
            </Responsive >
        </div>
    );
}

export default Navbar;