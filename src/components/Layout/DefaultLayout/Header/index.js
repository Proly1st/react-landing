
import styles from  './Header.Module.scss';
import classNames from 'classnames/bind';

const  cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>

            </div>
            <div className={('nav__list')}>
                <div className={('sub__nav')}>
                    <ul>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                        <li> <a> </a></li>
                    </ul>
                </div>
                <a className={('register__btn')}>Register Now</a>

            </div>

        </div>
    </header>
}
export  default Header;