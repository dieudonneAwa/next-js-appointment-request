import type {ReactNode} from 'react';
import config from '../src/core/config.js';
export const metadata={title:config.title,description:config.description,icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><head><link rel="stylesheet" href="/style.css"/></head><body><header className="site-header"><a className="wordmark" href="/">{config.title}</a><a className="quiet-link" href="/admin">Operator</a></header><main>{children}</main><footer>Small tools, useful work. <span>Next.js</span></footer></body></html>}
