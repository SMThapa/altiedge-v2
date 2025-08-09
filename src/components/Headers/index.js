import Image from 'next/image';
import Link from 'next/link';
import ScrollEffect from './ScrollEffect';
import { headers } from 'next/headers';
import ActiveLink from './ActiveLink';

export const Header = async () => {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get('x-invoke-path') || '/';
  const links = [
    {href:'/', name:'Home'},
    {href:'/readiness-test', name:'Readiness Test'},
    {href:'/programs-&-events', name:'Programs & Events'},
    {href:'/about-us', name:'About Us'},
  ]

  return (
    <nav className="header-nav">      
      <div className="navigation">
        <div className="logo">
          <Link href="/#">
            <Image src="/assets/icons/logo.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div className="menu-section">
          <ul>
            {
              links.map((link)=>(
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={pathname === link.href ? 'active' : ''}
                    data-href={link.href}
                  >{link.name}</Link>
                </li>
              ))
            }                      
          </ul>
        </div>
        <div className="action-section">
          <button className="get-in-touch">Get In Touch</button>
        </div>
      </div>
      <ScrollEffect />
      <ActiveLink/>
    </nav>
  );
};
