const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let isMobileNavOpen = false;
    // console.log(isMobileNavOpen)

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
            // console.log(isMobileNavOpen)
            console.log(document.body.style.overflowY)
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto;'
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

export default mobileNav;